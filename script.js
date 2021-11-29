// getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

// onkeyup event
inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value; //getting user entered value
  if(userEnteredValue.trim() != 0){ //if the user value isn't only spaces
    addBtn.classList.add("active"); //active the add button
  }else{
    addBtn.classList.remove("active"); //unactive the add button
  }
}

showTasks(); //calling showTask function

addBtn.onclick = ()=>{ //when user click on plus icon button
   let userEnteredValue = inputBox.value; //getting input field value
   let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
   if(getLocalStorageData == null){ //if localstorage has no data
     listArray = []; //create a blank array
   }else{
     listArray = JSON.parse(getLocalStorageData);  //transforming json string into a js object
       }
   listArray.push(userEnteredValue); //pushing or adding new value in array
   localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforming js object into a json string
   showTasks(); //calling showTask function
   addBtn.classList.remove("active"); //unactive the add button once the task added

function ajax(){
    var xhttp = new XMLHttpRequest();
    // console.log(xhttp);
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            // console.log(response);
            var Jpeople=response.people;
            var output="";
            for(var i=0;i<Jpeople.length;i++){
                output += "<tr><td>"+ Jpeople[i].SLNO +"</td><td>"+Jpeople[i].NAME+
                "</td><td>"+Jpeople[i].QUANTITY+"</td><td>"+Jpeople[i].UNIT+"</td><td>"+Jpeople[i].DEPARTMENT+"</td><td>"+Jpeople[i].NOTES+"</td></tr>";
                
            }
            document.getElementById("demo").innerHTML=output;
        }
    }
    xhttp.open("GET","data.json",true);
    xhttp.send();
}
 }


function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length; //passing the array length in pendingtask
  if(listArray.length > 0){ //if array length is greater than 0
    deleteAllBtn.classList.add("active"); //active the delete button
  }else{
    deleteAllBtn.classList.remove("active"); //unactive the delete button
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
  inputBox.value = ""; //once task added leave the input field blank
}

// delete task function
function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); //delete or remove the li
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); //call the showTasks function
}

// delete all tasks function
deleteAllBtn.onclick = ()=>{
  listArray = []; //empty the array
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //set the item in localstorage
  showTasks(); //call the showTasks function
}





$('.message a').click(function(){
  $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

//for login


  //todo

  // Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
close[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
}
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
var ul=document.getElementById('app');

list.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {

  ev.target.classList.toggle('checked');

    if(ul.getElementsByClassName('checked').length>5){
    ev.target.classList.toggle('checked');
    alert("Congrats. 5 Tasks have been Successfully Completed");
    
    }

}
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
var li = document.createElement("li");
var inputValue = document.getElementById("myInput").value;
var t = document.createTextNode(inputValue);
li.appendChild(t);
if (inputValue === '') {
  alert("You must write something!");
} else {
  document.getElementById("myUL").appendChild(li);
}
document.getElementById("myInput").value = "";

var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
}

  //json

  function ajax(){

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function(){
          if(this.readyState==4&&this.status==200){
              var response = JSON.parse(this.responseText);
             var output ="";
             for(var i=0;i<response.length;i++){
                 output += "<li>"+ response[i].title +"</li>";
              }
               document.getElementById("app").innerHTML = output;
             
          }
      }
      xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
      xhttp.send();
      }

