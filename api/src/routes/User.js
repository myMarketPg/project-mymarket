const express = require('express');
const router = express.Router();
const controllers = require('./controllers/users');
const { User } = require('../db')

router.get('/', async (req, res, next) => {
    const users = await controllers.listUsers();
    return res.status(200).json({users: users});
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const allUsers = await controllers.listUsers();
    try {
        if(id) {
            const userId = allUsers.filter(e => e.id == id);
            userId.length?
            res.status(200).json(userId) :
            res.status(404).send('Usuario no encontrado')
        }
    } catch (error) {
        alert('Hubo un problema', error)
    }
});

router.post('/', async (req, res) => {
    const {name, password} = req.body;
    if(!name || ! password) {
        return res.status(400).json({info: 'falta ingresar un dato'})
    }
    try {
        const createUser = User.create({
            name,
            password
        })
        res.status(200).send('Usuario agregado')
    } catch (error) {
        alert('Hubo un problema', error)
    }
});

module.exports = router;