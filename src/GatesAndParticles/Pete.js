function Pete(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.center = null;
  this.level = this.y + (this.height/2);

  this.run = function pete(){
    if(this.center.constructor.name === 'Ball'){
      this.center.color = Math.floor(Math.random() * 2); //creates either a random 1 or 0

      this.center.y += 2 * this.height;
      return [this.center];
    } else if(this.center.constructor.name === 'Mist'){
      // TODO: handle mist
      return [this.center]
    } else {
      console.log("Else in Pete, something went wrong");
      console.log(this.center.toString());
      return [this.center];
    }
  };

  this.toString = function toString(){
    return 'Pete-Gate';
  };

  this.isRunnable = function () {
    return( true );
  }

  this.isComplete = function () {
    return( !(this.center === null) );
  }
}
