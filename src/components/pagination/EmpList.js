import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import CustomPagination from './CustomPagination';

const EmpList = () => {
  const [apiData, setApiData] = useState([]); // set the api data 
  const [searchFilter, setSearchFilter] = useState(''); // filter the search
  const [currentPage, setCurrentPage] = useState(1); // set the current page
  const pageSize = 3; // show row in table
  //replace this code with your api
  useEffect(() => {
    // Simulating API data fetch
    const apiDataFetch = [
      { Name: 'John Doe', age: 25 },
      { Name: 'John Doe', age: 25 },
      { Name: 'John Doe', age: 25 },
      { Name: 'John Doe', age: 25 },

      { Name: 'raja1', age: 25 },
      { Name: 'raja2', age: 25 },
      { Name: 'raja3', age: 25 },

      { Name: 'raja', age: 1 },
      { Name: 'raj', age: 3 },
      { Name: 'rajaji', age: 2 },

      { Name: 'paras', age: 2 },
      { Name: 'raja', age: 1 },
      { Name: 'raj', age: 3 },

      { Name: 'rajaji', age: 2 },
      { Name: 'paras', age: 2 },

      { Name: 'Prabir Ghosh', age: 25 },
      { Name: 'Munmun Pan Ghosh', age: 25 },
      { Name: 'Abhradeep Ghosh', age: 14 },
      { Name: 'John Doe 111', age: 25 },

      // Add more objects as needed // or replace 
    ];

    setApiData(apiDataFetch);
  }, []);

  //end heare

  useEffect(() => {
    setCurrentPage(1);
  }, [searchFilter]);

  const handleFilter = (e) => {
    setSearchFilter(e.target.value);
  };

  const filteredData = apiData.filter(
    (item) =>
      item.Name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.age.toString().includes(searchFilter)
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className='fluid container'>
      <div className='mb-2 fw-50'>EmpReports</div>
      <input
        style={{ width: "200px" }}
        className='form-control mb-2'
        placeholder='Search'
        value={searchFilter}
        onChange={handleFilter}
      />
      <Table striped bordered hover id='table'>
        <tbody>
          <tr>
            <th style={{ width: '4%' }}>#</th>
            <th>Employee Name</th>
            <th>Age</th>
          </tr>
          {paginatedData.length > 0 ? (
            paginatedData.map((item, i) => (
              <tr key={i} style={{ background: '#fff' }}>
                <td>{(currentPage - 1) * pageSize + i + 1}</td>
                <td>{item.Name}</td>
                <td>{item.age}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No data found</td>
            </tr>
          )}
        </tbody>
      </Table>
      {filteredData.length > 0 &&
        <>
          <CustomPagination
            itemsCount={filteredData.length}
            itemsPerPage={pageSize}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            alwaysShown={true}
          />
        </>
      }
    </div>
  );
};

export default EmpList;