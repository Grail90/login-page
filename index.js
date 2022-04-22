var img = ["images/1.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpg"];


var background = document.getElementById('container')

var num = 0;

function change(){
   num ++;

   if(num >= img.length){

    num = 0; 

   }
   background.style.backgroundImage = `url(${img[num]})`;


}

setInterval(change,3000); 






