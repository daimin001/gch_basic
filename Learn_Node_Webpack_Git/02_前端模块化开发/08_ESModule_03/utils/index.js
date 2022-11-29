//出口文件，用于汇总其他js文件的所有的导出

import { formatCount, formatDate } from './format.js'
import { parseLyric } from './parse.js'

export {
  formatCount,
  formatDate,
  parseLyric
}

// 优化一:（推荐）
// export { formatCount, formatDate } from './format.js'
// export { parseLyric } from './parse.js'

// 优化二:
// export * from './format.js'
// export * from './parse.js'
