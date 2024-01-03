import { Link } from 'react-router-dom';
import { ReceiptIcon, Award,Calendar, Store } from 'lucide-react';
import '../Assets/CSS/Sidebar.css';

function Dashboard() {
  return (
    <div className='container-fluid'>
      <div id="mySidebar" className="sidebar">
        <Link to='#'><ReceiptIcon/><span className="icon-text">Appoinment</span></Link>
        <br />
        <Link to='#'><Calendar/><span className="icon-text">Status</span></Link>
        <br />
        <Link to='#'><Award /><span className="icon-text">Services</span></Link>
        <br />
        <Link to='#'><Store /><span className="icon-text">Locations</span></Link>
      </div>
    </div>
  );
}

export default Dashboard;
