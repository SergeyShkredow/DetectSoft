import Page from './page'
import {waitFilter} from "../../../utils";

class DashboardPage extends Page {
  get logo () { return browser.element('.logo') }
  get meatList () { return browser.element('a=С мясом') }
  get mushroomsList () { return browser.element('a=С грибами') }
  get vegaList () { return browser.element('a=Вегетарианские') }
  get sharpList () { return browser.element('a=Острые') }
  get customList () { return browser.element('a=Собери сам') }
  get allPizza () { return browser.element('.pizza_block') }
  get orderLink () { return browser.element('a=Оформить заказ') }

  get meatItem () { return browser.element('//div[text()="Мясная"]/input') }

  open () {
    super.open('/')
  }

  chooseProduct() {
    this.logo.waitForVisible()
    this.meatList.click()
    waitFilter(this.allPizza.selector)
    this.meatItem.click()
  }
}
export default new DashboardPage()
