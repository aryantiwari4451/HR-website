import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import AddInterview from "./AddInterview";
import AllInterview from "./AllInterview";

export default function Interview({ interviews }) {
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
                    <AllInterview interviews={interviews} />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}