const Database = require('../db/config');
module.exports = {
    async create(req, res) {
        const db = await Database()
        const pwd = req.body.password;
        let roomId = '';
        let isRoom = true;
        while (isRoom) {

            for (let index = 0; index < 6; index++) {
                roomId += Math.floor(Math.random() * 10).toString()
            }

            const roomsExistIds = await db.all(`SELECT id FROM rooms`)
            isRoom = roomsExistIds.some(id => id === parseInt(roomId))

            if (!isRoom) {
                await db.run(`INSERT INTO rooms (
                id,
                pass
                ) VALUES (
                    ${parseInt(roomId)},
                    ${pwd}
                )`);
            }
        }
        await db.close()
        res.redirect(`/room/${roomId}`)
    }
}