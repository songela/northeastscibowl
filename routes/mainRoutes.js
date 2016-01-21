// Home Route
Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home');
    SEO.set({ title: 'Home - ' + Meteor.App.NAME });
  }
});
Router.route('/about', {
  action: function () {
    this.render('about');
    SEO.set({ title: 'About - ' + Meteor.App.NAME});
  }
});
Router.route('/scoreboard', {
  name: 'scoreboard',
  action: function () {
    this.render('scoreboard');
    SEO.set({ title: 'Scoreboard - ' + Meteor.App.NAME });
  }
});
Router.route('/sponsors', {
  name: 'sponsors',
  action: function () {
    this.render('sponsors');
    SEO.set({ title: 'Sponsors - ' + Meteor.App.NAME });
  }
});