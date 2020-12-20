let mongoose = require('mongoose'),
  Schema = mongoose.Schema

mongoose.Promise = global.Promise

/**
 * @desc: 用以记录有多少人注册，从而使得每新注册用户，快速知道是第几位「倾城er」
 */
const RecordSchema = new Schema({
  key: {
    type: String,
    unique: true,
    required: true
  },
  value: {
    type: Number,
    default: 1314,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  },
  updated: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Record', RecordSchema)