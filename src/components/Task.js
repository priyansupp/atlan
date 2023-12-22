import React, {useState} from "react";
import styles from './Task.module.css';
import { SettingFilled } from '@ant-design/icons';

function Task(props) {
    const [isFileDropdownOpen, setFileDropdownOpen] = useState(false);
    const [isRunDropdownOpen, setRunDropdownOpen] = useState(false);
    const [isExportDropdownOpen, setExportDropdownOpen] = useState(false);
    const [isImportModalOpen, setImportModalOpen] = useState(false);

    const toggleFileDropdown = () => {
        setFileDropdownOpen(!isFileDropdownOpen);
        setExportDropdownOpen(false);
        setRunDropdownOpen(false);
    };
    
    const toggleRunDropdown = () => {
        setRunDropdownOpen(!isRunDropdownOpen);
        setExportDropdownOpen(false);
        setFileDropdownOpen(false);
    };
    
    const toggleExportDropdown = () => {
        setExportDropdownOpen(!isExportDropdownOpen);
        setFileDropdownOpen(false);
        setRunDropdownOpen(false);
    };

    const toggleImportModal = () => {
        setImportModalOpen(!isImportModalOpen);
    };

    return (
        <div className={styles.taskflex}>
            <div className={styles.taskleft}>
            <div className={styles.taskOption} onClick={toggleFileDropdown}>
                    File
                    {isFileDropdownOpen && (
                        <div className={styles.dropdownContent}>
                            <div>New File</div>
                            <div>Open File</div>
                            <div>Save</div>
                            <div>Save As...</div>
                        </div>
                    )}
                </div>
                <div className={styles.taskOption}>Database</div>
                <div className={styles.taskOption} onClick={toggleRunDropdown}>
                    Run
                    {isRunDropdownOpen && (
                        <div className={styles.dropdownContent}>
                            <div onClick={() => props.setRun(1)}>Small Query</div>
                            <div onClick={() => props.setRun(2)}>Medium Query</div>
                            <div onClick={() => props.setRun(3)}>Large Query</div>
                        </div>
                    )}
                </div>
                <div className={styles.taskOption} onClick={toggleExportDropdown}>
                    Export
                    {isExportDropdownOpen && (
                        <div className={styles.dropdownContent}>
                            <div>as PDF</div>
                            <div>as CSV</div>
                            <div>as Excel</div>
                        </div>
                    )}
                </div>
                <div className={styles.taskOption} onClick={toggleImportModal}>
                    Import
                </div>
            </div>
            <div className={styles.taskright}>
                <div className={styles.taskOption}>Sign in</div>
                <SettingFilled style={{ fontSize: '20px', paddingTop: "4px"}}/>
            </div>
            
             {/* Import Modal */}
             {isImportModalOpen && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <div>
                            <label htmlFor="fileInput">Choose a file:</label>
                            <input type="file" id="fileInput" />
                        </div>
                        <div>
                            <button onClick={toggleImportModal}>Close</button>
                            <br></br>
                            <br></br>
                            <button>OK</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}


export default Task;

