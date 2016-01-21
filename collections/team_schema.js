Teams = new Mongo.Collection('teams');

var TeamSchema = new SimpleSchema ({
	name: {
		type: String,
		label: "Name of team"
	},
	division: {
		type: String,
		label: "Division that team is competing in"
	},
	wins: {
		type: [String],
		label: "Names of teams that current team defeated"
	},
	losses: {
		type: [String],
		label: "Names of teams that current team lost to"
	},
	ties: {
		type: [String],
		label: "Names of teams that current team tied with"
	},
	points: {
		type: Number,
		label: "Points current team accumulated in round robin"
	}
});

Teams.attachSchema(TeamSchema);