import React from "react";
import {StatusBar} from "./status-bar";
import {GameBoard} from "./game-board";
import {Hexagon} from "./hexagon";
import "../css/hive-shooter.css";



export const HiveShooter: React.FC<GameProps> = (props) => {

    return (
        <html>
            <head>
                <title>Hive-Shooter</title>
            </head>
            <body>
                <div className={"game-container"}>
                    <Hexagon color={"red"}/>
                    <Hexagon color={"blue"}/>
                    <Hexagon color={"green"}/>
                    <Hexagon color={"yellow"}/>
                    <StatusBar score={0}/>
                </div>
            </body>
        </html>
    );
}

export interface GameProps {

}


/** TODO
 * 1. Create models for the rest of the app entities.
 * 2. Implement the status bar with mock data.
 * 3. Create a design for the player and implement in HTML + CSS.
 */

/*
Assaf - started
1. create the hexagon which accepts a hexagon object, and renders it to the screen (no x,y yet).
({color, ..})
2. Render square of game board
 */

/*
Nitsan -
1. Create player (drawing + respond to mouse).
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