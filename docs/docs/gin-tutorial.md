---
sidebar_position: 4
---

# Gin 教程

Gin 是一个用 Golang 编写的后端框架，API 设计类似 Koa，也有 Context、中间件机制。下面来学习一下 Gin 的用法吧。



## 1) 基本使用

首先在本地初始化一个项目目录：

```bash
$ mkdir gin_example && cd gin_example
# 初始化一个 go.mod
$ go mod init example.com/m
```

安装 Gin：

```bash
$ go get github.com/gin-gonic/gin
```

> 安装之后就可以看到 `go.mod` 里面多了一些东西

如果安装出现请求超时，可以设置镜像源：

```bash
$ go env -w GO111MODULE=on
$ go env -w GOPROXY=https://goproxy.cn,https://goproxy.io,direct
```

创建一个 `src/main.go`，编写内容如下：

```go
package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
    // gin.H 实际上就是 map[string]interface{} 的别名
		c.JSON(200, gin.H{
			"message": "Hello world",
		})
	})
  // 默认监听 :8080 端口
	r.Run()
}
```

执行下面的命令即可启动服务：

```bash
$ go run ./src/main.go
```



## 2) Restful API

Gin 支持各种请求方法：

```go
func main() {
	// 创建一个带有默认中间件的 gin router
	// 默认配置了两个中间件：logger 和 recovery（防止异常崩溃）
	router := gin.Default()

	router.GET("/someGet", getting)
	router.POST("/somePost", posting)
	router.PUT("/somePut", putting)
	router.DELETE("/someDelete", deleting)
	router.PATCH("/somePatch", patching)
	router.HEAD("/someHead", head)
	router.OPTIONS("/someOptions", options)

  // 默认监听 :8080 端口
  // 也可以通过 router.Run(":3000") 手动指定端口
	router.Run()
}
```



## 3) 路径参数解析

使用 `c.Param()` 获取路径参数：

```go
func main() {
	router := gin.Default()

  // 匹配 /user/john
  // 不会匹配 /user/ 或者 /user
	router.GET("/user/:name", func(c *gin.Context) {
		name := c.Param("name")
		c.String(http.StatusOK, "Hello %s", name)
	})

  // 同时匹配 /user/john/ 和 /user/john/send
  // 如果没有其他路由匹配到 /user/john，会重定向到 /user/john
	router.GET("/user/:name/*action", func(c *gin.Context) {
		name := c.Param("name")
		action := c.Param("action")
		message := name + " is " + action
		c.String(http.StatusOK, message)
	})

	// 可以通过 c.FullPath() 获取到当前路由定义
	router.POST("/user/:name/*action", func(c *gin.Context) {
		b := c.FullPath() == "/user/:name/*action" // true
		c.String(http.StatusOK, "%t", b)
	})

	// Exact routes 会在 param routes 之前解析，不管添加的顺序如何
	// 下面的 /user/groups 不会被解析为 /user/:name/...
	router.GET("/user/groups", func(c *gin.Context) {
		c.String(http.StatusOK, "The available groups are [...]")
	})

	router.Run(":8080")
}
```



## 4) Query 参数解析

使用 `c.Query` 获取 Query 参数：

```go
func main() {
	router := gin.Default()

	// 请求地址 /welcome?firstname=Jane&lastname=Doe 会匹配到下面的路由
	router.GET("/welcome", func(c *gin.Context) {
    // 如果 firstname 没传，则使用默认值
		firstname := c.DefaultQuery("firstname", "Guest")
    // c.Query("lastname") 是 c.Request.URL.Query().Get("lastname") 的别名
		lastname := c.Query("lastname")

		c.String(http.StatusOK, "Hello %s %s", firstname, lastname)
	})
	router.Run(":8080")
}
```



## 5) Multipart/Urlencoded 表单解析

`multipart/form-data` 对应 `FormData` 提交，`application/x-www-form-urlencoded` 对应 HTML 表单提交。使用 `c.PostForm()` 接受表单数据：

```go
func main() {
	router := gin.Default()

  // 提交内容：name=manu&message=this_is_great
	router.POST("/form_post", func(c *gin.Context) {
		message := c.PostForm("message")
		nick := c.DefaultPostForm("nick", "anonymous")

		c.JSON(200, gin.H{
			"status":  "posted",
			"message": message,
			"nick":    nick,
		})
	})
	router.Run(":8080")
}
```



## 6) 文件上传

使用 `c.FormFile()` 接受上传文件：

```go
func main() {
	router := gin.Default()
	// Set a lower memory limit for multipart forms (default is 32 MiB)
	router.MaxMultipartMemory = 8 << 20  // 8 MiB
	router.POST("/upload", func(c *gin.Context) {
		// Single file
		file, _ := c.FormFile("Filename")
		log.Println(file.Filename)

		// Upload the file to specific dst.
		c.SaveUploadedFile(file, dst)

		c.String(http.StatusOK, fmt.Sprintf("'%s' uploaded!", file.Filename))
	})
	router.Run(":8080")
}
```



## 7) 分组路由

个人觉得这个功能在模块划分、路由鉴权等场景非常有用：

