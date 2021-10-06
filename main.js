const nav = document.querySelector('#header nav')
const toggles = document.querySelectorAll('nav .toggle')

for (const toggle of toggles) {
  toggle.addEventListener('click', function () {
    nav.classList.toggle('show') /* adiciona caso não tenha a classe e retira caso tenha */

  })
}

const links = document.querySelectorAll ('nav ul li a ')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da pg quando der scroll */
const header = document.querySelector("#header")
const navHeight= header.offsetHeight /*offsetHeight = deslocamento da altura */

function changeHeaderWhenScroll(){
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* review em carrossel / slider swiper */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
      767: {
        slidesPerView: 2,
        setWrapperSize: true
      }
  }
});

/* fazer elementos aparecenrem aos poucos enquanto rola a pagina */
const scrollReveal = ScrollReveal ({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #legend .image, #legend .text,
  #licores header, #licores .card
  #reviews header, #reviews .swiper,
  #contact .text, #contact .links,
  foote .brand, footer .social
  `, 
  {interval: 100})

const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
    if (window.scrollY >= 560) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  }


/* mostrar a seção que estiver ativa no momento da rolagem*/
const sections = document.querySelectorAll('main section[id]') /* seleciona todas as seções que contenham um ID dentro do main*/
function activateMenuInCurrentSection () {
  const checkpoint = window.pageYOffset + (window.innerHeight/2) /* dentro da janela verifica o deslocamento em Y e soma a metade da altura) */
  for (const section of sections) {
    const sectionTop = section.offsetTop /* pega o topo da seção */
    const sectionHeight = section.offsetHeight /*pega a altura da seção */ 
    const sectionId = section.getAttribute('id') /* pega o Id da seção */

    const checkpointStart = checkpoint >= sectionTop /*checkpoint maior que o topo da seção */
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight /*topo + altura são menores que o checkpoint */

    if (checkpointStart && checkpointEnd) { 
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}  


/* Ao rolar a pagina*/
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuInCurrentSection()
})