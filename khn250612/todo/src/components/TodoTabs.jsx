// TodoTabs.jsx

import React from 'react'
import Nav from 'react-bootstrap/Nav';

export default function TodoTabs() {
  return (
    <div className='todo_tabs'>
      <div>🌙</div>
      <Nav variant="underline" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">All</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled">Completed</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}
