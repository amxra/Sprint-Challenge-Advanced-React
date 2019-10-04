import React from "react";


class Player extend React.Component {
    render (){
        const {player} = this.PaymentResponse;

        return(){
            <div className = "player">
                <h2>{player.name}</h2>
                <p>{"Country: " + player.country}</p>
                <p>{"Searches: " + player.searches}</p>

            </div>
        }
    }
}

export default Player;