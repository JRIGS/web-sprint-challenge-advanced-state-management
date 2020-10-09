import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const SubmitButton = styled.button`
color:red;
background-color: black;
`

const InputForm = () => {

  const initialFormValues = {
    name: '',
    age: null,
    height: ''
  }
  
  const [ formValues, setFormValues ] = useState(initialFormValues);
  
  const onInputChange = (event) => {
    console.log(event);
    event.persist();
    const name = event.target.name;
    const value = event.target.value;
    setFormValues({...formValues, [name]: value})
    
  }
  
  
    const onSubmit = (event) => {
        console.log("data submitted");
      axios
        .post("http://localhost:3333/smurfs", formValues)
        .then(response => {
          console.log('post response data:', response.data)
  // setPost(response.data);
        } 
  )
        .catch(err => console.log(err))
    };

return (
  <div>
  <h3>Add a Smurf to the Village!</h3>
  
  <form className="form" onSubmit={onSubmit}>
<div className="input-field">
<label>Name:</label>
<input type="text" name="name" placeholder="Name" onChange={onInputChange}/>
</div>

<div className="input-field">
<label>Age:</label>
<input type="text" name="age" placeholder="Age" onChange={onInputChange}/>
</div>

<div className="input-field">
<label>Height:</label>
<input type="text" name="height" placeholder="Height" onChange={onInputChange}/>
</div>

<SubmitButton type="submit">Submit</SubmitButton>
</form>

</div>
)

}

export default InputForm;