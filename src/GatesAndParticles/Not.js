function Not(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.center = null;
  this.level = this.y + (this.height/2);

  this.run = function not(){
    if(this.center.constructor.name === 'Ball'){
      this.center.color = Math.abs(this.center.color - 1);

      this.center.y += 2 * this.height;
      return [this.center];
    } else if(this.center.constructor.name === 'Mist'){
      // TODO: handle mist
      return [this.center]
    } else { //In this case we have a Gate
      this.center.run();
      return [this.center];
    }
  };

  this.toString = function toString(){
    return 'Not-Gate';
  };

  this.isRunnable = function () {
    return( true );
  }

  this.isComplete = function () {
    return( !(this.center === null) );
  }
}
module.exports = { Not };