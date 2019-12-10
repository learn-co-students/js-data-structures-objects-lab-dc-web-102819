console.log('connected');

const driver = {name: "steve"};

function updateDriverWithKeyAndValue(original, key, value) {
	let newObj = Object.assign({}, original);
	newObj[key] = value
	return newObj
}


function destructivelyUpdateDriverWithKeyAndValue(original, key, value) {
	original[key] = value;
	return original;
}

function deleteFromDriverByKey(original, key) {
	let newObj = Object.assign({}, original);
	delete newObj[key];
	return newObj;
}

function destructivelyDeleteFromDriverByKey(original, key) {
	delete original[key];
	return original
}