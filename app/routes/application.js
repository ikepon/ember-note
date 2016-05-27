import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('note');
  },

  actions: {
    destroyNote(note) {
      note.destroyRecord();
      this.transitionTo('/');
    }
  }
});
