import './App.css'
import UrlInput from './components/UrlInput'
import useShortenUrl from './hooks/useShorturl'

function App() {
    const obj = { longUrl: "https://www.kwameowusu.dev/", userId: "e0dba740-fc4b-4977-872c-d360239e6b10" }
    const shortenUrl = useShortenUrl(obj)
    console.log(shortenUrl)
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
