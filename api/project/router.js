const express = require('express');
const Projects = require("./model");

const router = express.Router();

router.get("/", (_,res, next) => {
    Projects.getAll()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
}); 

router.post('/', (req, res, next) => {
    Projects.createProject(req.body)
        .then(newProject => {
            res.status(201).json(newProject)
        })
        .catch(next)
})

module.exports = router;