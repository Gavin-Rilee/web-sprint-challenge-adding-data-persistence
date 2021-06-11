const express = require('express');
const Projects = require("./model");

const router = express.Router();

router.get("/", (_,res, next) => {
    Projects.getAll()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => next(err))
}); 

router.post('/', (req, res, next) => {
    Projects.createProject(req.body)
        .then(newProject => {
            res.status(201).json(newProject)
        })
        .catch(err => next(err))
})

module.exports = router;