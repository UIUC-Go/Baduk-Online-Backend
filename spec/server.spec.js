var request = require('request')
const fetch = require('node-fetch');
host = 7777
testUsername = 'testUser'
testRoomname = 'roomTest'

describe('calc', () => {
    it('should multiply 2 and 2', () => {
        expect(2 * 2).toBe(4)
    })
})

// describe('post user info', () => {
//     it('should return 200 Ok', (done) => {
//         request.post({
//             url: `http://localhost:${host}/user/${testUsername}`,
//             json: true,
//             body: {
//                 "username": testUsername,
//                 "email": `${testUsername}@something.com`,
//                 "password": "password",
//                 "rank": "3D"
//             }
//         }, (err, res) => {
//             expect(res.statusCode).toEqual(201)
//             // console.log(res.statusCode)
//             done()
//         })
//     })
// })

describe('get user info', () => {
    it('should return 200 Ok', (done) => {
        request.get(`http://localhost:${host}/user/${testUsername}`, (err, res) => {
            expect(res.statusCode).toEqual(200)
            // console.log(res.statusCode)
            done()
        })
    })
    it('should return a list, thats not empty', (done) => {
        request.get(`http://localhost:${host}/user/${testUsername}`, (err, res) => {
            // console.log(res)
            expect(JSON.parse(res.body).username).toEqual(testUsername)
            done()
        })
    })
})

describe('delete user info', () => {
    it('should return 204 Ok', (done) => {
        request.get(`http://localhost:${host}/user/${testUsername}`, (err, res) => {
            expect(res.statusCode).toEqual(200)
            // console.log(res.statusCode)
            done()
        })
    })
})

describe('post room info', () => {
    it('should return 200 Ok', (done) => {
        request.post({
            url: `http://localhost:${host}/room/${testRoomname}`,
            json: true,
            body: {
                "room_id": testRoomname,
                "scoreResult": {"area": [], "territory": []},
                "players": [],
                "bystanders": [],
                "currentTurn": 0
            }

        }, (err, res) => {
            expect(res.statusCode).toEqual(201)
            // console.log(res.statusCode)
            done()
        })
    })
})

describe('get room info', () => {
    it('should return a specific room', (done) => {
        request.get(`http://localhost:${host}/room/${testRoomname}`, (err, res) => {
            expect(res.statusCode).toEqual(200)
            expect(JSON.parse(res.body).room_id).toEqual(testRoomname)
            done()
        })
    })
    it('should return all of the active rooms', (done) => {
        request.get(`http://localhost:${host}/room/`, (err, res) => {
            expect(res.statusCode).toEqual(200)
            done()
        })
    })
})

describe('delete room info', () => {
    it('should return 204 Ok', (done) => {
        request.get(`http://localhost:${host}/room/${testRoomname}`, (err, res) => {
            expect(res.statusCode).toEqual(200)
            done()
        })
    })
})

describe('get room message info', () => {
    it('should return a list of messages Ok', async (done) => {
        let res = await fetch(`http://localhost:${host}/message/room/${testRoomname}`, {
            method: 'POST',
            headers: {
                Authorization: `bearer`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "room_id": testRoomname,
                "username": testUsername,
                "message": 'hello',
                "sentTime": new Date()
            })
        })

        expect(res.ok).toBe(true)

         res = await fetch(`http://localhost:${host}/message/room/${testRoomname}`, {
            method: 'GET',
            headers: {
                Authorization: `bearer`,
                'Content-Type': 'application/json',
            },
        })
        expect(res.ok).toBe(true)
        let messages = await res.json()
        // console.log(messages)
        done()
    })
})