import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let note = this.store.findRecord('note', params['note_id']);
    return note.get('pages');
  }
});
