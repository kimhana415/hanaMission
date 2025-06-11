// SubVisualTab.jsx

import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function SubVisualTab() {
  return (
    <div className="sub-visual__tab">
      <Tabs
        defaultActiveKey="food"
        id="uncontrolled-tab-example"
        className="sub-visual__tab-items"
      >
        <Tab
          eventKey="drink"
          title="음료"
          className="sub-visual__tab-item"
        ></Tab>

        <Tab
          eventKey="food"
          title="푸드"
          className="sub-visual__tab-item"
        ></Tab>

        <Tab
          eventKey="md"
          title="MD"
          className="sub-visual__tab-item"
        ></Tab>
      </Tabs>
    </div>
  )
}
