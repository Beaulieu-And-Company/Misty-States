// TODO: https://konvajs.org/docs/sandbox/Drop_DOM_Element.html


// var width = window.innerWidth;
// var height = window.innerHeight;
// window.onresize = function(){ location.reload(); }
var width = 1136;
var height = 420;

console.log("Height: " + height + " | Width: " + width);
var shadowOffset = 20;
var tween = null;
var blockSnapSize = 30;
var gridSnapSize = 60;
var userGeneratedParticles = [];
var blockMatchingFunctions = {};

function getShapes(elements) {

  let levels = splitElementsIntoGroupsByElementLevel(elements);

  var matchedObjects = matchLevels(levels);

  matchedObjects = removeSingleObjects(matchedObjects);

  if(matchedObjects.length === 0){
    return ;
  }

  let simulationOutcome = simulate(matchedObjects);
  //
  // clearSimulations();
  //
  // drawObjects(simulationOutcome);

  return(simulationOutcome);
};

function splitElementsIntoGroupsByElementLevel(elements){
  var levels = {};

  elements.forEach((gate, i) => {
    if(gate.level in levels){
      levels[gate.level].push(gate);
    } else {
      levels[gate.level] = [gate];
    }
  });

  console.log(levels);

  return levels;
};

function matchLevels(levels) {
  let keys = Object.keys(levels);
  var aboveRow = levels[keys[0]];

  for (var i = 1; i < keys.length; i++) {
    aboveRow = matchElements(aboveRow, levels[keys[i]]);
  }

  return aboveRow;
};

function matchElements(aboveRow, belowRow){
  var matchedObjects = [];

  belowRow.forEach((element, i) => {
    let funcName = 'match' + element.elementSize + 'Element';

    console.log("Element: " + funcName);

    let temp = blockMatchingFunctions[funcName](element, aboveRow);
    aboveRow = temp[1];
    matchedObjects.push(temp[0]);
  });

  return matchedObjects;
};



blockMatchingFunctions.match1Element = function (element, aboveRow) {
  console.log("match1Element");

  aboveRow.forEach((elementAbove, i) => {
    elementAbove.getCenter().forEach((center, j) => {
      if(element.isBelow(center[0], center[1])){
        element.center = elementAbove;
        aboveRow.splice(i, 1);
        return [element, aboveRow];
      }
    });
  });

  return [element, aboveRow];
}

blockMatchingFunctions.match2Element = function (element, aboveRow) {
  console.log("matchDoubleGate");
  let x1 = parseInt(gate.x);
  let x2 = parseInt(gate.x + gate.width/2);
  let x3 = parseInt(gate.x + gate.width);
  let y1 = parseInt(gate.y - gate.height);
  let y2 = parseInt(gate.y);

  var particles = particles;
  var gateObject = gate;

  for (var i = 0; i < particles.length; i++) {
    let particle = particles[i];
    let x = parseInt(particle.x);
    let y = parseInt(particle.y);

    if((x1 <= x) && (x <= x2) && (y1 <= y) && (y <= y2)){
      gateObject.left = particle;
      particles.splice(i, 1);
      break;
    }
  }

  for (var i = 0; i < particles.length; i++) {
    let particle = particles[i];
    let x = particle.x;
    let y = particle.y;

    if((x2 < x) && (x <= x3) && (y1 <= y) && (y <= y2)){
      gateObject.right = particle;
      particles.splice(i, 1);
      return [gateObject, particles];
    }
  }

  return [gateObject, particles];
}

blockMatchingFunctions.match3Element = function (element, aboveRow) {
  console.log("matchTrippleGate");
  let x1 = parseInt(gate.x);
  let x2 = parseInt(gate.x + gate.width/3);
  let x3 = parseInt(gate.x + (gate.width*2) /3);
  let x4 = parseInt(gate.x + gate.width);
  let y1 = parseInt(gate.y - gate.height);
  let y2 = parseInt(gate.y);

  var tempParticles = particles;
  var newParticles = [];
  var gateObject = gate;

  for (var i = 0; i < tempParticles.length; i++) {
    let particle = tempParticles[i];
    let x = parseInt(particle.x);
    let y = parseInt(particle.y);

   if((x1 <= x) && (x < x2) && (y1 <= y) && (y <= y2)){
      gateObject.left = particle;
    } else {
      newParticles.push(particle)
    }
    console.log(i)
  }

  console.log("Here");
  tempParticles = newParticles;
  newParticles = [];

  for (var i = 0; i < tempParticles.length; i++) {
    let particle = tempParticles[i];
    let x = parseInt(particle.x);
    let y = parseInt(particle.y);

    if((x2 <= x) && (x <= x3) && (y1 <= y) && (y <= y2)){
      gateObject.center = particle;
    } else {
      newParticles.push(particle)
    }
  }

  tempParticles = newParticles;
  newParticles = [];

  for (var i = 0; i < tempParticles.length; i++) {
    let particle = tempParticles[i];
    let x = parseInt(particle.x);
    let y = parseInt(particle.y);

    if((x3 < x) && (x <= x4) && (y1 <= y) && (y <= y2)){
      gateObject.right = particle;
    } else {
      newParticles.push(particle)
    }
  }

  return [gateObject, newParticles];
}

