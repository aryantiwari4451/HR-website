import { createUser } from "@/services/user.service";

export default async function createEmployee(req, res) {
    const { email, name, role, salary, dateOfJoining, leavesTaken } = req.body;
    if (email === '' || name === '' || dateOfJoining === '') {
        res.json({ status: 400, message: "Please fill in all the fields" });
        return;
    }
    const data = {
        "email": email,
        "name": name,
        "role": role,
        "salary": parseInt(salary),
        "dateOfJoining": new Date(dateOfJoining),
        "leavesTaken": parseInt(leavesTaken)
    }
    try {
        const response = await createUser(data);
        res.send({ status: 200, message: "Employee created successfully", user: response });
    } catch (error) {
        console.log(error.message);
        res.send({status: 400, message : "Internal Server Errror"});
    }
}