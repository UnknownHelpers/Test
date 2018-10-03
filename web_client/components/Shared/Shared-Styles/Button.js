import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const ButtonSC = styled(Button)`
 & {
    text-transform: 'uppercase';
    background-color: #02bcd4 !important;
    color: #ffffff !important;
    font-family: sans-serif;
 }
`;

export {ButtonSC};