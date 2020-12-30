export default function isEmpty(obj){
	switch (typeof obj) {

		case 'object'  : return Object.keys(obj).length === 0
		case 'array'   : return obj.length === 0
		case 'string'  : return obj.length === 0
		case 'number'  : return obj >= 1 ? true : false
		case 'boolean' : return obj
    
    case ('undefined' || 'null') : return false

	}
}
