package main

import "fmt"

func main() {
	i := 1
	// 最基本的循环，只有一个条件
	for i <= 3 {
		fmt.Println(i)
		i = i + 1
	}

	// 一个经典的 initial/condition/after 的 `for` 循环
	for j := 7; j <= 9; j++ {
		fmt.Println(j)
	}

	// `for` 循环如果没有结束条件，则会一直重复循环
	// 直到使用 `break` 语句跳出循环，或者在函数内部使用 `return`
	for {
		fmt.Println("loop")
		break
	}

	// 可以使用 `continue` 进入循环的下一个迭代
	for n := 0; n <= 5; n++ {
		if n%2 == 0 {
			continue
		}
		fmt.Println(n)
	}
}
