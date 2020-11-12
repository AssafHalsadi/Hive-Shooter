
export interface hexagon {
    id: number;
    color: HexagonColor;
    xPosition: number;
    yPosition: number;
    neighboursIds: Set<number>;
}

export enum HexagonColor { //TODO add color hex codes (it's funny cause they're hex hex codes)
    // TODO: kept your todo casue it makes me laugh. Anywho, swiched to strings for now casue it helps me
    // RED = '#ed7263',
    // GREEN = '#1cb992',
    // BLUE = '#407bbf',
    // YELLOW = '#ffac20',
    RED = 'red',
    GREEN = 'green',
    BLUE = 'blue',
    YELLOW = 'yellow',
}