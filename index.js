class Driver {

  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    const date = new Date(year, 0, 1);
    const millisecondsInYear = 365*24*60*60*1000
    return parseInt((date - this.startDate)/millisecondsInYear)
  }

}



class Route {

  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {

    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let verticalBlocksTraveled = Math.abs(parseInt(this.beginningLocation.vertical) - parseInt(this.endingLocation.vertical));

    let horizontalBlocksTraveled = Math.abs((eastWest.indexOf(this.beginningLocation.horizontal) + 1) - (eastWest.indexOf(this.endingLocation.horizontal) + 1));

    return verticalBlocksTraveled + horizontalBlocksTraveled;
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }

}
