---
sidebar_position: 1
---

# Hello World

这里我们会打印一个经典的 "hello world" 信息。首先创建 `hello-world.go` 文件，编写代码如下：

```go
package main

import "fmt"

func main() {
  fmt.Println("hello world")
}
```
:::tip

这里说明下，`main` 函数是整个应用程序的入口

:::

为了运行这段代码，我们可以使用下面的命令：

```bash
$ go run hello-world.go
# hello world
```

有时我们想把源码编译为二进制文件，可以使用下面的命令：

```bash
$ go build hello-world.go
$ ls
# hello-world hello-world.go
```

然后我们可以直接运行这个二进制文件：

```bash
$ ./hello-world
# hello world
```

前端同学都知道，JS 命令行打印输出主要就是 `console.log` 这个方法，但是在 Golang 中有三个方法：

```go
fmt.Print()
fmt.Println()
fmt.Printf()
```

其中 `fmt.Print()` 在一行内打印，`fmt.Println()` 则会在每次打印的时候拼接 `\n` 进行换行，`fmt.Printf()` 则可根据一个模板进行格式化：

```go
func main() {
  name, age := "Garfield", 23

  fmt.Print("Hello ", name)
  fmt.Print("your age ", age)
  // Hello Garfield your age 23

  fmt.Println("Hello ", name)
  fmt.Println("your age ", age)
  // Hello Garfield
  // your age 23

  fmt.Printf("Hello %s, your age %d", name, age)
  // Hello Garfield, your age 23
}
```

:::tip

JS 中的 `console.log` 用法类似 `fmt.Println()` 和 `fmt.Printf()`

:::