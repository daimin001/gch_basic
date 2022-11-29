let name = "bar"

exports.name = name

// 1.2s之后修改
// setTimeout(() => {
//   // name = "why" 这样是不行的，改不了
//   exports.name = "why"
// }, 2000)

// 2.4s之后获取
setTimeout(() => {
  console.log(exports.name)
}, 4000)
