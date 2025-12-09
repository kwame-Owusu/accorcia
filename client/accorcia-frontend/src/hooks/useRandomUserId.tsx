const chars = "abcdefghijklmnopqrstuvwxyz0123456789-"

const GenerateRandomUserId = () => {
    let result = "";
    for (let i = 0; i < 16; i++) {
        const randIndex = Math.floor(Math.random() * chars.length)
        const char = chars[randIndex]
        result += char
    }
    return result
}


export default GenerateRandomUserId

