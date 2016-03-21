import Comment from "./Comment"

export default class Thread {
  constructor (name, count=0, comments=[]) {
    this._name = name
    this._comments = comments
  }
  get name () {
    return Object.freeze(this._name)
  }
  set name (value) {
    if (!Thread.isValidName(value))
      throw TypeError()
    this._name = name
  }
  get count () {
    return Object.freeze(this._comments.length)
  }
  static isValidName (value) {
    if (!(typeof value === "string" || value instanceof String))
      return false
    if (value === "")
      return false
    return true
  }
  get comments () {
    return Object.freeze(this._comments)
  }
  addComment (comment) {
    if (comment.isValid) {
      this._comments.push(comment)
    }
  }
}
