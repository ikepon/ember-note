import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) {
    return `Page Title ${i}`
  },
  body(i) {
    return `Page ${i} body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body`
  }
});
