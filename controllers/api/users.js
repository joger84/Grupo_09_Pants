const { Op } = require("sequelize");
const {User} = require("../../src/database/models")

module.exports = {
    show: async(req,res) => {
        const users = await User.findAll()
        
        console.log(users)
        
        return res.json({
			total: users.length,
            users
		})
    }
}