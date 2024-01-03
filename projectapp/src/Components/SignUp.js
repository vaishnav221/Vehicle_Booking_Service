import React from 'react';
import {Link} from 'react-router-dom'

function register(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let num = document.getElementById("mobile").value;
    let Dob = document.getElementById("dob").value;
    let pass = document.getElementById("pass").value;
    let pass1 = document.getElementById("pass1").value;
   
        if(pass === pass1)
        {
            alert(
                "password matched"+"\n"+
                "Name: "+name+"\n"+
                "Email: "+email+"\n"+
                "Mobile: "+num+"\n"+
                "DOB: "+Dob+"\n"+
                "Password: "+pass+"\n"
                );
            }
            else{
                alert("password mismatch");
            }
        
        
}

const Signin=()=>{
    return(
    <div className="b1">

        <form className="fl1" >
        <div className="hed">Sign Up
           
           <input type="text" name="name" id="name" placeholder="username" class="sem" required/>
          
           <input type="email" name="email" id="email" placeholder="email address" class="sem" required/>
          
           <input type="number" name="phone" id="mobile" placeholder="mobile" class="sem" required/>
     
           <input type="date" name="dob" id="dob" class="sam" required/>
     
           <input type="password" name="pass" id="pass" placeholder="password" class="sem" required/>
           <input type="password" name="pass1" id="pass1" placeholder="confirm password" class="sem" required/>

           </div>
           <Link to='/home'>
           <input onSubmit={register} type="submit" value="Submit" class="seem"/></Link>
           </form>
    </div>
    )
}
export default Signin;