import React, { useState, useEffect } from "react";
function TableView({ Data, a }) {

    const [Headers] = useState(["1", "2", "3", "4", "5", "6", "7", "8"]);
    TableView.defaultProps = {
        Data: ["1", "2"]
    }
    useEffect(() => {
        let x = performance.now();
        console.log(x - a);
    })
    return (
        <>
            <table>
                <thead>
                    <tr>
                        {Headers.map(header => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Data.map((row, index) => (
                        <tr key={index}>
                            {Object.values(row).map((cell, index) => (
                                <td key={index}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>)


}

export default TableView;