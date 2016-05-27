export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);
  let note = server.create('note');
  server.createList('page', 10, {noteId: note.id});
}
