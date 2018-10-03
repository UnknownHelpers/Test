import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Row} from 'react-bootstrap';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import TableCell from '@material-ui/core/TableCell';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import Dropdown from 'react-dropdown';

const DropdownSC =  styled(Dropdown)`
    & {
        font-size:12px;
    }
`;

const FormLabelSC =  styled(FormLabel)`
& {
    font-weight:'500';
}`;


const TextFieldAddVDN = styled(TextField)`
& > div > input{
    width: 100%;
    font-size: smaller;
    color: black;
    padding: 0px  !important;
  }
 & > div: after {
  transform: scaleX(1);
  border-bottom-color: #3f51b5;
 }
 & > label {
    color: #3f51b5;
    font-weight: bolder;
    font-size: 12px;
 }
`;

const ButtonSC = styled(Button)`
 & {
    text-transform: 'uppercase';
    margin: 22px !important;
    background-color: #00BCD4 !important;
    color: white !important;
 }
`;

const EditColCellSC = styled(TableCell)`
    & {
        padding:5px !important;
        margin:5px;
        color: white !important;
        
    }
`;

const FontAwesomeIconSC = styled(FontAwesomeIcon)`
    & {
        margin:0px 5px;
}`;


const FontAwesomeIconSCFlags = styled(FontAwesomeIcon)`
    & {
        margin:0px 5px;
        color: red;
}`;


const FontAwesomeIconSCRepeat = styled(FontAwesomeIcon)`
    & {
        margin:0px 5px;
        color: green;
}`;


const FontAwesomeCloseIconSC = styled(FontAwesomeIcon)`
 & {
    color: #3f51b5;
 }`;

const ReasonLabelSC = styled.span`
& {
    text-transform: uppercase;
    font-weight: bolder;
    color: orange
}
`;
const CircularProgressStyledComponent = styled(CircularProgress)`
& {
    position: absolute;
    top: 300px;
    left: 550px;
 }
`;

const RowSC = styled(Row)`
    & {
        margin: 0px !important;
    }
`;

const ToggleTextSC = styled.span`
  color: orange;
`;

const TextFieldSC = styled(TextField)`
& > div > input{
    width: auto;
    font-size: smaller;
    color: white;
    padding: 0px  !important;
  }
 & > div: after {
  transform: scaleX(1);
  border-bottom-color: white;
  background-color: #333;
    overflow: auto;
    white-space: nowrap;
 }
 
`;

const SwitchSC = styled(Switch)`
  & > span > span > span {
    color: #ff9100;
  }
  & > span > span > input {
    color: #ff9100;
  }
  & > span:nth-child(2) {
    background-color: #ff9100;
  }
  & > [class^='MuiSwitch-bar-'], [class*=' MuiSwitch-bar-'] {
    background-color: #ff9100 !important;
  }
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
    color: #ff9100 !important;
`;

const DeleteIconTextSC = styled.div`
font-size: smaller;
color: #E5E7E9;
`;
export {ToggleTextSC, SwitchSC, TextFieldSC, FontAwesomeIconSC, RowSC, CircularProgressStyledComponent, ReasonLabelSC, EditColCellSC, DeleteIconSC, SaveIconSC, DeleteIconTextSC, SaveIconTextSC, ButtonCancelSC, ButtonSC, FontAwesomeCloseIconSC, TextFieldAddVDN, FormLabelSC, FontAwesomeIconSCFlags, FontAwesomeIconSCRepeat, DropdownSC};
