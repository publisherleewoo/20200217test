import { createStore } from 'redux'
import Login from '../reducer/Login'

let loginStore = createStore(Login,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default loginStore