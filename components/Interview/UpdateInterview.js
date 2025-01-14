import useInterview from "@/hooks/useInterview"
import { updateInterview } from "@/operations/interview.fetch";
import { createEmployee } from "@/operations/user.fetch";
import { Button, FormControl, FormLabel, Input, Select } from "@chakra-ui/react"
import { useEffect, useState } from "react";
export default function UpdateInterview({ interview }) {
    const { selectedAdd, setSelectedAdd } = useInterview();
    const [status, setStatus] = useState(interview.role)
    const [email, setEmail] = useState(interview.email);
    const [name, setName] = useState(interview.name);
    const [salary, setSalary] = useState(0);
    const [role, setRole] = useState('');
    const [center, setCenter] = useState('');
    const [dateOfJoining, setDateOfJoining] = useState(null);
    useEffect(() => {
        if (status === 'SELECTED') {
            setSelectedAdd(true)
        } else {
            setSelectedAdd(false)
        }
    }, [status])
    const handleSubmit = async () => {
        if (name === '' || email === '' || status === '') {
            alert('Please fill in all the fields');
            return;
        }

        if (status === 'SELECTED') {
            if (role === '' || salary === '' || dateOfJoining === '') {
                alert('Please fill in all the fields')
                return;
            }
            const dataEmployee = {
                "email": email,
                "name": name,
                "role": role,
                "salary": salary,
                "dateOfJoining": dateOfJoining,
                "leavesTaken": "0",
                "centre" : center,
            }
            const dataInterview = {
                "id": interview.id,
                "email": email,
                "name": name,
                "status": status,
            }
            try {
                const resp1 = await createEmployee(dataEmployee);
                const resp2 = await updateInterview(dataInterview);
                if (resp1.status === 200 && resp2.status === 200) {
                    alert('Interview updated successfully')
                    window.location.reload()
                } else {
                    console.log(resp1.message, resp2.message);
                    alert('Internal server error');
                }
            } catch (error) {
                console.log(error.message);
            }
        } else {
            const dataInterview = {
                "id": interview.id,
                "email": email,
                "name": name,
                "status": status,
            }
            try {
                const resp2 = await updateInterview(dataInterview);
                if (resp2.status === 200) {
                    alert('Interview updated successfully')
                    window.location.reload()
                } else {
                    console.log(resp2.message);
                    alert('Internal server error');
                }
            } catch (error) {
                console.log(error.message);
            }
        }
    }
    return (
        <div>
            <FormControl>
                <FormLabel>Name</FormLabel>
                <Input value={interview.name} onChange={(e) => setName(e.target.value)} type='text' />
            </FormControl>
            <FormControl marginTop={"1rem"}>
                <FormLabel>Email</FormLabel>
                <Input value={interview.email} onChange={(e) => setEmail(e.target.value)} type='email' />
            </FormControl>
            <FormControl marginTop={"1rem"}>
                <FormLabel>Status</FormLabel>
                <Select value={interview.status} onChange={(e) => setStatus(e.target.value)} placeholder='Select status'>
                    <option value="CV_SCREENING">CV Screening</option>
                    <option value="ONLINE_INTERVIEW">Online Interview</option>
                    <option value="HR_ROUND">HR Round</option>
                    <option value="SALARY_DISCUSSION">Salary Discussion</option>
                    <option value="SELECTED">Selected</option>
                </Select>
            </FormControl>
            {
                selectedAdd ?
                    <FormControl marginTop={"1rem"}>
                        <FormLabel>Salary</FormLabel>
                        <Input onChange={(e) => setSalary(e.target.value)} type='number' />
                    </FormControl> : null
            }
            {
                selectedAdd ?
                    <FormControl marginTop={"1rem"}>
                        <FormLabel>Date of Joining</FormLabel>
                        <Input onChange={(e) => setDateOfJoining(e.target.value)} type='date' />
                    </FormControl> : null
            }
            {
                selectedAdd ?
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
                    </FormControl> : null
            }
            {
                selectedAdd ?
                    <FormControl marginTop={"1rem"}>
                        <FormLabel>Center</FormLabel>
                        <Select onChange={(e) => setCenter(e.target.value)} placeholder='Select center of Employee'>
                            <option value="SNIOE_NOIDA">SNIOE Noida</option>
                            <option value="SNU_CHENNAI">SNU Chennai</option>
                            <option value="SNU_AHMEDABAD">SNU Ahmedabad</option>
                            <option value="SNU_BANGALORE">SNU Bangalore</option>
                        </Select>
                    </FormControl> : null
            }
            <Button onClick={() => handleSubmit()} marginTop={"1rem"} colorScheme={"blue"}>Update Interviewee</Button>
        </div>
    )
}