class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    let dateFromYear = new Date(year, 1, 1)
    // debugger
    let diff = dateFromYear - this.startDate
    let toYears = Math.floor(diff / 1000 / 60 / 60 / 24 / 365)
    return toYears
  }

// class Route {
//   constructor(beginningLocation, endingLocation) {
//     this.beginningLocation = beginningLocation
//     this.endingLocation = endingLocation
//   }
//
}
