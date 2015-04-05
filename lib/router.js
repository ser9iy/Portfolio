Router.configure({
  layoutTemplate:'layout',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.map(function () {
  this.route('blog',{path:'/'});

})
