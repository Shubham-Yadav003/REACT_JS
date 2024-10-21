

// import React, { useState } from 'react';


// const App = () => {
//   const [formData, setFormData]=useState({name:'',email:''});
//   const [errors, setErrors ]=useState();
//   const [isSubmitted, setIsSubmitted]=useState(false)
 
//   const handleChange=(e)=>{
//     const{name,value}= e.target;
//     setFormData({...formData,[name]:value})
//   }

//   const validationForm=()=>{
//     const formErrors={};
//     if(!formData.name){
//       formErrors.name='Name is requied';
//     }
//     if(!formData.email){
//       formErrors.email=='Email is  required';
//     }
//     else if(/\S+@\S+\.\S+/.test(formData.email)){  // / starting , \st string value ,@ for @, \st for string , . mandetory , \st string 
//           formErrors.email='Email is not valid';
//     }

//   }

//   setErrors(formErrors)
//     return Object.keys(formErrors).length==0;
  

//   const handleSubmit=()=>{
//     setIsSubmitted(false);
//     if(validationForm()){
//       console.log('form data is submotted', formData)
//       setIsSubmitted(true);
//       setFormData({name:'', email:''})
//     }
//   }
 
 
//   return (
//     <div>
//       <h1> Form </h1>
//       {isSubmitted && <p> Form is successfully submitted</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChanges}
//           ></input>
//         </div>


//         <div>
//           <label>Email:</label>
//           <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChanges}
//           ></input>
//           {errors.email && <p>{errors.email}</p>}
//         </div>

//         <div>
//           <label>Job application applied for:</label>
//          <select
//          id="position"
//          name="position"
//          value={formData.position}
//          onChange={handleChange}>
//           <option>Select a position</option>
//           <option>Developer</option>
//           <option>Design</option>
//           <option>Data Science Eng.</option>
          
//          </select>
//          {error.position && <p>{errors.position}</p>}
//         </div>
//       </form>
//     </div>

    

//   )
   
// }

// export default App;

import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validationForm = () => {
    const formErrors = {};
    if (!formData.name) {
      formErrors.name = 'Name is required';
    }
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is not valid';
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(false);
    if (validationForm()) {
      console.log('Form data is submitted', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '' });
    }
  };

  return (
    <div>
      <h1>Form</h1>
      {isSubmitted && <p>Form is successfully submitted</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Job application applied for:</label>
          <select
            id="position"
            name="position"
            value={formData.position || ''}
            onChange={handleChange}
          >
            <option>Select a position</option>
            <option>Developer</option>
            <option>Design</option>
            <option>Data Science Eng.</option>
          </select>
          {errors.position && <p>{errors.position}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
