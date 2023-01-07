import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

import './employeebarchart.css';

function EmployeeBarChart({label, data, keys}) {
    return (
        <div className='bar-chart-container'>
          <ResponsiveContainer width="100%" height="100%">
              <BarChart width={150} height={40} data={data}>
                  <XAxis dataKey={keys['name']} />
                  <YAxis allowDecimals={false}/>
                  <Tooltip />
                  <Bar dataKey={keys['value']} fill="#e91e63" />
              </BarChart>
          </ResponsiveContainer>
          <p className='text-center'>{label}</p>
        </div>
    )
}

export default EmployeeBarChart