```go
func main() {
	router := gin.Default()

	// Simple group: v1
	v1 := router.Group("/v1")
	{
		v1.POST("/login", loginEndpoint)
		v1.POST("/submit", submitEndpoint)
		v1.POST("/read", readEndpoint)
	}

	// Simple group: v2
	v2 := router.Group("/v2")
	{
		v2.POST("/login", loginEndpoint)
		v2.POST("/submit", submitEndpoint)
		v2.POST("/read", readEndpoint)
	}

	router.Run(":8080")
}
```



## 8) 创建没有中间件的 Gin 实例

```go
func main() {
  // 创建一个没有默认中间件的路由
	r := gin.New()

	// 全局中间件
	r.Use(gin.Logger())
	r.Use(gin.Recovery())

	// 针对路由的中间件，可以添加任意数量
	r.GET("/benchmark", MyBenchLogger(), benchEndpoint)

	// 鉴权分组
	// authorized := r.Group("/", AuthRequired())
	authorized := r.Group("/")
  // 针对 "authorized" 分组启用 AuthRequired() 中间件
	authorized.Use(AuthRequired())
	{
		authorized.POST("/login", loginEndpoint)
		authorized.POST("/submit", submitEndpoint)
		authorized.POST("/read", readEndpoint)

		// 嵌套分组
		testing := authorized.Group("testing")
		testing.GET("/analytics", analyticsEndpoint)
	}

	// Listen and serve on 0.0.0.0:8080
	r.Run(":8080")
}
```



## 9) 模型参数校验

```go
package main

import (
	"log"
	"time"

	"github.com/gin-gonic/gin"
)

type Person struct {
	Name       string    `form:"name"`
	Address    string    `form:"address"`
	Birthday   time.Time `form:"birthday" time_format:"2006-01-02" time_utc:"1"`
	CreateTime time.Time `form:"createTime" time_format:"unixNano"`
	UnixTime   time.Time `form:"unixTime" time_format:"unix"`
}

func main() {
	route := gin.Default()
	route.GET("/testing", startPage)
	route.Run(":8085")
}

func startPage(c *gin.Context) {
	var person Person
  if c.ShouldBind(&person) == nil {
    log.Println(person.Name)
    log.Println(person.Address)
    log.Println(person.Birthday)
    log.Println(person.CreateTime)
    log.Println(person.UnixTime)
  }

	c.String(200, "Success")
}
```



## 10) 静态资源服务器

```go
func main() {
	router := gin.Default()
	router.Static("/assets", "./assets")
	router.StaticFS("/more_static", http.Dir("my_file_system"))
	router.StaticFile("/favicon.ico", "./resources/favicon.ico")

	// Listen and serve on 0.0.0.0:8080
	router.Run(":8080")
}
```



## 11) 响应文件内容

例如文件下载等场景：

```go
func main() {
	router := gin.Default()

	router.GET("/local/file", func(c *gin.Context) {
		c.File("local/file.go")
	})

	var fs http.FileSystem = // ...
	router.GET("/fs/file", func(c *gin.Context) {
		c.FileFromFS("fs/file.go", fs)
	})
}
```



## 12) HTML 模板渲染

```go
func main() {
	router := gin.Default()
	router.LoadHTMLGlob("templates/*")
	//router.LoadHTMLFiles("templates/template1.html", "templates/template2.html")
	router.GET("/index", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.tmpl", gin.H{
			"title": "Main website",
		})
	})
	router.Run(":8080")
}
```



## 13) 重定向

301 重定向：

```go
r.GET("/test", func(c *gin.Context) {
	c.Redirect(http.StatusMovedPermanently, "http://www.google.com/")
})
```

302 重定向：

```go
r.POST("/test", func(c *gin.Context) {
	c.Redirect(http.StatusFound, "/foo")
})
```

路由重定向，使用 `HandleContext`：

```go
r.GET("/test", func(c *gin.Context) {
    c.Request.URL.Path = "/test2"
    r.HandleContext(c)
})
r.GET("/test2", func(c *gin.Context) {
    c.JSON(200, gin.H{"hello": "world"})
})
```



## 14) 中间件内部使用协程

使用协程的时候，不能在内部使用原始 Context 对象，应该创建一份只读拷贝：

```go
func main() {
	r := gin.Default()

	r.GET("/long_async", func(c *gin.Context) {
    // 创建 Context 的拷贝
		cCp := c.Copy()
		go func() {
      // 使用 time.Sleep() 模拟长任务
			time.Sleep(5 * time.Second)

			// 这里的 cCp 是 Context 的拷贝
			log.Println("Done! in path " + cCp.Request.URL.Path)
		}()
	})

	r.GET("/long_sync", func(c *gin.Context) {
		// 使用 time.Sleep() 模拟长任务
		time.Sleep(5 * time.Second)

		// 不使用协程则不需要创建拷贝
		log.Println("Done! in path " + c.Request.URL.Path)
	})

	// Listen and serve on 0.0.0.0:8080
	r.Run(":8080")
}
```



## 15) 自定义 HTTP 配置

```go
func main() {
	router := gin.Default()

	s := &http.Server{
		Addr:           ":8080",
		Handler:        router,
		ReadTimeout:    10 * time.Second,
		WriteTimeout:   10 * time.Second,
		MaxHeaderBytes: 1 << 20,
	}
	s.ListenAndServe()
}
```



## 16) 优雅退出和重启



## 参考

https://github.com/gin-gonic/gin
