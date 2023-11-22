import { deleteInterview } from "@/services/interview.service";

export default async function deleteInter(req, res) {
    const { id } = req.body;
    try {
        const resp = await deleteInterview(id)
        res.send({ status: 200 });
    } catch (err) {
        console.log(err.message);
        res.send({ status: 400 })
    }
}