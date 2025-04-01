import Task from './task.js';

export default class Project {
	constructor(name, description) {
		const randomId = crypto.randomUUID();
		this.projectId =
			'project-' +
			randomId.substring(randomId.lastIndexOf('-') + 1, randomId.length);
		this.name = name;
		this.description = description;
		this.tasks = [];
	}

	get tasks() {
		this.tasks.forEach((task) => {
			return task.toString();
		});
	}

	createNewTask(name, description, priority, dueDate, isComplete) {
		const newTask = new Task(
			name,
			description,
			priority,
			dueDate,
			isComplete
		);
		this.tasks.push(newTask);

		return `Task created with ID ${newTask.taskId}`;
	}

	editTask(
		taskId,
		newName,
		newDescription,
		newPriority,
		newDueDate,
		newCompleteStatus
	) {
		this.tasks.forEach((task) => {
			if (task.taskId == taskId) {
				task.name = newName;
				task.description = newDescription;
				task.priority = newPriority;
				task.dueDate = newDueDate;
				task.isComplete = newCompleteStatus;

				return `Task with ID '${taskId}' edited`;
			} else {
				return `Task with ID '${taskId}' does not exist!`;
			}
		});
	}

	deleteTask(taskId) {
		this.tasks.forEach((task) => {
			if (task.taskId == taskId) {
				const taskIndex = this.tasks.indexOf(task);
				this.tasks.splice(taskIndex, 1);
				return `Task with ID '${taskId}' deleted!`;
			} else {
				return `Task with ID '${taskId}' does not exist!`;
			}
		});
	}

	toString() {
		return `Project ID: ${this.projectId}\nName: ${this.name}\nDescription: ${this.description}`;
	}
}
