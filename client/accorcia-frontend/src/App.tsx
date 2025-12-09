import './App.css'
import CopyUrl from './components/CopyUrl'
import UrlInput from './components/UrlInput'
import GenerateRandomUserId from './hooks/useRandomUserId'
import useShortenUrl from './hooks/useShorturl'
import { useState } from 'react'

function App() {
    const [longUrl, setLongUrl] = useState("")
    const requestObj = {
        longUrl,
        userId: "e0dba740-fc4b-4977-872c-d360239e6b10"
    }
    const shortenUrl = useShortenUrl(requestObj)
    const random = GenerateRandomUserId()
    console.log(shortenUrl)
    console.log(random)
    return (
        <>
            <div className='main-card'>
                <div className='header'>
                    <h1 className='heading'>Accorcia </h1>
                    <p className='heading-text'> Transform your lengthy URLs into sleek, shareable links in seconds</p>
                </div>

                <UrlInput onShorten={setLongUrl} />
                <CopyUrl />
            </div>
        </>
    )
}

export default App
