import React from "react";
import styles from './Nav.module.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


function Nav(props) {
    
    return (
        <div className={styles.navleft}>
            <div onClick={props.handleClick} className={styles.click}>
                {props.flag ?  'Connect to Client' : <image></image>}
            </div>
            {
                props.flag ?
                <Sidebar>
                    <Menu>
                        <SubMenu label="MySQL">
                        <MenuItem> Databases </MenuItem>
                        <MenuItem> Tables </MenuItem>
                        </SubMenu>
                        <SubMenu label="PostgreSQL">
                        <MenuItem> Databases </MenuItem>
                        <MenuItem> Tables </MenuItem>
                        </SubMenu>
                        <SubMenu label="Oracle Server">
                        <MenuItem> Databases </MenuItem>
                        <MenuItem> Tables </MenuItem>
                        </SubMenu>
                    </Menu>
                </Sidebar>
                : <></>
            }
        </div>
    );
}


export default Nav;

