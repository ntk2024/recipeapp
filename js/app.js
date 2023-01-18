const getElement = (selector) => {
    const element = document.querySelector(selector)

    if (element) return element
    throw new Error(`Please check "${selector}" selector, no such element exist`)
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
    links.classList.toggle('show-links')
})

const date = getElement('.date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear