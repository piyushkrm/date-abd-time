let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    let a = new Date();
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    document.getElementById('time').innerHTML = time + "<br>" + date;
    document.getElementById('time').style.color = "red";
    document.getElementById('time').style.fontWeight = 600;
    document.getElementById('curent').style.color = "green";
    document.getElementById('curent').style.fontWeight = 600;
    document.getElementById('body').style.backgroundColor = "black";
    document.getElementById('container').style.backgroundColor = "lightpink";

}, 1000);
