import React from 'react';
import '../css/status-bar.css';

export const StatusBar: React.FC<StatusBarProps> = ({score}) => {
    return (
        <div className={'status-container'}>
            <h3>{`User score: ${score}`}</h3>
            {/*<NextHexagon /> */}
            {/*TODO Assaf you do this ok?*/}
        </div>
    );
}

export interface StatusBarProps {
    score: number;
}