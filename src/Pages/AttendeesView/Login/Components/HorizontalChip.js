import React from 'react'
import { Stack } from 'react-bootstrap'
import { Chip } from '@mui/material'
export const HorizontalChip = (props) => {
    return (
        <Stack direction="horizontal" className="d-flex justify-content-center mt-4 mb-4" style={{ display: "flex" }} data-testid={props.data_testid}>
            <hr style={{ width: "50%", color: "#a9a8b3", borderTop: "2px solid" }} />
            <Chip label="&nbsp;&nbsp;or&nbsp;&nbsp;" size="small" style={{ color: "#6f7287", border: "#a9a8b3 1px solid", fontWeight: "bold" }} variant="outlined" />
            <hr style={{ width: "50%", color: "#a9a8b3", borderTop: "2px solid" }} />
        </Stack>)
}
