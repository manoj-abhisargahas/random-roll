function getRandomIntInclusive(min=1, max=100) {
	/*
	Math.random() returns a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive)
	Range: 0.0 <= x < 1.0 (it can be 0, never 1)

	Visual Example: Picking a number from 5 to 10
	Let's see what happens if Math.random() rolls its lowest possible value vs. 
	its highest possible value when min = 5 and max = 10:
	-----------------------------------------------------------------------------------------
	Step							If Random is Lowest (0.0)	If Random is Highest (0.999)
	-----------------------------------------------------------------------------------------
	Math.random()					0.0							0.999
	* (10 - 5 + 1) (multiply by 6)	0.0							5.994
	Math.floor(...) (round down)	0							5
	+ 5 (add min)					5 (Your absolute minimum)	10 (Your absolute maximum)
	*/

	min = Math.ceil(min);
	max = Math.floor(max);
	return min + Math.floor(Math.random() * (max - min + 1));
}

function pickRollNumber() {
	const rollnum = document.getElementById("rollnum");
	const start = document.getElementById("start-value");
	const end = document.getElementById("end-value");
	rollnum.innerHTML = getRandomIntInclusive(start.value?start.value:1, end.value?end.value:100);
}

const defaultTasks = [
"Professional Singing",
"Professional Dancing",
"Professional Mimicrey",
"Professional Dialogue Delivery",
"Professional Drawing",
"Professional DubSmash",
"Professional Acting",
"Professional Fight"
];

function setDefaultTasks() {
	const tasks_text = document.getElementById('tasks-text');
	let isNotLast = false;
	for(let i = 0; i < defaultTasks.length; i++) {
		isNotLast = i < defaultTasks.length-1;
		tasks_text.value += defaultTasks[i] + (isNotLast?'\n':'');
	}
}
setDefaultTasks();

function pickTask() {
	const task = document.getElementById("task");
	const tasks_text = document.getElementById('tasks-text');
	const tasks = tasks_text.value.split("\n");
	const value = getRandomIntInclusive(0, tasks.length-1);
	task.innerHTML = tasks[value];
}