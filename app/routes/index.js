import Ember from 'ember';

var notes = [{
  id: 1,
  title: 'NoteTitle 1',
  body: 'note body1 note body1 note body1 note body1 note body1 note body1 note body1 note body1 note body1 note body1 note body1 note body1 note body1'
}, {
  id: 2,
  title: 'NoteTitle 2',
  body: 'note body2 note body2 note body2 note body2 note body2 note body2 note body2 note body2 note body2 note body2 note body2 note body2 note body2'
}, {
  id: 3,
  title: 'NoteTitle 3',
  body: 'note body3 note body3 note body3 note body3 note body3 note body3 note body3 note body3 note body3 note body3 note body3 note body3 note body3'
}];

export default Ember.Route.extend({
  model() {
    return notes;
  }
});
