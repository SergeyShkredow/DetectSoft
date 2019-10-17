import Page from './page'


class DashboardPage extends Page {
  get btnRegistration () { return browser.element('.b-registration-message__button') }
  get btnRegistration () { return browser.element('.b-registration-message__button') }

  open () {
    super.open('/')
  }
}
export default new DashboardPage()
