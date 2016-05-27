import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyNote(note) {
      this.sendAction('destroyNote', note);
    }
  }
});
