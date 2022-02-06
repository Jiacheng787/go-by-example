package main

import "fmt"

func main() {
	d, err := divide(0.5, 0.3)
	// Go 中典型的异常处理逻辑
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(d)
}

// 声明两个返回值，第二个是错误对象
func divide(a, b float64) (float64, error) {
	if b == 0.0 {
		// 当 b 为 0.0，返回错误对象
		return 0.0, fmt.Errorf("cannot divide by zero")
	}
	// 当 b 不为 0.0，正常返回结果，错误对象传 nil
	return a / b, nil
}