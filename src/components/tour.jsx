import React from "react";
import Card from "./card";

export default function Tour ({tours,removeTour}) {

    return (
        <div className="container">
            <div>
                <h2 className="title">Trip planner</h2>
            </div>
            <div className="cards">
                {
                    tours.map( ( tour ) => {
                        return <Card {...tour} removeTour={removeTour}></Card>
                    }) 
                }
            </div>
        </div>
    );
}