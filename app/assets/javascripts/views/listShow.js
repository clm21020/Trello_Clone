TrelloClone.Views.ListShow = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
  },

  template: JST.listShow,

  render: function(){
    var content = this.template({list: this.model});
    this.$el.html(content);
    return this;
  }
});
