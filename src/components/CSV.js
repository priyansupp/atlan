import React, { useState, useEffect, useDeferredValue, Suspense } from "react";
import CSVDataTable from './CSVDataTable.js';
import Papa from 'papaparse';
import axios from "axios";
import styles from './CSV.module.css';
import f1 from '../data/addresses.csv';


function CSV(props) {
    const deferredQuery = useDeferredValue(props.csvData);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if(props.run === 1) {
                    response = await axios.get('/addresses.csv');
                } else if(props.run == 2) {
                    response = await axios.get('/medium.csv');
                } else {
                    response = await axios.get('/large.csv');
                }
      
                // Parse CSV data
                Papa.parse(response.data, {
                    header: true,
                    dynamicTyping: true,
                    complete: (result) => {
                        props.setCsvData(result.data);
                        // console.log(result.data);
                    },
                });

                // // Path to your CSV file
                // const csvFilePath = f1;

                // // Parse CSV file
                // Papa.parse(csvFilePath, {
                //     header: true,
                //     dynamicTyping: true,
                //     complete: (result) => {
                //         props.setCsvData(result.data);
                //     },
                // });
            } catch (error) {
                console.error('Error fetching CSV data:', error);
            }
        };
        fetchData();
    }, [props.run]);

    return (
        <div>
            <Suspense fallback={<div className={styles.loadstyle}>Loading...</div>}>
                <CSVDataTable data={deferredQuery} />
            </Suspense>
        </div>
    );
}


export default CSV;

