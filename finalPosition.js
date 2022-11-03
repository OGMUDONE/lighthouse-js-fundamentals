const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

function finalPosition (moves) {
  let x = 0
  let y = 0
  let value = ''
  let i = 0
  for (i = 0; i < moves.length; i++) {
    value = moves[i];
    switch(value) {
    case('north'):{
      y++;
      break;
    }
    case('south'): {
      y--;
      break;
    }
    case('east'): {
      x++;
      break;
    }
    case('west'): {
      x--;
      break;
    }    
    }
  }
  return [x, y];
}

finalPosition(moves)