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
  };
}

// function removeTemplate(){
//   let fishResult = document.getElementById("fishResult--1");
//       fishResult.remove();
// }


function onSumCountButtonClick(){
  let countElements = document.getElementsByClassName("count");

  console.log(countElements);

  let result = 0

  for(let i = 0; i < countElements.length; i++){
    result += eval(countElements[i].value);
  }

  let resultP = document.getElementById("count");

  resultP.textContent = "今日の合計釣果は" + result + "匹です";
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
