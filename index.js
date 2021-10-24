/*window.addEventListener("scroll",function () {
    var hearder = document.querySelector("header");
    hearder.classList.toggle("sticky",window.scrollY>0);
    
})*/
/* side barre */
let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
let list=document.querySelectorAll('.list');
for(let i=0;i<list.length;i++){
    list[i].onclick = function(){
        let j=0;
        while(j < list.length){
            list[j++].className= 'list';
        }
        list[i].className ='list active';
    }
}
/* popu destination */
const popup = document.querySelector('.popup');
const x = document.querySelector('.popup-content h1');

window.addEventListener('load' ,()=>{
    popup.classList.add('showPopup');
    popup.childNodes[1].classList.add('showPopup');
})

x.addEventListener('click',()=>{
    popup.classList.remove('showPopup');
    popup.childNodes[1].classList.remove('showPopup');
})

/* image qui defile */
var myIndex = 0;
        carousel();
        
        function carousel() {
          var i;
          var x = document.getElementsByClassName("mySlides");
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
          }
          myIndex++;
          if (myIndex > x.length) {myIndex = 1}    
          x[myIndex-1].style.display = "block";  
          setTimeout(carousel, 2000); // Change image every 2 seconds
        }

/* popu up inscription / connexion */
function togglepopup(){
    document.getElementById("popup-1").classList.toggle("active");
}