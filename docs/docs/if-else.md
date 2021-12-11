---
sidebar_position: 6
---

# If/Else

`if` 和 `else` 分支在 Go 中是非常简单直接的。

```go
package main

import "fmt"

func main() {
	// 这是基本示例
	if 7%2 == 0 {
		fmt.Println("7 is even")
	} else {
		fmt.Println("7 is odd")
	}

	// 只有 `if` 声明，没有 `else`
	if 8%4 == 0 {
		fmt.Println("8 is divisible by 4")
	}

	// 条件前面可以加一个声明
	// 在这里声明的变量，可以在所有分支中访问到
	if num := 9; num < 0 {
		fmt.Println(num, "is negative")
	} else if num < 10 {
		fmt.Println(num, "has 1 digit")
	} else {
		fmt.Println(num, "has multiple digits")
	}
}
```

:::tip

在 `if` 判断内部声明的变量，外部无法访问，类似 JS 中的块级作用域

:::

注意条件周围不需要圆括号，但是需要大括号。

在 Go 中没有提供三元运算符，因此即使是很简单的条件，也需要用完整的 `if` 声明。