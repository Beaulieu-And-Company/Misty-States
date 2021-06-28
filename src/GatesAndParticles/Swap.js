function Swap(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.left = null;
  this.right = null;

  this.run = function swap(){
    if(this.left.constructor.name === 'Ball'){
      this.left.y += 2 * this.height;
      this.right.y += 2 * this.height;

      tmp = this.left.x ;
      this.left.x = this.right.x;
      this.right.x = tmp;

      return [this.left, this.right];
    } else if(this.left.constructor.name === 'Mist'){
      // TODO: handle mist
      return [this.left, this.right]
    } else {
      console.log("Else in Swap, something went wrong");
      console.log(this.left.toString() + this.right.toString());
      return [this.left, this.right];
    }
  };

  this.toString = function toString(){
    return 'Swap-Gate';
  };

  this.isComplete = function () {
    return( !(this.left === null) && !(this.right === null) );
  }

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