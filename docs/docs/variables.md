---
sidebar_position: 3
---

# Variables

在 Go 中，变量被显式声明并被编译器使用，例如检查函数调用的类型正确性。

```go
package main

import "fmt"

func main() {
	// 声明一个或多个变量
	var a = "initial"
	fmt.Println(a)

	// 同时声明多个变量
	var b, c int = 1, 2
	fmt.Println(b, c)

	// Go 会根据初始值自动推断类型
	var d = true
	fmt.Println(d)

	// 没有相应初始化声明的变量为零值
	// 例如 `int` 的零值为 `0`
	var e int
	fmt.Println(e)

	// 语法 `:=` 是声明和初始化变量的简写
	// 例如下面的代码相当于 `var f string = "apple"`
	f := "apple"
	fmt.Println(f)
}
```