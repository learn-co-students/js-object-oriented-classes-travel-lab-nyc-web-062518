const eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year){
    let endDate = new Date(year, 1, 1)
    let totalYears = (endDate - this.startDate)/(365*24*60*60*1000)
    return parseInt(totalYears)
  }
}

class Route {
  constructor(beginningLocationObject, endingLocationObject) {
    this.beginningLocationObject = beginningLocationObject;
    this.endingLocationObject = endingLocationObject;
  }

  avenueToInteger(avenue) {
      return eastWest.indexOf(avenue)
  }

  blocksTravelled() {
    const horizontalDistance = Math.abs(parseInt(this.avenueToInteger(this.beginningLocationObject.horizontal)) - parseInt(this.avenueToInteger(this.endingLocationObject.horizontal)))
    const verticalDistance = Math.abs(parseInt(this.beginningLocationObject.vertical) - parseInt(this.endingLocationObject.vertical))
    return horizontalDistance + verticalDistance
  }

  estimatedTime(peakBoolean) {
    if(peakBoolean){
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}
