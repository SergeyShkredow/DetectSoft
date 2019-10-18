import Dashboard from '../pages/test/dashboard.page'
import Registration from '../pages/test/registration.page'
import Connect from '../../utils'
import {createTestEmail, generateUser} from '../../utils'

describe('registration', () => {
    before(() => {
        browser.windowHandleFullscreen()
    })

    it('Success registration with generation password', () => {
        let password = generatePass()
        let login = createTestEmail()
        Dashboard.logo.waitForVisible()
        Dashboard.btnRegistration.click()
        Registration.createUser(login, password)
        addUserTable(login, password)
    })

})