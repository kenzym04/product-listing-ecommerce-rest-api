const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, default: '' },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  quantity: { type: Number, default: 0 },
  manufacturer: { type: String, default: '' },
  distributor: { type: String, default: '' },
  unitCost: { type: Number, default: 0 },
})

require('dotenv/config')

exports.Product = mongoose.model('Product', productSchema)
