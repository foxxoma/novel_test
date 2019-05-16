const img =  document.getElementById('background');
const name =  document.getElementById('name');
const text =  document.getElementById('text');
const choice =  document.getElementById('choice');
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let i = 0;
let check =  true;

img.height = window.innerHeight *0.80;
img.addEventListener("click", onClick);

function onClick() {
if (check === true) {i++;}
}

setInterval(function() {

switch (i) {
  case 1:
   name.textContent = "...";
   text.textContent = "Где я?";
    break;

  case 2:
   text.textContent = "...";
    break;

  case 3:

    text.textContent = "Я медленно встал и подошел к двери";
    break;

  case 4:
   text.textContent = "Заперто...";
    break;

  case 5:
   text.textContent = "Что же делать?";
    break;

  case 6:
  check = false;
choice.style.display = "block";

  p1.textContent = "Ждать";
 p1.addEventListener("click", function(){i = 12; check = true; choice.style.display = "none"});

  p2.textContent = "Попробовать окно";
 p2.addEventListener("click", function(){i = 7; check = true; choice.style.display = "none"});
    
  break;
 
  case 7:
text.textContent = "Я подошел к окну, было очень солнечно";
  break; 

  case 8:
text.textContent = "Запрыгнув на стол, начал открывать...";
  break; 
  case 9:
text.textContent = "Конечно не без сопративления и легко скрипа, окно было открыто";
  break; 
  case 10:
text.textContent = "Через пару мгновенией я оказался снаружи...";
  break; 
  case 11:
  i = 17;
  break;

  		case 12:
		text.textContent = "А если не кто не придет?";

  		break;



 		case 13:
  		check = false;
		choice.style.display = "block";

  		p1.textContent = "Пойти к окну";
 		p1.addEventListener("click", function(){i = 7; check = true; choice.style.display = "none"});

  		p2.textContent = "Попробовать еще раз дверь";
 		p2.addEventListener("click", function(){i = 14; check = true; choice.style.display = "none"});
    
  		break;

  		case 14:
		text.textContent = "И еще раз!!!";
  		break;

  		case 15:
		text.textContent = "Немного разогнавшись, я ринулся к двери..Тудух!!!";
  		break;

  		case 16:
		text.textContent = "Почувствовал теплый ветерок...Выбрался";

  		break;

case 17:
text.textContent = "Что дальше?";
break;
case 18:
text.textContent = "В дали я заметил силут.. но.. что у меня с глазами, я почти ничего не вижу?";
break;
case 19:
      check = false;
    choice.style.display = "block";

      p1.textContent = "Пойти за силуэтом";
    p1.addEventListener("click", function(){i = 20; check = true; choice.style.display = "none"});

      p2.textContent = "Попробовать прийти в себя";
    p2.addEventListener("click", function(){i = 22; check = true; choice.style.display = "none"});
    
      
break;

    case 20:
    text.textContent = "Я неуыеренно направился вперед...";
    break;

    case 21:
    text.textContent = "Он все удалялся и удалялся... что за?";
    break;

case 22:
text.textContent = "Хлоп... я почувствовал чью то руку на плече.";
break;

}

}, 10);

//parent.children[0]