function myFunction(x){
    x.classList.toggle("change");
}

document.getElementById("nav-item1").addEventListener("mouseenter",()=> view('Home'));
document.getElementById("nav-item2").addEventListener("mouseenter", ()=> view('Form'));
document.getElementById("nav-item3").addEventListener("mouseenter", ()=> view('List-1'));
document.getElementById("nav-item4").addEventListener("mouseenter",()=> view('tableBody'));
document.getElementById("nav-item5").addEventListener("mouseenter", ()=> view('Counter'));

function view(tab){
    console.log(tab)
    common_class = document.getElementsByClassName('content');
    for(let a of common_class){
        console.log(a);
        a.style.display = 'none';
    }
    let tab_id=document.getElementById(tab)
    console.log("active",tab_id);
    tab_id.style.display = 'flex';
}
  
//Rendering form data
let data = document.getElementById("form1");
data.addEventListener("submit", function(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    var name=document.getElementById("fname").value;
    var mail=document.getElementById("maill").value;
    //var gender=document.getElementById("male").value;
    //var gender=document.getElementById("female").value;
    var phoneNo=document.getElementById("phone").value;

   // console.log(name + mail);
    var infoinside = document.getElementById("infoinside");
    var str = "The rendered information from the form are: <br>";
    str +=name+"<br>"+mail+"<br>"+phoneNo;
    infoinside.innerHTML = str;
})

//Adding items and deleting and rendering that data
function addItem(){
    var input =document.getElementById("itemInput").value;
    var items = document.getElementById("items");

    if(input.trim() !==''){
        var row = document.createElement("tr");
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");

        cell1.textContent = input;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function(){
            deleteItem(row);
        };
        cell2.appendChild(deleteButton);
        row.appendChild(cell1);
        row.appendChild(cell2);
        items.appendChild(row);

        
        document.getElementById("itemInput").value = "";
    }
}
function deleteItem(row){
        row.parentNode.removeChild(row);
}



//Rendering object data as Table:
const persons = [{
    Name:"Mamatha",
    Age:22,
    Hobbie:"Playing"
},
{
    Name:"Usha",
    Age:22,
    Hobbie:"Reading"

}, 
{
    Name:"Nikitha",
    Age: 21,
    Hobbie:"Sleeping"
},
{
    Name:"Anju",
    Age: 21,
    Hobbie:"Coding"
}
];
function renderTable(persons,tableBody)
{
    const container =document.getElementById("tableBody");
    const table = document.createElement("table");

    const headerRow = table.insertRow();
    for (let key in persons[0]) {
        const headerCell = document.createElement('th');
        headerCell.textContent = key;
        headerRow.appendChild(headerCell);
    }
    persons.forEach(item => {
        const row = table.insertRow();
        for (let key in item) {
            const cell = row.insertCell();
            cell.textContent = item[key];
        }
    });

    container.appendChild(table);

}
renderTable(persons, 'tableBody');

//Counter code:

document.getElementById("button-1").addEventListener("click",()=> Start());
document.getElementById("button-2").addEventListener("click",()=> Pause());
document.getElementById("button-3").addEventListener("click",()=> Resume());
document.getElementById("button-4").addEventListener("click",()=> Stop());

let time_out=0;
let num=0;
let time;

document.getElementById("button-2").disabled=true;
document.getElementById("button-3").disabled=true;
document.getElementById("button-4").disabled=true;

function Start()
{
    if(!time_out)
    {
        num=0;
        time_out=1;
        document.getElementById("button-1").disabled=true;
        document.getElementById("button-2").disabled=false;
        document.getElementById("button-3").disabled=true;
        document.getElementById("button-4").disabled=false;
        startt();


    }
}
function startt()
{
    num++;
    document.getElementById("count").innerHTML=num;
    time=setTimeout(startt,500);
}
function Pause()
{
    clearTimeout(time);
    document.getElementById("button-1").disabled=true;
    document.getElementById("button-2").disabled=true;
    document.getElementById("button-3").disabled=false;
    document.getElementById("button-4").disabled=false;
}

function Resume()
{
    startt();
    document.getElementById("button-1").disabled=true;
    document.getElementById("button-2").disabled=false;
    document.getElementById("button-3").disabled=true;
    document.getElementById("button-4").disabled=false;
}

function Stop()
{
    clearTimeout(time);

    document.getElementById("button-1").disabled=false;
    document.getElementById("button-2").disabled=true;
    document.getElementById("button-3").disabled=true;
    document.getElementById("button-4").disabled=true;
    time_out=0;

}








