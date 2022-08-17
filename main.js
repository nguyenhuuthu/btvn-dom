let div = document.getElementById("container1");
let btn = document.getElementById("btn-click");
// let div1 =document.getElementById("container2"); //b3
// let temp ="";    //b3
// let valueDiv = div.innerText; //b3
// let valueDiv1 = div1.innerText;  //b3

// div.style.fontSize = '16px'         //bai4
// let valueDiv = parseInt(div.style.fontSize,10);   // bai 4

btn.onclick = function() {

//bai 1
// if(div.style.display == "none") {
//     div.style.display ="none";
// }else {
//     div.style.display = "block";
// }


//bai 2
let r =Math.floor(Math.random() * 256);
let g =Math.floor(Math.random() * 256);
let b =Math.floor(Math.random() * 256);
let color =`rgb(${r}, ${g}, ${b})`
div.style.background =color;

// bai 3...
// temp = valueDiv;
// valueDiv = valueDiv1;
// valueDiv1 = temp;
// div.innerHTML = valueDiv;
// div1.innerHTML = valueDiv1;


// bai4
// div.style.fontSize = (valueDiv+1)+'px'
//     valueDiv = parseInt(div.style.fontSize,10)
};


// bai 2

