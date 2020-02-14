const jwt = require("jsonwebtoken")
import config from '../config/config';

function createToken(user) {
    let payload = {
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        username: user.username,
        role: user.id_role
    }

    return jwt.sign(payload, config.SECRET_JWT, {
        expiresIn: "2 days",
        notBefore: 0,
        issuer: DOMAIN,
        audience: CONSUMER
    })
}

function decodeToken(token) {
    let payload = {};
    jwt.verify(token, config.SECRET_JWT, (err, data) => {
        if (err) {
            payload = err.message;
        } else {
            payload = data;
        }
    });
    return payload;
}
module.exports = {
    createToken,
    decodeToken
};
