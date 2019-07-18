import Page from './page'

class OrderPage extends Page {
    get headerOrder () { return browser.element('h1=Ваш заказ') }
    get name () { return browser.element('#cart_form_name') }
    get phone () { return browser.element('#cart_form_phone_number') }
    get adress () { return browser.element('#cart_form_address') }
    get btnOrder () { return browser.element('.order_button') }

    confirmOrder() {
        this.orderLink.click().
        this.headerOrder.waitForVisible()
        this.name.setValue("TEST")
        this.phone.setValue("11223344")
        this.adress.setValue("test apartments")
        this.btnOrder.click()
    }
}
export default new OrderPage()