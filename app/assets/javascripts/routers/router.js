TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.bCollection = new TrelloClone.Collections.Board();
    this.bCollection.fetch();
  },

  routes: {
    "": "bIndex",
    "boards/:id": "bShow"
  },

  bIndex: function(){
    this.bCollection.fetch();
    var view = new TrelloClone.Views.BoardsIndex({collection: this.bCollection});
    this._swapView(view);
  },

  bShow: function(id){
    var board = this.bCollection.getOrFetch(id);
    var view = new TrelloClone.Views.BoardShow({ model: board });
    this._swapView(view);
  },

  _swapView: function(view){
    if (this._currentView) {
      this._currentView.remove();
    }
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});



// Maybe change boardsCollection to collection
