import React from 'react';
import './index.css'
import Home from './components/home'
import { Provider } from 'react-redux';
import store  from './redux/store';


const App = ()=>{
    return(
        <Provider store={store}>
           <Home/>
        </Provider>
    )
}
export default App;