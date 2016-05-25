import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('note');
  },

  actions: {
    deleteNote(note) {
      note.deleteRecord();
      note.save();
    }
  }
});
