import {FaBars} from "react-icons/fa"
import {Link} from "react-router-dom"

const click=(e)=>
{
    e.preventDefault();
    alert('Your Form is Submitted Successfully');
};
const ton=(e)=>{
    alert("Logged Out SuccessFully!");
}

const Home1=()=>{
    return(
        <>

        <div className="mi">
        <div className="edge1"></div>

        <div className="bud1">
            <span><p>Book a Service For Your Vehicle</p></span>
            <p1>You can book your car for the service by filling up the form below</p1>
        </div>
        <div className="bud2">
            <form >
            
            <div>
            {/* <label>Name: </label> */}
            <input type="text" name="" id="name" placeholder="Name"/>
            </div>
            
            <div>
            {/* <label>EmailId: </label> */}
            <input type="text" name="" id="emailid" placeholder="Email_Id"/>
            </div>
            <div>
             {/* <label>Mobile: </label> */}
            <input type="number" name="" id="phone" placeholder="Mobile No"/>
            </div>
            
            <div>
            {/* <label>Model: </label> */}
            <input type="text" name="" id="name" placeholder="Model"/>
            </div>
            </form>
            <div>
            {/* <label>Service Type: </label> */}
            <input type="text" name="" id="name" placeholder="ServiceType"/>
            </div>
            <div>
            {/* <label>State: </label> */}
            <input type="text" name="" id="name" placeholder="State"/>
            </div>
            <div>
            {/* <label>City: </label> */}
            <input type="text" name="" id="name" placeholder="City"/>
            </div>
            <div>
            {/* <label>Service Appoinment Date: </label> */}
            <input type="date" name="" id="name" placeholder="Service Appoinment Date"/>
            </div>
            <div>
            {/* <label>Service Appoinment Time: </label> */}
            <input type="time" name="" id="name" placeholder="Service Appoinment Time"/>
            </div>
            <div>
            {/* <label>Registration No: </label> */}
            <input type="text" name="" id="name" placeholder="Registration No"/>
            </div>
            <div>
            {/* <label>Odometer(km's): </label> */}
            <input type="number" name="" id="name" placeholder="Odometer(kms)"/>
            </div>
        </div>
            <div className="in1">
            {/* <label>Service Requirements: </label> */}
            <input type="text" name="" id="name" placeholder="Service requirements"/>
            </div>
            <div className="in2">
            <button onClick={click}>Submit</button>
            </div>
            <footer>
            <div className="parent">   
            <div>
                <p>Contact-us:0422-6984576</p>
            </div>
            <div>
                <p>Email:rotors&wheels@gmail.com</p>
            </div>
            <div>
                <p>Legal Disclaimer</p>
            </div>
            <div>
                <p>Dealers and Partners</p>
            </div>
            <div>
                <p>Feedbacks & Reviews</p>
            </div>
            <br/>
            <div>
                <p>Activities Underwent</p>
            </div>
            </div> 
            </footer>
            </div>
        </>

    )
}
export default Home1;