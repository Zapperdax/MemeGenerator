// import React from 'react'
// export default function Form(){
//     // const [formData, setFormData] = React.useState({
//     //     firstName: '',
//     //     lastName: '',
//     //     email: '',
//     //     comments: '',
//     //     isFriendly: true,
//     //     employment: '',
//     //     favColor: ''
//     // });
//     // const handleChange = (event) => {
//     //     const {name, value, type, checked} = event.target
//     //     setFormData(preValue => {
//     //         return {
//     //             ...preValue,
//     //             [name]: type === "checkbox" ? checked : value
//     //         }
//     //     })
//     // }

//     // const handleSubmit = (event)=> {
//     //     event.preventDefault();
//     //     console.log(formData);
//     // }

//     // return (
//     //     <form onSubmit={handleSubmit}>
//     //         <input onChange={handleChange} type='text' placeholder='First Name' name='firstName' value={formData.firstName}></input>
//     //         <input onChange={handleChange} type='text' placeholder='Last Name' name='lastName' value={formData.lastName}></input>
//     //         <input onChange={handleChange} type='text' placeholder='Email' name='email' value={formData.email}></input>
//     //         <textarea onChange={handleChange} placeholder='Comments' name='comments' value={formData.comments} />
//     //         <input onChange={handleChange} type='checkbox' name='isFriendly' id='isFriendly' checked={formData.isFriendly}></input>
//     //         <label htmlFor='isFriendly'>Are You Friendly?</label>
//     //         <br></br>
//     //         <fieldset>
//     //             <legend>Current Employee Status</legend>
//     //             <input onChange={handleChange} type='radio' id='unemployed' name='employment' value='unemployed' checked={formData.unemployed}></input>
//     //             <label htmlFor='unemployed'>Unemployed</label>

//     //             <input onChange={handleChange} type='radio' id='partTime' name='employment' value='partTime' checked={formData.partTime}></input>
//     //             <label htmlFor='partTime'>Part Time</label>
                
//     //             <input onChange={handleChange} type='radio' id='fullTime' name='employment' value='fullTime' checked={formData.fullTime}></input>
//     //             <label htmlFor='fullTime'>Full Time</label>
//     //         </fieldset>
//     //         <br></br>
//     //         <label htmlFor='favColor'>What Is Your Favorite Color</label>
//     //         <select id='favColor' value={formData.favColor} onChange={handleChange} name='favColor'>
//     //             <option value="">--Choose--</option>
//     //             <option value='red'>Red</option>
//     //             <option value='orange'>Orange</option>
//     //             <option value='yellow'>Yellow</option>
//     //             <option value='white'>White</option>
//     //             <option value='black'>Black</option>
//     //             <option value='purple'>Purple</option>
//     //         </select>
//     //         <br></br>
//     //         <button>Submit</button>
//     //     </form>
//     // )

//     const [formData, setFormData] = React.useState({
//         email: '',
//         password: '',
//         confirmPassword: '',
//         newsLetter: true
//     })

//     const handleChange = (event) => {
//         const {name, value, type, checked} = event.target
//         setFormData(preValue=> {
//             return{
//                 ...preValue,
//                 [name]: type === 'checkbox' ? checked : value
//             }
//         })
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if(formData.password === formData.confirmPassword){
//             console.log('Successfully Signed up')
//         } else {
//             console.log('Passwords Do Not Match')
//         }
//         console.log(formData);
//     }

//     return(
//         <form onSubmit={handleSubmit}>
//             <input onChange={handleChange} type='text' placeholder='Enter Email' name='email' value={formData.email}></input>
//             <input onChange={handleChange} type='password' placeholder='Enter Password' name='password' value={formData.password}></input>
//             <input onChange={handleChange} type='password' placeholder='Confirm Password' name='confirmPassword' value={formData.confirmPassword}></input>
//             <input onChange={handleChange} type='checkbox' id='newsLetter' name='newsLetter' checked={formData.newsLetter}></input>
//             <label htmlFor='newsLetter'>Do You Want To Join The News Letter</label>
//             <button>Submit</button>
//         </form>
//     )
// }