function Not(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.center = null;
  this.level = this.y + (this.height/2);
  this.elementType = "Gate";
  this.elementSize = 1;

  this.run = function not(){
    if(this.center.elementType === 'Ball'){
      this.center.color = Math.abs(this.center.color - 1);

      this.center.y += 2 * this.height;

      this.center.updateLevel();

      return [this.center];
    } else if(this.center.elementType === 'Mist'){
      // TODO: handle mist
      return [this.center];
    } else { //In this case we have a Gate
      this.center = this.center.run()[0];
      this.center.updateLevel();
      return this.run();
    }
  };

  this.toString = function toString(){
    return 'Not-Gate';
  };

  this.isComplete = function isComplete() {
    return( !(this.center === null) ? this.center.isComplete() : false);
  }

  this.updateLevel = function updateLevel() {
    this.level = this.y + (this.height/2);
  }

  /** This checks if the given center of an object is above
   *  x is the x coordinate of the center of the object.
   *  y is the y coordinate of the center of the object.
   */
  this.isBelow = function isBelow(otherX, otherY) {
    let x1 = parseInt(this.x);
    let x2 = parseInt(this.x + this.width);
    let y1 = parseInt(this.y - this.height);
    let y2 = parseInt(this.y);

    // console.log("Not Gate " + otherX + " | " + otherY);
    // console.log("(x1 <= x) && (x <= x2) && (y1 <= y) && (y <= y2)\n(" + x1 + " <= " + otherX + ") && (" + otherX + " <= " + x2 + ") && (" + y1 + " <= " + otherY + ") && (" + otherY + " <= " + y2 + ") === " + ((x1 <= otherX) && (otherX <= x2) && (y1 <= otherY) && (otherY <= y2)));
    return (x1 <= otherX) && (otherX <= x2) && (y1 <= otherY) && (otherY <= y2);
  }

  this.getCenter = function getCenter(){
    return [[parseInt(this.x) + parseInt(this.width / 2),
            parseInt(this.y) + parseInt(this.height / 2)]];
  }
}
module.exports = { Not };