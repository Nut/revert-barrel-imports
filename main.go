package main

import "fmt"

type Value struct {
	foo int
}

func (v *Value) modify(val int) {
	v.foo = val
}

func main() {
	test := Value{foo: 1}
	test.modify(3)
	fmt.Println(test)
	// file, err := os.Open("./test-files/components/test.component.tsx") // For read access.
	// if err != nil {
	// 	log.Fatal(err)
	// }
	// defer file.Close()

	// scanner := bufio.NewScanner(file)
	// // optionally, resize scanner's capacity for lines over 64K, see next example
	// for scanner.Scan() {
	// 	fmt.Println(scanner.Text())
	// }

	// if err := scanner.Err(); err != nil {
	// 	log.Fatal(err)
	// }
}
