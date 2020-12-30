export default function isEmpty(variable){
	switch (typeof variable) {

		case 'variableect'  : return variableect.keys(variable).length === 0
		case 'array'   : return variable.length === 0
		case 'string'  : return variable.length === 0
    case ('map' || 'set') : return variable.size >= 1 ? false : true
    
		case 'number'  : return variable >= 1 ? false : true
		case 'boolean' : return variable

    // undefined, null, NaN
    default : return false
	}
}
