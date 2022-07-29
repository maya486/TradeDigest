import "./App.css";
import { BiGift } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";
import { TbCircleCheck } from "react-icons/tb";
import { IoWarning } from "react-icons/io5";
import { useEffect } from "react";
import {
  BsFillCheckCircleFill,
  BsExclamationCircle,
  BsThreeDots,
} from "react-icons/bs";
import { RiTruckLine } from "react-icons/ri";
import logo from "./images/logo.png";
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
  TagLabel,
  TagLeftIcon,
  Icon,
  Stack,
  Spacer,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
const date = "Mon Jul 18, 2022";
const name = "Staple 3";
const CustomDivider = () => {
  return <div className="divider" />;
};
const Subdivider = () => {
  return <div className="subdivider" />;
};
const BigDivider = () => {
  return <div className="bigdivider" />;
};
const CustomIcon = ({ type }) => {
  // eslint-disable-next-line default-case
  switch (type) {
    case "warning":
      return <Icon as={IoWarning} w="18px" h="18px" color="#FBA01C" />;
    case "success":
      return (
        <Icon as={BsFillCheckCircleFill} w="16px" h="16px" color="#31A881" />
      );
    case "Delivered":
      return <Icon as={TbCircleCheck} w="16px" h="16px" color="#3E4C63" />;
    case "Delayed":
      return (
        <Icon as={BsExclamationCircle} w="16px" h="16px" color="#3E4C63" />
      );
    case "Order Placed":
      return <Icon as={BsThreeDots} w="16px" h="16px" color="#3E4C63" />;
    case "On The Way":
      return <Icon as={RiTruckLine} w="16px" h="16px" color="#3E4C63" />;
  }
  return <Icon as={TbCircleCheck} w="16px" h="16px" color="black" />;
};
const NotifItem = ({ name, loc, details, icon_type, time, id }) => {
  return (
    <div className="notif-item">
      <CustomIcon type={icon_type} />
      <div className="notif-item-text">
        <p className="notif-name">{name}</p>
        <p className="notif-id">{id}</p>
        <p className="notif-loc">{loc}</p>
        <p className="notif-details">{details}</p>
      </div>
      <p className="notif-time">{time}</p>
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
        <LinkOverlay href={href} target="_blank" />
        {/* <div id="punch-item-button">[Icon]</div> */}
        <Icon as={FiExternalLink} w="20px" h="20px" />
      </LinkBox>
    </div>
  );
};
const ReportHeader = ({ text }) => {
  return (
    <div className="report-header">
      <BigDivider />
      <p className="report-header-title">{text}</p>
    </div>
  );
};
const CustomTab = ({ text }) => {
  return (
    <Tab
      className="tab"
      color="#04203E"
      width="50%"
      fontWeight="700"
      // height="30px"
      // borderRadius="15px"
      borderRadius="inherit"
      _active={{
        backgroundColor: "white",
        // borderRadius: "15px",
        borderRadius: "inherit",
      }}
      _selected={{
        backgroundColor: "white",
        // borderRadius: "15px",
        borderRadius: "inherit",
      }}
    >
      {text}
    </Tab>
  );
};
const WOVButton = ({ id, loc, isPaid }) => {
  return (
    <div className="wov-button-wrapper">
      {isPaid ? (
        <Tag
          className="wov-tag"
          borderRadius="none"
          bg="#DFF1EC"
          color="#2E5045"
        >
          Done
        </Tag>
      ) : (
        <Tag
          className="wov-tag"
          borderRadius="none"
          bg="#F5F4FA"
          color="#27364F"
        >
          Open
        </Tag>
      )}
      <div className="wov-button-text-wrapper">
        <Text className="wov-button-id">KER:{id}</Text>
        <Text className="wov-button-loc">{loc}</Text>
      </div>
      <AccordionIcon />
    </div>
  );
};
const MTButton = ({ info, icon_type }) => {
  return (
    <>
      <div className="mt-button-wrapper">
        {/* <div id="punch-item-button" fontSize="14px">
            [Icon]
          </div> */}
        {/* <Icon as={TbCircleCheck} w="17px" h="17px" /> */}
        <CustomIcon type={icon_type} className="mt-button-icon" />
        <Text className="mt-button-type">{icon_type}</Text>
        <Text className="mt-button-info">{info}</Text>
        <AccordionIcon className="mt-button-dropdown" />
      </div>
    </>
  );
};
const CustomAccordionButton = ({ id, loc, isPaid = false }) => {
  return (
    <h2>
      <AccordionButton fontSize="14px">
        <WOVButton id={id} loc={loc} isPaid={isPaid} />
      </AccordionButton>
    </h2>
  );
};
const CustomMTAccordionButton = ({ date, info, icon_type }) => {
  return (
    <h2>
      <AccordionButton fontSize="14px">
        <MTButton date={date} info={info} icon_type={icon_type} />
      </AccordionButton>
    </h2>
  );
};
const WOVPanel = ({ plan, item_list, elevation }) => {
  return (
    <>
      <div className="wov-panel-wrapper">
        <div className="wov-panel-names">
          <p>Plan:</p>
          <p>Elevation:</p>
          <p>Item:</p>
        </div>
        <div className="wov-panel-info">
          <p id="plan">{plan}</p>
          <p id="elevation">{elevation}</p>
          {item_list.map((lineitem) => (
            <p className="lineitem" key={lineitem}>
              {lineitem}
            </p>
          ))}
        </div>
      </div>
      {/* <div className="wov-panel-wrapper">
          <p id="plan">{plan}</p>
        </div>
        <div className="wov-panel-wrapper">
          <p id="item">{item}</p>
          <p id="elevation">{elevation}</p>
        </div> */}
    </>
  );
};
const MTPanel = ({ code, quantity, id, lots, isDelivered, date }) => {
  return (
    <>
      <div className="mt-panel-wrapper">
        <div className="mt-panel-names">
          <p>Tracking ID: </p>
          {isDelivered ? <p>Delivered On:</p> : <p>Est. Delivery Date:</p>}
          <p id="code">Item Code:</p>
          <p id="quantity">Qty: </p>
          <p>For Lot: </p>
        </div>
        <div className="mt-panel-info">
          <p>{id}</p>
          <p>{date}</p>
          <p>{code}</p>
          <p>{quantity}</p>
          <p>{lots}</p>
        </div>
      </div>
    </>
  );
};
const CustomAccordionPanel = ({ plan, item_list, elevation }) => {
  return (
    <AccordionPanel
      // bg="#F2F0ED"
      css={{
        margin: 0,
        padding: "5px 20px",
      }}
    >
      <WOVPanel plan={plan} item_list={item_list} elevation={elevation} />
    </AccordionPanel>
  );
};
const CustomMTAccordionPanel = ({
  code,
  quantity,
  id,
  lots,
  isDelivered,
  date,
}) => {
  return (
    <AccordionPanel
      css={{
        margin: 0,
        padding: "5px 20px",
        // borderTop: "1px solid #DBDDE1",
      }}
    >
      <MTPanel
        code={code}
        quantity={quantity}
        id={id}
        lots={lots}
        isDelivered={isDelivered}
        date={date}
      />
    </AccordionPanel>
  );
};
const RewardItem = ({ name, isClaimed, num }) => {
  return (
    <>
      <div className="reward-item-wrapper">
        <div className="reward-item-text">
          <p id="name">{name}</p>
          <p id="fulfill">Fulfill {num} Punch Items</p>
        </div>
        <div className="reward-item-tag">
          {isClaimed ? (
            <Tag borderRadius="2px" bg="#DFF1EC">
              <TagLeftIcon
                className="check-icon"
                boxSize="12px"
                as={CheckIcon}
                color="#1CC38D"
              />
              <TagLabel className="claim-label">Claimed</TagLabel>
            </Tag>
          ) : (
            <Tag borderRadius="2px" bg="#FBF9F6">
              <TagLabel className="claim-label">Claim</TagLabel>
            </Tag>
          )}
        </div>
      </div>
    </>
  );
};
const DemoAccordion = ({ isPaid = false, wv_arr = [0, 1, 0, 1] }) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <CustomAccordionButton
          id={wv_arr[0] === 1 ? "WO:201986" : "VPO:201986"}
          // id="KER:201986"
          loc="Jasper 1C | Lot 5"
          isPaid={isPaid}
        />
        <CustomAccordionPanel
          plan="5-Plex"
          item_list={["item_name #1"]}
          elevation="A"
        />
      </AccordionItem>
      <AccordionItem>
        <CustomAccordionButton
          id={wv_arr[1] === 1 ? "WO:201987" : "VPO:201987"}
          loc="Jasper 1C | Lot 5"
          isPaid={isPaid}
        />
        <CustomAccordionPanel
          plan="5-Plex"
          item_list={["item_name #1", "item name #2"]}
          elevation="A"
        />
      </AccordionItem>
      <AccordionItem>
        <CustomAccordionButton
          id={wv_arr[2] === 1 ? "WO:201988" : "VPO:201988"}
          loc="Jasper 1C | Lot 5"
          isPaid={isPaid}
        />
        <CustomAccordionPanel
          plan="5-Plex"
          item_list={["item_name #1", "item_name #2", "item_name #3"]}
          elevation="A"
        />
      </AccordionItem>
      <AccordionItem>
        <CustomAccordionButton
          id={wv_arr[3] === 1 ? "WO:201989" : "VPO:201989"}
          loc="Jasper 1C | Lot 5"
          isPaid={isPaid}
        />
        <CustomAccordionPanel
          plan="5-Plex"
          item_list={["item_name #1", "item_name #2", "item_name #3"]}
          elevation="A"
        />
      </AccordionItem>
    </Accordion>
  );
};
const StartLetter = ({ loc, date, href, plan, elevation }) => {
  return (
    <div className="start-letter-wrapper">
      <div className="start-letter-text">
        <Text className="start-letter-loc">{loc}</Text>
        <Text className="start-letter-plan-elevation">
          Plan: {plan} | Elevation: {elevation}
        </Text>
        <Text className="start-letter-date">Last Updated: {date}</Text>
      </div>
      <LinkBox className="start-letter-link">
        <LinkOverlay href={href} />
        <Icon as={FiExternalLink} w="17px" h="17px" />
      </LinkBox>
    </div>
  );
};
const TimelineNode = ({ isRed = false, text }) => {
  return (
    <div className="timeline-node">
      <div className="timeline-bullet" />
      <div className="timeline-node-text">{text}</div>
    </div>
  );
};
const TimelineItem = ({ name, loc, dates }) => {
  return (
    <>
      {/* <Subdivider /> */}
      <div className="timeline-divider" />
      <Box
        className="timeline-item-box"
        css={{ padding: "0px 15px", margin: "10px" }}
      >
        <p className="timeline-item-name">{name}</p>
        <div className="timeline-item-details">
          <p className="timeline-item-loc">{loc}</p>
          <p>{dates}</p>
        </div>
      </Box>
    </>
  );
};
function App() {
  useEffect(() => {
    document.querySelectorAll(".circlegraph").forEach((circlegraph) => {
      let circles = circlegraph.querySelectorAll(".circleA, .circleB");
      let angle = 360 - 90,
        dangle = 360 / circles.length;
      angle -= dangle;
      for (let i = 0; i < circles.length; ++i) {
        let circle = circles[i];
        angle += dangle;
        circle.style.transform = `rotate(${angle}deg) translate(${
          circlegraph.clientWidth / 2
        }px) rotate(-${angle}deg)`;
      }
    });
  }, []);
  return (
    <ChakraProvider>
      <p id="real-data">Fake Data</p>
      <div className="App">
        <header className="App-header">
          <div className="img-wrapper">
            <img
              src={logo}
              className="App-logo"
              alt="logo"
              height="80"
              width="200"
            />
          </div>

          <Text id="date">{date}</Text>
        </header>
        <CustomDivider />
        <p id="greeting">Hello, {name}!</p>
        <ReportHeader text="Notifications" />
        <Box className="notifs">
          <CustomDivider />
          <NotifItem
            name="Work order has been updated"
            id="KER:00264"
            loc="Jasper 1C | Lot 72"
            details="Added contract adjustment for 3/21/22 increase"
            icon_type="warning"
            time="10h"
          />
          <CustomDivider />
          <NotifItem
            name="Work order has been approved"
            id="KER:00262"
            loc="Jasper 1C | Lot 72"
            details="Approved by Cletus Caroland"
            icon_type="success"
            time="7d"
          />
          <CustomDivider />
          <NotifItem
            name="Work order has been approved"
            id="KER:00263"
            loc="Jasper 1C | Lot 74"
            details="Approved by Cletus Caroland"
            icon_type="success"
            time="7d"
          />
        </Box>
        <ReportHeader text="Pay Period" />

        <div className="upp-wrapper">
          <div class="circlegraph">
            {[...Array(14)].map((x, i) => (
              <div
                className={`${i > 10 ? "circleB" : "circleA"}`}
                key={i}
              ></div>
            ))}
          </div>
          {/* <div class="circleC" /> */}
          {/* <CircularProgress
            id="circle-progress"
            size="240px"
            value={20}
            thickness="7px"
            color="#FC1E68"
          /> */}
          <div className="inner-progress-text">
            <Text id="countdown-text">4 Days</Text>
            <Text id="countdown-helper">Until Next Pay Run</Text>
          </div>
        </div>
        <Text className="subsection">Remaining Punch Items</Text>
        <Subdivider />
        <div className="punch-items-wrapper">
          <Box className="punch-item-box">
            <PunchItem
              name="Master shower head in wrong..."
              details="Jasper 1C | Lot 335"
              href="https://mosaic.build/jasper-1c/335/61"
            />
          </Box>
          <Subdivider />
          <Box className="punch-item-box">
            <PunchItem
              name="Portal framing straps in detail needs..."
              details="Jasper 1C | Lot 349"
              href="https://mosaic.build/jasper-1c/349/34"
            />
          </Box>
          {/* <Subdivider /> */}
        </div>
        <Text className="subsection">This Pay Period Work Orders</Text>
        <Accordion allowMultiple className="wo-accordion">
          <AccordionItem borderBottom="none">
            <CustomAccordionButton
              id="WO:441566"
              loc="Jasper 1C | Lot 317"
              isPaid={false}
            />
            <CustomAccordionPanel
              plan="3020"
              item_list={["Framing Labor - Framing Labor"]}
              elevation="A"
            />
          </AccordionItem>
          <AccordionItem borderBottom="none">
            <CustomAccordionButton
              id="WO:441572"
              loc="Jasper 1C | Lot 317"
              isPaid={false}
            />
            <CustomAccordionPanel
              plan="3020"
              item_list={["Framing Labor - Siding Labor"]}
              elevation="A"
            />
          </AccordionItem>
          <AccordionItem borderBottom="none">
            <CustomAccordionButton
              id="WO:442801"
              loc="Jasper 1C | Lot 321"
              isPaid={false}
            />
            <CustomAccordionPanel
              plan="3020"
              item_list={["Framing Labor - Framing Labor"]}
              elevation="A"
            />
          </AccordionItem>
          <AccordionItem borderBottom="none">
            <CustomAccordionButton
              id="WO:442078"
              loc="Jasper 1C | Lot 331"
              isPaid={false}
            />
            <CustomAccordionPanel
              plan="2672"
              item_list={[
                "Framing Labor - Framing Labor",
                "Framing Labor - Framing Labor",
                "Framing Labor - Framing Labor",
              ]}
              elevation="A"
            />
          </AccordionItem>
          <AccordionItem borderBottom="none">
            <CustomAccordionButton
              id="WO:442802"
              loc="Jasper 1C | Lot 331"
              isPaid={false}
            />
            <CustomAccordionPanel
              plan="2672"
              item_list={["Framing Labor - Siding Labor"]}
              elevation="A"
            />
          </AccordionItem>
          <AccordionItem borderBottom="none">
            <CustomAccordionButton
              id="WO:442078"
              loc="Jasper 1C | Lot 331"
              isPaid={true}
            />
            <CustomAccordionPanel
              plan="2672"
              item_list={[
                "Framing Labor - Framing Labor",
                "Framing Labor - Framing Labor",
                "Framing Labor - Framing Labor",
              ]}
              elevation="A"
            />
          </AccordionItem>
        </Accordion>
        <ReportHeader text="Two Weeks Schedule" />
        <div id="schedule-wrapper">
          <div id="schedule-divider">
            <div id="timeline-line" />
          </div>
          <div className="timeline-wrapper">
            <TimelineNode isRed={true} text="This Week: July 18 - July 24" />
            <TimelineItem
              loc="Jasper 1C | Lot 319"
              dates="Thu"
              name="Framing Pick up"
            />
            <TimelineItem
              loc="Jasper 1C | Lot 355"
              dates="Wed - Thu"
              name="Framing Pick up"
            />

            <TimelineNode text="Next Week: July 25 - July 31" />
            <TimelineItem
              loc="Jasper 1C | Lot 316"
              dates="Tue"
              name="Framing Pick up"
            />
            <TimelineNode text="Following Week: August 1 - August 7" />
          </div>
        </div>
        <ReportHeader text="Start Letters for This Week's Lots" />
        <StartLetter
          loc="Jasper 1C | Lot 319"
          date="10/12/2021"
          href="#"
          plan="A"
          elevation="B"
        />
        <StartLetter
          loc="Jasper 1C | Lot 355"
          date="09/21/2021"
          href="#"
          plan="A"
          elevation="B"
        />
        <ReportHeader text="Material Tracking" />
        <div className="material-wrapper">
          <Tabs variant="unstyled">
            <TabList
              css={{
                background: "#DBDDE1",
                borderRadius: "25px",
                height: "40px",
                outline: "4px solid #DBDDE1",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <CustomTab text="Delivered Items" />
              <CustomTab text="Pending Items" />
            </TabList>
            <TabPanels paddingTop="20px">
              <TabPanel css={{ margin: 0, padding: 0 }}>
                <Accordion allowMultiple>
                  <AccordionItem borderBottom="none">
                    <CustomMTAccordionButton
                      date="Jul 10, 2022"
                      info="16d framing nails"
                      icon_type="Delivered"
                    />
                    <CustomMTAccordionPanel
                      code="FM4505"
                      quantity="2500"
                      id="524917889015W4"
                      lots="319, 331"
                      isDelivered={true}
                      date="07/07/2022"
                    />
                  </AccordionItem>
                  <AccordionItem borderBottom="none">
                    <CustomMTAccordionButton
                      date="Jul 10, 2022"
                      info="8d framing nails"
                      icon_type="Delivered"
                    />
                    <CustomMTAccordionPanel
                      code="FM4505"
                      quantity="2500"
                      id="524917889015W4"
                      lots="319, 331"
                      isDelivered={true}
                      date="07/10/2022"
                    />
                  </AccordionItem>
                </Accordion>
              </TabPanel>
              <TabPanel css={{ margin: 0, padding: 0 }}>
                <Accordion allowMultiple>
                  <AccordionItem borderBottom="none">
                    <CustomMTAccordionButton
                      date="Jul 19, 2022"
                      info="1/2-in Plywood for headers"
                      icon_type="On The Way"
                    />
                    <CustomMTAccordionPanel
                      code="FM4505"
                      quantity="2500"
                      id="524917889015W4"
                      lots="338, 312"
                      isDelivered={false}
                      date="07/23/2022"
                    />
                  </AccordionItem>
                  <AccordionItem borderBottom="none">
                    <CustomMTAccordionButton
                      date="Jul 19, 2022"
                      info="2 x 6 studs"
                      icon_type="Order Placed"
                    />
                    <CustomMTAccordionPanel
                      code="FM4505"
                      quantity="2500"
                      id="524917889015W4"
                      lots="338, 312"
                      isDelivered={false}
                      date="08/02/2022"
                    />
                  </AccordionItem>
                  <AccordionItem borderBottom="none">
                    <CustomMTAccordionButton
                      date="Jul 19, 2022"
                      info="20d framing nails"
                      icon_type="Delayed"
                    />
                    <CustomMTAccordionPanel
                      code="FM4505"
                      quantity="2500"
                      id="524917889015W4"
                      lots="338, 312"
                      isDelivered={false}
                      date="07/31/2022"
                    />
                  </AccordionItem>
                </Accordion>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>

        {/* <ReportHeader text="JUNK" />
        <Tabs className="work-tabs" variant="line">
          <TabList css={{}}>
            <CustomTab text="Start Letter" />
            <CustomTab text="Work Orders" />
            <CustomTab text="VPOs" />
            <CustomTab text="Approved" />
          </TabList>
          <TabPanels>
            <TabPanel
              css={{
                margin: 0,
                padding: 0,
                maxHeight: 400,
                overflow: "scroll",
              }}
            >
              <StartLetter
                loc="Jasper 1C | Lot 319"
                date="10/12/2021"
                href="#"
              />
              <StartLetter
                loc="Jasper 1C | Lot 355"
                date="09/21/2021"
                href="#"
              />
            </TabPanel>
            <TabPanel css={{ margin: 0, padding: 0 }}>
              <Accordion allowMultiple>
                <AccordionItem>
                  <CustomAccordionButton
                    id="WO:441566"
                    loc="Jasper 1C | Lot 317"
                    isPaid={false}
                  />
                  <CustomAccordionPanel
                    plan="3020"
                    item_list={["Framing Labor - Framing Labor"]}
                    elevation="A"
                  />
                </AccordionItem>
                <AccordionItem>
                  <CustomAccordionButton
                    id="WO:441572"
                    loc="Jasper 1C | Lot 317"
                    isPaid={false}
                  />
                  <CustomAccordionPanel
                    plan="3020"
                    item_list={["Framing Labor - Siding Labor"]}
                    elevation="A"
                  />
                </AccordionItem>
                <AccordionItem>
                  <CustomAccordionButton
                    id="WO:442801"
                    loc="Jasper 1C | Lot 321"
                    isPaid={false}
                  />
                  <CustomAccordionPanel
                    plan="3020"
                    item_list={["Framing Labor - Framing Labor"]}
                    elevation="A"
                  />
                </AccordionItem>
                <AccordionItem>
                  <CustomAccordionButton
                    id="WO:442078"
                    loc="Jasper 1C | Lot 331"
                    isPaid={false}
                  />
                  <CustomAccordionPanel
                    plan="2672"
                    item_list={[
                      "Framing Labor - Framing Labor",
                      "Framing Labor - Framing Labor",
                      "Framing Labor - Framing Labor",
                    ]}
                    elevation="A"
                  />
                </AccordionItem>
                <AccordionItem>
                  <CustomAccordionButton
                    id="WO:442802"
                    loc="Jasper 1C | Lot 331"
                    isPaid={false}
                  />
                  <CustomAccordionPanel
                    plan="2672"
                    item_list={["Framing Labor - Siding Labor"]}
                    elevation="A"
                  />
                </AccordionItem>
              </Accordion>
            </TabPanel>
            <TabPanel css={{ margin: 0, padding: 0 }}>
              <Accordion allowMultiple>
                <AccordionItem>
                  <CustomAccordionButton
                    id="VPO:442947"
                    loc="Jasper 1C | Lot 321"
                    isPaid={false}
                  />
                  <CustomAccordionPanel
                    plan="3020"
                    item_list={["Framing Materials - Framing Material"]}
                    elevation="A"
                  />
                </AccordionItem>
                <AccordionItem>
                  <CustomAccordionButton
                    id="VPO:442948"
                    loc="Jasper 1C | Lot 321"
                    isPaid={false}
                  />
                  <CustomAccordionPanel
                    plan="3020"
                    item_list={["Framing Materials - Siding Material"]}
                    elevation="A"
                  />
                </AccordionItem>
              </Accordion>
            </TabPanel>
            <TabPanel css={{ margin: 0, padding: 0 }}>
              <Accordion allowMultiple>
                <AccordionItem>
                  <CustomAccordionButton
                    id="WO:442078"
                    loc="Jasper 1C | Lot 331"
                    isPaid={true}
                  />
                  <CustomAccordionPanel
                    plan="2672"
                    item_list={[
                      "Framing Labor - Framing Labor",
                      "Framing Labor - Framing Labor",
                      "Framing Labor - Framing Labor",
                    ]}
                    elevation="A"
                  />
                </AccordionItem>
              </Accordion>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <ReportHeader text="Material Tracking" />
        <Tabs className="work-tabs" variant="line">
          <TabList css={{ border: "1px solid #DCDFE2" }}>
            <CustomTab text="Delivered Items" />
            <CustomTab text="Pending Items" />
          </TabList>
          <TabPanels>
            <TabPanel css={{ margin: 0, padding: 0 }}>
              <Accordion allowMultiple>
                <AccordionItem>
                  <CustomMTAccordionButton
                    date="Jul 10, 2022"
                    info="16d framing nails"
                  />
                  <CustomMTAccordionPanel
                    code="FM4505"
                    quantity="2500"
                    id="524917889015W4"
                    lots="319, 331"
                    isDelivered={true}
                    date="07/07/2022"
                  />
                </AccordionItem>
                <AccordionItem>
                  <CustomMTAccordionButton
                    date="Jul 10, 2022"
                    info="8d framing nails"
                  />
                  <CustomMTAccordionPanel
                    code="FM4505"
                    quantity="2500"
                    id="524917889015W4"
                    lots="319, 331"
                    isDelivered={true}
                    date="07/10/2022"
                  />
                </AccordionItem>
              </Accordion>
            </TabPanel>
            <TabPanel css={{ margin: 0, padding: 0 }}>
              <Accordion allowMultiple>
                <AccordionItem>
                  <CustomMTAccordionButton
                    date="Jul 19, 2022"
                    info="1/2-in Plywood for headers"
                    icon_type="on-the-way"
                  />
                  <CustomMTAccordionPanel
                    code="FM4505"
                    quantity="2500"
                    id="524917889015W4"
                    lots="338, 312"
                    isDelivered={false}
                    date="07/23/2022"
                  />
                </AccordionItem>
                <AccordionItem>
                  <CustomMTAccordionButton
                    date="Jul 19, 2022"
                    info="2 x 6 studs"
                    icon_type="order-placed"
                  />
                  <CustomMTAccordionPanel
                    code="FM4505"
                    quantity="2500"
                    id="524917889015W4"
                    lots="338, 312"
                    isDelivered={false}
                    date="08/02/2022"
                  />
                </AccordionItem>
                <AccordionItem>
                  <CustomMTAccordionButton
                    date="Jul 19, 2022"
                    info="20d framing nails"
                    icon_type="delayed"
                  />
                  <CustomMTAccordionPanel
                    code="FM4505"
                    quantity="2500"
                    id="524917889015W4"
                    lots="338, 312"
                    isDelivered={false}
                    date="07/31/2022"
                  />
                </AccordionItem>
              </Accordion>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <ReportHeader text="Rewards" />
        <div className="rewards-wrapper">
          <Icon
            as={BiGift}
            w={24}
            h={24}
            color="#27364F"
            padding="20px 0 10px"
          />
          <p id="rewards-description">
            EARN REWARDS
            <br /> by fulfilling punch items!
          </p>
          <div className="punch-items-remaining-wrapper">
            <p id="remaining-number">8</p>
            <p id="remaining-text">Punch Items Fulfilled</p>
          </div>
        </div>
        <CustomDivider />
        <RewardItem isClaimed={true} num="5" name="Gift Card #1" />
        <CustomDivider />
        <RewardItem isClaimed={false} num="10" name="Gift Card #2" />
        <CustomDivider /> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
