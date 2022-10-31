const { User } = require('../models');

const userData = [
    {
        username: "alicia_anwhistle",
        twitter: "aliciaa",
        github: "aliciaaw",
        email: "alicia_a@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "bernice_b",
        twitter: "berniceb",
        github: "berniceb",
        email: "bernice_b@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "claude_c",
        twitter: "claude",
        github: "claude",
        email: "claude_c@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "ashleymullikin",
        twitter: "ashleymullikin",
        github: "ashleymullikin",
        email: "denver_n@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "elliot_r",
        twitter: "elliotr",
        github: "elliotr",
        email: "elliot_r@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "frankie",
        twitter: "frankie_w",
        github: "frankie",
        email: "frankie@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;