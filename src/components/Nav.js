import React from "react";
import styles from './Nav.module.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


function Nav(props) {
    
    return (
        <div className={styles.navleft}>
            <div onClick={props.handleClick} style={{color: "red"}}>
                Connect to Client
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

