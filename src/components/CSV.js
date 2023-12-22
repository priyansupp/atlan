import React, { useState, useEffect } from "react";
import CSVDataTable from './CSVDataTable.js';
import Papa from 'papaparse';
import axios from "axios";


function CSV(props) {
    console.log(props.run);
    const [csvData, setCsvData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if(props.run % 2 === 0) {
                    response = await axios.get('/data/hello.csv');
                } else {
                    response = await axios.get('/data/addresses.csv');
                }
      
                // Parse CSV data
                Papa.parse(response.data, {
                    header: true,
                    dynamicTyping: true,
                    complete: (result) => {
                    setCsvData(result.data);
                    },
                });
            } catch (error) {
                console.error('Error fetching CSV data:', error);
            }
        };
        fetchData();
    }, [props.run]);

    return (
        <div>
            <CSVDataTable data={csvData} />
        </div>
    );
}


export default CSV;

