function arrayFindKeyIndex(arr, key) {
	return arr.findIndex(function(element) { return element[0] === key })
}
function arrayFindValueIndex(arr, val) {
	return arr.findIndex(function(element) { return element[1] === val })
}