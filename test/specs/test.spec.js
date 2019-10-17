import Dashboard from '../pages/test/dashboard.page'
import Order from '../pages/test/registration.page'
import {getNewTasks} from '../../utils'

describe('registration', () => {
    before(() => {
        browser.windowHandleFullscreen()
    })

    it('Success registration with generation password', () => {
        Dashboard.logo.waitForVisible()
    })

})