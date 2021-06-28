function Mist(colorLeft=0, signLeft='+', colorRight=0, signRight='+', x, y, width, height){ //0 is black, 1 is white
  this.colorLeft = colorLeft;
  this.signLeft = signLeft;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.level = this.y + (this.height/2);

  this.colorRight = colorRight;
  this.signRight = signRight;

  this.toString = function toString(){
    return  this.signLeft + ((this.colorcolorLeft === 1) ? 'White' : 'Black') +
            this.signRight + ((this.colorcolorRight === 1) ? 'White' : 'Black') + ' Mist';
  };


  this.isRunnable = function () {
    return( false );
  }

  this.elementSize = function () {
    return 2;
  }

  this.elementType = function () {
    return "Mist";
  }

  this.updateLevel = function updateLevel () {
    this.level = this.y + (this.height/2);
  }
}
