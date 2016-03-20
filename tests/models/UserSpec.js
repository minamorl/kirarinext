import User from "../../app/models/User.js"

import Cookies from "js-cookie"

describe("User", () => {
  let user
  beforeEach(() => {
    user = new User()
  })
  it("has login method", () => {
    expect(user.login).toBeDefined()
  })
  it("has logout method", () => {
    expect(user.logout).toBeDefined()
  })
  it("has isLoggedIn property (getter only)", () => {
    expect(user.isLoggedIn).toBeDefined()
  })
  it("has username property for a loginned user", done => {
    const correctCredential = {
      username: "username",
      password: "password"
    }
    user.login(correctCredential).then(() => {
      expect(user.username).toBe(correctCredential.username)
      done()
    })
  })
  it("raises an error when username is accessed without login process", () => {
    expect(() => { user.username }).toThrowError(Error)
  })
  describe("login method", () => {
    it("accepts when passed correct values", () => {
      const correctCredential = {
        username: "username",
        password: "password"
      }
      expect(user.login(correctCredential)).toBeDefined()
    })
    it("throws TypeError when passed wrong type values", () => {
      const wrongCredential = {
        thisShouldBeFail: "fail"
      }
      expect(() => {
        user.login(wrongCredential)
      }).toThrowError(TypeError)
    })
    it("returns promise object", () => {
      const correctCredential = {
        username: "username",
        password: "password"
      }
      const promise = user.login(correctCredential)
      expect(promise instanceof Promise).toBe(true)
    })
  })
  describe("logout method", () => {
    it("destroy auth cookie", () => {
      Cookies.set("auth", "authed")
      user.logout()
      expect(Cookies.get("auth")).not.toBeDefined()
    })
    it("always returns nothing", () => {
      const result = user.logout()
      expect(result).not.toBeDefined()
    })
  })
})
