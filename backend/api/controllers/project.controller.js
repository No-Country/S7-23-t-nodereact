import Project from "../models/projects.js";

const projection = { createdAt: 0, updatedAt: 0, __v: 0, avaliable: 0 }

const getProjects = async (req, res) => {
    //////buscamos los proyectos
    const {title, category, autor} = req.query;
    var allProjects = await Project.find({}, {projection});

    try{
        ///busqueda por nombre
        if(title){
            let projectByName = await allProjects.filter(e=>
                e. title.toLowerCase().includes(title.toLowerCase())
                );
            projectByName.length > 0
            ?res.status(200).json(projectByName[0])
            :res.status(404).json({message: "Project not found"})
        }
        //busqueda por categoria
        else if (category){
            const projectByCategory = await Project.find({ category: { $in: [`${category}`] } }, { projection })
            res.status(200).json(projectByCategory)
        }
        ////busqueda por creador
        else if(autor){
            const projectByAutor = await Project.find ({ autor: {$eq: `${autor}` }} );
            res.status(200).json(projectByAutor)
        } 
        ////GET a todos los proyectos
        else {
            allProjects.length > 0
            ? res.status(200).json(allProjects)
            : res.status(404).json({message: "No cards"})
        }
    }
    catch (error) {
        console.log(error.message)
      }
};

const postProject = async (req, res) => {
    const project = new Project(req.body)
    try {
        const newProject = await project.save()
        res.status(201).json(newProject)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export {getProjects, postProject};