// Home Route
Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home');
    SEO.set({ title: 'Home - ' + Meteor.App.NAME });
  }
});
Router.route('/report-scores', {
  name: 'scoreReport',
  action: function () {
  	this.render('scoreReport');
  	SEO.set({ title: 'Score Reporting - ' + Meteor.App.NAME });
  }
});
Router.route('/scoreboard', {
  name: 'scoreboard',
  action: function () {
    // this.render('scoreboard');
    SEO.set({ title: 'Scoreboard - ' + Meteor.App.NAME });
  }
});