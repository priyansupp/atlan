import React, {useState} from "react";
import styles from './Task.module.css';

function Task() {
    const [isFileDropdownOpen, setFileDropdownOpen] = useState(false);
    const [isExportDropdownOpen, setExportDropdownOpen] = useState(false);
    const [isImportModalOpen, setImportModalOpen] = useState(false);

    const toggleFileDropdown = () => {
        setFileDropdownOpen(!isFileDropdownOpen);
        setExportDropdownOpen(false);
    };

    const toggleExportDropdown = () => {
        setExportDropdownOpen(!isExportDropdownOpen);
        setFileDropdownOpen(false);
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
                            {/* Add more options as needed */}
                        </div>
                    )}
                </div>
                <div className={styles.taskOption}>Database</div>
                <div className={styles.taskOption}>Run</div>
                <div className={styles.taskOption} onClick={toggleExportDropdown}>
                    Export
                    {isExportDropdownOpen && (
                        <div className={styles.dropdownContent}>
                            <div>as PDF</div>
                            <div>as CSV</div>
                            <div>as Excel</div>
                            {/* Add more export options as needed */}
                        </div>
                    )}
                </div>
                <div className={styles.taskOption} onClick={toggleImportModal}>
                    Import
                        </div>
            </div>
            <div className={styles.taskright}>
                <div className={styles.taskOption}>Sign in</div>
                <div className={styles.taskOption}>Settings</div>
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
                            <button>OK</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}


export default Task;

