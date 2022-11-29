const foo = require("./foo.js")

//这里修改name属性值会生效
// exports.name = "哈哈哈哈"

console.log(foo.name)
console.log(foo.age)
foo.sayHello()

