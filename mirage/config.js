export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.0-beta.7/shorthands/
  */

  this.get('/notes', function() {
    return {
      data: [{
        type: 'notes',
        id: 1,
        attributes: {
          title: 'NoteTitle 1',
          body: 'note body1 note body1 note body1 note body1 note body1 note body1 note body1 note body1 note body1 note body1 note body1 note body1 note body1'
        }
      }, {
        type: 'notes',
        id: 2,
        attributes: {
          title: 'NoteTitle 2',
          body: 'note body2 note body2 note body2 note body2 note body2 note body2 note body2 note body2 note body2 note body2 note body2 note body2 note body2'
        }
      }, {
        type: 'notes',
        id: 3,
        attributes: {
          title: 'NoteTitle 3',
          body: 'note body3 note body3 note body3 note body3 note body3 note body3 note body3 note body3 note body3 note body3 note body3 note body3 note body3'
        }
      }]
    };
  });
}
