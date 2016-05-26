import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteNote(note) {
      this.sendAction('deleteNote', note);
    }
  }
});
