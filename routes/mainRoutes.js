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
Router.route('/photos', {
  name: 'photos',
  action: function () {
    this.render('photos');
    SEO.set({ title: 'Photos - ' + Meteor.App.NAME });
  }
});
Router.route('/scoreboard', {
  name: 'scoreboard',
  action: function () {
    this.render('scoreboard');
    SEO.set({ title: 'Scoreboard - ' + Meteor.App.NAME });
  }
});
Router.route('/tours', {
  name: 'tours',
  action: function () {
    this.render('tours');
    SEO.set({ title: 'Tours - ' + Meteor.App.NAME });
  }
});
Router.route('/sponsors', {
  name: 'sponsors',
  action: function () {
    this.render('sponsors');
    SEO.set({ title: 'Sponsors - ' + Meteor.App.NAME });
  }
});
Router.route('/contact', {
  name: 'contact',
  action: function () {
    this.render('contact');
    SEO.set({ title: 'Contact - ' + Meteor.App.NAME });
  }
});