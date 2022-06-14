function tabnav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
tabnav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  if (accordionList.length) {
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');

    function activeAccordion() {
      // accordionList.forEach((item) => {
      //   item.nextElementSibling.classList.remove('ativo');
      // });
      this.classList.toggle('ativo');
      this.nextElementSibling.classList.toggle('ativo');
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}

initAccordion();

function initScrollSuave() {
  const linkInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollSmoth(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const top = section.offsetTop;

    section.scrollIntoView({
      behavior: 'smooth',
      black: 'start',
    });

    // forma alternativa
    // window.scrollTo({
    //   top: top,
    //   behavior: 'smooth',
    // });
  }

  linkInternos.forEach((link) => {
    link.addEventListener('click', scrollSmoth);
  });
}
initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add('ativo');
        }
      });
    }
  }
  animaScroll();

  window.addEventListener('scroll', animaScroll);
}

initAnimacaoScroll();
