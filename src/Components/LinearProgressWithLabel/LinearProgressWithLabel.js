import { Box, LinearProgress, } from "@mui/material";
import PropTypes from "prop-types";
import React, { FC, useEffect, useState } from "react";

/**
 * Create a linear progress bar with a label under it.
 * Must provide password in props
 * @date 3/29/2023 - 2:48:25 AM
 * @author h4z3m
 *
 * @param {*} props
 * @returns {JSX.Element}
 */
const LinearProgressWithLabel = (props) => {

    const [progressBar, setProgressBar] = useState({
        value: 0,
        colorHex: props.defaultColor,
        labelString: props.defaultLabel,
    });
    useEffect(() => {
        const result = props.progressFunction(props.value ?? "");
        setProgressBar((state) => ({
            ...state,
            ...progressBar,
            value: result[0],
            colorHex: result[1],
            labelString: result[2],
        })

        );
    }, [props.value]);
    return (
        <Box sx={{ alignItems: "center", padding: 0 }}>
            <Box sx={{ width: "100%", mr: 1 }}>
                <LinearProgress
                    variant="determinate"
                    value={progressBar.value * 25}
                    sx={{
                        "& .MuiLinearProgress-bar1Determinate": {
                            backgroundColor: progressBar.colorHex,
                        },
                    }}
                />
            </Box>
            <Box sx={{ minWidth: 35, fontSize: "0.8rem", pt: 2 }}>
                {progressBar.labelString}
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
    defaultColor: PropTypes.string.isRequired,
    defaultLabel: PropTypes.string.isRequired,
    progressFunction: PropTypes.func.isRequired
};

export default LinearProgressWithLabel;
