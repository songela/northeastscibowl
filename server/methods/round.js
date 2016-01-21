Meteor.methods({
	playRound: function(division, isTie, winner, loser) {
		// Check to make sure params are correct type
		check(division, String);
		check(winner, String);
		check(loser, String);

		var round = {division: division, isTie: isTie, winner: winner, loser: loser};
		Rounds.insert(round, function(err, action) {
			if (err) {
				throw new Meteor.Error("Adding round failed.")
			}
		});

		if (isTie) {
			Teams.update( 
				winner, 
				{ $push: { ties: loser } },
				{ $inc: { points: 1 } }
			);
			Teams.update(
				lower,
				{ $push: { ties: winner} },
				{ $inc: { points: 1 } }
			);
		} else {
			Teams.update(
				winner,
				{ $push: { wins: loser } },
				{ $inc: { points: 2 } }
			);
			Teams.update(
				loser,
				{ $push: { losses: winner } }
			);
		}		
	}
});