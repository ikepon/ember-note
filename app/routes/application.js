import Ember from 'ember';

export default Ember.Route.extend({
  didUrlChange: Ember.observer('router.url', function() {
    Ember.run.next(() => {
      let currentPath = this.get('router.url');
      console.log(currentPath);
    })
  }),

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
