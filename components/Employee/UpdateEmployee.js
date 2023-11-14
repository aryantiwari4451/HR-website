import { updateEmployee } from "@/operations/user.fetch";
import { Button, FormControl, FormLabel, Input, Select } from "@chakra-ui/react"
import { useState } from "react";
export default function UpdateEmployee({user}) {
    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.name);
    const [role, setRole] = useState(user.role);
    const [salary, setSalary] = useState(user.salary);
    const [dateOfJoining, setDateOfJoining] = useState(user.dateOfJoining);
    const [leavesTaken, setLeavesTaken] = useState(user.leavesTaken);

    const handleSubmit = async () => {
        const data = {
            "id" : user.id,
            "email": email,
            "name": name,
            "role": role,
            "salary": salary,
            "dateOfJoining": dateOfJoining,
            "leavesTaken": leavesTaken
        }
        try {
            const res = await updateEmployee(data);
            if(res.status === 200) {
                alert('Employee updated');
                window.location.reload();
            } else {
                console.log(res.message);
                alert('Internal server error');
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div>
            <FormControl>
                <FormLabel>Name Of Employee</FormLabel>
                <Input value={name} onChange={(e) => setName(e.target.value)} type='text' />
            </FormControl>
            <FormControl marginTop={"1rem"}>
                <FormLabel>Email Of Employee</FormLabel>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} type='email' />
            </FormControl>
            <FormControl marginTop={"1rem"}>
                <FormLabel>Salary Of Employee</FormLabel>
                <Input value={parseInt(salary)} onChange={(e) => setSalary(e.target.value)} type='number' />
            </FormControl>
            <FormControl marginTop={"1rem"}>
                <FormLabel>Leaves taken by Employee</FormLabel>
                <Input value={parseInt(leavesTaken)} onChange={(e) => setLeavesTaken(e.target.value)} type='number' />
            </FormControl>
            <FormControl marginTop={"1rem"}>
                <FormLabel>Date Of Joining</FormLabel>
                <Input value={user.dateOfJoining.substring(0, 10)} onChange={(e) => setDateOfJoining(e.target.value)} type='date' />
            </FormControl>
            <FormControl marginTop={"1rem"}>
                <FormLabel>Role</FormLabel>
                <Select value={user.role} onChange={(e) => setRole(e.target.value)} placeholder='Select role of Employee'>
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
            <Button onClick={() => handleSubmit()} marginTop={"1rem"} colorScheme={"blue"}>Update Employee</Button>
        </div>
    )
}