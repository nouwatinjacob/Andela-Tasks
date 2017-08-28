arithGeo = (arr) => { 
   
  if (!(arr instanceof Array))
      return "Not an array";
  if (arr.length === 0)
      return 0;
  if ( arr.length <= 2 && arr.length > 0 )
      return "Enter atleast 3 array index values";
  if (arr === undefined)
      return "Parameter undefined";

  let Cdifference = arr[1] - arr[0];
  let Cratio = arr[1] / arr[0];

  let arithmetic = true;
  let geometric = true;

  for(i = 0; i < arr.length - 1; i++) {
    
    if( arr[i + 1] - arr[i] !== Cdifference )
      arithmetic = false;
    if(arr[i + 1] / arr[i] !== Cratio )
      geometric = false;
    
  }

    if(arithmetic)
        return "Arithmetic";
    else if(geometric)
        return "Geometric";
    else
        return -1;
}

//arithGeo([2,4,16]);
//console.log(arithGeo ([2,4,6]));
 //arithGeo([]);
 module.exports = arithGeo;