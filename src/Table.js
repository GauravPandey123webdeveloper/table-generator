import React, { useState } from 'react'
import './tableStyle.css'
export default function Table() {
    const [num, setNum] = useState('')
    function onChange(e) {
        setNum(e.target.value)
    }
    function table() {
        let res = []
        if (num !== '') {
            for (let i = 1; i <= 10; i++) {
                let tab = num * i
                res.push(
                    <tr>
                        <td>{tab}</td>
                    </tr>
                )
            }
        }

        return res;

    }
    return (
        <div className="tabArea">
            <div className="input">
                <label htmlFor="tab">Enter Number : </label>
                <input type="number" name='tab' onChange={onChange} value={num} />
            </div>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Here is Your Table : {num}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
