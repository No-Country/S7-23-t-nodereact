import Donation from "../models/donations.js";
import Project from "../models/projects.js";
import { findElement, findOneElement } from "../utils/users.utils.js";

const projection = { createdAt: 0, updatedAt: 0, __v: 0, avaliable: 0 }

const getDonation = async (req, res) => {
  const query = req.query;
  const profile = await findElement(query);
  try {

    if (profile) {
      res.json(profile);
    } else {
      res.status(404).json({ message: "Donación no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al buscar la donación solicitada" });
  }
};
//Nueva donacion
const postDonation = async (req, res) => {
    const donation = new Donation(req.body);
    console.log("Donacion")
    console.log(donation)
    // var allProjects = await Project.find({}, {projection});
    console.log(donation.projectId);
    let projectByName = await Project.findById(donation.projectId);
    console.log(projectByName)
    // .filter(e =>
    //     e.title.includes(donation.projectId)) 
       
  try {
    console.log(projectByName.parcialAmount)
    const amount = {
        parcialAmount: parseInt(donation.amount) + parseInt(projectByName.parcialAmount)
    }
    console.log(amount)
//Actualiza el parcialAmount del proyecto
    const updateProject = await Project.findByIdAndUpdate(
        {_id : donation.projectId} , 
        amount, {
        new: true
      })
      console.log(updateProject)
//Actualiza el estado de la donación cuando pago ok
    const updateCompletion = await Donation.findByIdAndUpdate(
        {_id : donation._id.valueOf()},
        {completed: 'completed'},
        {new: true}
    )
    console.log(updateCompletion)
    const newDonation = await donation.save();

    res.status(201).json(newDonation)
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

// acceptWorkDonation
const acceptWorkDonation = async (req, res) => {
  const { id } = req.params;

  try {
    const acceptedDonation = await Donation.findByIdAndUpdate(
      {_id : donation._id},
      {completed: 'completed'},
      {new: true}
    );
    res.status(200).json(acceptedDonation);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};


export { getDonation , postDonation, acceptWorkDonation };
