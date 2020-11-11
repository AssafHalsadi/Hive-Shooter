import React from 'react';

export const StatusBar: React.FC<StatusBarProps> = ({score}) => {
    return (
        <div>
            <h3>{`Score: ${score}`}</h3>
            {/*<NextHexagon /> */}
            {/*TODO Assaf you do this ok?*/}
        </div>
    );
}

export interface StatusBarProps {
    score: number;
}