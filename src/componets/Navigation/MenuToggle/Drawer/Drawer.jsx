import React,{ Component } from 'react';
import Backdrop from '../../../UI/BackDrop/Backdrop';

import classes from './Drawer.module.css';

const links = [
    1,2,3,4,5,6
]

class Drawer extends Component {

    renderLinks() {
        return links.map((link,index) => {
            return (
                <li key={index}>
                    <a>Link{link}</a>
                </li>
            )
        })
    }

    render() {

        const cls = [classes.Drawer];

        if(!this.props.isOpen) {
            cls.push(classes.close);
        }

        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClose={this.props.onClose}/> : null}
            </> 
        )
    }
}
export default Drawer;