
export interface Hexagon {
    id: number;
    color: HexagonColor;
    xPosition: number;
    yPosition: number;
    neighboursIds: Set<number>;
}

export enum HexagonColor { //TODO add color hex codes (it's funny cause they're hex hex codes)
    RED = '#ggfgeg',
    GREEN = '#ggfgeg',
    BLUE = '#ggfgeg',
    YELLOW = '#ggfgeg',
}