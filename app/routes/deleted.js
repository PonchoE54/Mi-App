import Route from '@ember/routing/route';

export default class DeletedRoute extends Route {
  model() {
    const savedDeleted = localStorage.getItem('deletedTasks');
    return savedDeleted ? JSON.parse(savedDeleted) : [];
  }
}


