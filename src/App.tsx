import React from 'react'
// import HomePage from './pages/home'

const HelloWorld: React.FC = () => {
    return <h1>Hello, Server-Side Rendered React App!</h1>
}

const HomePage: React.FC = () => {
    return (
        <div id="HomePage">
            <HelloWorld />
        </div>
    )
}

const App: React.FC = () => {
    return (
        <div id="App">
            <HomePage />
        </div>
    )
}

export default App
