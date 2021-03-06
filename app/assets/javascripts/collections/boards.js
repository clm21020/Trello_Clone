TrelloClone.Collections.Board = Backbone.Collection.extend({
  model: TrelloClone.Models.Board,
  url: "/api/boards",

  getOrFetch: function(id){
    var collection = this;
    var model = this.get(id);
    if (model) {
      model.fetch();
    } else {
      model = new this.model({id: id});
      model.fetch({
        success: function(){
          collection.add(model);
        }
      });
    }

    return model;
  },
});
