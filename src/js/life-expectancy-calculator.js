export default class LifeExpectancy {

  constructor(earthYrs) {
    this.earthYrs = earthYrs;
  }

  getLifeExpectancy () {
    let livedYrs = this.earthYrs;
    if (livedYrs <= 72) {
      return Math.round(72.6 - livedYrs)
    } 
  }
}