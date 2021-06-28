function Pipe(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.center = null;
  this.level = this.y + (this.height/2);

  this.run = function pipe(){
    if(this.center.elementType === 'Ball'){
      this.center.y += 2 * this.height;
      return [this.center];
    } else if(this.center.elementType === 'Mist'){
      // TODO: handle mist
      return [this.center]
    } else {
      console.log("Else in Pipe, something went wrong");
      console.log(this.center.toString());
      return [this.center];
    }
  };

  this.toString = function toString(){
    return 'Pipe-Gate';
  };

  this.updateLevel = function updateLevel() {
    this.level = this.y + (this.height/2);
  }

  this.elementSize = function elementSize() {
    return 1;
  }

  this.elementType = function elementType() {
    return "Gate";
  }

  this.updateLevel = function updateLevel () {
    this.level = this.y + (this.height/2);
  }
}
