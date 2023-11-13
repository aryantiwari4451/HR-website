import { Button, FormControl, FormLabel, Input, Select } from "@chakra-ui/react"
export default function AddEmployee() {
    return (
        <div>
            <FormControl>
                <FormLabel>Name Of Employee</FormLabel>
                <Input type='text' />
            </FormControl>
            <FormControl marginTop={"1rem"}>
                <FormLabel>Email Of Employee</FormLabel>
                <Input type='email' />
            </FormControl>
            <FormControl marginTop={"1rem"}>
                <FormLabel>Salary Of Employee</FormLabel>
                <Input type='number' />
            </FormControl>
            <FormControl marginTop={"1rem"}>
                <FormLabel>Leaves taken by Employee</FormLabel>
                <Input type='number' />
            </FormControl>
            <FormControl marginTop={"1rem"}>
                <FormLabel>Date Of Joining</FormLabel>
                <Input type='date' />
            </FormControl>
            <FormControl marginTop={"1rem"}>
                <FormLabel>Role</FormLabel>
                <Select placeholder='Select role of Employee'>
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
            <Button marginTop={"1rem"} colorScheme={"blue"}>Add Employee</Button>
        </div>
    )
}