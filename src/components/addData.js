import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import TableView from "./TableView";

import addData from "../store/data";
import { useDispatch } from "react-redux";




function AddBook() {

    const dispatch = useDispatch()

    dispatch(
        addData({ id: 'dasd' })
    )


    const dataInput = React.createRef();
    const st = { margin: '20px' }
    const [file, setFile] = useState(null);
    const [data, setData] = useState([]);
    const [dataSet, setDataSet] = useState([]);
    const [time, setTime] = useState();
    useEffect(() => {
        if (!file) return;

        Papa.parse(file, {
            header: false,
            complete: function (results) {
                setData(results.data);

            }
        });
    }, [file]);

    const handleChange = event => {
        setFile(event.target.files[0]);
    };
    const Add1 = () => {
        const x = []
        setTime(performance.now());
        for (let i = 0; i < 1; i++) {
            x.push(data[i]);
        }
        setDataSet(x);
    }
    const Add10 = () => {
        const x = []
        setTime(performance.now());
        for (let i = 0; i < 10; i++) {
            x.push(data[i]);
        }
        setDataSet(x);
    }
    const Add100 = () => {
        const x = []
        setTime(performance.now());
        for (let i = 0; i < 100; i++) {
            x.push(data[i]);
        }
        setDataSet(x);
    }
    const Add250 = () => {
        const x = []
        setTime(performance.now());
        for (let i = 0; i < 250; i++) {
            x.push(data[i]);
        }
        setDataSet(x);
    }
    const Add1000 = () => {
        const x = []
        setTime(performance.now());
        for (let i = 0; i < 1000; i++) {
            x.push(data[i]);
        }
        setDataSet(x);
    }
    const Add2500 = () => {
        const x = []
        setTime(performance.now());
        for (let i = 0; i < 2500; i++) {
            x.push(data[i]);
        }
        setDataSet(x);
    }
    const Add5000 = () => {
        const x = []
        setTime(performance.now());
        for (let i = 0; i < 5000; i++) {
            x.push(data[i]);
        }
        setDataSet(x);
    }
    const Add10000 = () => {
        const x = []
        setTime(performance.now());
        for (let i = 0; i < 10000; i++) {
            x.push(data[i]);
        }
        setDataSet(x);
    }
    return (
        <div>
            <div>
                <button style={st} onClick={Add1}>Add1</button>
                <button style={st} onClick={Add10}>Add10</button>
                <button style={st} onClick={Add100}>Add100</button>
                <button style={st} onClick={Add250}>Add250</button>
                <button style={st} onClick={Add1000}>Add1000</button>
                <button style={st} onClick={Add2500}>Add2500</button>
                <button style={st} onClick={Add5000}>Add5000</button>
                <button style={st} onClick={Add10000}>Add10000</button>

            </div>
            <input type="file" ref={dataInput} onChange={handleChange} />
            {dataSet.length > 0 && (<TableView Data={dataSet} a={performance.now()} />)}
        </div>

    );
};
export default AddBook;