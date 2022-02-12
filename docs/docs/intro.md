---
sidebar_position: 1
---

# Go 入门教程

Golang 学习笔记。

## 1. 项目依赖管理

Golang 中的包管理使用 `go.mod` 文件，可以使用下面的命令在项目根目录初始化一个 `go.mod`：

```bash
# 初始化一个 v0 或者 v1 的包
$ go mod init example.com/m
# 初始化指定版本的包
$ go mod init example.com/m/v2
```

安装依赖：

```bash
$ go get -u github.com/gin-gonic/gin
```

> `-u` 安装全局变量类似 `npm i -g cobra`

如果直接下载请求超时，可以设置镜像源：

```bash
$ go env -w GO111MODULE=on
$ go env -w GOPROXY=https://goproxy.cn,https://goproxy.io,direct
```

> 类似 `npm config set registry`

安装之后就可以看到 `go.mod` 里面多了些东西：

```go
module github.com/Jiacheng787/goexample

go 1.17

require (
	github.com/gin-gonic/gin v1.7.7
)
```

下载项目依赖：

```bash
$ go get ./...
```

[三分钟掌握Go mod常用与高级操作](https://zhuanlan.zhihu.com/p/103534192/)

## 2. Makefile 编写

本地开发的时候可以使用 IDE 进行代码编译，点击按钮即可对源文件编译，但是通常项目会部署在 Linux 环境中，这就需要在 Linux 环境下进行编译。项目的编译动作叫 `make`，编译的实际动作和过程都是写在 `Makefile` 里面。

> `Makefile` 作用类似于 npm scripts，可以用于执行 Shell 命令，避免了每次输入一长串的编译指令

安装 `make`：

```sh
$ yum install -y make
$ make -v
```

`Makefile` 里面最基本的部分就是 `rule`，里面可以包含多个 `target`，每个 `target` 结构如下：

```makefile
target : prerequisite
[TAB] recipe
```

- `target`：目标文件或者伪目标（不是一个文件，而是一个动作名）
- `prerequisite`：生成 `target` 所需的文件或目标
- `recipe`：`make` 需要执行的命令，可以是任何 Shell 命令

例如可以编写一个 `Makefile` 文件如下：

```makefile
hello.out : hello.c util_1.o util_2.o
  cc -o hello.out hello.c util_1.o util_2.o
util_1.o : util_1.c helper.h
  cc -c util_1.c
util_2.o : util_2.c helper.h
  cc -c util_2.c
clean:
  rm hello.out hello.c util_1.o util_2.o
```

我们直接运行 `make` 命令，不带参数的情况下，默认会运行第一个 `rule`，`make` 会一层层去找依赖关系，先后运行下面的命令：

```bash
$ cc -c util_1.c helper.h
$ cc -c util_2.c helper.h
$ cc -o hello.out hello.c util_1.o util_2.o
```

如果在寻找过程中出现错误，如文件找不到，则 `make` 会直接退出并报错。上面的代码中，最后一个 `rule` 并不是生成一个目标文件，而是单纯一个动作名。建议每个 `Makefile` 都写 `clean` 规则，这样不仅方便重新编译，也有利于保持文件路径的清洁。但是如果碰巧在编译路径下有一个与伪目标同名的文件存在，那么 `make` 会在依赖关系图中把这个文件与伪目标名相关联，而这个文件没有修改的话，`clean` 是不会执行的。为了避免这种情况，GNU make 提供了一种特殊目标：`.PHONY`，用来表示目标文件不是真正的文件，即伪目标：

```makefile
.PHONY: clean
clean:
  rm hello.out hello.c util_1.o util_2.o
```

> 伪目标也可作为目标文件的 `prerequisite`，因为伪目标不会编译出实际的文件，因而在每次 `make` 时都会重新编译。伪目标可以被认为是内嵌在 `Makefile` 中的 Shell 脚本

一个简单的 `Makefile` 示例如下：

```makefile
VERSION = 1.0.0
PKG_NAME = api-docs-backend
DATE = `date +%Y-%m-%d_%H:%M:%S`

.PHONY: version build test clean

version:
	@echo version: ${VERSION} date: ${DATE} os: win

build:
  @echo "Building $(PKG_NAME) app..."
  @go build -o $(PKG_NAME)

test:
	@echo "Testing $(PKG_NAME) ..."
	@mkdir -p $(output_test_dir)
	go test -coverprofile=$(output_test_dir)/$(timestamp).out $(package)

clean:
	@echo "Cleaning..."
	@rm -rf build/*
	@rm -rf vendor
```

执行以下命令即可编译：

```bash
$ make build
```

> 命令前面加上 `@`，不会打印出执行语句，只显示执行结果

参考：

> https://blog.csdn.net/u013216061/article/details/70592461?utm_source=blogxgwz9
