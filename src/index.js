import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import Header from './components/Header'
import Meme from './components/Meme'

const App = () => {
    return (
        <div>
            <Header />
            <Meme />
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);