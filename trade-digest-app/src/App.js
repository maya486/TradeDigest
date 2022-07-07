import "./App.css";
// import { logo } from "./logo.svg";
import {
  Text,
  ChakraProvider,
  Box,
  CircularProgress,
  LinkBox,
  LinkOverlay,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Tag,
} from "@chakra-ui/react";

function App() {
  const date = "Fri Jun 10, 2022";
  const name = "Staple 3";
  const Divider = () => {
    return <div className="divider" />;
  };
  const Subdivider = () => {
    return <div className="subdivider" />;
  };
  const NotifItem = ({ name, details, timestamp }) => {
    return (
      <div className="notif-item">
        <div className="bullet"></div>
        <div className="notif-item-text">
          <p className="notif-name">{name}</p>
          <p className="notif-details">{details}</p>
          <p className="notif-timestamp">{timestamp}</p>
        </div>
      </div>
    );
  };
  const PunchItem = ({ name, details, href }) => {
    return (
      <div className="notif-item">
        <div className="bullet"></div>
        <div className="notif-item-text">
          <p className="notif-name">{name}</p>
          <p className="notif-details">{details}</p>
        </div>
        <LinkBox className="punch-item-link">
          <LinkOverlay href={href} />
          <Button id="punch-item-button" />
        </LinkBox>
      </div>
    );
  };
  const ReportHeader = ({ text }) => {
    return (
      <div className="report-header">
        <Divider />
        <p className="report-header-title">{text}</p>
        <Divider />
      </div>
    );
  };
  const CustomTab = ({ text }) => {
    return (
      <Tab
        className="tab"
        _active={{
          color: "#27364F",
          fontWeight: "700",
          borderBottom: "2px solid #27364F",
        }}
        _selected={{
          color: "#27364F",
          fontWeight: "700",
          borderBottom: "2px solid #27364F",
        }}
      >
        {text}
      </Tab>
    );
  };
  const WOVButton = ({ id, loc }) => {
    return (
      <>
        <div className="wov-button-wrapper">
          <Text className="wov-button-id">{id}</Text>
          <Tag borderRadius="none" bg="#F5F4FA">
            Open
          </Tag>
          <Text className="wov-button-loc">{loc}</Text>
          <></>
        </div>
        <AccordionIcon />
      </>
    );
  };
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <img src="logo.svg" className="App-logo" alt="logo" />
          <Text id="date">{date}</Text>
        </header>
        <Divider />
        <p id="greeting">Hello, {name}!</p>
        <Box className="notifs" boxShadow={"md"}>
          <p id="notif-header">Notifications (2)</p>
          <Divider />
          <NotifItem
            name="Work order price update"
            details="KER:00264 | Jasper 1C | Lot 72"
            timestamp="2 hours ago"
          />
          <Divider />
          <NotifItem
            name="Work order has been approved"
            details="KER:00264 | Jasper 1C | Lot 72"
            timestamp="6 hours ago"
          />
        </Box>
        <ReportHeader text="Upcoming Pay Period" />
        <div className="upp-wrapper">
          <CircularProgress
            id="circle-progress"
            size="240px"
            value={20}
            thickness="7px"
            color="#FC1E68"
          />
          <div className="inner-progress-text">
            <Text id="countdown-text">4 Days</Text>
            <Text id="countdown-helper">Until Next Pay Run</Text>
          </div>
          <Text id="punch-items-text">
            Remaining Punch Items to Check-off Work Orders:{" "}
          </Text>
        </div>
        <Subdivider />
        <div className="punch-items-wrapper">
          <Box className="punch-item-box" boxShadow={"lg"}>
            <PunchItem
              name="Inspect footing for cracks"
              details="Jasper 1C | Lot 5"
            />
          </Box>
          <Box className="punch-item-box" boxShadow={"lg"}>
            <PunchItem
              name="Framing inspection failed, fix some anchor bolts"
              details="Jasper 1C | Lot 5"
            />
          </Box>
        </div>
        <ReportHeader text="Work Orders and VPOs" />
        <Tabs className="work-tabs" isFitted variant="line">
          <TabList css={{ border: "1px solid #DCDFE2" }}>
            <CustomTab text="Work Orders" />
            <CustomTab text="VPOs" />
            <CustomTab text="Approved" />
          </TabList>

          <TabPanels>
            <TabPanel css={{ margin: 0, padding: 0 }}>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <WOVButton id="KER:201986" loc="Jasper 1C | Lot 5" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <WOVButton id="KER:201987" loc="Jasper 1C | Lot 5" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <WOVButton id="KER:201988" loc="Jasper 1C | Lot 5" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <WOVButton id="KER:201989" loc="Jasper 1C | Lot 5" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <ReportHeader text="Material Tracker" />
      </div>
    </ChakraProvider>
  );
}

export default App;
