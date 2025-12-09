import "./UrlInput.css"
import "../App.css"
import linkIcon from "../assets/link-icon.png"

const UrlInput = () => {
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
                />
                <button className="shorten-btn">Shorten</button>

            </div>
        </div>
    )
}

export default UrlInput
