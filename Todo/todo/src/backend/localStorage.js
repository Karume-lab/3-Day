/*
add new task [triggered by new task]
	first time will be new
	other times will append to existing ones


NEED TO KNOW WHICH ONE WAS CLICKED!	
check a task [triggered by checkbox]
	update local storage value

delete [triggered by delete button]
	remove from local storage
*/


const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

/*
const tasks_ = [
	{ id: 1, title: "Task UNO", isComplete: false },
	{ id: 2, title: "Task 2", isComplete: true },
	{ id: 3, title: "Task 3", isComplete: false },
	{ id: 4, title: "Task 4", isComplete: true },
	{ id: 5, title: "Task 5", isComplete: false },
	{ id: 6, title: "Task 6", isComplete: true },
	{ id: 7, title: "Task 7", isComplete: false },
	{ id: 8, title: "Task 8", isComplete: true },
	{ id: 9, title: "Task 9", isComplete: false },
	{ id: 10, title: "Task 10", isComplete: true },
];

localStorage.setItem('tasks', JSON.stringify(tasks_));
*/

export default tasks;
