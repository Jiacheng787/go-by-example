---
sidebar_position: 4
---

# Constants

Go 支持 character、string、boolean 和数值类型的常量。

```go
package main

import (
	"fmt"
	"math"
)

// 使用 `const` 声明常量
const s string = "constants"

func main() {
	fmt.Println(s)

	// const 可以出现在任何 var 能出现的地方
	const n = 500000000

	// const 表达式可以进行任意精度算数运算
	const d = 3e20 / n
	fmt.Println(d)

	// 可以通过显式类型转换将 float64 转换为 int64
	fmt.Println(int64(d))

	// 可以通过在需要类型的上下文中使用数值进行隐式类型装换，例如变量赋值或函数调用
	// 下面的代码中，math.Sin 的入参类型为 float64，因此 int 被转换为 float64
	fmt.Println(math.Sin(n))
}
```