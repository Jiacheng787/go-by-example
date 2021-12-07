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