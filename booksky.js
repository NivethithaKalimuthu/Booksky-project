//selecting popup ,overlay,button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";

})
//select cancel button
var cancelpopup=document.getElementById("cancelpopup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none";
    popupbox.style.display="none";
})
//select container,add-book,book tittle,book description
var container=document.querySelector(".container")
var addbook=document.getElementById("addbook")
var booktitleinput=document.getElementById("booktitle")
var bookauthorinput=document.getElementById("bookauthor")
var bookdescriptioninput = document.getElementById("bookdescription");


addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML = `<h2>${booktitle.value}</h2>
            <h5>${bookauthor.value}</h5>
            <p>${bookdescriptioninput.value}</p>
            <button onclick="deletebook(event)">delete</button>`

    container.append(div)
    popupoverlay.style.display="none";
    popupbox.style.display="none";

})

function deletebook(event){
    event.target.parentElement.remove()
}