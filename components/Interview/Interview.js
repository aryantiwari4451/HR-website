import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import AddInterview from "./AddInterview";
import AllInterview from "./AllInterview";

export default function Interview() {
    return (
        <Tabs>
            <TabList>
                <Tab>Add Interview Details</Tab>
                <Tab>All Interview Details</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <AddInterview />
                </TabPanel>
                <TabPanel>
                    <AllInterview />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}