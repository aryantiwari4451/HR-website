import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import AddEmployee from "./AddEmployee";
import AllEmployees from "./AllEmployees";

export default function Employee({users}) {
    return (
        <Tabs>
            <TabList>
                <Tab>Add Employee Details</Tab>
                <Tab>All Employee Details</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <AddEmployee />
                </TabPanel>
                <TabPanel>
                    <AllEmployees users={users} />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}