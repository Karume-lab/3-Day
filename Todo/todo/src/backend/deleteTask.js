const deleteTask = (e) => {
	const tasks = JSON.parse(localStorage.getItem('tasks'));
	const index = tasks.findIndex((task) => task.id === Number(e.currentTarget.parentElement.children[0].id));
	tasks.splice(index, 1);
	localStorage.setItem('tasks', JSON.stringify(tasks));
	e.currentTarget.parentElement.remove();
	const main = document.getElementById('main');
	if (main.childElementCount === 0) {
		const noTasksDiv = document.createElement('div');
		noTasksDiv.id = 'noTasks';
		noTasksDiv.classList.toggle('no_tasks');
		main.append(noTasksDiv);
	}
}

export default deleteTask;
