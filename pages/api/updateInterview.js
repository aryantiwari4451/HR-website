import { updateInterview } from "@/services/interview.service";

export default async function  updateInter(req,res) {
    const { id, ...data } = req.body;
    try {
        const resp = await updateInterview(id, data);
        res.send({ status: 200, message: "User updated successfully" });
    } catch (error) {
        console.log(error.message);
        res.send({ status: 400, message: "Internal server error" })
    }
}