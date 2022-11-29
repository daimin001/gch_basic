const UTIL_NAME = "util_name"

function formatCount() {
  return "200万"
}

function formatDate() {
  return "2022-10-10"
}

//在exports之前输出为控对象{}
// console.log(exports) // {}


//导出
exports.UTIL_NAME = UTIL_NAME
exports.formatCount = formatCount
exports.formatDate = formatDate

