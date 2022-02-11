const {response, request} = require('express')

const usersGet = (req = request, res = response) => {
    const {q} = req.query;

    res.json({
        msg: 'get API - controller',
        q
    });
}

const usersPost = (req, res) => {
    const body = req.body;

    res.json({
        ok: true,
        msg: "post API - controller",
        body: body
    })
}

const usersPut = (req, res) => {
    const {id} = req.params;


    res.json({
        ok: true,
        msg: "put API - controller",
        id
    })
}

const usersDelete = (req, res) => {
    res.json({
        ok: true,
        msg: "delete API - controller"
    })
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}