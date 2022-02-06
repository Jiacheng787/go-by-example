---
sidebar_position: 3
---

# 函数

- 基本语法
- 参数
- 返回值
- 匿名函数
- 函数类型（函数作为一等公民）
- 方法（特殊的函数）



## 1) 基本语法

Go 的应用入口如下：

```go
package main

func main() {
  // ...
}
```

> 在 Go 中，如果方法名首字母大写，表明这个方法是公有方法，可以在模块外部访问，如果方法名首字母小写，则表明这个方法是模块的私有方法



## 2) 参数

一个简单示例如下：

```go
func main() {
  // 打印 5 次 hello go
	for i := 0; i < 5; i++ {
		sayMessage("hello go", i)
	}
}

func sayMessage(message string, idx int) {
	fmt.Println(message, idx)
}
```

传递多个相同类型的参数：

```go
func main() {
  sayMessage("hello", "Stacey")
}

// 多个类型相同的参数，在最后声明类型即可
func sayMessage(greeting, name string) {
	fmt.Println(greeting, name)
}
```

传递指针和传递值的区别：

```go
func main() {
	greeting := "hello"
	name := "Stacey"
	sayMessage(greeting, name)
	// 这边 name 并没有修改
	fmt.Println(name) // Stacey
}

func sayMessage(greeting, name string) {
	fmt.Println(greeting, name)
	// 尝试在 sayMessage 中修改 name
	name = "Ted"
	fmt.Println(name) // Ted
}
```

> 这意味着 Go 运行时会在调用函数的时候 copy 参数的值

我们修改一下代码，这次传递指针：

```go
func main() {
	greeting := "hello"
	name := "Stacey"
	sayMessage(&greeting, &name)
	// 传递指针之后，name 被修改了
	fmt.Println(name) // Ted
}

func sayMessage(greeting, name *string) {
	fmt.Println(*greeting, *name)
	// 尝试在 sayMessage 中修改 name
	*name = "Ted"
	fmt.Println(*name) // Ted
}
```

> 为什么要传递指针？主要有两个原因：
>
> 1. 有时候确实需要通过函数修改变量的值，这种情况下只能传递指针；
> 2. 传递指针比传递整个值性能更好，如果传递很大的数据结构，每次都要 copy 一下影响性能；

> 当然如果传递的是 `map` 和 `slice` 可以不用考虑指针问题，因为本来传递的就是指针

 传递任意个数的参数：

```go
func main() {
	sum(1, 2, 3, 4, 5)
}

func sum(values ...int) {
	fmt.Println(values) // [1 2 3 4 5]
	result := 0
	for _, value := range values {
		result += value
	}
	fmt.Println("The sum is ", result) // The sum is 15
}
```

> 类似 JS 中的剩余参数语法，`values` 拿到的是一个数组

> `for index, value := range values` 是 Go 中的另一种遍历方式

与 JS 的剩余参数语法类似，剩余参数前面还可以加其他参数，但是剩余参数后面不能有别的参数，必须作为最后一个参数：

```go
func main() {
	sum("The sum is ", 1, 2, 3, 4, 5)
}

func sum(msg string, values ...int) {
	fmt.Println(values) // [1 2 3 4 5]
	result := 0
	for _, value := range values {
		result += value
	}
	fmt.Println(msg, result) // The sum is 15
}
```



## 3) 返回值

我们改一下上面的代码，接收一下 `sum` 函数的返回值：

```go
func main() {
	s := sum(1, 2, 3, 4, 5)
	fmt.Println("The sum is ", s) // The sum is 15
}

// 修改了方法签名，声明了函数返回类型
// sum 函数变为纯函数，计算并返回结果，不关心对结果做什么操作
func sum(values ...int) int {
	fmt.Println(values) // [1 2 3 4 5]
	result := 0
	for _, value := range values {
		result += value
	}
	return result
}
```

在上面的代码中，`sum` 函数返回的 `result` 实际上被 Go copy 了一份赋值给 `s` 。我们也可以不返回 `result`，而是返回 `result` 的指针：

```go
func main() {
	s := sum(1, 2, 3, 4, 5)
	fmt.Println("The sum is ", *s) // The sum is 15
}

// 返回指针类型
func sum(values ...int) *int {
	fmt.Println(values) // [1 2 3 4 5]
	result := 0
	for _, value := range values {
		result += value
	}
	return &result
}
```

此外，我们还可以使用下面的语法糖指定函数返回值，括号中声明的 `result` 会作为变量在函数作用域中创建，可以直接访问，而且最后直接 `return` 就行：

```go
func main() {
	s := sum(1, 2, 3, 4, 5)
	fmt.Println("The sum is ", s) // The sum is 15
}

// 函数作用域中可以直接访问 result
// 最后只要直接 return 就行，结果会隐式返回
func sum(values ...int) (result int) {
	fmt.Println(values) // [1 2 3 4 5]
	for _, value := range values {
		result += value
	}
	return
}
```

最后谈谈 Go 中的多个返回值。在下面的代码中，如果 `b` 传递 `0.0` 则会得到无穷大，可能会导致程序出现异常，因此我们可以进行判断，当 `b` 为 `0.0` 的时候抛出异常：

```go
func main() {
	d := divide(0.5, 0.3)
	fmt.Println(d) // 1.6666666666666667
}

func divide(a, b float64) float64 {
  // 如果 b 的值为 0.0 则会得到无穷大 +Inf
  // 为了避免 b 传递 0.0 需要进行判断并抛出异常
	if b == 0.0 {
		panic("Cannot provide zero as second value")
	}
	return a / b
}
```

如果直接抛出异常，相当于中断了程序执行，而在 Go 中没有 `try...catch` 的机制。这种情况下，我们可以使用多个返回值：

```go
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
```

> 这点在 JS 中优雅处理异步错误的时候也会用到，例如 `await-to-js`

