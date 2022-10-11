function addnewWeField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here")

    let WE=document.getElementById("we");
    let weF=document.getElementById("weAddButton");

    WE.insertBefore(newNode,weF);
}

function addnewAqField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here")

    let WE=document.getElementById("aq");
    let weF=document.getElementById("aqAddButton");

    WE.insertBefore(newNode,weF);
}

function generateResume(){
    let name=document.getElementById("nameField").value;// value of nameField i.e,name
    let nameT1=document.getElementById("nameT");
    
    nameT1.innerHTML=name; //updating value
    document.getElementById("nameT2").innerHTML=name;

    //linked
    document.getElementById("contactT").innerHTML=document.getElementById(
        "contactField"
    ).value;

    document.getElementById("addressT").innerHTML=document.getElementById(
        "addressField"
    ).value;
    document.getElementById("fbT").innerHTML=document.getElementById(
        "fbField"
    ).value;
    document.getElementById("instaT").innerHTML=document.getElementById(
        "instaField"
    ).value;
    document.getElementById("linkedT").innerHTML=document.getElementById(
        "linkedField"
    ).value;

    //objective
    document.getElementById("objectiveT").innerHTML=document.getElementById(
        "objectiveField"
        ).value;

    //Work Experience
    let we_arr=document.getElementsByClassName("weField");
    let str='';

    for(let element of we_arr) {
        str=str+`<li>${element.value}</li>`
    }

    document.getElementById("weT").innerHTML=str;

    //academic qualification
    let aq_arr=document.getElementsByClassName("aqField");
    let temp='';
    
    for(let element of aq_arr){
        temp=temp+`<li>${element.value}</li>`
    }

    document.getElementById("aqT").innerHTML=temp;

    document.getElementById("cv-form").style.display='none';
    document.getElementById("cv-template").style.display='block';
} 

function printResume(){
    window.print();
}