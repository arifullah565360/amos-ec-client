import React from 'react';

const Review = (props) => {
    const { imgUrl, firstName, comment } = props.rev
    return (
        <div>
            <div className="card text-center ms-5 w-75">

                <div className="text-center">
                    <img style={{ height: "100px" }} className="mx-3" src={imgUrl} alt="" />

                </div>
                <div>
                    <h6 className="text-primary">{firstName}</h6>

                </div>

                <div className="card-body">
                    <p className="card-text text-center">{comment}</p>
                </div>
            </div>


        </div>
    );
};

export default Review;