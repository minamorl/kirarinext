import Thread from "../../app/models/Thread"

import Comment from "../../app/models/Comment"

describe("Thread", () => {
  let thread
  beforeEach(() => {
    thread = new Thread("Dummy Thread")
  })
  it("has thread name property", () => {
    expect(thread.name).toBeDefined()
    expect(Object.isFrozen(thread.name)).toBe(true)
  })
  it("has count property", () => {
    expect(thread.count).toBe(0)
    expect(Object.isFrozen(thread.count)).toBe(true)
  })
  it("should be allow empty name", () => {
    expect(Thread.isValidName(undefined)).toBe(false)
    expect(Thread.isValidName("")).toBe(false)
    expect(Thread.isValidName("shouldBePass")).toBe(true)
  })
  it("can contain a valid Comment object", () => {
    const comment = new Comment({
      author: {
        name: "Uncle Sam"
      },
      body: "This is a test",
      thread: {
        name: "Dummy Thread"
      }
    })
    expect(comment.isValid).toBe(true)

    expect(thread.count).toBe(0)
    thread.addComment(comment)
    expect(thread.count).toBe(1)
  })
})
