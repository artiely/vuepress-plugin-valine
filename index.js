const path = require('path')

module.exports = (opts, ctx) => {
  return {
    define: {
      COMMENT_OPTIONS: opts.options || {},
    },
    enhanceAppFiles: path.resolve(__dirname, 'comment.js'),
    globalUIComponents: 'Valine'
  }
}