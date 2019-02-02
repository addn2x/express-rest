
let private_a = 2;
let private_b = "Module b - text";

function get_a() {
	console.log(private_a);
	return private_a;
}

function get_b() {
	console.log(private_b);
	return private_b;	
}

// other way
module.exports = get_a;
module.exports = get_b;
