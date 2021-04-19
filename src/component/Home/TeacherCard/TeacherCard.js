import React from 'react';

const TeacherCard = (props) => {
    const { name, image, description } = props.teacher
    return (
        <div>
            <div className="card text-center ms-5 w-75">

                <div className="text-center">
                    <img style={{ height: "100px" }} className="mx-3" src={image} alt="" />

                </div>
                <div>
                    <h4 className="text-primary">{name}</h4>

                </div>

                <div className="card-body">
                    <h5 className="card-text text-center">{description}</h5>
                </div>
                </div>


            </div>
    );
};

export default TeacherCard;