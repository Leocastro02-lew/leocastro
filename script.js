
function scrollProjects(){
document.getElementById("projects")
.scrollIntoView({behavior:"smooth"});
}

function openModal(id){
document.getElementById(id).style.display="flex";
}

function closeModal(id){
document.getElementById(id).style.display="none";
}

window.onclick=function(event){

let modals=document.querySelectorAll(".modal");

modals.forEach(function(modal){

if(event.target===modal){
modal.style.display="none";
}

});

};

