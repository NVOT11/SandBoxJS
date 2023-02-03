
let context;  // 描画コンテキスト
let item;
const time = 500;

// 初期化
window.onload = function () {
    context = document.getElementById("field").getContext("2d");
    item = document.getElementById("item");
    
    // 50msごとにtickを呼ぶ
    timerId = setInterval(tick, time);
};

// 一定時間ごとの処理
function tick() {
}

// マウスイベント
window.onmousemove = function (event) {
    onMouseMove(event.clientX,event.y);
};

function onMouseMove(x,y) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.drawImage(item, x, y);    
}
