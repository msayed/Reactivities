import React from 'react';
import { Icar } from './demo';

interface Iprops
{   
    car:Icar;
}
const CarItem: React.FC<Iprops> = ({car}) => {
    return (
        <div>
            <h1>{car.Color}</h1>
        </div>
    )
}

export default CarItem;