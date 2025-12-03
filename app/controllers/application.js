import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service router;
  @tracked newTask = '';
  @tracked tasks = [];
  @tracked completedTasks = [];
  @tracked deletedTasks = [];

  constructor() {
    super(...arguments);
    const savedTasks = localStorage.getItem('tasks');
    const savedCompleted = localStorage.getItem('completedTasks');
    const savedDeleted = localStorage.getItem('deletedTasks');

    if (savedTasks) this.tasks = JSON.parse(savedTasks);
    if (savedCompleted) this.completedTasks = JSON.parse(savedCompleted);
    if (savedDeleted) this.deletedTasks = JSON.parse(savedDeleted);
  }

  @action
  updateNewTask(event) {
    this.newTask = event.target.value;
  }

  @action
  addTask() {
    if (this.newTask.trim() !== '') {
      const task = { name: this.newTask, completed: false };
      this.tasks = [...this.tasks, task];
      this.newTask = '';
      this.saveAll();
    }
  }

  @action
  completeTask(index) {
    const task = this.tasks[index];
    task.completed = true;
    this.completedTasks = [...this.completedTasks, task];
    this.tasks = this.tasks.filter((_, i) => i !== index);
    this.saveAll();
  }

  @action
  deleteTask(index) {
    const task = this.tasks[index];
    this.deletedTasks = [...this.deletedTasks, task];
    this.tasks = this.tasks.filter((_, i) => i !== index);
    this.saveAll();
  }

  saveAll() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    localStorage.setItem('completedTasks', JSON.stringify(this.completedTasks));
    localStorage.setItem('deletedTasks', JSON.stringify(this.deletedTasks));
  }
}

