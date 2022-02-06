---
sidebar_position: 2
---

# 指针

- 创建指针
- 解除指针引用
- `new` 函数
- 处理 `nil`
- 内部指针



## 1) 原始类型

在 Golang 中，赋值操作都 copy，会在内存中复制一个一样的对象：

```go
func main() {
  a := 42
  b := a
  fmt.Println(a, b) // 42 42
  a = 27
  fmt.Println(a, b) // 27 42
}
```

为了让 `a` 和 `b` 能够联动，我们可以使用 `&` 操作符创建一个指针，让 `b` 指向 `a` 的内存地址：

```go
func main() {
  var a int = 42
  var b *int = &a
  fmt.Println(a, b) // 42 0x1040a124
  // 获取 a 的指针，两者完全一致
  fmt.Println(&a, b) // 0x1040a124 0x1040a124
}
```

为了通过指针访对应的值，我们可以使用 `*` 操作符：

```go
func main() {
  var a int = 42
  var b *int = &a
  fmt.Println(a, *b) // 42 42
}
```

> 注意在类型前面的 `*` 例如 `*int` 代表这是一个指针类型，而指针前面加 `*` 例如 `*b` 则表明根据指针访问对应的值

在这种情况下，`a` 和 `b` 就可以联动，因为它们指向内存中的同一个值：

```go
func main() {
  var a int = 42
  var b *int = &a
  fmt.Println(a, *b) // 42 42
  // 修改 a 会导致 b 发生变化
  a = 27
  fmt.Println(a, *b) // 27 27
  // 修改 b 会导致 a 发生变化
  *b = 14
  fmt.Println(a, *b) // 14 14
}
```

再看下面的代码：

```go
func main() {
  // 创建一个数组
	a := [3]int{1, 2, 3}
  // 数组第一个值的指针
	b := &a[0]
  // 数组第二个值的指针
	c := &a[1]
  // 在 c++ 中可以通过下面的方法从 c 的指针访问到 b 的指针
  // c := &a[1] - 4
  // 在 golang 中可以通过 `unsafe` 包实现
	fmt.Printf("%v %p %p\n", a, b, c) // [1 2 3] 0x1040a124 0x1040a128
}
```



## 2) struct

看下面一段代码：

```go
type myStruct struct {
	foo int
}

func main() {
	var ms myStruct
  // 正常创建对象的流程
	ms = myStruct{foo: 42}
  fmt.Println(ms) // {42}
}
```

我们可以通过 `&` 操作符给 struct 创建指针：

```go
type myStruct struct {
	foo int
}

func main() {
	var ms *myStruct
  // 在对象初始化的时候使用 &
	ms = &myStruct{foo: 42}
	fmt.Println(ms) // &{42}
}
```

也可通过 `new` 函数创建指针，但是不能在创建对象的时候初始化：

```go
type myStruct struct {
	foo int
}

func main() {
	var ms *myStruct
  // 注意这里不能初始化
	ms = new(myStruct)
	fmt.Println(ms) // &{0}
}
```

实际上指针类型在没有初始化的时候，默认有一个空指针 `nil`：

```go
func main() {
	var ms *myStruct
  fmt.Println(ms) // <nil>
  fmt.Println(ms == nil) // true
}
```

为了访问和设置对象的属性，一般来说需要使用 `*` 操作符：

```go
func main() {
	var ms *myStruct
	ms = new(myStruct)
	(*ms).foo = 42
	fmt.Println((*ms).foo) // 42
}
```

很明显每次都这样写非常麻烦。因此对于复杂对象，编译器会自动解除指针引用，我们可以直接通过指针访问和设置对象属性：

```go
func main() {
	var ms *myStruct
	ms = new(myStruct)
	ms.foo = 42
	fmt.Println(ms.foo) // 42
}
```



## 3) array

与 struct 类似，array 的赋值也是 copy，在内存中创建一模一样的对象：

```go
func main() {
	a := [3]int{1, 2, 3}
	b := a
	fmt.Println(a, b) // [1 2 3] [1 2 3]
	a[1] = 42
	fmt.Println(a, b) // [1 42 3] [1 2 3]
}
```



## 4) 内部指针（slice 和 map）

在上面的代码中，如果我们将 array 改为 slice，情况就不一样了：

```go
func main() {
	a := []int{1, 2, 3}
	b := a
	fmt.Println(a, b) // [1 2 3] [1 2 3]
	a[1] = 42
	fmt.Println(a, b) // [1 42 3] [1 42 3]
}
```

> slice 本身不包含任何数据，slice 内部只有一个指向 array 的指针，因此 slice 赋值实际上是指针传递

另一个例子是 map，map 的赋值也是指针传递：

```go
func main() {
	a := map[string]string {
		"foo": "bar",
		"baz": "buz",
	}
	b := a
	fmt.Println(a, b) // map[baz:buz foo:bar] map[baz:buz foo:bar]
	a["foo"] = "qux"
	fmt.Println(a, b) // map[baz:buz foo:qux] map[baz:buz foo:qux]
}
```



## 5) 总结

- 创建指针

  - 指针类型在 **类型** 前面加 `*`，例如 `*int` 代表指向 integer 的指针；
  - 使用 `&` 操作符获取变量的内存地址；

- 解除指针引用

  - 原始类型需要在 **指针变量** 前面加 `*`；
  - 复杂类型（例如 `struct`）则会自动解除引用；

- 创建对象指针

  - 如果对象已经创建，可以在变量前面加 `&`

    ```go
    ms := myStruct{foo: 42}
    p  := &ms
    ```

  - 如果对象还没创建，可以在初始化器前面加 `&`

    ```go
    &myStruct{foo: 42}
    ```

  - 使用 `new` 关键字

    不能在创建对象的同时初始化字段

- 内部指针类型

  - Go 中所有的赋值操作都是 copy
  - `slice` 和 `map` 包含内部指针，因此赋值实际上是指针传递，指向内存中同一个数据

