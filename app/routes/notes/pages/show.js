import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('page', params['page_id']);
  },

  actions: {
    destroyPage(page) {
      let note = page.get('note');

      page.destroyRecord();
      this.transitionTo('notes.show', note);
    }
  }
});
