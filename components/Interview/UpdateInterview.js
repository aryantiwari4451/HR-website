import useInterview from "@/hooks/useInterview"
import { Button, FormControl, FormLabel, Input, Select } from "@chakra-ui/react"
import { useEffect, useState } from "react";
export default function UpdateInterview() {
    const { selectedAdd, setSelectedAdd } = useInterview();
    const [status, setStatus] = useState('CV_SCREENING')
    useEffect(() => {
        if (status === 'SELECTED') {
            setSelectedAdd(true)
        } else {
            setSelectedAdd(false)
        }
    }, [status])
    return (
        <div>
            <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type='text' />
            </FormControl>
            <FormControl marginTop={"1rem"}>
                <FormLabel>Email</FormLabel>
                <Input type='email' />
            </FormControl>
            <FormControl marginTop={"1rem"}>
                <FormLabel>Status</FormLabel>
                <Select onChange={(e) => setStatus(e.target.value)} placeholder='Select status'>
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
                        <Input type='number' />
                    </FormControl> : null
            }
            {
                selectedAdd ?
                    <FormControl marginTop={"1rem"}>
                        <FormLabel>Date of Joining</FormLabel>
                        <Input type='date' />
                    </FormControl> : null
            }
            <Button marginTop={"1rem"} colorScheme={"blue"}>Update Interviewee</Button>
        </div>
    )
}