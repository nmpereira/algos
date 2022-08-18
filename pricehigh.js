function solution(prices, notes, x) {
	for (let i = 0; i < notes.length; i++) {
		helperFunc(notes[i], prices[i]);
	}
}

function helperFunc(string, price) {
	let note;
	let percent;
	let indicator;
	note = string.split(' ');
	if (note[0] == 'Same') {
		indicator = note[0];
		percent = '0.0%';
	} else {
		percent = note[0];
		indicator = note[1];
	}
	percent = percent.split('%')[0];
	console.log('percent: ', parseFloat(percent));
	if (indicator === 'Same') {
		return 0;
	} else if (indicator === 'higher') {
	} else {
	}
}
