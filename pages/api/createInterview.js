import { createInterview } from "@/services/interview.service";

export default async function createInter(req,res) {
    const {name, email, status} = req.body;
    if (email === '' || name === '' || status === '') {
        res.json({ status: 400, message: "Please fill in all the fields" });
        return;
    }
    const data = {
        "email": email,
        "name": name,
        "status" : status,
    }
    try {
        const response = await createInterview(data);
        res.send({ status: 200, message: "Interview created successfully", user: response });
    } catch (error) {
        console.log(error.message);
        res.send({status: 400, message : "Internal Server Errror"});
    }
}