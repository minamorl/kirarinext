import Comment from "./Comment"

export default class Thread {
  constructor (name, count=0, comments=[]) {
    this[Symbol.for("name")] = name
    this[Symbol.for("comments")] = comments
  }
  get name () {
    return Object.freeze(this[Symbol.for("name")])
  }
  set name (value) {
    if (!Thread.isValidName(value))
      throw TypeError()
    this[Symbol.for("name")] = name
  }
  get count () {
    return Object.freeze(this[Symbol.for("comments")].length)
  }
  static isValidName (value) {
    if (!(typeof value === "string" || value instanceof String))
      return false
    if (value === "")
      return false
    return true
  }
  get comments () {
    return Object.freeze(this[Symbol.for("comments")])
  }
  addComment (comment) {
    if (!comment.isValid)
      throw TypeError("Object \"comment\" is invalid.")
    this[Symbol.for("comments")].push(comment)
  }
}
