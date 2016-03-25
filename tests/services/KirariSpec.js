import Kirari from "../../app/services/Kirari"
import Thread from "../../app/models/Thread"

describe("Kirari", () => {
  let client
  beforeEach(() => {
    client = new Kirari("api/")
  })
  describe("fetchThread", () => {
    it("returns Thread object" , () => {
      const thread = client.fetchThread("thread")
      expect(thread instanceof Thread).toBe(true)
    })
    it("must contains comments", () => {
      const thread = client.fetchThread("thread")
      expect(thread.count).toBeDefined()
    })
  })
})
