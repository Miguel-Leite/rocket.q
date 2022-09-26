module.exports = {
    index(req, res) {
        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const pwd = req.body.password;

        console.log(`room = ${roomId}, questionId = ${questionId}, action = ${action}, password = ${pwd}`)
    }
}