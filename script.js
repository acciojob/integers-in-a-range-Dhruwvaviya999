// write your code here

function range(start, end) {
	let arr = [];
	for(let i=start; i<=end; i++){
		arr.push(i);
	};
	return arr;
}

// do not change the code below.
let start = parseInt(prompt("Enter Start of the Range."));
let end = parseInt(prompt("Enter End Of the Range."));
alert(range(start, end));
