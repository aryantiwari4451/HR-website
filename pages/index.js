import Employee from '@/components/Employee/Employee'
import Interview from '@/components/Interview/Interview'
import { fetchAllUsers } from '@/services/user.service'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading } from '@chakra-ui/react'

export async function getServerSideProps(context) {
  const users = await fetchAllUsers();
  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    }
  }
}

export default function Home({ users }) {
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
            <Employee users={users} />
          </TabPanel>
          <TabPanel>
            <Interview />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
