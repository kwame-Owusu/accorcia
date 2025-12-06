package store

import (
	"context"
	"fmt"
	"time"

	"github.com/go-redis/redis/v8"
)

// wrapper around raw redis client
type StorageService struct {
	redisClient *redis.Client
}

var (
	storeService = &StorageService{}
	ctx          = context.Background()
)

// Note that in a real world usage, the cache duration shouldn't have
// an expiration time, an LRU policy config should be set where the
// values that are retrieved less often are purged automatically from
// the cache and stored back in RDBMS whenever the cache is full
const CacheDuration = 6 * time.Hour

func InitializeStore() *StorageService {
	NewRedisClient := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "",
		DB:       0,
	})

	pong, err := NewRedisClient.Ping(ctx).Result()
	if err != nil {
		panic(fmt.Sprintf("Error initiating Redis: %v", err))
	}

	fmt.Printf("\nRedis started successfully: pong message: {%s}", pong)
	storeService.redisClient = NewRedisClient
	return storeService
}

/*
We want to be able to save the mapping between the originalUrl
and the generated shortUrl url
*/
func SaveUrlMapping(shortUrl string, originalUrl string, userId string) {
	err := storeService.redisClient.Set(ctx, shortUrl, originalUrl, CacheDuration).Err()
	if err != nil {
		panic(fmt.Sprintf("Failed saving key url | Error: %v - shorUrl: %s - OriginalUrl: %s", err, shortUrl, originalUrl))

	}

}

/*
We should be able to retrieve the initial long URL once the short
is provided. This is when users will be calling the shortlink in the
url, so what we need to do here is to retrieve the long url and
think about redirect.
*/
func RetrieveInitialUrl(shortUrl string) string {
	result, err := storeService.redisClient.Get(ctx, shortUrl).Result()
	if err != nil {
		panic(fmt.Sprintf("Failed RetrieveInitialUrl url | Error: %v - shortUrl: %s", err, shortUrl))
	}
	return result
}
