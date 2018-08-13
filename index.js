
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {

  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }

}

class Route {

  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  getAvenueIndex(avenue) {
    return eastWest.indexOf(avenue)
  }

  blocksTravelled() {
    let verticalDistance =  Math.abs(parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical))
    let horizontalDistance = Math.abs(this.getAvenueIndex(this.endingLocation.horizontal) - this.getAvenueIndex(this.beginningLocation.horizontal))
    let totalDistance = verticalDistance + horizontalDistance
    return totalDistance
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }

}
