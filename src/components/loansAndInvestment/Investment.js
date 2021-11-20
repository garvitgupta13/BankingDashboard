import React from 'react';

const Investment = (props) =>{
    
    const DUMMY_INVESTMENT = props.data;

    return (
        <>
          <table>
                <thead>
                    <th>Account Number</th>
                    <th>Type</th>
                    <th>Balance</th>
                    <th>Rate</th>
                </thead>
                <tbody>
                    {DUMMY_INVESTMENT.map((data) => (
                       
                       <tr>
                        <td>{data.AccNo}</td>
                        <td>{data.type}</td>
                        <td>{data.balance}</td>
                        <td>{data.rate}</td>
                       </tr>

                    ))}
                </tbody>
            </table>
        </>
    )

}

export default Investment;