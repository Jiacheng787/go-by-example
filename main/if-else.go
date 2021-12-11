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