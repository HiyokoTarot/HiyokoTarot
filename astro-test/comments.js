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
    opposition: "他の考え方も取り入れようぜ<br>普段聞かないジャンルを試すのもいいな"
  },

  Mercury: {
    conjunction: "いいアイディアが思い付くぞ<br>今日一番最初にひらめいた曲がヒントだ！",
    sextile: "会話が弾むぜ<br>相手の好きな曲で一緒に盛り上がれ！",
    square: "思ってもないことを言っちゃう<br>ヒーリング系を聞きながら素直に謝ろう",
    trine: "欲しかった情報をゲット<br>ついでに欲しかった機材の情報もチェックだ！",
    opposition: "コミュニケーションの幅が広がる<br>知らなかった曲を教えてもらえるかも？"
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
  square: "欲張りすぎだぜ<br>まずは聞き慣れてる音に戻ろうか。",
  trine: "大きく発展しやすいね<br>仲間を誘って対バンやろうぜ！",
  opposition: "可能性を広げろ<br>やりたかったけど挑戦できてないこと、ない？"
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