const toggleTaskIsComplete = (e) => {
	const tasks = JSON.parse(localStorage.getItem('tasks'));
	const index = tasks.findIndex((task) => task.id === Number(e.currentTarget.parentElement.children[0].id));
	e.currentTarget.parentElement.children[1].classList.toggle('checked_task');
	e.currentTarget.parentElement.classList.toggle('complete_task');
	tasks[index].isComplete = e.currentTarget.checked;
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default toggleTaskIsComplete;
