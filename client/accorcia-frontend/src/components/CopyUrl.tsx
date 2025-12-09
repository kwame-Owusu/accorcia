import "./CopyUrl.css"
import "../App.css"
import copyIcon from "../assets/copy-icon.png"

interface props {
    shortUrl: string
}
const CopyUrl = ({ shortUrl }: props) => {
    const handleCopy = async () => {
        await navigator.clipboard.writeText(shortUrl)
    }

    return (
        <div className="copy-container">
            <div className="text">
                <p>Your shortened URL is ready</p>
            </div>

            <div className="copy-section">
                <input
                    type="text"
                    id="copy-input"
                    value={shortUrl}
                />
                <button className="copy-btn" onClick={handleCopy}>
                    <img src={copyIcon} alt="copy icon" className="copy-icon" />
                    Copy
                </button>
            </div>

        </div>
    )
}

export default CopyUrl 