blockMatchingFunctions.match4Element = function (element, aboveRow) {
  console.log("matchTrippleGate");
  let x1 = parseInt(gate.x);
  let x2 = parseInt(gate.x + gate.width/4);
  let x3 = parseInt(gate.x + (gate.width*2) /4);
  let x4 = parseInt(gate.x + (gate.width*3) /4);
  let x5 = parseInt(gate.x + gate.width);
  let y1 = parseInt(gate.y - gate.height);
  let y2 = parseInt(gate.y);

  var tempParticles = particles;
  var newParticles = [];
  var gateObject = gate;

  for (var i = 0; i < tempParticles.length; i++) {
    let particle = tempParticles[i];
    let x = parseInt(particle.x);
    let y = parseInt(particle.y);

    if((x1 <= x) && (x < x2) && (y1 <= y) && (y <= y2)){
      gateObject.left = particle;
    } else {
      newParticles.push(particle)
    }
    console.log(i)
  }

  tempParticles = newParticles;
  newParticles = [];

  for (var i = 0; i < tempParticles.length; i++) {
    let particle = tempParticles[i];
    let x = parseInt(particle.x);
    let y = parseInt(particle.y);

    if((x2 <= x) && (x <= x3) && (y1 <= y) && (y <= y2)){
      gateObject.center_left = particle;
    } else {
      newParticles.push(particle)
    }
  }

  tempParticles = newParticles;
  newParticles = [];

  for (var i = 0; i < tempParticles.length; i++) {
    let particle = tempParticles[i];
    let x = parseInt(particle.x);
    let y = parseInt(particle.y);

    if((x3 <= x) && (x <= x4) && (y1 <= y) && (y <= y2)){
      gateObject.center_right = particle;
    } else {
      newParticles.push(particle)
    }
  }

  tempParticles = newParticles;
  newParticles = [];

  for (var i = 0; i < tempParticles.length; i++) {
    let particle = tempParticles[i];
    let x = parseInt(particle.x);
    let y = parseInt(particle.y);

    if((x4 < x) && (x <= x5) && (y1 <= y) && (y <= y2)){
      gateObject.right = particle;
    } else {
      newParticles.push(particle)
    }
  }

  return [gateObject, newParticles];
}

function removeSingleObjects(objects) {
  var convertedObjects = [];

  for (var i = 0; i < objects.length; i++) {
    if(objects[i].isComplete()){
      convertedObjects.push(objects[i]);
    }
  }

  return convertedObjects;
};

function createObject(object) {
  if(object.attrs.type.toLowerCase().includes("ccswap")){
    return new CCSwap(object.attrs.x, object.attrs.y, object.attrs.width, object.attrs.height);
  } else if(object.attrs.type.toLowerCase().includes("cswap")){
    return new CSwap(object.attrs.x, object.attrs.y, object.attrs.width, object.attrs.height);
  } else if(object.attrs.type.toLowerCase().includes("cnot")){
    return new CNot(object.attrs.x, object.attrs.y, object.attrs.width, object.attrs.height);
  } else if(object.attrs.type.toLowerCase().includes("swap")){
    return new Swap(object.attrs.x, object.attrs.y, object.attrs.width, object.attrs.height);
  } else if(object.attrs.type.toLowerCase().includes("not")){
    return new Not(object.attrs.x, object.attrs.y, object.attrs.width, object.attrs.height);
  } else if(object.attrs.type.toLowerCase().includes("pipe")){
    return new Pipe(object.attrs.x, object.attrs.y, object.attrs.width, object.attrs.height);
  } else if(object.attrs.type.toLowerCase().includes("pete")){
    return new Pete(object.attrs.x, object.attrs.y, object.attrs.width, object.attrs.height);
  } else if(object.attrs.type.toLowerCase().includes("black")){
    return new Ball(0, '+', object.attrs.x + object.attrs.height/2, object.attrs.y + object.attrs.height/2, object.attrs.height/2);
  } else if(object.attrs.type.toLowerCase().includes("white")){
    return new Ball(1, '+', object.attrs.x + object.attrs.height/2, object.attrs.y + object.attrs.height/2, object.attrs.height/2);
  } else if(object.attrs.type.toLowerCase().includes("wb")){
    return new Mist(1, '+', 0, '+', object.attrs.x, object.attrs.y, object.attrs.width, object.attrs.height);
  } else if(object.attrs.type.toLowerCase().includes("w-b")){
    return new Mist(1, '+', 0, '1', object.attrs.x, object.attrs.y, object.attrs.width, object.attrs.height);
  } else {
    console.log("Something went wrong while creating the objects");
    return null;
  }
}

function drawObjects(objects, userGen=false){
  let generationType = userGen ? "user" : "simulation";
  objects.forEach((object, i) => {
    if(object.constructor.name.toLowerCase() === 'ball'){
      newGate(object.x - object.radius, object.y - object.radius, 2, 2, layer, stage, 'https://julianBeaulieu.com/QBlocks-Beta/img/' + ((object.color === 1) ? 'white' : 'black') + '.png', ((object.color === 1) ? 'white' : 'black'), generationType, 'circle');
    } else if(object.constructor.name.toLowerCase() === 'mist'){
      if(object.colorLeft === 1 && object.colorRight === 0 && object.signLeft === '+' && object.signRight === '+'){
        newGate(object.x, object.y, 4, 2, layer, stage, 'img/wb.png', 'wbMist', generationType);
      } else {
        newGate(object.x, object.y, 4, 2, layer, stage, 'img/wnegb.png', 'w-bMist', generationType);
      }
    } else {
      console.log("Something went wrong: " + object.toString());
      return null;
    }
    stage.add(layer);
  });
};

function simulate(matchedObjects){
  var newObjects = [];

  for (var i = 0; i < matchedObjects.length; i++) {
    let elementList = matchedObjects[i].run();

    elementList.forEach((item, i) => {
      newObjects.push(item);
    });
  }

  return newObjects;
}

module.exports = { getShapes, matchLevels, splitElementsIntoGroupsByElementLevel, matchElements, removeSingleObjects, createObject, drawObjects, simulate};