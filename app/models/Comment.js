import schema from "js-schema"

const validate = schema({
  author: {
    name: String
  },
  body: String,
  thread: {
    name: String
  }
})
const Comment = (object) => {
  return {
    isValid: validate(object),
    ...object
  }
}
export default Comment
