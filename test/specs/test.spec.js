import Dashboard from '../pages/test/dashboard.page'
import Order from '../pages/test/order.page'
import {getNewTasks} from '../../utils'

describe('Order', () => {
    before(() => {
        browser.windowHandleFullscreen()
    })
    beforeEach(()=>{
        // Go to user dashboard
        Dashboard.logo.waitForVisible()
    })
    it('Load page', () => {
        Dashboard.logo.waitForVisible()
    })
    it('Choose product', () => {
        Dashboard.chooseProduct()
    })
    it('Confirm order', () => {
        Dashboard.chooseProduct()
        Order.confirmOrder()
        getNewTasks()
    })
})