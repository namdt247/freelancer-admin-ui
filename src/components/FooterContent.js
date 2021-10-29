import React from "react";
import moment from "moment";

export default () => {
    const currentYear = moment().get("year");

    return (
        <>
            Copyright ©{' '}
            <strong>{currentYear}</strong>.{' '}
            <span className="">All right reserved.</span>
        </>
    );
};
