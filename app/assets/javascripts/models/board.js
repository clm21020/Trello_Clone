TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: "/api/boards",

  parse: function(resp, options){
    // debugger;
    this.lists = [];
    if (resp.lists){
      for (var i = 0; i < resp.lists.length; i++) {
        this.lists.push(new TrelloClone.Models.List(resp.lists[i]));
      }
      // resp.lists.empty()

    }

    return attrs;
  }
});
