const mongoose = require('mongoose')
const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number,
    comments: Array,
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    
  })
blogSchema.set('toJSON', {
  transform : (document, returnedObject) => {
    returnedObject.id=returnedObject._id.toString()
    delete returnedObject._id
  }
})
module.exports= mongoose.model('blog', blogSchema)