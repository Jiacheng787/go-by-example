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

:::tip

为什么要传递指针？主要有两个原因：

1. 有时候确实需要通过函数修改变量的值，这种情况下只能传递指针；
2. 传递指针比传递整个值性能更好，如果传递很大的数据结构，每次都要 copy 一下影响性能；

当然如果传递的是 `map` 和 `slice` 可以不用考虑指针问题，因为本来传递的就是指针

:::

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

## 4) 匿名函数

下面的代码声明了一个匿名函数，在函数后面加了一个 `()`，实际上就是在调用这个函数，因此这里声明的是一个立即执行函数：

```go
func main() {
	func() {
		fmt.Println("Hello Go!")
	}()
}
```

与 JS 的立即执行函数类似，Go 的立即执行函数也会创建一个独立的作用域，内部的变量不会污染到全局：

```go
func main() {
	func() {
		msg := "Hello Go!"
		fmt.Println(msg)
	}()
}
```

考虑下面的代码，如果 `fmt.Println(i)` 需要等待异步操作完成之后再打印，这时候 `i` 的值可能已经发生变化：

```go
func main() {
	for i := 0; i < 5; i++ {
		func() {
			// 直接运行输出 0 1 2 3 4
			// 如果需要等待异步操作完成之后再打印
			// i 的值可能已经发生变化
			// 可能会打印 5 5 5 5 5
			fmt.Println(i)
		}()
	}
}
```

因此比较合理的写法是将 `i` 作为参数传入立即执行函数，这里会形成一个独立的作用域，即使外部 `i` 变化也不会影响里面的值：

```go
func main() {
	for i := 0; i < 5; i++ {
		func(i int) {
			fmt.Println(i)
		}(i)
	}
}
```

> 注意，如果匿名函数既没有赋值给变量，也也没有写成立即执行函数的形式，这样的写法是无效的，编译器会报错

## 5) 函数类型

在 Go 中，函数还可以作为一种类型，这意味着函数可以赋值给变量、作为函数参数、作为函数返回值等等。

与 JS 中的函数表达式类似，下面的代码将函数赋值给一个变量，然后执行了这个函数：

```go
func main() {
	f := func() {
		fmt.Println("Hello Go!")
	}
	f()
}
```

此时的函数签名如下，因为这个函数不接收参数也没有返回值，所以直接这样声明就好了：

```go
func main() {
	var f func() = func() {
		fmt.Println("Hello Go!")
	}
	f()
}
```

下面的代码展示了一个复杂函数的签名：

```go
func main() {
	// 注意在这个位置调用会报错，这里还没有声明变量
	// divide(5.0, 3.0)

	// 变量声明（函数签名）
	var divide func(float64, float64) (float64 error)
	// 变量初始化（函数实现）
	divide = func(a, b float64) (float64 error) {
		if b == 0.0 {
			return 0.0, fmt.Errorf("Cannot divide by zero")
		} else {
			return a / b, nil
		}
	}
	// 调用函数
	d, err := divide(5.0, 3.0)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(d)
}
```

> 注意函数赋值给变量，只有在变量初始化之后才能调用，未初始化调用会报错

## 6) 方法

在下面的代码中，声明了一个名为 `greeter` 的结构体，同时添加了一个 `greet` 方法：

```go
func main() {
	// 创建 greeter 对象
	g := greeter{
		greeting: "hello",
		name: "Go",
	}
	// 调用上面的 greet 方法
	g.greet()
}

// 声明 greeter 结构体
type greeter struct {
	greeting string
	name string
}

// 方法的上下文可以是任何类型，不一定是 struct
// 例如使用 integer 也是可以的，可以往 int 上添加方法
// type counter int

// 在 greeter 上面添加 greet 方法
// 注意函数前面添加 (g greeter) 对象会让函数变为方法
func (g greeter) greet() {
	fmt.Println(g.greeting, g.name)
}
```

> **方法** 实际上就是一个在特定上下文中执行的函数，这个上下文可以是任何类型，不仅仅是 `struct`

注意方法中传入的上下文只是一个 copy，修改字段值并不会影响原始对象：

```go
func main() {
	g := greeter{
		greeting: "hello",
		name: "Go",
	}
	g.greet()
	// 打印 The new name is:Go
	fmt.Println("The new name is:", g.name)
}

type greeter struct {
	greeting string
	name string
}

func (g greeter) greet() {
	fmt.Println(g.greeting, g.name)
	// 将 name 字段设为空字符串
	g.name = ""
}
```

如果将传入的上下文改为指针对象，这时候修改就会影响原始对象了：

```go
func main() {
	g := greeter{
		greeting: "hello",
		name: "Go",
	}
	g.greet()
	// 打印 The new name is:
	fmt.Println("The new name is:", g.name)
}

type greeter struct {
	greeting string
	name string
}

// 上下文传递指针对象
func (g *greeter) greet() {
	fmt.Println(g.greeting, g.name)
	// 将 name 字段设为空字符串
	g.name = ""
}
```

## 7) 总结

- 基本用法
- 参数
	- 使用逗号分隔参数和类型

		```go
		func foo(bar string, baz int)
		```
	- 类型相同的参数，类型只需要声明一次

		```go
		func foo(bar, baz int)
		```

	- 传递指针类型的时候，函数内部可以改变参数的值
		- 不传指针默认都是 copy
		- 由于 slice 和 map 默认就是指针类型，所以可以直接修改参数的值
  - 使用可变参数传递多个具有同样类型的参数
		- 只能作为最后一个参数
		- 接收到是一个 slice
		
		```go
		func foo(bar string, baz ...int)
		```

- 返回值
	- 单个返回值只需要列出类型即可

		```go
		func foo() int
		```
	
	- 多个返回值的类型用括号包裹

		```go
		func foo() (int, error)
		```
	
		- `(result type, error)` 这种形式在 Go 中很常见

	- 可以使用 named return values，也就是一个语法糖
		- 在函数内部创建一个待返回变量
		- 返回的时候直接用 `return` 关键字就行
	- 可以返回局部变量的内存地址
		- 自动从局部内存（栈）提升到共享内存（堆）
- 匿名函数
	- 有两种写法
		- 立即执行函数

			```go
			func() {
				// ...
			}()
			```

		- 赋值给变量或者作为函数参数传入

			```go
			a := func() {
				// ...
			}
			a()
			```
- 函数作为类型
	- 函数可以赋值给变量、作为函数参数、作为函数返回值
	- 类型签名类似函数签名，只是没有参数名

		```go
		var f func(string, string, int) (int, error)
		```
	
- 方法
	- 在一个特定 type 上下文中执行的函数
		- 不一定要用 `struct`，例如也可以是 `integer`
	- 形式

		```go
		func (g greeter) greet() {
			// ...
		}
		```

	- receiver 可以是值或者指针
		- 值类型拿到的是 cpoy
		- 指针类型拿到的是指针

