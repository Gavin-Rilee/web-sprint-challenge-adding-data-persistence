const express = require("express");

const ResourcesRouter = require('./resource/router')
const ProjectsRouter = require('./project/router')
const TasksRouter = require('./task/router')

const server = express();

server.use(express.json());

server.use('/api/resources', ResourcesRouter)
server.use('/api/projects', ProjectsRouter)
server.use('/api/tasks', TasksRouter)

server.use((err,req,res,next)=> {
    res.status(500).json({message:err.message,stack:err.stack})
})

module.exports = server; 






