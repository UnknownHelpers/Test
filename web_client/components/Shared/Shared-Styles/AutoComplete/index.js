import styled from 'styled-components';
import Downshift from 'downshift';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';


const TextFieldSC = styled(TextField)`
& > div > input{
    width: 100%;
    font-size: smaller;
    padding: 0px  !important;
    
  }
 & > div: after {
  transform: scaleX(1);
 }
 & > div {
   width: 75%;
   border-bottom: 2px solid white;
   color: white;
 }
`;
const DownshiftSc = styled(Downshift)`
    & {
        font-size:10px !important;
    }
`;

const PaperSC = styled(Paper)`
    & {
        font-size:10px !important;
    }
    & > div {
        font-size:10px !important;
        font-weight: 'normal';
    }
`;

export {
    TextFieldSC,
    DownshiftSc,
    PaperSC
}