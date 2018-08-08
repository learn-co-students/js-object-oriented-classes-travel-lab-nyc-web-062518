let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

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
    constructor(beginningLocation, endingLocation){
      this.beginningLocation = beginningLocation
      this.endingLocation = endingLocation
    }
    blocksTravelled(){
      let vBlocks = eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal)
      let vBlocksFinal = Math.abs(vBlocks)

      let hBlocks = parseInt(this.beginningLocation.vertical) - parseInt(this.endingLocation.vertical)
      let hBlocksFinal = Math.abs(hBlocks)
      return vBlocksFinal + hBlocksFinal
    }
    estimatedTime(peak){
      if (peak){
        return this.blocksTravelled()/2
      }
      else {
        return this.blocksTravelled()/3
      }
    }
  }
