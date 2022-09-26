const Database = require('../db/config');
module.exports = {
    async create(req, res) {
        const db = await Database()
        const pwd = req.body.password;
        let roomId = '';
        for (let index = 0; index < 6; index++) {
            roomId += Math.floor(Math.random() * 10).toString()
        }
        await db.run(`INSERT INTO rooms (
            id,
            pass
            ) VALUES (
                ${parseInt(roomId)},
                ${pwd}
                )`);
        await db.close()
        res.redirect(`/room/${roomId}`)
    }
}