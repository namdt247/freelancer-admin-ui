import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleLeft} from "@fortawesome/free-solid-svg-icons";
import ModelManager from "../../../common/ModelManager";

function WelCome(props) {
    const {showSidebar} = props;

    const userName = ModelManager.userName || 'Admin';

    const handleClick = () => {
        if (showSidebar) {
            showSidebar();
        }
    }

    return (
        <div className="d-flex justify-content-between mb-3">
            <div>
                <h5 className="mb-1">Welcome, <span className="text-capitalize">{userName}</span></h5>
                <h6 className="text-dashboard">
                    Quick statistics of the whole system
                </h6>
            </div>
            <div className="d-flex align-items-center">
                <span
                    className="wrap-icon-toggle-overview d-block d-xl-none"
                    onClick={handleClick}
                >
                    <FontAwesomeIcon
                        icon={faAngleDoubleLeft}
                        className="text-gray"
                    />
                </span>
            </div>
        </div>
    )
};

export default WelCome;
