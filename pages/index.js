import Employee from '@/components/Employee/Employee'
import Interview from '@/components/Interview/Interview'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading } from '@chakra-ui/react'
export default function Home() {
  return (
    <>
      <Heading padding={"2rem"}>Welcome HR of Shiv Nadar University</Heading>
      <Tabs paddingLeft={"2rem"} paddingRight={"2rem"}>
        <TabList>
          <Tab>EMPLOYEE</Tab>
          <Tab>INTERVIEW</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Employee />
          </TabPanel>
          <TabPanel>
            <Interview />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
