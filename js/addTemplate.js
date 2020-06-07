// ボタンを押したらtemplateを追加
function addTemplate(idname){
  // template要素を取得
  let template = document.getElementById('template');
  // template要素の内容を複製
      clone = template.content.cloneNode(true);


  // div#containerの中に追加
  document.getElementById('container').appendChild(clone);
  let fishResult = document.getElementById("fishResult");
      removeBtn = document.getElementById("removeBtn");
      idBace = document.getElementsByClassName("fishForm");
      idNum = idBace.length;
      console.log(idNum);

  fishResult.id = "fishResult" + "--" + idNum;
  removeBtn.id = "removeBtn" + "--" + idNum;
  removeBtn.onclick = function(){
    fishResult.remove();
    displayCount();
    onSumCount();
  };
}

// function removeTemplate(){
//   let fishResult = document.getElementById("fishResult--1");
//       fishResult.remove();
// }
function sum(){
  let countElements = document.getElementsByClassName("count");

  let result = 0

  for(let i = 0; i < countElements.length; i++){
    result += eval(countElements[i].value);
  }
  return result;
}


function onSumCount(){
  let sumCount = sum();
      resultP = document.getElementById("count");

  resultP.textContent = "今日の合計釣果は" + sumCount + "匹です";
}


function displaypoint() {
  let
  // pointP = document.getElementById("fishPoint");
      fishPoint = document.getElementsByClassName("fishName");
      fishPointP = document.getElementsByClassName("fishPoint")

      for(let i = 0; i < fishPoint.length; i++){

        let num = fishPoint[i].selectedIndex;
            pointValue = fishPoint[i].options[num].value;
            pointP = fishPointP[i];
            fishname = fishPoint[i].options[num].textContent;

        if(pointValue == 0){
          pointP.textContent = "魚を選んでください"
        }else{
          pointP.textContent = fishname + "は" + pointValue + "pointです";
        }
      }
}

function displayFishPointCount(){

  // 種類別ポイント*釣果数のポイントを確認するbtn
  let count = document.getElementsByClassName("count");
      result = 0;
      fishPoint = document.getElementsByClassName("fishName");
      fishPointP = document.getElementsByClassName("fishPoint");
      fishTotalPointP = document.getElementsByClassName("point");

  for(let i = 0; i < count.length; i++){

    let result = eval(count[i].value);
        num = fishPoint[i].selectedIndex;
        pointValue = fishPoint[i].options[num].value;
        point = pointValue * result;
        console.log(point);

    fishTotalPointP[i].textContent = point + "points獲得";

  }

  // let
  //
  //
  //
  //     pointP = document.getElementById("point")
  //
  // pointP.textContent = fishPointCount + "points獲得";
}

// 釣果数に応じてfish画像を表示
function displayCount(){
  let sumCount = sum();
      sumCountArea = document.getElementById("display-count");
      elementNum = sumCountArea.childElementCount + 1;

  //fish画像を作成
  let  fishImg = document.createElement('img');
  fishImg.setAttribute('src', './img/fish.png');
  fishImg.classList.add("child");
  sumCountArea.appendChild(fishImg);

  // 釣果数を下方修正もしくは直接入力した時に実行
  if(elementNum !== sumCount){
    // 一度全てのfish画像を削除する
    while (sumCountArea.firstChild) {
    sumCountArea.removeChild(sumCountArea.firstChild);
    }

    let i =1;
    // 釣果数分fish画像を追加する
    while(i <= sumCount){

      var fishImgNew = document.createElement("img");
      fishImgNew.setAttribute("id", i);
      fishImgNew.setAttribute("src", "./img/fish.png");


      sumCountArea.appendChild(fishImgNew);
      i++;
    }
  }
}
