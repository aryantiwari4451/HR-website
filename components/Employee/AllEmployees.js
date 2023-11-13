import {
    TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Button, ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Modal,
    ModalOverlay
} from "@chakra-ui/react"
import { useState } from "react";
import UpdateEmployee from "./UpdateEmployee";
export default function AllEmployees() {
    const [updateModal, showUpdateModal] = useState(false);
    return (
        <div>
            <Modal isOpen={updateModal} onClose={() => showUpdateModal(!updateModal)} size='xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Employee</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <UpdateEmployee/>
                    </ModalBody>
                </ModalContent>
            </Modal>
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
                            <Th>Update</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Aryan Sethia</Td>
                            <Td>as188@snu.edu.in</Td>
                            <Td>Admin</Td>
                            <Td>1,00,000</Td>
                            <Td>11/11/2023</Td>
                            <Td>1</Td>
                            <Td>
                                <Button onClick={() => showUpdateModal(true)} colorScheme={"teal"}>Update</Button>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}