import './Navbar.css';
import './App.css';
const Navbar = () =>{
     return <div className="navbar">
            <h1 className="angelList">AngelList</h1>
            <div className="Navbar-Items">
                 <p>Product</p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                 <p>Solution</p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                 <p>Pricing</p>
                 <p>Resources</p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
            </div>
            <div className="navbar-signUp">
                 <p>Sign in</p>
                 <p className='contact'>Contact Sales</p>
            </div>
     </div>
}

export default Navbar;