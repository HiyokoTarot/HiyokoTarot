// ================================
// スコア帯
// ================================

function getScoreLevel(score) {
  if (score >= 4) {
    return "絶好調な一日🎉";
  }

  if (score >= 0) {
    return "色んなことがうまくいきそう🎶";
  }

  if (score > -4) {
    return "焦らなければOK👍";
  }

  return "今日はちょっと注意💦";
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
    opposition: "他の考え方も取り入れようぜ<br>普段聞かないジャンルを試してみよう"
  },

  Mercury: {
    conjunction: "いいアイディアが思い付くぞ",
    sextile: "会話が弾むぜ",
    square: "思ってもないことを言っちゃう",
    trine: "欲しかった情報をゲット",
    opposition: "コミュニケーションの幅が広がる"
  },

  Venus: {
    conjunction: "理想通りの一日だ",
    sextile: "楽しい出来事がありそう",
    square: "衝動買いはNGだぞ",
    trine: "好きなものに没頭しろ",
    opposition: "慎重に考える日になるぜ"
  },

  Mars: {
  conjunction: "行動力が高まるぞ",
  sextile: "思い切って動け",
  square: "焦って行動したらいけないぜ",
  trine: "行動がいい結果を生むぞ",
  opposition: "慎重に行動すべきだ"
},

Jupiter: {
  conjunction: "チャンスが広がるぜ",
  sextile: "小さな幸運に恵まれるぞ",
  square: "欲張りすぎだぜ",
  trine: "発展しやすいね",
  opposition: "可能性を広げろ"
}
};

function makeComment(level, aspects) {

  // アスペクトを影響の強い順に並べる
  const sortedAspects = [...aspects].sort(
    (a, b) => Math.abs(b.score) - Math.abs(a.score)
  );

  // 一番影響の強いアスペクト
  const main = sortedAspects[0];

  if (!main) {
    return level;
  }

  return `${level} ${main.meaning}`;
}


// test.js から使えるようにする
module.exports = {
  getScoreLevel,
  aspectComments,
  makeComment
};