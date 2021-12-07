---
sidebar_position: 2
---

# Values

Go 包含了各种数据类型，例如 strings、integers、floats、booleans。下面给出一些基本示例：

```go
package main

import "fmt"

func main() {
	// 字符串可以进行拼接
	fmt.Println("go" + "lang")

	// 整数和浮点数的运算
	fmt.Println("1+1=", 1 + 1)
	fmt.Println("7.0/3.0=", 7.0 / 3.0)

	// 布尔值的操作
	fmt.Println(true && false)
	fmt.Println(true || false)
	fmt.Println(!true)
}
```