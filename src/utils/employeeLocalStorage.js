/**
 * read all the employee from storage
 * 
 * @returns {array}
 */
const readEmployeesFromStorage = () => {
    const employees = localStorage.getItem('employee-storage')

    if(employees === null || employees === '') {
        return [];
    }

    return JSON.parse(employees)
}

/**
 * update employee local storage
 * 
 * @param {array} employees 
 * @returns {void}
 */
const updateEmployeesStorage = employees => {
    const employeesAsJson = JSON.stringify(employees)

    localStorage.setItem('employee-storage', employeesAsJson)
}

export {readEmployeesFromStorage, updateEmployeesStorage};