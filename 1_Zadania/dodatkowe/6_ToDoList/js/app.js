document.addEventListener('DOMContentLoaded', function() {
	const taskList = document.querySelector('#taskList');
	const taskInput = document.querySelector('#taskInput');
	const addTaskButton = document.querySelector('#addTaskButton');
	const removeFinishedButton = document.querySelector('#removeFinishedTasksButton');

	const showCount = document.querySelector('#counter');
	let tasksCounter = 0;

	addTaskButton.addEventListener('click', addTask);
	removeFinishedButton.addEventListener('click', removeFinished);

	function addTask() {
		if (isProperLength(taskInput.value)) {
			const li = document.createElement('li');
			li.innerHTML = appendHtmlMarkup(taskInput.value);
			taskList.appendChild(li);

			taskList.lastElementChild.querySelector('button:first-of-type').addEventListener('click', markAsComplete);
			taskList.lastElementChild.querySelector('button:last-of-type').addEventListener('click', deleteTask);

			taskInput.value = '';

			updateCounter('+');
		}
	}

	function isProperLength(taskName) {
		if (taskName.length > 5 && taskName.length < 100) return true;
		return false;
	}

	function appendHtmlMarkup(taskName) {
		return `<h1>${taskInput.value}</h1><button>Complete</button><button>Delete</button>`;
	}

	function markAsComplete() {
		if (this.parentElement.children[0].style.color == 'red') {
			this.parentElement.children[0].style.color = 'black';
			this.parentElement.classList.remove('completed');
			updateCounter('+');
		} else {
			this.parentElement.children[0].style.color = 'red';
			this.parentElement.classList.add('completed');
			updateCounter('-');
		}
	}

	function deleteTask() {
		this.parentElement.remove();
		updateCounter('-');
	}

	function updateCounter(sign) {
		if (sign === '+') tasksCounter++;
		if (sign === '-') tasksCounter--;
		showCount.innerHTML = tasksCounter;
	}

	function removeFinished() {
		document.querySelectorAll('.completed').forEach((task) => {
			task.parentElement.removeChild(task);
		});
	}
});
