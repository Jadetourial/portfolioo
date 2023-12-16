//ABOUT section

var tablinks = document.getElementsByClassName('tab-links');
//Call the variable "tablinks" using the class name 'tab-links'
var tabcontents = document.getElementsByClassName('tab-contents');
//Call the variable "tablinks" using the class name 'tab-contents'
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}