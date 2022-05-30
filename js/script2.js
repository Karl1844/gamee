window.onload = function(){
    if(localStorage.getItem("flag")){
document.getElementById("firstPoint").innerHTML=localStorage.getItem("startPoint");
document.getElementById("secondPoint").innerHTML=localStorage.getItem("finishPoint");
document.getElementById("distance").innerHTML=localStorage.getItem("distance");
document.getElementById("cost").innerHTML=localStorage.getItem("cost");
    }
    else{
        document.getElementsByClassName("page").item(0).innerHTML+="Ошибочка";
        
    }
}