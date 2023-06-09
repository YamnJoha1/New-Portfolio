const allSections = document.querySelector('.main-content');
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');

function PageTransitions(){
  for(let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function(){
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += ' active-btn';
    });
  };

  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      sectBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
      });
      e.target.classList.add('active-btn');

      sections.forEach((section) => {
        section.classList.remove('active');
      });

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });

};



let spans = document.querySelectorAll(".progress span");

spans.forEach((span) => {
  span.style.width = span.dataset.prog;
});

const toggle = document.querySelector(".toggle-theme input");
toggle.addEventListener('click', () =>{
  let element = document.body;
  element.classList.toggle('light-mode');
});


PageTransitions();