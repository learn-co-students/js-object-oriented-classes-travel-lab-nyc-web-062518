class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return (endDate - 1) - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    const northSouthDistance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    const eastWestDistance = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
    return northSouthDistance + eastWestDistance
  }

  estimatedTime(peak=false) {
    if (peak === false) {
      return this.blocksTravelled() / 3
    }
    else {
      return this.blocksTravelled() / 2
    }
  }
}
