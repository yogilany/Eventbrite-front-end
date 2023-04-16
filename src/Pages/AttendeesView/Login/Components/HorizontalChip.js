import { Chip } from '@mui/material'
import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import HorizontalChipCSS from './HorizontalChip.module.css'
/**
 * Horizontal chip with the word 'or' in a pill and 2 lines on both sides of the pill
 * @date 3/29/2023 - 2:52:24 AM
 * @author h4z3m
 *
 * @param {*} props
 * @returns {*}
 */
export const HorizontalChip = (props) => {
    return (
        <Stack name={props.name} direction="horizontal" className="horizontal-chip d-flex justify-content-center mt-4 mb-4" style={{ display: "contents" }} data-testid={props.data_testid}>
            <hr style={{ width: "50%", backgroundColor: "#a9a8b3", height: "2px", border: "none" }} />
            <Chip className={HorizontalChipCSS.MuiChip_root_chip} label="&nbsp;&nbsp;or&nbsp;&nbsp;" size="small" variant="outlined" />
            <hr style={{ width: "50%", backgroundColor: "#a9a8b3", height: "2px", border: "none" }} />
        </Stack>)
}
export default HorizontalChip;