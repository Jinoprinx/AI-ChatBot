import React, { useState } from 'react';
import axios from 'axios';
import send from '../send.svg';

const PORT= process.env.REACT_APP_ENDPOINT

const Form = (props) => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      //Trying formData
      //const FormData = require('form-data');
 
      //const form = new FormData();
      //form.append('my_field', 'my value');
      //form.append('my_buffer', new Buffer(10));
      //form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

      //const= await axios.post(PORT , form, { headers: form.getHeaders() })


      const res = await axios.post(PORT, message);

      setResponse(res.data);
      props.addResponse(response)
    } catch (err) {
      console.error(err);
    } finally {
      setMessage(''); // reset the input field after sending the message to the server 
    }  
  };

  return (  
    <div>  
      <form onSubmit={handleSubmit}>  
        <textarea value = {message} onChange={handleChange} name="prompt" rows="1" cols="1" placeholder="Type Your Question Here"></textarea>
        <button type="submit">send</button>  
      </form>

    </div>  

  ); 
};
export default Form;