
import React, { useState } from 'react'
import Display from './Display'

const Form1 = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail ] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSubmitted, setIsSubmitted ] = useState(false);

    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }
    
    const createUser = (e) => {
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstName.length > 3 && lastName.length > 3 && email.length > 5 && password.length >= 8 && password == confirmPassword){
            createUser();
            setIsSubmitted(true);
        } else {
            alert("Please correct your form!")
        }
        console.log({firstName, lastName, email, password, confirmPassword})
    }

    const formMessage =()=>{
        if(isSubmitted){
            return "Thank you for submitting the from"
        } else {
            return "Please correct your form!"
        }
    }
    
    return(
        <div>

            <h1>Form</h1>
            <p>{formMessage()}</p>

            <form onSubmit={handleSubmit}>

                <p>
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={(e)=>setFirstName(e.target.value)} value={firstName} />
                    {
                        firstName.length < 3?
                        <span style={{color: "red"}}> First Name should be at least 3 charact</span>:""
                    }
                </p>
                <p>
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={(e)=>setLastName(e.target.value)} value={lastName} />
                    {
                        lastName.length < 3?
                        <span style={{color: "red"}}> Last Name should be at least 3 charact</span>:""
                    }
                </p>
                <p>
                    <label>Email</label>
                    <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
                    {
                        email.length < 5?
                        <span style={{color: "red"}}> Email should be at least 5 charact</span>:""
                    }
                </p>
                <p>
                    <label>Password</label>
                    <input type="text" name="password" value={password} onChange={handlePassword} />
                    {
                        password.length < 8?
                        <span style={{color: "red"}}> Password be at least 8 charact</span>:""
                    }
                </p>
                <p>
                    <label>Confirm Password</label>
                    <input type="text" name="confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} />
                    {
                        password !== confirmPassword?
                        <span style={{color: "red"}}> Password must match!</span>:""
                    }
                </p>
                <p>
                    <button type='submit' >Submit</button>
                </p>
            </form>

            <h1>Your Form Data</h1>

            <Display 
            firstName={firstName} lastName={lastName} 
            email={email} 
            password={password} confirmPassword={confirmPassword}  
            />

        </div>
    )
    
}
    
    export default Form1