import './App.css'
import UrlInput from './components/UrlInput'

function App() {

    return (
        <>
            <div className='main-card'>
                <div className='header'>
                    <h1 className='heading'>Accorcia </h1>
                    <p className='heading-text'> Transform your lengthy URLs into sleek, shareable links in seconds</p>
                </div>

                <UrlInput />
            </div>
        </>
    )
}

export default App
