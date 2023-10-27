var player;
function onYouTubeIframeAPIReady() {
  //console.log("プレイヤーが読み込まれました");
  player = new YT.Player("overlayVideo", {
    height: "550",
    width: "1440",
    videoId: "",
    events: {},
  });
}
document.addEventListener("DOMContentLoaded", function () {
  var tag = document.createElement("script");

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  //プロフィールの表示
  const profile1 = `Welcame　to　my　portfolio
    日本コンピュータ専門学校　デジタルクリエイター科卒業　小浜雄一と申します。
    前職はIT系の会社でフロントエンドエンジニアを勤めておりました。

    `;
  const profile2 = `
    学生時代にはゲーム作品を5つほど制作したこともあり、
    簡単なものであればAfterEffectsのエクスプレッションの記述も行えます。

    現在は梅田の就労移行支援所に通っており、通所しながら作成した作品を下記にまとめましたのでご覧ください。`;

  let profile1Index = 0;
  function typeText() {
    if (profile1Index < profile1.length) {
      document.getElementById("profile1").innerText +=
        profile1.charAt(profile1Index);
      profile1Index++;
      setTimeout(typeText, 10); // 10ミリ秒ごとに次の文字を表示
    } else {
      typeText2();
    }
  }

  let profile2Index = 0;
  function typeText2() {
    if (profile2Index < profile2.length) {
      document.getElementById("profile2").innerText +=
        profile2.charAt(profile2Index);
      profile2Index++;
      setTimeout(typeText2, 10); // 10ミリ秒ごとに次の文字を表示
    }
  }

  typeText(); // 関数を実行してアニメーションを開始
  // 各スキルのエレメントを取得
  const skills = document.querySelectorAll(".skill");

  // スキルごとの処理
  skills.forEach((skill) => {
    // スキル内のすべての.star.kurukuruAnimeエレメントを取得
    const stars = skill.querySelectorAll(".star.kurukuruAnime");

    // インデックスとして初期値0を設定
    let index = 0;

    // 最初の.star.kurukuruAnimeに対して、transitionendイベントを追加
    function activateNextStar() {
      if (index < stars.length) {
        stars[index].classList.add("active");
        stars[index].addEventListener("animationend", function handler() {
          // 一度実行された後、このイベントハンドラを削除
          stars[index].removeEventListener("animationend", handler);

          // 次の.star.kurukuruAnimeをアクティブにする
          index++;
          activateNextStar();
        });
      }
    }

    activateNextStar(); // 最初の.star.kurukuruAnimeのアクティベーションを開始
  });

  //画像の取得
  let flexItems = document.querySelectorAll(".flex-item");

  //overlayの取得
  let overlay = document.getElementById("overlay");
  let overlayContent = document.getElementById("overlayContent");
  let overlayImageDescription = document.getElementById(
    "overlayImageDescription"
  );
  let overlayVideoDescription = document.getElementById(
    "overlayVideoDescription"
  );
  let overlayImage = document.getElementById("overlayImage");
  let overlayVideo = document.getElementById("overlayVideo");

  //ポートフォリオ画像の挙動の操作
  flexItems.forEach((item) => {
    item.addEventListener("click", function () {
      function onPlayerReady(event) {
        // プレイヤーが準備できたら実行される関数
        setupEventListeners(); // プレイヤーが準備されたらイベントリスナーを設定
      }
      overlayImageDescription.innerText = "";
      overlayVideoDescription.innerText = "";
      let description = "";
      let videoId = ""; // YouTubeの動画IDを指定する変数

      if (item.querySelector(".flex-video") !== null) {
        // 動画の場合
        let clickedImage = item.querySelector("img");
        // img要素からalt属性を取得
        if (clickedImage.alt == "canon") {
          videoId = "w37tZHn4wlM";
          description = `
          EOS_Kiss_M商品紹介
        
          制作時間　16時間
          動画時間　1分

                        
          制作意図　就労移行支援所のスタッフさんに「クライアントから動画の作成を依頼されるならどのようなことが起きるのか」というコンセプトのもと、
          仮想のクライアントをスタッフさん作っていただき、その方にヒアリングを行いました。
          ターゲット：女２０～３０女性向け、カメラ女子、SNS向けに気軽に→Instagram等のユーザー
          プラットフォーム：YouTube、ホームページに埋め込み
          動画時間30秒～1分
          与えたい印象：明るい印象、優しい印象
          下記のカメラの特徴を動画に全て盛り込む
          A,高画質、2410万画素
          B,重さ387g、
          C,Bluetooth、Wi-Fi接続
          D,スマホとの接続、片手で操作ができるコンセプト、
          E,オートフォーカス＋追尾機能
                        
          特別な要望
          モーショングラフィックスで画質と重さを表現する。

        `;
        } else if (clickedImage.alt == "motion") {
          videoId = "ESsH3AhVczU";
          description = `
          モーショングラフィックス

          制作時間　13時間
          動画時間　57秒
          
          制作意図
          既存の素材をを可能な限り使わず、デザインをするというコンセプトの元作成しました。
          あらゆる分野に転用の効くモーショングラフィックスの勉強も兼ねており、アイデアノートの一つとして捉えています。
          0から1をどれほど表現できるかという自分の中で挑戦的な作品でした。

          `;
        } else if (clickedImage.alt == "fox") {
          videoId = "JiIHR7sjqJA";
          description = `
          動物紹介動画

          制作時間　12時間
          動画時間　7分23秒
          
          制作意図
          コンセプトから内容まで、全てを白紙から作成するのがこの作品の目標でした。
          Youtubeに投稿することを想定し、視聴層、需要供給の状態などを調査した結果
          動物の動画は需要と供給が安定しており、視聴層も幅広いことがわかりました。
          そこで、次に紹介するという要素を加え、ターゲットは若年層に絞り、「動物の動画を流し見するYouTube利用者」に限定しました。

          また、Youtubeのアルゴリズムとして優位に立てるよう視聴維持率に注目し、
          維持率をキープしやすい6～8分の動画になるように調整しました。

          `;
        } else if (clickedImage.alt == "balloon") {
          videoId = "5DztlglzXDc";
          description = `
          風船トランジション

          制作時間　4時間
          動画時間　6秒
          
          制作意図
          動画のつなぎに飽きが来ないような、トランジションを作成しました。
          明るく場面を切り替える時に適しており、風船の形に合わせてマスクを掛けることによって違和感をなくしています。
          
          `;
        } else if (clickedImage.alt == "yagasuri") {
          videoId = "_KMD_cg0h2Q";
          description = `
          矢絣トランジション

          制作時間　2時間
          動画時間　4秒
          
          制作意図
          風船のトランジションとは違いスタイリッシュさと和風さを兼ねたデザインにし、なおかつ一度全画面を覆える利便性も重視しました。
          
          `;
        }

        player.loadVideoById(videoId);
        overlayVideoDescription.innerText = description;
        selectMediaType(MediaType.VIDEO);
      } else {
        // 画像の場合
        let clickedImage = item.querySelector("img");
        overlayImage.src = clickedImage.src;
        if (clickedImage.alt === "夏野菜") {
          description = `チラシ
          
          夏野菜フェア

                        制作時間　6時間
                        サイズA4
                        ターゲット　主婦、主夫の方全般
                        掲載場所　セールを行うスーパー内
                        
                        制作意図
                        左上に日付、土台に赤と注目要素を配置して、デザインとしての安定感獲得を目指しました。
                        フレッシュな夏野菜を全面にだし、青々しい緑を印象づけるために左上の配色は緑に、
                        セール内容で目がひけるように赤背景白文字を選択しました。
                        掲載場所を限定しているので実施場所等の情報は省略し、日付、野菜、セール内容と情報を最小限にしました。
                        `;
        } else if (clickedImage.alt === "暑熱順化") {
          description = `チラシ
          
          暑熱順化セミナー
        
                        制作時間　7時間
                        サイズA4
                        ターゲット　30～40の現役時代の女性、及び熟年世代男女、普段から区役所や公民館などを利用する人
                        掲載場所　区役所や公民館などでの掲載を想定

                        制作意図
                        熱中症対策の啓蒙、セミナーへの参加誘導が目的情報の純度としては下記を意識
                        キャッチコピーは視線で誘導し、注目しやすい左上に配置
                        各要素をブロックごとに分けて整列し、参加費無料はアクセントカラーを使い強調しました。
                        暑熱順化の文章は１ブロックにして整理し、日付と場所は大きくしつつも１ブロックにまとめました。
                        `;
        } else if (clickedImage.alt === "ねこかっぱ") {
          description = `バナー
          
          梅雨バナー（ねこかっぱ）
        
                        制作時間　2時間
                        サイズ350px*300px
                        ターゲット　3～6歳までの子供、およびその保護者
                        掲載場所　グーグルインフィード広告
                        
                        制作意図
                        雨具メーカーの認知、公式サイトへの誘導
                        雨のネガティブなイメージを、雨具を着て遊ぶというポジティブなものに変えようというコンセプトです。
                        カラーリングはベビーカラーを意識し、柔らかなものを選択
                        キーワードのあしらいを背景に波を加えたもので遊びを出し、全体的に優しさを演出
                        掲載場所はグーグルインフィード広告、掲載範囲はグーグルの機能を使い、ターゲットを指定することを想定しています。
                        `;
        } else if (clickedImage.alt === "財布") {
          description = `チラシ
          
          財布
        
                        制作時間　3時間
                        サイズA4
                        ターゲット　30台男性
                        掲載場所　Webバナー
                        
                        制作意図
                        既存のデザインを参考に制作
                        参考元のデザインの意図を汲み取ることに注力しながらもオリジナルの要素を加えました。
                        高級感の演出のためカラーは白と黒のみ、フォントは明朝体を選択することでスマート感を出しています。
                        `;
        } else if (clickedImage.alt === "父の日") {
          description = `バナー
          
          父の日
        
                        制作時間　4時間
                        サイズA4
                        ターゲット　20～30台女性
                        掲載場所　Webバナー
                        
                        制作意図
                        既存のデザインを参考に制作
                        参考元のデザインはオーダースーツの広告でしたが、父の日用のフラワーギフトの広告にアレンジしました。
                        構図はそのままに、背景を花に、文字の色は父性感じる深い青を選択
                        ターゲットは送る側の若い女性を意識し、カジュアルさとおしゃれさのため、フォントはイメージ重視でデザイン書体を選択
                        Web広告を意識しているため、「詳しくはこちら」をボタンのように見せ、クリックを誘導しています。
                        `;
        } else if (clickedImage.alt === "カードゲーム大会") {
          description = `バナー
          
          カードゲーム大会
        
                        制作時間　6時間
                        1080px*1080px
                        ターゲット　施設利用者
                        掲載場所　Instagram
                        
                        制作意図
                        事業所のイベント用に作成
                        以下が提示された要件
                        　目的はイベントの参加者を増やすことで楽しく交流を深めてほしい
                        　事務所内の提示物として興味を喚起し、通所する動機づけにも繋げたい
                        
                        提示された要件を満たすように、楽しさを演出するためカラーは暖色系の濃い黄色を選択
                        情報の順位を　場所＜日付＜内容　に定め、中でも場所はアーチ状に配置し、遊び心を演出
                        内容の「カードゲーム大会」は中央に配置し、独特なデザイン書体を選択することで、情報として取り込むと同時にゲームであることを強調しています。
                        日付は内容の直下に配置することで、視線がバラけないようにし、また、こちらは読みやすいゴシック体を選択しました。
                        3つのカードは当日のカードゲームの内容を情報過多にならないようにオブジェとして配置し、三角構図を利用することで安定感を出しつつ、中央の内容と日付に注目しやすくしています。
                        `;
        }

        selectMediaType(MediaType.IMAGE);

        // オーバーレイの説明文を更新
        overlayImageDescription.innerText = description;
      }

      // オーバーレイを表示
      overlay.className = "overlay-visible";
      // 一瞬待ってからshowクラスを追加
      setTimeout(function () {
        overlayContent.classList.add("show");
      }, 10);
    });
  });

  // オーバーレイをクリックで閉じる
  overlay.addEventListener("click", function (event) {
    if (event.target !== overlay) {
      return;
    } else {
      overlay.className = "overlay-hidden";
      document.getElementById("overlayContent").classList.remove("show"); // showクラスをリセット
      if (player.getPlayerState() === 1) {
        player.pauseVideo();
      }
    }
  });

  //問い合わせフォームの動作処理　理解が甘い

  const urlParams = new URLSearchParams(window.location.search);
  const confirmParam = urlParams.get("confirm");
  const form = document.querySelector(".google-form");
  const formMessage = document.getElementById("formMessage");

  if (confirmParam) {
    form.style.display = "none";
    formMessage.textContent = "お問い合わせありがとうございます。";
    formMessage.style.color = "green";
  } else {
    form.style.display = "block";
    formMessage.textContent = "お気軽にお問い合わせください。";
    formMessage.style.color = "black";
  }

  document.addEventListener(
    "scroll",
    function () {
      var separators = document.querySelectorAll(".separator");

      separators.forEach(function (separator) {
        var separatorTop = separator.getBoundingClientRect().top;
        var viewportHeight = window.innerHeight;

        if (separatorTop < viewportHeight) {
          separator.classList.add("active");
        } else {
          separator.classList.remove("active");
        }
      });
    },
    false
  );
});

const MediaType = {
  IMAGE: "image",
  VIDEO: "video",
};

function selectMediaType(mediaType) {
  if (!mediaType) {
    console.error("mediaTypeNull");
  } else if (mediaType == MediaType.IMAGE) {
    overlayImage.style.display = "block";
    overlayVideo.style.display = "none";
    //console.log('Image');
  } else if (mediaType == MediaType.VIDEO) {
    overlayImage.style.display = "none";
    overlayVideo.style.display = "block";
    //console.log('Video');
  } else {
    console.error("想定外のメディアタイプ", mediaType, "が選択されました。");
  }
}
