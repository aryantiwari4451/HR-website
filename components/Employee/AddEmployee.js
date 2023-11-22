import { createEmployee } from "@/operations/user.fetch";
import { Button, FormControl, FormLabel, Input, Select } from "@chakra-ui/react"
import { useState } from "react";
import generateUniqueId from "generate-unique-id";
export default function AddEmployee() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [salary, setSalary] = useState(0);
    const [dateOfJoining, setDateOfJoining] = useState(null);
    const [leavesTaken, setLeavesTaken] = useState(0);
    const [centre, setCentre] = useState('')

    const handleSubmit = async () => {
        if (role === '' || name === '' || email === '' || dateOfJoining === '' || centre === '') {
            alert('Please fill in all the fields')
            return;
        }



        const data = {
            "email": email,
            "name": name,
            "role": role,
            "salary": salary,
            "dateOfJoining": dateOfJoining,
            "leavesTaken": leavesTaken,
            "centre": centre
        }

        try {
            const res = await createEmployee(data);
            if (res.status === 200) {
                alert('Employee created successfully');
                window.location.reload();
            } else {
                console.log(res.message);
                alert('Internal Server Error')
            }
        } catch (error) {
            console.log(error.message)
        }
        return;
    }
    return (
        <div>
            <FormControl>
                <FormLabel>Name Of Employee</FormLabel>
                <Input onChange={(e) => setName(e.target.value)} type='text' />
            </FormControl>
            <FormControl marginTop={"1rem"}>
                <FormLabel>Email Of Employee</FormLabel>
                <Input onChange={(e) => setEmail(e.target.value)} type='email' />
            </FormControl>
            <FormControl marginTop={"1rem"}>
                <FormLabel>Salary Of Employee</FormLabel>
                <Input onChange={(e) => setSalary(e.target.value)} type='number' />
            </FormControl>
            <FormControl marginTop={"1rem"}>
                <FormLabel>Leaves taken by Employee</FormLabel>
                <Input onChange={(e) => setLeavesTaken(e.target.value)} type='number' />
            </FormControl>
            <FormControl marginTop={"1rem"}>
                <FormLabel>Date Of Joining</FormLabel>
                <Input onChange={(e) => setDateOfJoining(e.target.value)} type='date' />
            </FormControl>
            <FormControl marginTop={"1rem"}>
                <FormLabel>Role</FormLabel>
                <Select onChange={(e) => setRole(e.target.value)} placeholder='Select role of Employee'>
                    <option value="PROFESSOR">Professor</option>
                    <option value="TEACHING_ASSISTANT">Teaching Assistant</option>
                    <option value="ASSISTANT_STAFF">Assistant Staff</option>
                    <option value="LAB_STAFF">Lab Staff</option>
                    <option value="SPORTS_STAFF">Sports Staff</option>
                    <option value="ADMIN">Admin</option>
                    <option value="SECURITY">Security</option>
                    <option value="HR_DEPARTMENT">HR Department</option>
                    <option value="WARDEN">Warden</option>
                    <option value="ASSISTANT_WARDEN">Assistant Warden</option>
                </Select>
            </FormControl>
            <FormControl marginTop={"1rem"}>
                <FormLabel>Center</FormLabel>
                <Select onChange={(e) => setCentre(e.target.value)} placeholder='Select center of Employee'>
                    <option value="SNIOE_NOIDA">SNIOE Noida</option>
                    <option value="SNU_CHENNAI">SNU Chennai</option>
                    <option value="SNU_AHMEDABAD">SNU Ahmedabad</option>
                    <option value="SNU_BANGALORE">SNU Bangalore</option>
                </Select>
            </FormControl>
            <Button onClick={() => handleSubmit()} marginTop={"1rem"} colorScheme={"blue"}>Add Employee</Button>
        </div>
    )
}