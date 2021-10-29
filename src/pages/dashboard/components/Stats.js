import * as React from 'react';

function Stats(props) {
    return (
        <div className="d-flex flex-column stats justify-content-center">
            <h2> {props.text}</h2>
            <div className="d-flex justify-content-between">
                <div className="stats-number"> {props.number}</div>
                <div>
                    <img
                        src={props.icon}
                        alt="img"
                        className="text-white"
                    />
                </div>
            </div>
        </div>
    );
}

export default Stats;
