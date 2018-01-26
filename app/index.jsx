import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
import configureStore from './store/configureStore'

import './static/css/common.less'
import './static/css/font.css'

const store = configureStore()

import RouteMap from './router/routeMap'
// import { testFetch } from './fetch/test.js'
// testFetch();

render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
)
// import fn from './redux-demo.js'
// fn();

// class Hello extends React.Component {
//     render() {
//         return (
//             <p>hello world</p>
//         )
//     }
// }

// render(
//     <Hello />,
//     document.getElementById('root')
// )