import React from "react";
import {Button} from './buttonComponent.js'
import './searchComponent.css';
export class Search extends React.Component{
    render(){
        return(
            <div>
            <form>
                <input type="search" className="inputSearch" id="search" name="search" placeholder= "Search"/>
                <Button icon={this.props.sIcon} className='searchButton' />
            </form>
            </div>
        );
    }
}
