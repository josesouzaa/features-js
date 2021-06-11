// Tab-Nav

function initTabNav() {

  const tabBtn = document.querySelectorAll('[data-btn]')
  const tabContent = document.querySelectorAll('[data-content]')

  const tabNav = {
    clearAllActives() {
      tabBtn.forEach((btn) => { btn.classList.remove('ativo') })
      tabContent.forEach((content) => { content.classList.remove('ativo') })
    },
    getDataBtn(event) {
      return event.target.dataset.btn
    },
    getDataContent(dataBtn) {
      return document.querySelector(`p[data-content="${dataBtn}"]`)
    },
    addActives(btn, content) {
      btn.classList.add('ativo')
      content.classList.add('ativo')
    },
    onTabNav(event) {
      if (event.target.classList.contains('ativo')) {
        tabNav.clearAllActives()
      } else {
        tabNav.clearAllActives()
        tabNav.addActives(event.target, tabNav.getDataContent(tabNav.getDataBtn(event)))
      }
    },
  }

  tabBtn.forEach((btn) => { btn.addEventListener('click', tabNav.onTabNav) })
}

initTabNav()

// Faq

function initFaq() {

  const questions = document.querySelectorAll('[data-question]')
  const answers = document.querySelectorAll('[data-answer]')

  const faq = {
    clearAllActives() {
      questions.forEach((question) => { question.classList.remove('ativo') })
      answers.forEach((answer) => { answer.classList.remove('ativo') })
    },
    nextElement(event) {
      return event.target.nextElementSibling
    },
    addActives(question, answer) {
      question.classList.add('ativo')
      answer.classList.add('ativo')
    },
    onFaq(event) {
      if (event.target.classList.contains('ativo')) {
        faq.clearAllActives()
      } else {
        faq.clearAllActives()
        faq.addActives(event.target, faq.nextElement(event))
      }
    },
  }

  questions.forEach((question) => { question.addEventListener('click', faq.onFaq) })
}

initFaq()

// Scroll Suave

function initScrollSuvave() {

  const btnMenu = document.querySelectorAll('[data-scroll="suave"]')

  const scrollSuave = {
    section: '',
    removeAllActives() {
      btnMenu.forEach((btn) => { btn.classList.remove('ativo') })
    },
    addActive(btn) {
      btn.classList.add('ativo')
    },
    getIdBtn(event) {
      return event.target.getAttribute("href")
    },
    getSection(id) {
      scrollSuave.section = document.querySelector(id).offsetTop
    },
    startScroll() {
      window.scroll({
        top: scrollSuave.section - 30,
        behavior: 'smooth',
      })
    },
    scrollToItem(event) {
      event.preventDefault()
      scrollSuave.removeAllActives()
      scrollSuave.addActive(event.target)
      scrollSuave.getSection(scrollSuave.getIdBtn(event))
      scrollSuave.startScroll()
    },
  }

  btnMenu.forEach(btn => { btn.addEventListener('click', scrollSuave.scrollToItem) })
}

initScrollSuvave()

// Scroll Anime

function initAnimeScroll() {

  const itensAnime = document.querySelectorAll('[data-scroll="anime"]')

  const animeScroll = {
    getWindowTop() {
      return window.pageYOffset + ((window.innerHeight * 3) / 4)
    },
    addClassShow(item) {
      item.classList.add('show')
    },
    removeClassShow(item) {
      item.classList.remove('show')
    },
    showItem() {
      itensAnime.forEach((item) => {
        if (animeScroll.getWindowTop() > item.offsetTop) {
          animeScroll.addClassShow(item)
        } else {
          animeScroll.removeClassShow(item)
        }
      })
    },
  }

  window.addEventListener('scroll', animeScroll.showItem)
}

initAnimeScroll()