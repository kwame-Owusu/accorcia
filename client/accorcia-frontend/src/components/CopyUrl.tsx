import "./UrlInput.css"
import "../App.css"
import copyIcon from "../assets/copy-icon.png"

const CopyUrl = () => {
    const handleCopy = () => {
        return "copying...."
    }
    return (
        <div className="container">
            <div className="text">
                <p>Your shortened URL is ready</p>
            </div>

            <div className="copy-section">
                <button className="shorten-btn" onClick={handleCopy}>
                    <img src={copyIcon} alt="copy icon" className="copy-icon" />
                    Copy
                </button>
            </div>

        </div>
    )
}

export default CopyUrl 
