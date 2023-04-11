import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import VoiceChatIcon from '@mui/icons-material/VoiceChat';
import { Box } from '@mui/system';
import styled from "styled-components";

export const Section5: React.FC = () => {
    return (
        <>
            <Footer>
                <p style={{ paddingBottom: "50px" }}>Lerem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                    Maecenas lobortis ornare pharetra. Aliquam accumsan risus nec<br />
                    odio ornare scelerisque.</p>
                <ShortContact><TwitterIcon /></ShortContact>  <ShortContact><InstagramIcon /></ShortContact>
                <ShortContact><WorkspacesIcon /></ShortContact> <ShortContact><VoiceChatIcon /></ShortContact>
                <p style={{ paddingTop: "50px" }}>@ 2022 LURV | All Rights Reserved</p>
            </Footer>
        </>
    )
}
const Footer = styled(Box)`
    padding-top: 200px;
    text-align: left;
`;
const ShortContact = styled.span`
    padding: 30px;
`;
