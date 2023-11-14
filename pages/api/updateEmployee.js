import { updateUser } from "@/services/user.service";

export default async function updateEmployee(req, res) {
    const { id, ...data } = req.body;
    try {
        const resp = await updateUser(id, data);
        res.send({ status: 200, message: "User updated successfully" });
    } catch (error) {
        console.log(error.message);
        res.send({ status: 400, message: "Internal server error" })
    }
}