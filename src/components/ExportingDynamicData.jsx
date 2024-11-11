import { useState } from 'react';
import { CSVLink } from 'react-csv';

function DynamicForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [data, setData] = useState([]);

  const handleSubmit = () => {
    const newEntry = { name, email };
    setData([...data, newEntry]);
    setName('');
    setEmail('');
  };

  return (
    <div>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Name"
      />
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email"
      />
      <button onClick={handleSubmit}>Add to List</button>
        <div>
          {data.map((entry, index) => (
            <div key={index}>
              Name: {entry.name} | Email: {entry.email}
            </div>
          ))}
        </div>
      <CSVLink data={data} filename="dynamic-data.csv">
        Export Data to CSV
      </CSVLink>
    </div>
  );
}

export default DynamicForm;
