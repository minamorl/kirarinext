import User from "../../app/models/User.js"

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
})
