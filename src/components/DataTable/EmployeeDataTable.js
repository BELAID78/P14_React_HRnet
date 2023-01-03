import React from 'react';

import DataTable from 'react-data-table-component';

import DataTableFilter from '../DataTableFilter/DataTableFilter';

import './employeedatatable.css'

const employees = [
    {
        id: 1,
        firstName: 'employee 1',
        lastName: 'employee 1',
        startDate: 'employee 1',
        department: 'employee 1',
        birthDate: 'employee 1',
        street: 'employee 1',
        city: 'employee 1',
        state: 'employee 1',
        zipCode: 'employee 1',
    },
    {
        id: 2,
        firstName: 'employee 2',
        lastName: 'employee 2',
        startDate: 'employee 2',
        department: 'employee 2',
        birthDate: 'employee 2',
        street: 'employee 2',
        city: 'employee 2',
        state: 'employee 2',
        zipCode: 'employee 2',
    }
];

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