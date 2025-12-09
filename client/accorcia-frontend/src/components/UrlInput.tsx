import "./UrlInput.css"
import "../App.css"
import linkIcon from "../assets/link-icon.png"
import { useState } from "react"

interface props {
    onShorten: (inputValue: string) => void
}

const validiateLink = (link: string): boolean => {
    const regex = new RegExp("^(http|https)://", "i")
    return regex.test(link)
}

const UrlInput = ({ onShorten }: props) => {
    const [inputValue, setInputValue] = useState("")
    const handleClick = () => {
        if (!inputValue) return
        if (!validiateLink(inputValue)) {
            console.log("invalid input, must be a valid url link: ", inputValue)
            return
        }
        onShorten(inputValue)
    }
    return (
        <div className="container">
            <div className="card-text">
                <img className="link-icon" src={linkIcon} alt="link icon" />
                <h3>Shorten your URL</h3>
            </div>

            <div className="input-section">
                <input
                    type="text"
                    id="url-input"
                    placeholder="https://your-very-long-url.com"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="shorten-btn" onClick={handleClick}>Shorten</button>

            </div>
        </div>
    )
}

export default UrlInput
