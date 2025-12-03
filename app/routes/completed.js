import Route from '@ember/routing/route';

export default class CompletedRoute extends Route {
  model() {
    const savedCompleted = localStorage.getItem('completedTasks');
    return savedCompleted ? JSON.parse(savedCompleted) : [];
  }
}

