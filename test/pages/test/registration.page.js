import Page from './page'

class RegistrationPage extends Page {
    get header () { return browser.element('h1=Регистрация') }
    get password () { return browser.element('#password') }
    get passwordConfirm () { return browser.element('#password_conf') }
    get userAgreement () { return browser.element('#rules_agree_id') }
    get secretAnswer () { return browser.element('#secret_a') }
}
export default new RegistrationPage()