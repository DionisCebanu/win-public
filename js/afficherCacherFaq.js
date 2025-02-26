const allCross = document.querySelectorAll('.visible-pannel img');

allCross.forEach(Element=>{
  Element.addEventListener('click',function(){
    const height =this.parentNode.parentNode.childNodes[3].scrollHeight;
    const currentChoice = this.parentNode.parentNode.childNodes[3];
    if(this.src.includes('+')){
      this.src='./assets/images/FAQ/Group 201-.png';
      gsap.to(currentChoice,{duration :0.2,opacity:1, height:height + 40,padding:'15px 15px'})
    }
    else if(this.src.includes('-')){
      this.src='./assets/images/FAQ/Group 201+.png';
      gsap.to(currentChoice,{duration :0.2,opacity:0, height:0,padding:'0px 15px'})
    }
    })
})

