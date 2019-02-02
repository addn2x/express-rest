
let private_a = 2;
let private_b = "Module a - text";

function get_a() {
	console.log(private_a);
	return private_a;
}

function get_b() {
	console.log(private_b);
	return private_b;	
}

// do not export variables
module.exports.a = private_a;
module.exports.b = private_b;

// export functions only
module.exports.getA = get_a;
module.exports.getB = get_b;

