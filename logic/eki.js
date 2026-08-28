    const hexagrams = [
      { no: 1, code: "001000", name: "☰☰乾為天（けんいてん）", emoji: "☁️☁️", keyword: "創造・勢い・前進", lines: [1,1,1,1,1,1], message: "強い追い風！自分から動けばきっと高く飛べる<br>勢いがあるからこそ、方向を見失わないでね", image: "./eki/00Keniten.png" },

      { no: 2, code: "001000", name: "☷☷坤為地（こんいち）", emoji: "🌱🌱", keyword: "受容・育成・支え", lines: [0,0,0,0,0,0], message: "大地はちゃんと支えてくれているよ。<br>地面に根を張るように、焦らず一歩ずつ進もう", image: "./eki/00Keniten.png" },

      { no: 3, code: "001000", name: "☵☳水雷屯（すいらいちゅん）", emoji: "💧⚡", keyword: "生みの苦しみ・始動・混沌", lines: [1,0,0,0,1,0], message: "始まりには混乱がつきもの。すぐに形にならなくても、芽は出てきているよ。<br>今は準備期間。仲間が助けてくれるかも", image: "./eki/00Keniten.png" },

      { no: 4, code: "001000", name: "☶☵山水蒙（さんすいもう）", emoji: "⛰️💧", keyword: "学び・未熟・問い直し", lines: [0,1,0,0,0,1], message: "わからないことを恥じなくて大丈夫。今日は学ぶ姿勢が運を開きます。素直に聞くことが鍵。", image: "./eki/00Keniten.png" },

      { no: 5, code: "001000", name: "☵☰水天需（すいてんじゅ）", emoji: "💧☁️", keyword: "待つ・準備・時を待つ", lines: [1,1,1,0,1,0], message: "今は無理に押し切るより、待つことで流れが整います。準備をしながら、良いタイミングを見極めて。", image: "./eki/00Keniten.png" },

      { no: 6, code: "001000", name: "☰☵天水訟（てんすいしょう）", emoji: "☁️💧", keyword: "争い・主張・すれ違い", lines: [0,1,0,1,1,1], message: "意見の衝突に注意。正しさだけで押すより、引き際を見極めると大きな消耗を避けられます。", image: "./eki/00Keniten.png" },

      { no: 7, code: "001000", name: "☷☵地水師（ちすいし）", emoji: "🌱💧", keyword: "統率・秩序・チーム", lines: [0,1,0,0,0,0], message: "感情よりルールと役割を整える日。自分の中の指揮官を起こし、落ち着いて采配して。", image: "./eki/00Keniten.png" },

      { no: 8, code: "001000", name: "☵☷水地比（すいちひ）", emoji: "💧🌱", keyword: "親しむ・協力・つながり", lines: [0,0,0,0,1,0], message: "ひとりで抱え込まないで。信頼できる人とつながることで、安心と流れが戻ってきます。", image: "./eki/00Keniten.png" },

      { no: 9, code: "001000", name: "☴☰風天小畜（ふうてんしょうちく）", emoji: "🍃☁️", keyword: "小さく蓄える・調整・控えめな前進", lines: [1,1,1,0,1,1], message: "大きく動くより、小さく整える時。細部の修正や準備が、後の成果につながります。", image: "./eki/00Keniten.png" },

      { no: 10, code: "001000", name: "☰☱天沢履（てんたくり）", emoji: "☁️🫧", keyword: "礼節・慎重・足元を見る", lines: [1,1,0,1,1,1], message: "慎重さが身を守ります。強い相手や大きな流れの中でも、礼と手順を守れば進めます。", image: "./eki/00Keniten.png" },

      { no: 11, code: "001000", name: "☷☰地天泰（ちてんたい）", emoji: "🌱☁️", keyword: "安泰・調和・通じる", lines: [1,1,1,0,0,0], message: "上下が通じ、物事がなめらかに進みやすい時。感謝と分かち合いを忘れないで。", image: "./eki/00Keniten.png" },

      { no: 12, code: "001000", name: "☰☷天地否（てんちひ）", emoji: "☁️🌱", keyword: "停滞・閉塞・通じない", lines: [0,0,0,1,1,1], message: "今は通じにくさを感じるかも。無理に突破するより、距離を置き、内側を整えるのが吉。", image: "./eki/00Keniten.png" },

      { no: 13, code: "001000", name: "☰☲天火同人（てんかどうじん）", emoji: "☁️🔥", keyword: "同志・仲間・開かれた協力", lines: [1,0,1,1,1,1], message: "同じ志を持つ人との縁が力になります。ひとりの正解より、共に進む道を探して。", image: "./eki/00Keniten.png" },

      { no: 14, code: "001000", name: "☲☰火天大有（かてんたいゆう）", emoji: "🔥☁️", keyword: "豊かさ・実力、分かち合い", lines: [1,1,1,1,0,1], message: "キミは今、たくさんの力や資源を持っているから、自然と人や幸運が集まってくるんだよ<br>独り占めしないで、みんなで分け合おう", image: "./eki/14KaTentaiyuu.png" },

      { no: 15, code: "001000", name: "☷☶地山謙（ちざんけん）", emoji: "🌱⛰️", keyword: "謙虚・調整・控えめな強さ、土台", lines: [0,0,1,0,0,0], message: "謙虚に足元を見つめ、力を蓄える時期<br>おごらずに進めば、積み重ねが大きな力になるよ", image: "./eki/00Keniten.png" },

      { no: 16, code: "001000", name: "☳☷雷地豫（らいちよ）", emoji: "⚡🌱", keyword: "喜び・準備・勢いづけ", lines: [0,0,0,1,0,0], message: "十分な準備ができたね<br>仲間と力を合せて、この追い風に乗ろう！<br>でも、調子に乗り過ぎないこと", image: "./eki/16RaiChiyo.png" },

      { no: 17, code: "001000", name: "☱☳沢雷随（たくらいずい）", emoji: "🫧⚡", keyword: "従う・流れに乗る・柔軟", lines: [1,0,0,1,1,0], message: "今日は流れに合わせる柔軟さが大切。自分のこだわりを少しゆるめると、道が開けます。", image: "./eki/00Keniten.png" },

      { no: 18, code: "001000", name: "☶☴山風蠱（さんぷうこ）", emoji: "⛰️🍃", keyword: "立て直し・修復・古い問題", lines: [0,1,1,0,0,1], message: "見ないふりをしてきたことを整えて蘇らせる時。壊すためではなく、再生するための見直しです。", image: "./eki/00Keniten.png" },

      { no: 19, code: "001000", name: "☷☱地沢臨（ちたくりん）", emoji: "🌱🫧", keyword: "近づく・見守る・成長", lines: [1,1,0,0,0,0], message: "良い流れが近づいています。上から押さえるより、あたたかく見守る姿勢が実りを呼びます。", image: "./eki/00Keniten.png" },

      { no: 20, code: "001000", name: "☴☷風地観（ふうちかん）", emoji: "🍃🌱", keyword: "観察・見極め・俯瞰", lines: [0,0,0,0,1,1], message: "今日は動くより観る日。一度立ち止まって、周囲や自分の状態を少し高い視点から眺めると、本当に大切なものが見えてきます。", image: "./eki/20HuuChikan.png" },

      { no: 21, code: "001000", name: "☲☳火雷噬嗑（からいぜいごう）", emoji: "🔥⚡", keyword: "噛み砕く・解決・障害突破", lines: [1,0,0,1,0,1], message: "避けていた問題に向き合う時。ひと口で飲み込まず、細かく分ければ解決できます。", image: "./eki/00Keniten.png" },

      { no: 22, code: "001000", name: "☶☲山火賁（さんかひ）", emoji: "⛰️🔥", keyword: "飾る・美しさ・整える", lines: [1,0,1,0,0,1], message: "見せ方を整えると運が上がります。中身を偽るのではなく、魅力が伝わる形に磨いて。", image: "./eki/00Keniten.png" },

      { no: 23, code: "001000", name: "☶☷山地剥（さんちはく）", emoji: "⛰️🌱", keyword: "削ぎ落とし・崩れ・手放し", lines: [0,0,0,0,0,1], message: "不要なものが剥がれ落ちる時。失うように見えても、身軽になるための整理かもしれません。", image: "./eki/00Keniten.png" },

      { no: 24, code: "001000", name: "☷☳地雷復（ちらいふく）", emoji: "🌱⚡", keyword: "回復・帰る・再出発、冬至", lines: [1,0,0,0,0,0], message: "流れが戻ってきます。大きく跳ねるより、まずは原点へ。小さな再開に福があります。", image: "./eki/24ChiRaihuku.png" },

      { no: 25, code: "001000", name: "☰☳天雷无妄（てんらいむもう）", emoji: "☁️⚡", keyword: "自然体・無心・余計な作為をしない", lines: [1,0,0,1,1,1], message: "無理に飾らず、自然体でいることが鍵。欲をかきすぎるより、まっすぐな行動が道を開きます。", image: "./eki/00Keniten.png" },

      { no: 26, code: "001000", name: "☶☰山天大畜（さんてんたいちく）", emoji: "⛰️☁️", keyword: "大きく蓄える・鍛錬・力をためる", lines: [1,1,1,0,0,1], message: "今は力をためる時。すぐ使い切らず、知識や経験を蓄えるほど後で強くなれます。", image: "./eki/00Keniten.png" },

      { no: 27, code: "001000", name: "☶☳山雷頤（さんらいい）", emoji: "⛰️⚡", keyword: "養う・言葉・食べるもの", lines: [1,0,0,0,0,1], message: "何を取り入れるかが大切な日。食べ物、言葉、情報。あなたを養うものを選んで。", image: "./eki/00Keniten.png" },

      { no: 28, code: "001000", name: "☱☴沢風大過（たくふうたいか）", emoji: "🫧🍃", keyword: "重荷・限界・大きな決断", lines: [0,1,1,1,1,0], message: "抱えすぎに注意。強く見えても梁はしなるもの。助けを借りる、減らす、決めることが必要です。", image: "./eki/00Keniten.png" },

      { no: 29, code: "001000", name: "☵☵坎為水（かんいすい）", emoji: "💧💧", keyword: "危険・深み・慎重", lines: [0,1,0,0,1,0], message: "足元が見えにくい時。怖さを否定せず、慎重に進めば深い学びに変わります。", image: "./eki/00Keniten.png" },

      { no: 30, code: "001000", name: "☲☲離為火（りいか）", emoji: "🔥🔥", keyword: "明晰・情熱・照らす", lines: [1,0,1,1,0,1], message: "心に火が灯る日。感情に焼かれず、光として使うことで周りも照らせます。", image: "./eki/30RiiKa.png" },

      { no: 31, code: "001000", name: "☱☶沢山咸（たくざんかん）", emoji: "🫧⛰️", keyword: "感応・恋愛・心が動く", lines: [0,0,1,1,1,0], message: "心がふれる出来事がありそう。無理に言葉にしなくても、感じたことを大切に。", image: "./eki/00Keniten.png" },

      { no: 32, code: "001000", name: "☳☴雷風恒（らいふうこう）", emoji: "⚡🍃", keyword: "継続・習慣・変わらぬ軸", lines: [0,1,1,1,0,0], message: "続ける力が運を育てます。派手さより、毎日の小さな安定が未来の支えになります。", image: "./eki/00Keniten.png" },

      { no: 33, code: "001000", name: "☰☶天山遯（てんざんとん）", emoji: "☁️⛰️", keyword: "退く・距離・撤退", lines: [0,0,1,1,1,1], message: "こちらが正しくても、真正面から立ち向かうほど消耗する時期<br>いったん距離を取って、好機をじっとうかがおう" , image: "./eki/00Keniten.png"},

      { no: 34, code: "001000", name: "☳☰雷天大壮（らいてんたいそう）", emoji: "⚡☁️", keyword: "強い力・勢い・自制", lines: [1,1,1,1,0,0], message: "勢いがあります。ただし力が強い時ほど慎重に。正しい方向へ使えば大きく進めます。", image: "./eki/00Keniten.png" },

      { no: 35, code: "001000", name: "☲☷火地晋（かちしん）", emoji: "🔥🌱", keyword: "前進・昇る・認められる", lines: [0,0,0,1,0,1], message: "少しずつ光の方へ進んでいます。小さな成果を受け取り、自信に変えていきましょう。", image: "./eki/00Keniten.png" },

      { no: 36, code: "001000", name: "☷☲地火明夷（ちかめいい）", emoji: "🌱🔥", keyword: "日の入り、光を隠す・傷つき・忍耐", lines: [1,0,1,0,0,0], message: "無理は禁物、自分のペースを守ること", image: "./eki/36ChiKameii.png" },

      { no: 37, code: "001000", name: "☴☲風火家人（ふうかかじん）", emoji: "🍃🔥", keyword: "家族・役割・内側を整える", lines: [1,0,1,0,1,1], message: "帰る場所を整えることで、外側の運も整い始めるよ🐣
<br>自分の持ち場を大切に守るのも大事", image: "./eki/37HuuKakajin.png" },

      { no: 38, code: "001000", name: "☲☱火沢睽（かたくけい）", emoji: "🔥🫧", keyword: "違い・反目・別々の視点", lines: [1,1,0,1,0,1], message: "考えの違いが見えやすい日。無理に一致させず、違うから見えるものを探して。", image: "./eki/00Keniten.png" },

      { no: 39, code: "001000", name: "☵☶水山蹇（すいざんけん）", emoji: "💧⛰️", keyword: "困難・足止め・迂回", lines: [0,0,1,0,1,0], message: "正面突破が難しい時。遠回りや相談が助けになります。止まることにも意味があります。", image: "./eki/00Keniten.png" },

      { no: 40, code: "001000", name: "☳☵雷水解（らいすいかい）", emoji: "⚡💧", keyword: "解放・ほどける・雪解け・チャンス", lines: [0,1,0,1,0,0], message: "雪が解けて、水が一気に流れ出したよ<br>止まっていた問題が解決する、このタイミングを逃さないで", image: "./eki/40RaiSuikai.png" },

      { no: 41, code: "001000", name: "☶☱山沢損（さんたくそん）", emoji: "⛰️🫧", keyword: "減らす・手放す・本質", lines: [1,1,0,0,0,1], message: "減らすことで整う日。予定、荷物、思い込み。余白を作ると本当に大事なものが残ります。", image: "./eki/00Keniten.png" },

      { no: 42, code: "001000", name: "☴☳風雷益（ふうらいえき）", emoji: "🍃⚡", keyword: "増える・助け・成長", lines: [1,0,0,0,1,1], message: "良い助けや成長の流れがあります。受け取ったものは、また誰かへ渡すとさらに巡ります。", image: "./eki/00Keniten.png" },

      { no: 43, code: "001000", name: "☱☰沢天夬（たくてんかい）", emoji: "🫧☁️", keyword: "決断・断つ・宣言", lines: [1,1,1,1,1,0], message: "はっきり決める時。ただし怒りで切るのではなく、明るい覚悟をもって選んで。", image: "./eki/00Keniten.png" },

      { no: 44, code: "001000", name: "☰☴天風姤（てんぷうこう）", emoji: "☁️🍃", keyword: "出会い・誘惑・突然の接触", lines: [0,1,1,1,1,1], message: "思いがけない出会いや知らせがありそう。魅力的なものほど、距離感をよく見て。", image: "./eki/00Keniten.png" },

      { no: 45, code: "001000", name: "☱☷沢地萃（たくちすい）", emoji: "🫧🌱", keyword: "集まる・人気・共同体", lines: [0,0,0,1,1,0], message: "人や情報が集まりやすい日。場を整え、目的を明確にすると良い力になります。", image: "./eki/00Keniten.png" },

      { no: 46, code: "001000", name: "☷☴地風升（ちふうしょう）", emoji: "🌱🍃", keyword: "上昇・成長・積み上げ", lines: [0,1,1,0,0,0], message: "一気にではなく、段階を踏んで上がる時。地道な努力がちゃんと上へつながっています。", image: "./eki/00Keniten.png" },

      { no: 47, code: "001000", name: "☱☵沢水困（たくすいこん）", emoji: "🫧💧", keyword: "困窮・疲労・内面の強さ", lines: [0,1,0,1,1,0], message: "苦しさを感じやすい時。でも、言葉にできない中にも芯は残っています。今日は休息も選択肢に。", image: "./eki/00Keniten.png" },

      { no: 48, code: "001000", name: "☵☴水風井（すいふうせい）", emoji: "💧🍃", keyword: "井戸・源泉・変わらぬ支え", lines: [0,1,1,0,1,0], message: "あなたの中の井戸を整える日。基本に戻ると、必要な水はちゃんと湧いてきます。", image: "./eki/00Keniten.png" },

      { no: 49, code: "001000", name: "☱☲沢火革（たくかかく）", emoji: "🫧🔥", keyword: "改革・変化・刷新・古い殻を脱ぐ・方向転換", lines: [1,0,1,1,1,0], message: "古い服は脱ぎ捨てて、新しい姿に生まれ変わろう<br>境界を超えた瞬間、世界が変わる", image: "./eki/49TakuKakaku.png" },

      { no: 50, code: "001000", name: "☲☴火風鼎（かふうてい）", emoji: "🔥🍃", keyword: "器・養う・新しい形", lines: [0,1,1,1,0,1], message: "素材を整え、新しい形に煮込む時。人にふるまえるものが、あなたの中で育っています。" , image: "./eki/00Keniten.png"},

      { no: 51, code: "001000", name: "☳☳震為雷（しんいらい）", emoji: "⚡⚡", keyword: "衝撃・目覚め・驚き", lines: [1,0,0,1,0,0], message: "びっくりする出来事があっても、落ち着けば大丈夫。雷は目を覚ますために鳴ることもあります。", image: "./eki/00Keniten.png" },

      { no: 52, code: "001000", name: "☶☶艮為山（ごんいざん）", emoji: "⛰️⛰️", keyword: "止まる・静止・境界", lines: [0,0,1,0,0,1], message: "止まることで整う日。進まないのではなく、今は動かないことで自分を守れます。", image: "./eki/00Keniten.png" },

      { no: 53, code: "001000", name: "☴☶風山漸（ふうざんぜん）", emoji: "🍃⛰️", keyword: "ゆっくり進む・段階・成長", lines: [0,0,1,0,1,1], message: "少しずつ進むのが正解。焦らず段階を踏めば、ちゃんと景色は変わっていきます。", image: "./eki/00Keniten.png" },

      { no: 54, code: "001000", name: "☳☱雷沢帰妹（らいたくきまい）", emoji: "⚡🫧", keyword: "不安定な関係・順序・焦り", lines: [1,1,0,1,0,0], message: "勢いで合わせすぎると疲れそう。順序や立場をよく見て、焦らず整えて。", image: "./eki/00Keniten.png" },

      { no: 55, code: "001000", name: "☳☲雷火豊（らいかほう）", emoji: "⚡🔥", keyword: "豊かさ・盛大・ピーク", lines: [1,0,1,1,0,0], message: "光が強く、賑やかな流れ。今ある豊かさを味わいつつ、ピークの後も見据えて。", image: "./eki/00Keniten.png" },

      { no: 56, code: "001000", name: "☲☶火山旅（かざんりょ）", emoji: "🔥⛰️", keyword: "旅・仮の場所・慎み", lines: [0,0,1,1,0,1], message: "新しい世界を慎重に旅しよう<br>慣れない場所では礼儀も大切", image: "./eki/00Keniten.png" },

      { no: 57, code: "001000", name: "☴☴巽為風（そんいふう）", emoji: "🍃🍃", keyword: "浸透・柔らかさ・伝わる", lines: [0,1,1,0,1,1], message: "やわらかく入っていく力があります。強く押すより、じわじわ伝える方が届きます。", image: "./eki/00Keniten.png" },

      { no: 58, code: "001000", name: "☱☱兌為沢（だいたく）", emoji: "🫧🫧", keyword: "喜び・対話・楽しさ", lines: [1,1,0,1,1,0], message: "楽しい会話や小さな喜びにツキ。軽やかな言葉が、人との距離を近づけてくれます。", image: "./eki/00Keniten.png" },

      { no: 59, code: "001000", name: "☴☵風水渙（ふうすいかん）", emoji: "🍃💧", keyword: "散る・ほどける・解散", lines: [0,1,0,0,1,1], message: "固まっていたものがほどける時。執着をゆるめると、新しい流れが入りやすくなります。", image: "./eki/00Keniten.png" },

      { no: 60, code: "001000", name: "☵☱水沢節（すいたくせつ）", emoji: "💧🫧", keyword: "節度・区切り・ルール", lines: [1,1,0,0,1,0], message: "制限は敵ではなく味方になる日。時間、お金、気力にほどよい枠を作って。", image: "./eki/00Keniten.png" },

      { no: 61, code: "001000", name: "☴☱風沢中孚（ふうたくちゅうふ）", emoji: "🍃🫧", keyword: "誠実・信頼・真心", lines: [1,1,0,0,1,1], message: "真心が伝わりやすい日。飾った言葉より、正直でやさしい言葉を選んで。", image: "./eki/00Keniten.png" },

      { no: 62, code: "001000", name: "☳☶雷山小過（らいざんしょうか）", emoji: "⚡⛰️", keyword: "小さく過ぎる・慎重・控えめ", lines: [0,0,1,1,0,0], message: "大きな勝負より、小さな確認が大切。控えめに、丁寧に、足元を見て進みましょう。" , image: "./eki/00Keniten.png"},

      { no: 63, code: "001000", name: "☵☲水火既済（すいかきせい）", emoji: "💧🔥", keyword: "完成・整う・油断注意", lines: [1,0,1,0,1,0], message: "ひとまず整っています。ただし完成後こそ油断しやすい時。最後の確認を丁寧に。" , image: "./eki/00Keniten.png"},

      { no: 64, code: "001000", name: "☲☵火水未済（かすいびせい）", emoji: "🔥💧", keyword: "未完成・これから・最後の一歩", lines: [0,1,0,1,0,1], message: "まだ完成前。でも可能性は十分あります。焦らず、最後の一歩に必要な準備を整えて。" , image: "./eki/00Keniten.png"}
    ];



function drawLine() {
  const r = Math.floor(Math.random() * 16) + 1;

  if (r === 1) return 6;
  if (r <= 6) return 7;
  if (r <= 13) return 8;
  return 9;
}

function isChanging(n) {
  return n === 6 || n === 9;
}

function getChangedLines(lines) {
  const names = ["初爻", "二爻", "三爻", "四爻", "五爻", "上爻"];

  return lines
    .map((line, index) => isChanging(line) ? names[index] : null)
    .filter(Boolean);
}

function changeLine(n) {
  if (n === 6) return 7;
  if (n === 9) return 8;
  return n;
}

function toYinYang(lines) {
  return lines.map(n => (n === 7 || n === 9 ? 1 : 0));
}

function findHexagram(lines) {
  const yinYang = toYinYang(lines);

  return hexagrams.find(hexagram =>
    hexagram.lines.every((value, index) => value === yinYang[index])
  );

}


export function drawHexagram() {
  const lines = [];

  for (let i = 0; i < 6; i++) {
    lines.push(drawLine());
  }

  const changedLines = getChangedLines(lines);
  const changedHexagram = lines.map(changeLine);


const honka = findHexagram(lines);
const shika = findHexagram(changedHexagram);


return {
  lines,
  changedLines,
  changedHexagram,
  honka,
  shika
};


}
