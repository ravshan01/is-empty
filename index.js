module.exports = function isEmpty(variable){ 

  if ( typeof variable === 'number' ) return variable >= 1 ? false : true;
  if ( typeof variable === 'string' ) return variable.length === 0; 
  if ( typeof variable === 'boolean' ) return !variable;
  if ( typeof variable === 'function' ) return variable.length === 0;
  if ( typeof variable === 'symbol' ) return isEmpty(variable.description);
  if ( Array.isArray(variable) ) return variable.length === 0

  // Objects...
  if (variable?.toString === Object.prototype.toString ){
  	switch ( variable.toString() ){

  		case '[object File]' :
  		case '[object Map]' :
  		case '[object Set]' : {
  			return variable.size === 0
  		}

  		case '[object Object]' : {
  			return Object.keys(variable).length === 0
  		}

  	}
  }


  // null, undefined, NaN
  return true;
}