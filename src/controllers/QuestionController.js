const Database = require('../db/config')
module.exports = {
    async index(req, res) {
        const db = await Database()
        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const pwd = req.body.password;
        const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`)
        if (verifyRoom.pass == pwd) {
            if (action === 'delete') await db.run(`DELETE FROM questions WHERE id=${questionId}`);

            if (action === 'check') await db.run(`UPDATE questions SET read=1 WHERE id=${questionId}`);
        } else {
            return res.render('passincorrect', { roomId: roomId })
        }
        return res.redirect(`/room/${roomId}`)
    },
    async create(req, res) {
        const db = await Database();
        const question = req.body.question;
        const roomId = req.params.room;

        await db.run(`INSERT INTO questions (title, read, room_id) VALUES ("${question}",0,${roomId})`)

        await db.close()

        res.redirect(`/room/${roomId}`);
    }
}