import React from "react";
import {StatusBar} from "./status-bar";
import {GameBoard} from "./game-board";
import "../styles.css";

export const HiveShooter: React.FC = () => {
    return (
        <>
            <StatusBar score={50}/>
            <GameBoard/>
        </>
    );
}


/** TODO
 * 1. Create models for the rest of the app entities.
 * 2. Implement the status bar with mock data.
 * 3. Create a design for the player and implement in HTML + CSS.
 */

/*
Assaf -
1. create the hexagon which accepts a hexagon object, and renders it to the screen (no x,y yet).
({color, ..})
2. Render square of game board
 */

/*
class Store{
    function shoot(orientation: {degrees: number}){
        // logic
    }
}

// inside hexagon-shooter:
cost store = new Store();
<GameBoard gameStore={store}/>

// inside game-board:
<Player onShoot={props.gameStore.shoot}/>

// inside player:
onClick() {
    props.onShoot(calculatedOrientation);
}
*/