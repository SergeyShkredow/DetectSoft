export default class Page {
  open (path = '') {
    browser.url(`https://mail.bigmir.net/${path}`)
  }

  isVisible (el) {
    return browser.isVisible(el.selector)
  }
}
