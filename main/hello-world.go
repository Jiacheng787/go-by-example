package main

import "fmt"

func main() {
	name, age := "Garfield", 23

	fmt.Print("Hello ", name)
	fmt.Print("your age ", age)
	// Hello Garfield your age 23

	fmt.Println("Hello ", name)
	fmt.Println("your age ", age)
	// Hello Garfield
	// your age 23

	fmt.Printf("Hello %s, your age %d", name, age)
	// Hello Garfield, your age 23
}