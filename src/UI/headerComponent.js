import React from "react";
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {Button} from './Elements/buttonComponent.js';
import {Search} from './Elements/searchComponent.js';
class Header extends React.Component{
    render(){
        return (
            <header>
                    <Button className="icon" image={this.props.logo}/>
                    <Search sIcon={faMagnifyingGlass}/>              
                    <Button className="icon" icon={faCartShopping}/>
            </header>
        );
    }
}

export default Header;