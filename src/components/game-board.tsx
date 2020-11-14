import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import { Player } from "./player";

export const GameBoard = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);
    usePlayer(canvasRef);

    return (
        <GameCanvas ref={canvasRef} width={`${GAME_CANVAS_WIDTH}px`} height={`${GAME_CANVAS_HEIGHT}px`} />
    );
}

const usePlayer = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
    const [player, setPlayer] = useState<Player>();

    useEffect(() => {
        canvasRef.current && setPlayer(new Player(canvasRef.current));
    }, [canvasRef]);

    useEffect(() => {
        player?.init();
    }, [player]);
};

export const GAME_CANVAS_WIDTH = 640;
export const GAME_CANVAS_HEIGHT = 450;

const GameCanvas = styled.canvas`
    background: #f7f7f7;
`;
