import { useState,useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

import './App.css';

function App() {
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [age,setage]=useState('')
  const [mobile,setmobile]=useState('')
  const [city,setcity]=useState('')
  const [user,setuser]=useState([])

   const callGetAPI = async ()=>{
    const resp = await axios.get('http://localhost:5000/api/view');
    setuser(resp.data);
   }
  useEffect(()=>{
    callGetAPI();
  },[]);

  let postdata = async()=>{
    await axios.post("http://localhost:5000/api/create",{
      name,
      email,
      age,
      mobile,
      city,
      
    })
  }
  return (
    <div className="App">
      <form>
      <br/><br/>
   
      <Form.Group className="mb-3">       
        <Form.Control type="text" placeholder="Enter Name"   onChange={e=>setname(e.target.value)} />
      </Form.Group>
      <br></br>
     <Form.Group className="mb-3">       
        <Form.Control type="email" placeholder="Enter email"   onChange={e=>setemail(e.target.value)} />
      </Form.Group>
      <br></br>
      <Form.Group className="mb-2" >
        <Form.Control type="number" placeholder="Enter Age"   min="20" max="80" onChange={e=>setage(e.target.value)} />
      </Form.Group>
      <br></br>
      <Form.Group className="mb-2" >      
        <Form.Control type="number" placeholder="Enter Mobile Number" 
       required value={mobile} onChange={e=>setmobile(e.target.value)} />
      </Form.Group>
      <br></br>
      <Form.Group className="mb-2" >       
        <Form.Control type="text" placeholder="Enter City" value={city} onChange={e=>setcity(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-2" >
      <button  onClick={postdata}>Submit</button>
      </Form.Group>
    
     
   
    </form>
      <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Age</th>
    <th>Mobile</th>
    <th>City</th>
    
    
  </tr>   
      {user.map((v)=>{
        return(       
    <tr>
      <td>{v.name}</td>
      <td>{v.email}</td>
      <td>{v.age}</td>
      <td>{v.mobile}</td>
      <td>{v.city}</td>
     
      
    </tr> 
)  })}
      </table>
    </div> 
  );
}

export default App;
