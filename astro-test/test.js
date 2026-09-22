const {
  dateToJulianDay,
  calculatePosition,
  Planet
} = require("@swisseph/node");

const {
  getScoreLevel,
  aspectComments,
  makeComment
} = require("./comments");

const fs = require("fs");

// ================================
// 計算する日時
// 2026年9月19日 12:00 日本時間
// ================================

const now = new Date();

const inputDate = process.argv[2];

const japanDate = inputDate || new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Tokyo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
}).format(now);

const date = new Date(`${japanDate}T12:00:00+09:00`);

const jd = dateToJulianDay(date);

// 12星座
const signs = [
  "♈ 牡羊座",
  "♉ 牡牛座",
  "♊ 双子座",
  "♋ 蟹座",
  "♌ 獅子座",
  "♍ 乙女座",
  "♎ 天秤座",
  "♏ 蠍座",
  "♐ 射手座",
  "♑ 山羊座",
  "♒ 水瓶座",
  "♓ 魚座"
];

// 天体
const planets = [
  ["☉ 太陽", Planet.Sun],
  ["☽ 月", Planet.Moon],
  ["☿ 水星", Planet.Mercury],
  ["♀ 金星", Planet.Venus],
  ["♂ 火星", Planet.Mars],
  ["♃ 木星", Planet.Jupiter],
  ["♄ 土星", Planet.Saturn],
  ["♅ 天王星", Planet.Uranus],
  ["♆ 海王星", Planet.Neptune],
  ["♇ 冥王星", Planet.Pluto]
];

console.log(`${japanDate} 12:00 JST`);
console.log("------------------------------");

for (const [name, planet] of planets) {

  const position = calculatePosition(jd, planet);
  const longitude = position.longitude;

  // 0～360°から星座を判定
  const signIndex = Math.floor(longitude / 30);

  // その星座の中で何度か
  const degreeInSign = longitude % 30;

  console.log(
    `${name.padEnd(6)} ${signs[signIndex]} ${degreeInSign.toFixed(2)}°`
  );
}

// =====================================
// アスペクト判定
// =====================================

// 主要アスペクトと許容オーブ
const aspects = [
  { name: "☌ コンジャンクション", angle: 0,   orb: 8 },
  { name: "✶ セクスタイル",       angle: 60,  orb: 6 },
  { name: "□ スクエア",           angle: 90,  orb: 6 },
  { name: "△ トライン",           angle: 120, orb: 6 },
  { name: "☍ オポジション",       angle: 180, orb: 8 }
];

// 天体位置をもう一度まとめて取得
const planetPositions = planets.map(([name, planet]) => {
  const position = calculatePosition(jd, planet);

  return {
    name,
    longitude: position.longitude
  };
});

// ========================================
// ソーラーハウス判定
// ========================================

function getSolarHouse(targetSignIndex, planetLongitude) {

  const planetSignIndex = Math.floor(planetLongitude / 30);

  const difference =
    (planetSignIndex - targetSignIndex + 12) % 12;

  return difference + 1;
}

// ========================================
// 主要アスペクト表示
// ========================================

console.log("");
console.log("【主要アスペクト】");
console.log("------------------------------");

// すべての天体の組み合わせを比較
for (let i = 0; i < planetPositions.length; i++) {

  for (let j = i + 1; j < planetPositions.length; j++) {

    const p1 = planetPositions[i];
    const p2 = planetPositions[j];

    // 黄経差
    let difference = Math.abs(p1.longitude - p2.longitude);

    // 180°より大きければ反対側から測る
    if (difference > 180) {
      difference = 360 - difference;
    }

    // 各アスペクトに該当するか確認
    for (const aspect of aspects) {

      const orb = Math.abs(difference - aspect.angle);

      if (orb <= aspect.orb) {
        console.log(
          `${p1.name} ${aspect.name} ${p2.name}　orb ${orb.toFixed(2)}°`
        );
      }
    }
  }
}

// ========================================
// 12星座ランキング Ver.0.1
// 各星座 0°〜29° の仮想太陽を採点する
// ========================================

// sayaka式・基本点
const scoringRules = {
  Moon: {
    conjunction: 10,
    sextile: 6,
    square: -8,
    trine: 8,
    opposition: -4
  },

  Mercury: {
    conjunction: 8,
    sextile: 4,
    square: -6,
    trine: 6,
    opposition: 0
  },

  Venus: {
    conjunction: 6,
    sextile: 3,
    square: -4,
    trine: 4,
    opposition: 2
  },

  Mars: {
    conjunction: 4,
    sextile: 2,
    square: -2,
    trine: 3,
    opposition: -2
  },

  Jupiter: {
    conjunction: 2,
    sextile: 1,
    square: -1,
    trine: 2,
    opposition: 1
  }
};

// 採点に使う天体
const scoringPlanets = [
  ["Moon", Planet.Moon],
  ["Mercury", Planet.Mercury],
  ["Venus", Planet.Venus],
  ["Mars", Planet.Mars],
  ["Jupiter", Planet.Jupiter]
];

// アスペクト
const scoringAspects = [
  { name: "conjunction", angle: 0 },
  { name: "sextile", angle: 60 },
  { name: "square", angle: 90 },
  { name: "trine", angle: 120 },
  { name: "opposition", angle: 180 }
];

// 今回は全部 orb 6° にする
const maxOrb = 6;

// 天体位置を取得
const scoringPlanetPositions = scoringPlanets.map(([name, planet]) => {
  const position = calculatePosition(jd, planet);

  return {
    name: name,
    longitude: position.longitude
  };
});

// 2つの黄経の最短角度を求める
function getAngleDifference(longitude1, longitude2) {
  let difference = Math.abs(longitude1 - longitude2);

  if (difference > 180) {
    difference = 360 - difference;
  }

  return difference;
}

// 仮想太陽1地点を採点する
function scoreSunPoint(sunLongitude) {
  let totalScore = 0;

  for (const planet of scoringPlanetPositions) {

    const difference = getAngleDifference(
      sunLongitude,
      planet.longitude
    );

    for (const aspect of scoringAspects) {

      const orb = Math.abs(difference - aspect.angle);

      if (orb <= maxOrb) {

        const baseScore =
          scoringRules[planet.name][aspect.name];

        // オーブ0°なら100％、6°なら0％
        const strength = 1 - (orb / maxOrb);

        totalScore += baseScore * strength;

        break;
      }
    }
  }

  return totalScore;
}

// ========================================
// 12星座ランキング
// 各星座15°を代表点として採点する
// ========================================

const ranking = [];

for (let signIndex = 0; signIndex < 12; signIndex++) {

  // 各星座の15°を代表点にする
  const representativeDegree = 15;

  const sunLongitude =
    signIndex * 30 + representativeDegree;

  const score = scoreSunPoint(sunLongitude);

  ranking.push({
    sign: signs[signIndex],
    score: score,
    representativeDegree: representativeDegree
  });
}

// 高得点順に並べる
ranking.sort((a, b) => b.score - a.score);

console.log("");
console.log("【12星座ランキング】");
console.log("------------------------------");

ranking.forEach((result, index) => {
  console.log(
    `${index + 1}位 ${result.sign}　${result.score.toFixed(2)}点`
  );
});

// ========================================
// 1位・12位の採点内訳を見る
// ========================================

function getScoreDetails(sunLongitude) {
  const details = [];

  for (const planet of scoringPlanetPositions) {

    const difference = getAngleDifference(
      sunLongitude,
      planet.longitude
    );

    for (const aspect of scoringAspects) {

      const orb = Math.abs(difference - aspect.angle);

      if (orb <= maxOrb) {

        const baseScore =
          scoringRules[planet.name][aspect.name];

        const strength = 1 - (orb / maxOrb);
        const score = baseScore * strength;

        details.push({
          planet: planet.name,
          aspect: aspect.name,
          orb: orb,
          score: score
        });

        break;
      }
    }
  }

  return details;
}


// 英語名を見やすくする
const planetLabels = {
  Moon: "☽ 月",
  Mercury: "☿ 水星",
  Venus: "♀ 金星",
  Mars: "♂ 火星",
  Jupiter: "♃ 木星",
  Saturn: "♄ 土星"
};

