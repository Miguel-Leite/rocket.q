const Database = require('../db/config')
module.exports = {
    index(req, res) {
        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const pwd = req.body.password;

        console.log(`room = ${roomId}, questionId = ${questionId}, action = ${action}, password = ${pwd}`)
    },
    async create(req, res) {
        const db = await Database()
        const question = req.body.question;
        const roomId = req.params.room

        await db.run(`INSERT INTO questions (title, read, room_id) VALUES ("${question}",0,${roomId})`)

        await db.close()

        res.redirect(`/room/${roomId}`);
    }
}