export default class Page {
  open (path = '') {
    browser.url(`https://adriano.com.ua/${path}`)
  }

  isVisible (el) {
    return browser.isVisible(el.selector)
  }
}
