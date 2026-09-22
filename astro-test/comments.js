// ================================
// スコア帯
// ================================

function getScoreLevel(score) {
  if (score >= 4) {
    return "絶好調な一日だ！🎉";
  }

  if (score >= 0) {
    return "うまくいきそうだぞ🎶";
  }

  if (score > -4) {
    return "焦らなければOKだぜ👍";
  }

  return "ちょっと注意だな💦";
}


// ================================
// 天体 × アスペクトの意味
// ================================

const aspectComments = {

  Moon: {
    conjunction: "思い通りに動けるぜ<br>今の気分にピッタリな曲を探せ！",
    sextile: "気持ちに余裕が生まれやすいぞ<br>お気に入りのプレイリストをのんびり楽しもう",
    square: "うまくいかなくてイライラ<br>バラードを聴いてまずは深呼吸",
    trine: "流れに乗りやすいな<br>テンポのいい曲でその流れをキャッチだ！",
    opposition: "他の考え方も取り入れようぜ<br>普段聞かないジャンルを試すのもいいな"
  },

  Mercury: {
    conjunction: "いいアイディアが思い付くぞ<br>今日一番最初にひらめいた曲がヒントだ！",
    sextile: "会話が弾むぜ<br>相手の好きな曲で一緒に盛り上がれ！",
    square: "思ってもないことを言っちゃうかも？<br>ヒーリング系を聴いて落ち着いたら、素直に謝ろう",
    trine: "欲しかった情報をゲット<br>ついでに欲しかった機材の情報もチェックだ！",
    opposition: "コミュニケーションの幅が広がるぜ<br>知らなかった曲を教えてもらえるかも？"
  },

  Venus: {
    conjunction: "理想通りの一日だ<br>理想とする音楽に出会える気がする",
    sextile: "楽しい出来事がありそう<br>こんな日は楽しいポップスに限る",
    square: "衝動買いはNGだぞ<br>焚き火音でも聞いて心頭滅却しておくか…",
    trine: "好きなものに没頭しろ<br>好きな曲エンドレスリピートしか勝たん",
    opposition: "慎重に考える日になるぜ<br>今日だけはBGMなしで真剣に悩んでもいいんだぞ"
  },

  Mars: {
  conjunction: "行動力が高まるぞ<br>爆音ロックが今日の相棒だ！",
  sextile: "思い切って動け<br>疾走感のある曲で勢いをつけよう！",
  square: "焦って行動したらいけないぜ<br>まずは「川のせせらぎ自然音」で検索、話はそれからだ",
  trine: "行動がいい結果を生むぞ<br>「いつもの曲」で自然体になるのが一番",
  opposition: "慎重に行動すべきだな<br>うっすら意識に入るくらいの小さな音量がよさそうだ"
},

Jupiter: {
  conjunction: "チャンスが広がるぜ<br>壮大な世界観を表現した曲がピッタリだな！",
  sextile: "小さな幸運に恵まれるぞ<br>幸運の音、聞き逃すなよ？",
  square: "ちょっと欲張りすぎだな？<br>まずは聞き慣れてる音に戻ろうか。",
  trine: "大きく発展しやすいね<br>仲間を誘って対バンやろうぜ！",
  opposition: "可能性を広げろ<br>やりたかったけど挑戦できてないこと、ない？"
}
};

// ================================
// 天体 × ハウスの意味
// ================================

const houseComments = {
  1: "おまえ自身が",
  2: "お金や時間の使い方で",
  3: "なにかを調べる時に",
  4: "家族や家のことで",
  5: "趣味のことで",
  6: "いつものルーティンで",
  7: "相棒とのことで",
  8: "誰かと深く関わる時に",
  9: "出かけた時に",
  10: "仕事で",
  11: "仲間たちと一緒に",
  12: "ひきこもり時間に"
};

// ================================
// コメントに採用するアスペクトを選ぶ
// ================================

function selectMainAspect(aspects, rank) {

  // 惑星の優先順位
  const planetPriority = {
    Jupiter: 5,
    Mars: 4,
    Venus: 3,
    Mercury: 2,
    Moon: 1
  };

  // 1位と12位でアスペクトの優先順位を変える
  const aspectPriority = rank === 1
    ? {
        conjunction: 3,
        trine: 2,
        sextile: 1
      }
    : {
        square: 2,
        opposition: 1
      };

  // 今回使いたいアスペクトだけ残す
  const candidates = aspects.filter(
    aspect => aspectPriority[aspect.aspectKey] !== undefined
  );

  // 優先順位で並べる
  candidates.sort((a, b) => {

    // まずアスペクトを優先
    const aspectDifference =
      aspectPriority[b.aspectKey] - aspectPriority[a.aspectKey];

    if (aspectDifference !== 0) {
      return aspectDifference;
    }

    // 同じアスペクトなら惑星で決める
    return planetPriority[b.planetKey] - planetPriority[a.planetKey
    ];
  });

  return candidates[0];
}

function makeComment(level, aspects, rank) {

  // アスペクトを影響の強い順に並べる
  const sortedAspects = [...aspects].sort(
    (a, b) => Math.abs(b.score) - Math.abs(a.score)
  );

  // 一番影響の強いアスペクト
  const main = selectMainAspect(aspects, rank);

  if (!main) {
    return level;
  }

const houseComment = houseComments[main.house] || "";

return `${houseComment}${level}<br>${main.meaning}`;
}


// test.js から使えるようにする
module.exports = {
  getScoreLevel,
  aspectComments,
  makeComment
};