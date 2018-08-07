let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(){
    let d = new Date();
    let startYear = this.startDate.getFullYear();
    let curYear = d.getFullYear();
    let years = curYear - startYear;
    return years -2;
  }

}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  aveIndex(ave){
    let aveNum = eastWest.indexOf(ave)
    return aveNum + 1;
  }

  blocksTravelled(){
    let aveDistance = this.aveIndex(this.endingLocation.horizontal) - this.aveIndex(this.beginningLocation.horizontal);
    let streetDistance = this.endingLocation.vertical - this.beginningLocation.vertical;
    return Math.abs(aveDistance) + Math.abs(streetDistance);
  }

  estimatedTime(peak){
    //3 blocks per minute
    if(peak == true){
    let minutes = (this.blocksTravelled() / 2);
    return minutes;
    }else{
    let minutes = (this.blocksTravelled() / 3);
    return minutes;
    }
  }

}
