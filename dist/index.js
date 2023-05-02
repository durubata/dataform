
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dataform.cjs.production.min.js')
} else {
  module.exports = require('./dataform.cjs.development.js')
}
