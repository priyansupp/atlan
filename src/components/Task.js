import React from "react";
import styles from './Task.module.css';

function Task() {
    return (
        <div className={styles.taskflex}>
            <div className={styles.taskleft}>
                <div>File</div>
                <div>Database</div>
                <div>Run</div>
                <div>Export</div>
                <div>Import</div>
            </div>
            <div className={styles.taskright}>
                <div>Sign in</div>
                <div>Settings</div>
            </div>
        </div>
    );
}


export default Task;

