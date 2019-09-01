const loading = document.getElementById("loading");
const start = document.getElementById("start");
const game = document.getElementById("game");
const pointArea = document.getElementById("point");

let point = 0;

// 与えられた要素から一つ、ランダムに選び取る
const chooseAtramdom = children => {
  const length = children.length;
  return children[Math.floor(Math.random() * length)];
};

// ゲーム本体
const startGame = () => {
  const children = game.children;
  
  for (const child of children) {
    child.style.display = "none";
  }

  const chosen = chooseAtramdom(children);
  chosen.style.display = "block";

  point++;
  pointArea.innerHTML = `あなたの得点は${point}点です。`;
}

/*
  画像のロードが終わった時点で、windowのloadイベントが発火する。
  以下では、loadイベントの発火を待って、ゲームを初期化している。
*/
window.addEventListener("load", () => {
  loading.style.display = "none";

  start.addEventListener("click", () => {
    start.style.display = "none";
    startGame();
    game.addEventListener("click", startGame);
  })
});
