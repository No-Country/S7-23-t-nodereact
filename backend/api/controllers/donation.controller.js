import Donation from "../models/donations.js";
// import { findElement, findOneElement } from "../utils/users.utils.js";

const projection = { createdAt: 0, updatedAt: 0, __v: 0, avaliable: 0 }

const getDonation = async (req, res) => {
  const query = req.query;
  const profile = await findElement(query);
  try {
    if (profile) {
      res.json(profile);
    } else {
      res.status(404).json({ message: "Perfil no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al buscar el perfil" });
  }
};
//Nueva donación
const postDonation = async (req, res) => {
    const donation = new Donation(req.body);
    var allProjects = await Project.find({}, {projection});
    let projectByName = allProjects.filter(e =>
        e.title.includes(donation.projectId)) 
       
  try {
    const newDonation = await donation.save();

    const amount = {
        parcialAmount: parseInt(donation.amount) + parseInt(ctByName[0].parcialAmount)
    }
//Actualiza el parcialAmount del proyecto
    const updateProject = await Donation.findByIdAndUpdate(
        {_id : projectByName[0]._id} , 
        amount, {
        new: true
      })
//Actualiza el estado de la donación
    const updateCompletion = await Donation.findByIdAndUpdate(
        {_id : donation._id},
        {completed: 'completed'}
    )

    res.status(201).json(newDonation)
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

export { getDonation , postDonation };
