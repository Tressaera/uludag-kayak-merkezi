const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  });  

  document.addEventListener('scroll',e=>{
    const header = document.querySelector("header");
    if(window.scrollY>100){
      header.classList.add("scroll");
    }
    else{
      header.classList.remove("scroll");
    }
  })