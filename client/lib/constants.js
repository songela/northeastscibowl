// Define App Constants

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
  NAME: 'Northeast Regional Middle School Science Bowl',
  DESCRIPTION: 'A website for the Science Bowl'
};