const aspectLabels = {
  conjunction: "☌",
  sextile: "✶",
  square: "□",
  trine: "△",
  opposition: "☍"
};


// 指定した星座の15°だけの内訳表示
function showSignDetails(result) {

  console.log("");
  console.log(`【${result.sign} 詳細】`);
  console.log("------------------------------");

  const signIndex = signs.indexOf(result.sign);

  const sunLongitude =
    signIndex * 30 + result.representativeDegree;

  const details = getScoreDetails(sunLongitude);

  console.log(
    `${result.sign} ${result.representativeDegree}°　合計 ${result.score.toFixed(2)}点`
  );

  for (const detail of details) {

    const plus =
      detail.score > 0 ? "+" : "";

    console.log(
      `  ${planetLabels[detail.planet]} ${aspectLabels[detail.aspect]} ☉` +
      `　orb ${detail.orb.toFixed(2)}°` +
      `　${plus}${detail.score.toFixed(2)}点`
    );
  }

  // ソーラーハウス表示
  console.log("");
  console.log("  【ソーラーハウス】");

  for (const planet of planetPositions) {

    const house = getSolarHouse(
      signIndex,
      planet.longitude
    );

    console.log(
      `  ${planet.name}　${house}ハウス`
    );
  }
}


// ranking はすでに高得点順
const firstPlace = ranking[0];
const lastPlace = ranking[ranking.length - 1];

console.log("");
console.log("================================");
console.log("🥇 1位の内訳");
showSignDetails(firstPlace);

console.log("");
console.log("================================");
console.log("🐣 12位の内訳");
showSignDetails(lastPlace);


// ========================================
// コメント生成用データをひとまとめにする
// ========================================

function makeResultData(result, rank) {

  const signIndex = signs.indexOf(result.sign);

  const sunLongitude =
    signIndex * 30 + result.representativeDegree;

  const details = getScoreDetails(sunLongitude);

  const level = getScoreLevel(result.score);

const aspectData = details.map(detail => {

  // このアスペクトを作っている天体の位置を取得
  const planetPosition = scoringPlanetPositions.find(
    planet => planet.name === detail.planet
  );

  // この星座から見て、その天体が何ハウスにいるか
  const house = getSolarHouse(
    signIndex,
    planetPosition.longitude
  );

  return {
    planet: planetLabels[detail.planet],
    planetKey: detail.planet,

    aspect: aspectLabels[detail.aspect],
    aspectKey: detail.aspect,

    house: house,

    orb: Number(detail.orb.toFixed(2)),
    score: Number(detail.score.toFixed(2)),
    meaning: aspectComments[detail.planet][detail.aspect]
  };
});

let comment;

if (aspectData.length === 0) {
  comment = "今日はほとんど問題がなさそうだ！";
} else {
  comment = makeComment(level, aspectData, rank);
}

  return {
    rank: rank,
    sign: result.sign,
    score: Number(result.score.toFixed(2)),
    level: level,
    comment: comment,
    aspects: aspectData
  };
}

const allSigns = ranking.map((result, index) =>
  makeResultData(result, index + 1)
);

const dailyResult = {
  date: date.toLocaleDateString("ja-JP", {
    timeZone: "Asia/Tokyo"
  }),

  first: allSigns[0],
  last: allSigns[11],
  ranking: allSigns
};

console.log("");
console.log("================================");
console.log("【コメント生成用データ】");
console.log(JSON.stringify(dailyResult, null, 2));

const publicResult = {
  date: dailyResult.date,

  first: {
    sign: dailyResult.first.sign,
    comment: dailyResult.first.comment
  },

  last: {
    sign: dailyResult.last.sign,
    comment: dailyResult.last.comment
  },

  ranking: dailyResult.ranking.map(item => ({
    rank: item.rank,
    sign: item.sign,
    comment: item.comment
  }))
};

// VedakunUranai.json に保存
fs.writeFileSync(
  "VedakunUranai.json",
   JSON.stringify(publicResult, null, 2),
  "utf8"
);

console.log("");
console.log("VedakunUranai.json を保存しました！🐣");