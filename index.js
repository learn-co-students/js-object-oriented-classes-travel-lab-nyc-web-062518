let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    let totalYears = year - this.startDate.getFullYear() - 1
    // let endDate = new Date(year, 1, 1)
    // let totalYears = (endDate - this.startDate)/(365*24*60*60*1000)
    // return parseInt(totalYears)
    return totalYears
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  // eastWest array in order from east to west (difference of index = number of streets travelled horizontally)
  getAvenueIndex(avenue) {
    return eastWest.indexOf(avenue)
  }

  blocksTravelled() {
    let verticalDistance = Math.abs(parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical))
    let horizontalDistance = Math.abs(this.getAvenueIndex(this.endingLocation.horizontal) - this.getAvenueIndex(this.beginningLocation.horizontal))
    let numberBlocksTravelled = verticalDistance + horizontalDistance
    return numberBlocksTravelled
  }

  estimatedTime(peak) {
    if (peak) {
      return Math.round(this.blocksTravelled() / 2)
    } else {
      return Math.round(this.blocksTravelled() / 3)
    }
  }
}
