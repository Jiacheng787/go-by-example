package main

import "fmt"

type greeter struct {
	greet func(int, int) (int, error)
}

func main() {
	g := greeter{
		greet: func(i int, j int) (int, error) {
			return i + j, nil
		},
	}
	res, _ := g.greet(2333, 666)
	fmt.Println(res)
}
