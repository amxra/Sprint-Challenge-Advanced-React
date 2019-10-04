import React from "react";


class Players extend React.Component {
    render (){
        const {players} = this.PaymentResponse;

        return(){
            <div className = "players">
                <h2>{players.name}</h2>
                <p>{"Country: " + players.country}</p>
                <p>{"Searches: " + players.searches}</p>

            </div>
        }
    }
}