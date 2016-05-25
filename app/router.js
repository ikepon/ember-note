import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('notes', function() {
    this.route('show', { path: '/:note_id' });
    this.route('edit', { path: '/:note_id/edit' });
  });
});

export default Router;
