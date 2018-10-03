import styled from 'styled-components';
import {Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import CircularProgress from '@material-ui/core/CircularProgress';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import TableCell from '@material-ui/core/TableCell';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';

const ToggleTextSC = styled.span`
  color: white;
`;

const SwitchSC = styled(Switch)`
  width: 35px !important;
  margin: 2px;
  & > span:nth-child(1) {
    width: 20px !important;
  }
  & > span > span > span {
    color: #00e676;
  }
  & > span > span > input {
    color: #00e676;
  }
  & > span:nth-child(2) {
    background-color: #00e676;
  }
  & > [class^='MuiSwitch-bar-'], [class*=' MuiSwitch-bar-'] {
    background-color: #00e676 !important;
  }
`;

const EditColCellSC = styled(TableCell)`
    & {
        padding:5px !important;
        margin:5px;
        color: white !important;
    }
`;
const CircularProgressSC = styled(CircularProgress)`
& {
    position: absolute;
    top: 300px;
    left: 550px;
 }
`;

const RowSC = styled(Row)`
    & {
        margin-top: 4% !important;
    }
`;

const FontAwesomeIconSC = styled(FontAwesomeIcon)`
    & {
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
    }
`;
const FilterButtonSC = styled.div`
        width: 148px;
        height: 40px;
        position: absolute;
        top: 15%;
        left: 1.3%;
        cursor: pointer;
        padding: 5px 10px;
        background-color: #3f51b5;
        color: white;
        -webkit-transform: rotate(270deg);
        -moz-transform: rotate(270deg);
        -o-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        -webkit-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        transform: rotate(270deg);
`;

const HideFilterButtonSC = styled.div`
        width: 148px;
        height: 40px;
        position: absolute;
        top: 17%;
        left: 22.7%;
        cursor: pointer;
        padding: 5px 10px;
        background-color: #3f51b5;
        color: white;
        -webkit-transform: rotate(270deg);
        -moz-transform: rotate(270deg);
        -o-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        -webkit-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        transform: rotate(270deg);
`;

const TextFieldSC = styled(TextField)`
& > div > input{
    width: 90px;
    font-size: smaller;
    color: white;
    padding: 0px  !important;
  }
 & > div: after {
  transform: scaleX(1);
  border-bottom-color: white;
 }
`;

const CheckboxSC = styled(Checkbox)`
    & > span > svg {
        width: 20px;
        height: 20px;
        color: #1a5276;
    }
`;

const CheckboxItem = styled.div`
        margin-bottom: -20px;
`;

const CheckboxGroupItem = styled.div`
        margin-top: -20px;
`;

const ButtonCancelSC = styled.div`
      text-transform: none;
      cursor: pointer;
      font-size: smaller;
      margin-left: 90px;
      margin-top: -32px;
      color: #CACFD2;
      padding-bottom: 20px;
`;

const SaveIconTextSC = styled.div`
font-size: smaller;
color: #E5E7E9;
margin-left: 50px;
margin-top:-16px;
`;

const SaveIconSC = styled(CheckIcon)`
margin: 8px 8px 0px 8px;
cursor: pointer;
color: #00a152;
`;

const DeleteIconSC = styled(DeleteIcon)`
    margin: 10px 8px 0px 8px;
    cursor: pointer;
    color: #ec7062;
`;

const DeleteIconTextSC = styled.div`
font-size: smaller;
color: #E5E7E9;
`;

const SpacerSC = styled.span`
    margin: 5px;
`;

export {
    ToggleTextSC,
    SwitchSC  ,
    EditColCellSC,
    CircularProgressSC,
    RowSC,
    FontAwesomeIconSC,
    FilterButtonSC,
    HideFilterButtonSC,
    TextFieldSC,
    CheckboxSC,
    CheckboxItem,
    CheckboxGroupItem,
    ButtonCancelSC,
    SaveIconTextSC,
    SaveIconSC,
    DeleteIconSC,
    DeleteIconTextSC,
    SpacerSC
};