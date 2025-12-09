import { useEffect, useState } from "react"

const url = "http://localhost:9808/short-url"

interface shortURlProps {
    longUrl: string
    userId: string
}

const useShortenUrl = ({ longUrl, userId }: shortURlProps) => {
    const [shortUrl, setShortUrl] = useState("")

    useEffect(() => {
        if (!longUrl || !userId) return

        const shortenUrl = async () => {
            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        long_url: longUrl,
                        user_id: userId,
                    }),
                })

                if (!response.ok) {
                    throw new Error("Failed to shorten URL")
                }

                const data = await response.json()
                setShortUrl(data.short_url)
            } catch (error) {
                console.error(error)
            }
        }

        shortenUrl()
    }, [longUrl, userId])

    return shortUrl
}

export default useShortenUrl
