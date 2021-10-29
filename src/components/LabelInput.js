import React from "react";

function LabelInput(props) {
    const {text, required = false} = props;
    return (
        <span>
            {text}
            {required && (
                <span className="text-danger ml-1">(*)</span>
            )}
        </span>
    )
};

export default LabelInput;
