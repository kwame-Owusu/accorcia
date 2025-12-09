import './App.css'
import CopyUrl from './components/CopyUrl'
import UrlInput from './components/UrlInput'
import GenerateRandomUserId from './hooks/useRandomUserId'
import useShortenUrl from './hooks/useShorturl'
import { useState } from 'react'

function App() {
    const [longUrl, setLongUrl] = useState("")
    const [randomUserId] = useState(() => GenerateRandomUserId())
    const requestObj = {
        longUrl,
        userId: randomUserId
    }
    const shortenUrl = useShortenUrl(requestObj)
    console.log("random user ID: ", randomUserId)
    console.log(shortenUrl)
    return (
        <>
            <div className='main-card'>
                <div className='header'>
                    <h1 className='heading'>Accorcia </h1>
                    <p className='heading-text'> Transform your lengthy URLs into sleek, shareable links in seconds</p>
                </div>

                <UrlInput onShorten={setLongUrl} />
                {shortenUrl && <CopyUrl shortUrl={shortenUrl} />}
            </div>
        </>
    )
}

export default App
