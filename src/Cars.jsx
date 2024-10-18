import React from 'react';
import './Cars.css';

function Cars({ Car_data }) {
    return (
        <>
            <div class='card-container'>
                <div class='card-img'>
                    <img src={Car_data.img} alt="" height={100} width={100}/>
                </div>
                <div class='card-info'>
                    <h2>Name: {Car_data.name}</h2>
                    <h2>Brand: {Car_data.make}</h2>
                    <h2>Color: {Car_data.color}</h2>
                    <h2>Year: {Car_data.year}</h2>
                </div>
            </div>
        </>
    )
}

export default Cars
