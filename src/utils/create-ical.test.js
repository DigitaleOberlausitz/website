const { createDate } = require("./create-ical")
const moment = require("moment")

describe("Create ICAL", () => {
  describe("createDate", () => {
    it("creates correct date", () => {
      const dateString = "2019-03-01"
      const timeString = "19:23"

      const date = createDate(dateString, timeString)

      const momentDate = moment(date)

      expect(momentDate.format("YYYY-MM-DD HH:mm:ss")).toBe("2019-03-01 19:23:00")
    })
  })
})
