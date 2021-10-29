import React from "react";
import {faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function NoData() {
    return (
        <div className="text-center" style={{opacity: '0.4'}}>
            <FontAwesomeIcon
                size='4x'
                icon={faEnvelopeOpenText}
                style={{
                    opacity: '0.4'
                }}
            />
            <div
                className="mt-1"
                style={{
                    opacity: '0.8'
                }}
            >
                No statistical data yet
            </div>
        </div>
    );
};

export default NoData;
