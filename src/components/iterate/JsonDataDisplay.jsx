import React from 'react';
import JsonData from './data.json';
import Table from 'react-bootstrap/Table';
  


function JsonDataDisplay(){

	

	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
					<td>{info.id}</td>
					<td>{info.name}</td>
					<td>{info.city}</td>
				</tr>
			)
		}
	);

	const options = {  
		page: 2,   
		   sizePerPageList: [ {  
						 text: '5', value: 5  
					   }, {  
						 text: '10', value: 10  
					   }, {  
						 //text: 'All', value: this.state.products.length 
						 text: 'All', value: 50  
					   } ],   
					   sizePerPage: 5,   
					   pageStartIndex: 0,   
					   paginationSize: 3,    
					   prePage: 'Prev',   
					   nextPage: 'Next',   
					   firstPage: 'First',   
					   lastPage: 'Last',   
					   paginationPosition: 'top'    
		};  

	return(
		<div>
			<Table striped bordered hover  >
				<thead>
					<tr>
					<th>Sr.NO</th>
					<th>Name</th>
					<th>City</th>
					</tr>
				</thead>
				<tbody>
					{DisplayData}
				</tbody>
			</Table>
		</div>
	)
}

export default JsonDataDisplay;
