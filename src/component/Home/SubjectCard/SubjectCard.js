import React from 'react';
import { Link } from 'react-router-dom';
import './SubjectCard.css'

const SubjectCard = (props) => {
    const { subject, imgUrl, content,price } = props.Subject

    return (
        <div className="SubjectCard">
            <div className="text-center">
                <div className="text-center">
                    <img style={{ height: "100px" }} className="mx-3" src={imgUrl} alt="" />

                </div>
                <div>
                    <h6 className="text-primary text-center">{subject}</h6>
                </div>
                <div>
                    <h4 className="mt-3 text-center">Price: {price}</h4>
                </div>
                <div className="card-body">
                    <p className="card-text text-center">{content}</p>
                </div>

            <Link to="/admission"><button className="enrollBtn ">Enroll Now</button></Link>    
            </div>
        </div>
    );
};

export default SubjectCard;