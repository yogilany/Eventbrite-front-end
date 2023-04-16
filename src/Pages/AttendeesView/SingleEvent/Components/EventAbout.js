import React from 'react'
import { Stack } from 'react-bootstrap/'
import * as MUIcons from '@mui/icons-material'
export const EventAbout = (props) => {
    const MainHeaderStyle = {
        color: "#1e0a3c",

    }
    const AboutParagraphStyle = {
        color: "#6f7287",
        fontSize: "16px"
    }
    return (
        <Stack gap={2} style={{ maxWidth: "50vw" }}>
            <h3 style={MainHeaderStyle}>About this event</h3>
            <Stack className="mb-3" direction="horizontal" gap={5}>
                <div>
                    <MUIcons.AccessTime style={{ color: "#0124e9", border: "1px #f8f7fa solid", borderRadius: "10%", backgroundColor: "#f8f7fa", padding: "0.2rem" }} sx={{ fontSize: 26 }} />
                    <strong>1 day 12 hours</strong>
                </div>
                <div>
                    <MUIcons.WifiRounded style={{ color: "#0124e9", border: "1px #f8f7fa solid", borderRadius: "10%", backgroundColor: "#f8f7fa", padding: "0.2rem" }} sx={{ fontSize: 26 }} />
                    <strong>Mobile eTicket</strong>
                </div>
            </Stack>
            <p style={AboutParagraphStyle}>
                {props.about}
                E7kky to Empower: Beyond the Story! event will take place in Cairo, Egypt on 10th March, 2023 celebrating International Women’s Day through the eyes of Egyptian women; their success, their challenges and their life journey. The event will focus on gathering women and girls together to support each other, learn about each other’s stories as well as networking and valuable discussions, activities and workshops that support women to have the power and knowledge to lead a better life where they can enjoy their rights

                Theme of the event: Women and girls empowerment through inspirational talks from influential women, panel discussions on women empowerment, businesses led by women, opportunities from private and public sectors and NGOs provided to women.

                Flow of the Day: One full day event starts at 9 Am and ends at 9 PM. Most activities are happening in parallel: Panel discussions and talks on the main stage, Workshops in meeting rooms, Service Hub, Exhibition, and Networking in the open area, the event theme is built to be dynamic and interactive. In addition to on-side meetings between stakeholders and finally the Closure will be with an entertainment activity TBD later.
            </p>
        </Stack>

    )
}
export default EventAbout;