const mongoose = require('mongoose');

const { Schema } = mongoose;

const planSchema = new Schema({
  animals: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Animal'
    }
  ]
});

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;
