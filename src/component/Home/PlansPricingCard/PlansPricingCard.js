import React from 'react';

const PlansPricingCard = (props) => {
    const { name, price, description } = props.teacher
    return (
        <div>
            <div className="card text-center ms-5 w-75">

                <div className="text-center bg-warning">
                  
                    <h3>{description}</h3>
                </div>
                <div>
                    <h1 className="text-primary">{price}</h1>
                        <p>{name}</p>
                </div>

                <div className="card-body">
                   <button className="bg-warning">I WANT THIS PLAN</button>
                </div>
                </div>


            </div>
    );
};

export default PlansPricingCard;