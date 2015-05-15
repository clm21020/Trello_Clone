TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
  },

  template: JST.boardShow,
  // <h1><%= board.escape("title") %></h1>
  //
  // <div class="list-holder pull-left"></div>
  // <div class="new-list-form pull-left"></div>


  render: function(){
    var content = this.template({board: this.model});
    this.$el.html(content);

    var $listHolder = this.$("div.list-holder");
    var boardShow = this;
    var lists = new TrelloClone.Collections.Lists();

    // this.model.get("lists");
    //
    // debugger;

    // .forEach(function(list_attrs){
    //   var list = new TrelloClone.Models.List(list_attrs);
    //   lists.add(list);
    //   var view = new TrelloClone.Views.ListShow({
    //     model: list
    //   });
    //   boardShow.addSubview("$listHolder", view);
    // });
    //
    // lists.each(function(list){
    //   var view = new TrelloClone.Views.ListShow({
    //     model: list
    //   });
    //   boardShow.addSubview("$listHolder", view);
    // });


    // addSubview: function (selector, view)
    // append listNew view to $new-list-form
    return this;
  },
});
