import { createCenter, createUser } from "@/services/user.service";
import generateUniqueId from "generate-unique-id";
export default async function createEmployee(req, res) {
    const { email, name, role, salary, dateOfJoining, leavesTaken, centre } = req.body;
    if (email === '' || name === '' || dateOfJoining === '') {
        res.json({ status: 400, message: "Please fill in all the fields" });
        return;
    }
    const id2 = generateUniqueId({
        length: 3,
        useLetters: false
    });
    let centreId;
    if (centre === "SNIOE_NOIDA") {
        centreId = 0;
    } else if (centre === "SNU_CHENNAI") {
        centreId = 1;
    } else if (centre === "SNU_AHMEDABAD") {
        centreId = 2;
    } else {
        centreId = 3;
    }
    const data = {
        "id": parseInt(id2),
        "centerId": centreId,
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
        res.send({ status: 400, message: "Internal Server Errror" });
    }
}