import React from 'react'
import loadable from '@loadable/component'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
const HomePage = loadable( () => import( './homePage/homePage' ) )
const AboutPage = loadable( () => import( './aboutPage/aboutPage' ) )

// warning with useLayoutEffect
React.useLayoutEffect = React.useEffect

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={ <HomePage /> } />
                <Route path="/about" element={ <AboutPage /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
