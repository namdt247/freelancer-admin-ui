import React from "react";
import Loader from "react-loader-spinner";

export default function LoadingData() {
    return (
        <div className="loader-data d-flex flex-column justify-content-center align-items-center">
            <Loader
                type={"Oval"}
                color="#0747a6"
                height={50}
                width={50}
                style={{ opacity: "1 !important" }}
            />
            <span
                style={{ color: "#0747a6", fontSize: "15px", opacity: "1 !important" }}
                className="mt-3"
            >
                Loading data...
            </span>
        </div>
    );
}
