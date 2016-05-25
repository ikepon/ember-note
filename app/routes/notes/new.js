import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createNote() {
      let note = this.store.createRecord('note', {
        title: this.controller.get('title'),
        body: this.controller.get('body')
      });

      note.save();
    }
  }
});
