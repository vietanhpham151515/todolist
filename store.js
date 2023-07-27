import {createStore} from './core.js'
import reducer from './reduce.js'
import withLogger from './loger.js'
const { attach , connect , dispatch} = createStore(withLogger(reducer))

window.dispatch = dispatch

export {
    attach , 
    connect 
}