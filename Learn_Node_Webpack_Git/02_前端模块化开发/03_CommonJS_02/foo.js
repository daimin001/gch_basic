const name = "foo"
const age = 18
function sayHello() {
  console.log("sayHello")
}

// 1.在开发中使用的很少
// exports.name = name
// exports.age = age
// exports.sayHello = sayHello

// 2.将模块中内容导出
// 结论: Node导出的本质是在导出module.exports对象
// module.exports.name = name
// module.exports.age = age
// module.exports.sayHello = sayHello

// // console.log(exports.name, "----")
// // console.log(exports.age, "----")
// // console.log(exports.sayHello, "----")
// console.log(exports === module.exports)

// 3.开发中常见的写法
module.exports = {
  name,
  age,
  sayHello
}

//这样改没有效果,这个已经没有意义了
// exports.name = "哈哈哈哈"

//这样改会生效
module.exports.name = "哈哈哈哈"

