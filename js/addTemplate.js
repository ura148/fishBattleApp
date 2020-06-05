// ボタンを押したらtemplateを追加
function addTemplate(idname){
  // template要素を取得
  let template = document.getElementById('template');
  // template要素の内容を複製
      clone = template.content.cloneNode(true);


  // div#containerの中に追加
  document.getElementById('container').appendChild(clone);
  let fishResult = document.getElementById("fishResult");
      idBace = document.getElementsByClassName("fishForm");
      idNum = idBace.length;
      console.log(idNum);

  fishResult.id = "fishResult" + "--" + idNum;
  console.log(fishResult.id);
}


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
            // pointP = document.getElementById("fishPoint");
            pointP = fishPointP[i];

        if(pointValue == 0){
          pointP.textContent = "魚を選んでください"
        }else{
          pointP.textContent = "その魚は" + pointValue + "pointです";
        }
      }
}

function displayFishPointCount(){
  // 種類別ポイント*釣果数のポイントを確認するbtn
  let count = document.getElementsByClassName("count");
      result = 0;

  for(let i = 0; i < count.length; i++){
    result += eval(count[i].value);
  }

  let pointP = document.getElementById("fishpoint");
      fishPoint = document.fish.fishName;
      num = fishPoint.selectedIndex;
      pointValue = fishPoint.options[num].value;
      pointP = document.getElementById("point")
      fishPointCount = result * pointValue;

  pointP.textContent = fishPointCount + "points獲得";
}
