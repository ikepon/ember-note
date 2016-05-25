import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) {
    return 'Note Title ' + i
  },
  body(i) {
    return 'Note ' + i +' body body body body body body body body body body'
  }
});
