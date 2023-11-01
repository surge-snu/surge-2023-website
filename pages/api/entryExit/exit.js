import { addOutCampus } from "../../../services/userServer";

export default async function markOut(req, res) {
    const data = req.body;
    const response = await addOutCampus(data);
    res.send({ status: 200, message: JSON.stringify(response) });
}