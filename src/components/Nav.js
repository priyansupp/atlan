import React from "react";
import styles from './Nav.module.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { MenuFoldOutlined } from '@ant-design/icons';


function Nav(props) {
    
    return (
        <div className={styles.navleft}>
            <div onClick={props.handleClick} className={styles.click}>
                {
                    props.flag ?
                    <div className={styles.centeredContent}>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            Connect to Client
                            <MenuFoldOutlined style={{ marginLeft: '120px' }} />
                        </span>
                    </div>
                    : 
                    <MenuFoldOutlined style={{ marginLeft: '10px'}} />
                }
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

