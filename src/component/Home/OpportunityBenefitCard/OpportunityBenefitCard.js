import React from 'react';
import './OpportunityBenefitCard.css'

const OpportunityBenefitCard = (props) => {
    const { name, image, country, description } = props.data;
    return (
        <div>
            <div className="card text-center ms-5 w-75">

                <div className="text-center">
                    <img style={{ height: "100px" }} className="mx-3" src={image} alt="" />

                </div>
                <div>
                    <h6 className="text-primary">{name}</h6>

                </div>

                <div className="card-body">
                    <p className="card-text text-center">{description}</p>
                </div>

            </div>
        </div>
    );
};

export default OpportunityBenefitCard;