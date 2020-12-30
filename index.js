module.exports = function isEmpty(variable){

  if ( Array.isArray(variable) || typeof variable === 'string' )
    return variable.length === 0;

  if ( typeof variable === 'object' && variable !== null )
    return Object.keys(variable).length === 0;

  if ( typeof variable === 'number' )
     return variable >= 1 ? false : true;

  if ( typeof variable === 'boolean' )
    return !variable;

   return true
}
