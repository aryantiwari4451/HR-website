import {
    TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Button, ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Modal,
    ModalOverlay,
    Tag
} from "@chakra-ui/react"
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react"
import { useState } from "react";
import UpdateEmployee from "./UpdateEmployee";
export default function AllEmployees({ users }) {
    function formatDateToDisplay(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }
    function formatRole(role) {
        return role
            .split('_') // Split the role string by underscores
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
            .join(' '); // Join the words with spaces
    }
    function getRoleColor(role) {
        // Define a color scheme for each role
        const colorSchemes = {
            PROFESSOR: 'blue',
            TEACHING_ASSISTANT: 'green',
            ASSISTANT_STAFF: 'yellow',
            LAB_STAFF: 'purple',
            SPORTS_STAFF: 'orange',
            ADMIN: 'teal',
            SECURITY: 'red',
            HR_DEPARTMENT: 'pink',
            WARDEN: 'cyan',
            ASSISTANT_WARDEN: 'gray',
        };

        // Use the color scheme for the given role or default to gray if not found
        return colorSchemes[role] || 'gray';
    }
    const [updateModal, showUpdateModal] = useState(false);
    const [updateUserId, setUpdateUserId] = useState(null);
    const [role, setRole] = useState('');
    const [joinDateFilter, setJoinDateFilter] = useState('');
    const [salaryFilter, setSalaryFilter] = useState('');
    return (
        <div>
            <Modal isOpen={updateModal} onClose={() => showUpdateModal(!updateModal)} size='xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Employee</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <UpdateEmployee user={users.find(user => user.id === updateUserId)} />
                    </ModalBody>
                </ModalContent>
            </Modal>
            <FormControl marginTop={"1rem"}>
                <FormLabel>Filter Emplyees with Role</FormLabel>
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
                <FormLabel>Joining Date {`>`}</FormLabel>
                <Input
                    type="date"
                    value={joinDateFilter}
                    onChange={(e) => setJoinDateFilter(e.target.value)}
                />
            </FormControl>
            <FormControl marginTop={"1rem"}>
                <FormLabel>Employee Salary {`>`}</FormLabel>
                <Input
                    type="number"
                    value={salaryFilter}
                    onChange={(e) => setSalaryFilter(e.target.value)}
                />
            </FormControl>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Role</Th>
                            <Th>Salary</Th>
                            <Th>Date Of Joining</Th>
                            <Th>Leaves Taken</Th>
                            <Th>Center</Th>
                            <Th>Update</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {users.map((user, index) => {
                            const isJoinDateFiltered = joinDateFilter ? new Date(user.dateOfJoining) > new Date(joinDateFilter) : true;
                            const isSalaryFiltered = salaryFilter ? user.salary > parseFloat(salaryFilter) : true;
                            if (role === '' && isJoinDateFiltered && isSalaryFiltered) {
                                return (
                                    <Tr key={index}>
                                        <Td>{user.name}</Td>
                                        <Td>{user.email}</Td>
                                        <Td>
                                            <Tag variant={'solid'} colorScheme={getRoleColor(user.role)}>
                                                {formatRole(user.role)}
                                            </Tag>
                                        </Td>
                                        <Td>{user.salary}</Td>
                                        <Td>{formatDateToDisplay(user.dateOfJoining)}</Td>
                                        <Td>{user.leavesTaken}</Td>
                                        <Td>{user.center.centreName}</Td>
                                        <Td>
                                            <Button onClick={() => { showUpdateModal(true); setUpdateUserId(user.id) }} colorScheme={"teal"}>Update</Button>
                                        </Td>
                                    </Tr>
                                )
                            } else {
                                if (user.role === role && isJoinDateFiltered && isSalaryFiltered) {
                                    return (
                                        <Tr key={index}>
                                            <Td>{user.name}</Td>
                                            <Td>{user.email}</Td>
                                            <Td>
                                                <Tag variant={'solid'} colorScheme={getRoleColor(user.role)}>
                                                    {formatRole(user.role)}
                                                </Tag>
                                            </Td>
                                            <Td>{user.salary}</Td>
                                            <Td>{formatDateToDisplay(user.dateOfJoining)}</Td>
                                            <Td>{user.leavesTaken}</Td>
                                            <Td>
                                                <Button onClick={() => { showUpdateModal(true); setUpdateUserId(user.id) }} colorScheme={"teal"}>Update</Button>
                                            </Td>
                                        </Tr>
                                    )
                                }
                            }
                        })}

                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}