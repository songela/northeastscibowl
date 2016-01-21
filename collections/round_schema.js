Rounds = new Mongo.Collection('rounds');

var RoundSchema = new SimpleSchema({
	division: {
		type: String,
		label: "Division which round belongs to"
	},
	isTie: {
		type: Boolean,
		label: "Whether teams tied",
		defaultValue: false
	},
	winner: {
		type: String,
		label: "Name of winning team"
	},
	loser: {
		type: String,
		label: "Name of losing team"
	}
});

Rounds.attachSchema(RoundSchema);