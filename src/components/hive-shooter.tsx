import React from "react";
import { StatusBar } from "./status-bar";

export const HiveShooter: React.FC<GameProps> = (props) => {
    return <StatusBar score={50}/>;
}

export interface GameProps {
}