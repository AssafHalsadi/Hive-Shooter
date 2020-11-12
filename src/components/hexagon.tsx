import React from "react";
import '../test-css.css';


/**
 *
 * @param props
 * @constructor
 */
export const Hexagon: React.FC<HexagonProps> = (props) => {
    return (
        <>
            <div className={"centered-container"}>
                <div className={"hexagon"} />
            </div>
        </>
    );
}

export interface HexagonProps {
}
