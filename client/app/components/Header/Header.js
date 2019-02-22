import React from 'react';


// Allows the creation of links
import { Link } from 'react-router-dom';

const Header = () => (
  //<header>
    //<nav>
	
		<ul id="menu">
			<li><Link to="/">Home</Link></li>
			<li><Link to="/newpage">New Page</Link></li>
			<li><Link to="/helloworld">Hello World</Link></li>
		</ul>
    //</nav>

    //<hr />
 // </header>
);

export default Header;
