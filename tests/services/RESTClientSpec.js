import {RESTClient, MethodType} from "../../app/services/RESTClient.js"

describe("RESTClient", () => {
  let client;
  beforeEach(() => {
    client = new RESTClient()
  })
  it("should create an instance", () => {
    expect(client instanceof RESTClient).toBe(true)
  })
  it("has defineEndpoint function", () => {
    expect(client.defineEndpoint).toBeDefined()
  })
  describe("request method", () => {
    it("has to be defined", () => {
      expect(client.request).toBeDefined()
    })
    it("should raise error when wrong url has passed", () => {
      expect(() => {
        client.request({}, MethodType.GET)
      }).toThrowError(TypeError)
    })
    it("should raise error when wrong method type has passed", () => {
      expect(() => {
        client.request("dummy URL", "plain string")
      }).toThrowError(TypeError)
    })
    it("should return response", done => {
        // Set current context as URL, due to prevent CORS problems
        const context = "http://localhost:9876"
        client.request(context, MethodType.GET).then(res => {
          // Then get back to the test.
          // See ref: https://github.com/jasmine/jasmine/issues/526
          done()
        }).catch(err => {
          console.error(err)
          fail("An error is occured in the promise object")
          done()
        })
    })
  })
  describe("defineEndpoint method", () => {
    it("defines endpoint", () => {
      const inserted = {
        name: "example",
        url: "http://localhost:9876/"
      }
      client.defineEndpoint(inserted.name, inserted.url)
      expect(typeof client.endpoints[inserted.name]).toBe('function')
    })
  })
})
