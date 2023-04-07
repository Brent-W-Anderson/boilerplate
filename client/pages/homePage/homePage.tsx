import React, { useState } from 'react'
import loadable from '@loadable/component'

const LoadingTest = loadable(
    () =>
        import( 'p-min-delay' ).then( ( pMinDelay ) =>
            pMinDelay.default( import( '../../components/test/loading' ), 3000 )
        ),
    {
        fallback: <h1 className="loading">Loading...</h1>,
    }
)

const HomePage: React.FC = () => {
    const [ showTest, setShowTest ] = useState( false )

    return (
        <div className="app">
            <h1>My SSR App</h1>
            <button onClick={ () => setShowTest( !showTest ) }>Loading Test</button>
            { showTest ? <LoadingTest /> : null }
        </div>
    )
}

export default HomePage
