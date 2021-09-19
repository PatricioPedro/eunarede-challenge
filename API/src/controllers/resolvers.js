const PlayerModel = require('../models/PlayerModel')

exports.resolvers = {
    Query: {
       players: () => PlayerModel.find()
    },
    Mutation: {
      insertPlayer: async (_, { name, team, gols }) => {
        const player = new PlayerModel({ name, team, gols })
        const response = await player.save()
        return response
      }
    }
}