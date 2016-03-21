export default class Thread {
  constructor (name, count=0, posts=[]) {
    this._name = name
    this._count = count
    this.posts = posts
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
    return Object.freeze(this._count)
  }
  static isValidName (value) {
    if (!(typeof value === "string" || value instanceof String))
      return false
    if (value === "")
      return false
    return true
  }
}
