Divisions = new Mongo.Collection('divisions');

var DivisionSchema = new SimpleSchema ({
	name: {
		type: String,
		label: "Name of division"
	},
	teams: {
		type: [String],
		label: "List of names of teams in division",
		defaultValue: []
	}
});

Divisions.attachSchema(DivisionSchema);