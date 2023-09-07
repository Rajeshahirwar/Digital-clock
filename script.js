let hours = document.getElementById("hrs");
let minut = document.getElementById("min");
let second = document.getElementById("sec");

setInterval(()=>{

    let currenttime = new Date();

    hours.innerHTML = (currenttime.getHours()<10?"0":"")+currenttime.getHours();
    minut.innerHTML =(currenttime.getMinutes()<10?"0":"")+currenttime.getMinutes();
    second.innerHTML = (currenttime.getSeconds()<10?"0":"")+currenttime.getSeconds();
},1000)
