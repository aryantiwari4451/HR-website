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

export default function AllInterview() {
    const [updateModal, showUpdateModal] = useState(false);
    return (
        <div>
            <Modal isOpen={updateModal} onClose={() => showUpdateModal(!updateModal)} size='xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Interviewee</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <UpdateInterview />
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
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Aryan Sethia</Td>
                            <Td>as188@snu.edu.in</Td>
                            <Td>
                                <Tag size={'lg'} color={"grey"}>CV_SCREENING</Tag>
                            </Td>
                            <Td>
                                <Button onClick={() => showUpdateModal(!updateModal)} colorScheme={"teal"}>Update</Button>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}