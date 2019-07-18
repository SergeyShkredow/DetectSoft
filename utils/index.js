import rp from 'request-promise'
import {assert} from 'chai'

export const waitFilter = (el) => {
    const beforeFilter = $$(el).length
    // console.log('beforeFilter: ', beforeFilter)
    return browser.waitUntil(() => {
        // console.log('$$(el).length: ', $$(el).length)
        return beforeFilter > $$(el).length
    }, 20000)
}

export const getNewTasks = (newTask) => {
    const getTask = {
        uri: `https://api.test.com/v1/itemID`,
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        },
        json: true
    };
    rp(getTask)
        .then(function (repos) {
            console.log('repos', repos)
            assert.include(repos, { content: newTask });
        })
        .catch(function (err) {
            console.log(err)
        });
}

export default {
    generateTask
}