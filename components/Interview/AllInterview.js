import {
    TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Button, Tag, ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Modal,
} from "@chakra-ui/react"
import { useState } from "react"
import UpdateInterview from "./UpdateInterview";
import { delInter } from "@/operations/interview.fetch";

export default function AllInterview({ interviews }) {
    const [updateModal, showUpdateModal] = useState(false);
    const [interId, setInterId] = useState(null)
    function formatStatus(status) {
        return status
            .split('_') // Split the role string by underscores
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
            .join(' ')
            .toUpperCase(); // Join the words with spaces
    }
    function getStatusColor(status) {
        const colorSchemes = {
            ONLINE_INTERVIEW: 'blue',
            SELECTED: 'green',
            HR_ROUND: 'yellow',
            SALARY_DISCUSSION: 'orange',
            CV_SCREENING: 'gray',
        };
        return colorSchemes[status] || 'gray';
    }
    const handleDelete = async (id) => {
        const data = {
            id: id,
        }
        const res = await delInter(data);
        if (res.status === 200) {
            alert("Deleted");
            window.location.reload()
        } else {
            alert("Internal Server error")
        }
    }
    return (
        <div>
            <Modal isOpen={updateModal} onClose={() => showUpdateModal(!updateModal)} size='xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Interviewee</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <UpdateInterview interview={interviews.find(interview => interview.id === interId)} />
                    </ModalBody>
                </ModalContent>
            </Modal>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Status</Th>
                            <Th>Update</Th>
                            <Th>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {interviews.map((interview, index) => {
                            return (
                                <Tr key={index}>
                                    <Td>{interview.name}</Td>
                                    <Td>{interview.email}</Td>
                                    <Td>
                                        <Tag size={'lg'} variant={'solid'} colorScheme={getStatusColor(interview.status)}>{formatStatus(interview.status)}</Tag>
                                    </Td>
                                    <Td>
                                        {
                                            interview.status === 'SELECTED' ?
                                                <Button disabled>Cannot Update</Button>
                                                :
                                                <Button onClick={() => { showUpdateModal(!updateModal); setInterId(interview.id) }} colorScheme={"teal"}>Update</Button>
                                        }
                                    </Td>
                                    <Td>
                                        <Button onClick={() => handleDelete(interview.id)} colorScheme={"red"}>Delete</Button>
                                    </Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}