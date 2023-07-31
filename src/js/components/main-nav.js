/**
 * Главная навигация
 */

const nav = () => {
  const header = document.querySelector('.main-header')
  const items = document.querySelectorAll('.main-nav__title')
  let itemsShow = localStorage.getItem('menuItemsShow') || [] // открытые пункты меню

  let touchstartX = 0
  let touchendX = 0

  // При нажатии на пункт меню
  const onToggleMenu = (i, evt) => {
    const parent = evt.currentTarget.parentElement // Главный пункт меню li main-nav__toggle
    const toggleButton = evt.currentTarget.querySelector('.main-nav__toggle')

    // Загружаем открытые пункты меню
    itemsShow = JSON.parse(localStorage.getItem('menuItemsShow')) || []

    if (parent.classList.contains('main-nav__item--close')) {
      // Открываем пункт меню
      parent.classList.remove('main-nav__item--close')
      itemsShow.push(i)
      toggleButton.setAttribute('aria-expanded', 'true')
    } else {
      // Закрываем пункт меню
      parent.classList.add('main-nav__item--close')
      itemsShow = itemsShow.filter(item => item !== i)
      toggleButton.setAttribute('aria-expanded', 'false')
    }

    // Сохраняем открытые пункты меню
    localStorage.setItem('menuItemsShow', JSON.stringify(itemsShow))
  }

  // Воспроизводим открытые пункты меню
  const showMenu = (item, i) => {
    itemsShow = JSON.parse(localStorage.getItem('menuItemsShow')) || []

    itemsShow.forEach(itemShow => {
      if (itemShow === i) {
        item.parentElement.classList.remove('main-nav__item--close')
      }
    })
  }

  // Каждый пункт меню
  items.forEach((item, i) => {
    showMenu(item, i)
    item.addEventListener('click', onToggleMenu.bind(null, i))
  })

  const checkDirection = () => {
    if (touchendX < touchstartX) header.classList.remove('main-header--show')
    if (touchstartX < 30 && touchendX > touchstartX) {
      header.classList.add('main-header--show')
    }
  }

  document.addEventListener('touchstart', evt => {
    touchstartX = evt.changedTouches[0].clientX
  })

  document.addEventListener('touchend', evt => {
    touchendX = evt.changedTouches[0].clientX
    checkDirection()
  })
}

export default nav
