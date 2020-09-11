import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyContext from "./MyContext";
import store from "./redux/redux-store";


export let rerenderDOM = () => {
    ReactDOM.render(
        <React.StrictMode>
            <MyContext.Provider value={store}>
                <App/>
            </MyContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
rerenderDOM()

store.subscribe(() => {
    let state = store.getState()
    rerenderDOM(state)
    rerenderDOM()
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
