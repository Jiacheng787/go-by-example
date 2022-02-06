package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"runtime"
)

func heavyTask() {
	for i := 0; i < 1000000; i++ {
		runtime.Gosched()
	}
}

type ServerResponse struct {
	code int
	message string
	data map[string]string
}

func main() {
	//runtime.GOMAXPROCS(1)
	//currentTime := time.Now().UnixNano()
	//go heavyTask()
	//heavyTask()
	//currentTime = time.Now().UnixNano() - currentTime
	r := gin.Default()
	v1 := r.Group("/v1")
	{
		v1.GET("/", func(c *gin.Context) {
			log.Println("===response")
			c.JSON(http.StatusOK, gin.H{
				"message": "hello world",
			})
		})
	}
	err := r.Run(":3000")
	if err != nil {
		fmt.Println(err)
		return
	}
	//currentTime := time.Now().Format("2006-01-02 15:04:05")
	//fmt.Println("===", currentTime)
}
