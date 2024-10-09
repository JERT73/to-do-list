
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//add tasks based on user prompt
function addTask(){
    if(inputBox.value===''){
        // alert("You must write something!");
        inputBox.placeholder = "You must enter something!";
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}


// document.querySelectorAll('#list-container li').forEach(item => {
//     item.addEventListener('click', function() {
//         this.classList.toggle('checked');
//     });
// });


// for checking and un-checking tasks
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


//retain data after browser is realoded
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//open data
function displayData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
displayData();