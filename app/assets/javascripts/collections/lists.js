TrelloClone.Collections.Lists = Backbone.Collection.extend({
  url: "api/lists",

  model: TrelloClone.Models.List,

  comparator: function(model) {
    return model.get("ord");
  }
});
