import React from "react";
import { Tabs as HDSTabs, TabList, Tab, TabPanel } from "hds-react";

export const Tabs = () => {
  return (
    <HDSTabs>
      <TabList className="example-tablist">
        <Tab>Daycare</Tab>
        <Tab>Pre-school</Tab>
        <Tab>Basic education</Tab>
        <Tab>Upper secondary</Tab>
        <Tab>University</Tab>
      </TabList>
      <TabPanel>
        Daytime care for people who cannot be fully independent, such as
        children or elderly people.
      </TabPanel>
      <TabPanel>
        A pre-school is an educational establishment offering early childhood
        education to children before they begin compulsory education at primary
        school.
      </TabPanel>
      <TabPanel>
        The objective of basic education in Finland is to support pupils&#39;
        growth towards humanity and ethically responsible membership of society.
      </TabPanel>
      <TabPanel>
        Upper secondary school studies last three to four years, preparing the
        students for the matriculation examination.
      </TabPanel>
      <TabPanel>
        A high-level educational institution in which students study for degrees
        and academic research is done.
      </TabPanel>
    </HDSTabs>
  );
};
