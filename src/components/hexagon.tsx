import React from "react";
import '../css/hexagon.css';


/**
 *
 * @param props
 * @constructor
 */
export const Hexagon: React.FC<HexagonProps> = ({color}) => {
    return (
        <>
            <div className={"hexagon-" + color} />
        </>
    );
}

export interface HexagonProps {
    color: string;
}
