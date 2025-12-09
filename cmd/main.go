package main

import (
	"fmt"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/kwame-Owusu/accorcia/internal/handlers"
	"github.com/kwame-Owusu/accorcia/internal/store"
)

func main() {
	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hey Accorcia, lets shorten some urls !",
		})
	})

	r.POST("/short-url", func(c *gin.Context) {
		handlers.CreateShortUrl(c)
	})

	r.GET("/:short-url", func(c *gin.Context) {
		handlers.HandleShortUrlRedirect(c)
	})

	store.InitializeStore()

	err := r.Run(":9808")
	if err != nil {
		panic(fmt.Sprintf("Failed to start the web server - Error: %v", err))
	}
}
