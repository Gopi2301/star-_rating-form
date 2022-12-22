const allStars =document.querySelectorAll('.stars');

function starfun(e){
     document.querySelector('.star').setAttribute('stars','rate_star');
}
allStars.forEach((star, i)=>{
     star.onclick = function(){
          let current_star = i+1;
          console.log(current_star)
     allStars.forEach((star,j)=>{
          if (current_star>= j+1){
          star.style.color="gold";
     }
     else{
          star.style.color= "black";
     }
     }
     )
}
})

const pur_circle= document.querySelectorAll('.circle_pur');

pur_circle.forEach((circle, i)=>{
     circle.onclick = function(){
          let current_circle =i+1;
          pur_circle.forEach((circle,j)=>{
               if (current_circle>=j+1){
                    circle.style.color="blue"
               } else{
                    circle.style.color="black"
               }
          })  
     }
})