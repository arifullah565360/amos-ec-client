import React from 'react';

const ListStudentCard = (props) => {
    const { firstName, created , number } = props.student
    return (
        <div>
            <table class="table">
            <tbody>
                <tr>
                  
                    <td>{firstName}</td>
                    <td>{number}</td>
                    <td>{created}</td>
                </tr>

            </tbody>
            </table>
        </div>
    );
};

export default ListStudentCard;