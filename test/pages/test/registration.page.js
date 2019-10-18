import Page from './page'

class RegistrationPage extends Page {
    get header () { return browser.element('h1=Регистрация') }
    get login () { return browser.element('#login') }
    get password () { return browser.element('#password') }
    get passwordConfirm () { return browser.element('#password_conf') }
    get userAgreement () { return browser.element('#rules_agree_id') }
    get secretAnswer () { return browser.element('#secret_a') }
}
open () {
    super.open('https://passport.bigmir.net/registration/')
}
createUser (login, password) {
    this.header.waitForVisible()
    this.password.setValue(login)
    this.password.setValue(password)
    this.passwordConfirm.setValue(password)
    this.secretAnswer.setValue('TEST')
    this.userAgreement.click()
}
export default new RegistrationPage()