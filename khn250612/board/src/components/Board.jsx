//Board.jsx

import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

export default function Board() {

  const [board, setBoard] = useState([]);
  // 브라우저 로딩이 될 떄 기존 게시글을 모두 가져오기


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setBoard(json))
  }, []);

  return (
    <div>
      <h1>게시판</h1>
      <Table striped bordered hover>
        <thead className="table-dark">
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>address_street</th>
            <th>address_suite</th>
            <th>address_city</th>
            <th>address_zipcode</th>
            <th>address_geo_lat</th>
            <th>address_geo_lng</th>
            <th>phone</th>
            <th>website</th>
            <th>company_name</th>
            <th>company_catchPhrase</th>
            <th>company_bs</th>
          </tr>
        </thead>
        <tbody>
          {
            board.map(user => (
              <tr key={user.id} >
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>

                <td>{user.address?.street}</td>
                <td>{user.address?.suite}</td>
                <td>{user.address?.city}</td>
                <td>{user.address?.zipcode}</td>
                <td>{user.address?.geo?.lat}</td>
                <td>{user.address?.geo?.lng}</td>

                <td>{user.phone}</td>
                <td>{user.website}</td>

                <td>{user.company?.name}</td>
                <td>{user.company?.catchPhrase}</td>
                <td>{user.company?.bs}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}
