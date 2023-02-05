
const url = "assets/RawData.json";    // 読み込むJSONファイル
 
// 12星座情報を整形して表示する
function formatJSON(rawData){
    console.log(rawData);
 
    // JSONファイルを整形して表示
    let html = "";
    for(let item of rawData){
        html += "<p>" + item.name + " " + item.age + "</p>";
    }

    document.getElementById("result").innerHTML = html;
}

window.addEventListener("load", ()=>{ 
    fetch(url)
        .then( response => response.json())
        .then( data => formatJSON(data)); 
});