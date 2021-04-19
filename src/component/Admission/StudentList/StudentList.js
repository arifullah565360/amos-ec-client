import React from 'react';

const StudentList = (props) => {
    const { firstName, gender, number } = props.student
    return (
        <div>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td> <h1>{firstName}</h1></td>
                    <td><h2>{gender}</h2></td>
                    <td><h3>{number}</h3></td>
                </tr>

            </tbody>

           
            
            
        </div >
    );
};

export default StudentList;