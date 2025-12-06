package store

import (
	"reflect"
	"testing"
)

var testStorageService = &StorageService{}

func init() {
	testStorageService = InitializeStore()
}

func TestStoreInit(t *testing.T) {
	assertTrue(t, testStorageService)
}
func TestInsertionAndRetrieval(t *testing.T) {
	initialLink := "https://www.guru3d.com/news-story/spotted-ryzen-threadripper-pro-3995wx-processor-with-8-channel-ddr4,2.html"
	userUUId := "e0dba740-fc4b-4977-872c-d360239e6b1a"
	shortURL := "Jsz4k57oAX"

	// Persist data mapping
	SaveUrlMapping(shortURL, initialLink, userUUId)

	// Retrieve initial URL
	retrievedUrl := RetrieveInitialUrl(shortURL)

	reflect.DeepEqual(initialLink, retrievedUrl)
}

func assertTrue(t *testing.T, ss *StorageService) bool {
	t.Helper()
	ssTest := &StorageService{}
	if ssTest == ss {
		return true // our storage service is nil
	}
	return false
}
