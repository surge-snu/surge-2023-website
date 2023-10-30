import { addInCampus } from "../../../services/userServer";

export default async function markIn(req, res) {
    const data = req.body;
    const response = await addInCampus(data);
    res.send({ status: 200, message: JSON.stringify(response) });
}