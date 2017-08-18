
// Смяна на страницата
// // var userLoc; 
// function getResults(){
//       window.location.href = "resultsPage.html";
//       userLoc = document.getElementById("location").value;
//     }
var locationAnswer;
var educationAnswer;
var ageAnswer;
var moneyAnswer;

function submitResults() {
   
}
function userResults() {
// Запазва отговора на потребителя
   var userLocation = document.getElementById("location");
   locationAnswer = userLocation.options[userLocation.selectedIndex].value;
   var userEducation = document.getElementById("education");
   educationAnswer = userEducation.options[userEducation.selectedIndex].value;
   var userAge = document.getElementById("age");
   ageAnswer = userAge.options[userAge.selectedIndex].value;
   var userMoney = document.getElementById("money");
   moneyAnswer = userMoney.options[userMoney.selectedIndex].value;

// Проверка дали е избрано нещо, ако не дава грешка
//    if (locationAnswer === "default") {
//        alert("Моля изберете къде живеете!");
//    }
    if (educationAnswer === "default") {
       alert("Моля изберете образование!");
   }
    if (ageAnswer === "default") {
       alert("Моля посочете възрастта си!");
   }
    if (moneyAnswer === "default") {
       alert("Моля изберете инвестиционна сума!");
   }


function textAreaAdjust(o) {
    o.style.height = "1px";
    o.style.height = (25+o.scrollHeight)+"px";
}
