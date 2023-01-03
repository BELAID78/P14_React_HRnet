import React from 'react';

import DataTable from 'react-data-table-component';

import DataTableFilter from '../DataTableFilter/DataTableFilter';

import './employeedatatable.css'
import { useSelector } from 'react-redux';

const columns = [
	{
		name: 'First Name',
		selector: row => row.firstName,
		sortable: true,
	},
	{
		name: 'Last Name',
		selector: row => row.lastName,
		sortable: true,
	},
	{
		name: 'Start Date',
		selector: row => row.startDate,
		sortable: true,
	},
    {
		name: 'Department',
		selector: row => row.department,
		sortable: true,
	},
	{
		name: 'Date of Birth',
		selector: row => row.birthDate,
		sortable: true,
	},
	{
		name: 'Street',
		selector: row => row.street,
		sortable: true,
	},
    {
		name: 'City',
		selector: row => row.city,
		sortable: true,
	},
	{
		name: 'State',
		selector: row => row.state,
		sortable: true,
	},
	{
		name: 'Zip Code',
		selector: row => row.zipCode,
		sortable: true,
	},
];

export const EmployeeDataTable = () => {
	const employees = useSelector(state => state.employees)
	
	const [filterText, setFilterText] = React.useState('');

	const filteredItems = employees.filter(
        item => item.firstName.toLowerCase().includes(filterText.toLowerCase()) || item.lastName.toLowerCase().includes(filterText.toLowerCase())
    );

	const subHeaderComponentMemo = React.useMemo(() => {

		return (
			<DataTableFilter onFilter={e => setFilterText(e.target.value)} filterText={filterText} />
		);

	}, [filterText]);

	return (
        <div className='employee-list'>

				<h2>Employee List:</h2>
				
				<div className='employee-list-datatable'>
					<DataTable 
						columns={columns}
						data={filteredItems}
						pagination 
						subHeader
						subHeaderComponent={subHeaderComponentMemo}
						selectableRows
						persistTableHead />
				</div>
        </div>
	);
};

export default EmployeeDataTable;