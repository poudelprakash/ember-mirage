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

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
  // this.urlPrefix = '/api/v1';
  this.get('/objects/', function() {
    return {
      "objects": [{
        "id": 1,
        "name": 'Marketing Campaign',
        "label": 'Marketing C.'
      }, {
        "id": 2,
        "name": 'Media Plan',
        "label": 'MEDIA PLAN'
      }, {
        "id": 3,
        "name": 'Coverage',
        "label": 'COVERAGE'
      } ]
    }
  });
  this.get('/objects/:id', function() {
    return {
      "object": {
        "id": 1,
        "name": "Marketing Campaign",
        "project_id": 0,
        "static_table_name": "marketing_campaigns",
        "metadata": {
          "id": 0,
          "field_type": "string",
          "max_length": 0,
          "editable": true,
          "compulsory_in_view": true,
          "describable_type": "string",
          "describable_id": 0,
          "description": "marketing campaigns"
        },
        "fields": [{
          "id": 0,
          "name": "string",
          "trashed": true,
          "object_id": 0
        }],
        "relationships": [{
          "id": 0,
          "name": "string",
          "lt_object_id": 0,
          "rt_object_id": 0
        }]
      }
    }
  });
}