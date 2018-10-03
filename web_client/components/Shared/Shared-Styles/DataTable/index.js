import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import styled from 'styled-components';
import FormLabel from '@material-ui/core/FormLabel';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';

const HeaderTableRowSC = styled(TableRow)`
&  {
  height: 50px !important;
  padding: 10px 0px;
  border-radius: 5px !important;
}
`;

const HeaderTableCellSC = styled(TableCell)`
  & {
    color: white !important;
    padding: 1px 10px !important;
  }
  & > label {
    color: white !important;
    font-size: 12px;
  }
`;

const TableBodySC = styled(TableBody)`
  & {
    border-top: 1px solid rgba(224, 224, 224, 1);
  }
`;


const HeaderSC = styled(TableHead)`
  &&& {
    text-transform: uppercase;
    font-weight: bolder;
    border-bottom: 10px solid #eaf1f7;
    border-radius: 5px;
    color: white;
    background-color: #3f51b5;
  }
`;

const EditLabel = styled(FormLabel)`
    margin-left: 80px;
    margin-top: 20px;
    font-weight: normal;
    font-size: 13px !important;
    
`;

const EditRowSC = styled(TableRow)`
&&& {
    background-color: #3f51b5;
    color: white;
    border-bottom: 8px solid #eaf1f7 !important;
    border-top: 8px solid #eaf1f7 !important;
}
`;



const TableSC = styled(TableCell)`
    color: black;
    padding: 1px 10px !important;
    background-color: white;
    & > button {
      color: #1769aa;
      height: 30px !important;
      margin-left: 80px;
    }
`;

const TableWrapperSC = styled(Table)`
  & {
      box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
      border-radius: 4px;
    
  }
`;

export {
  HeaderTableRowSC,
  HeaderTableCellSC,
  TableBodySC,
  HeaderSC,
  EditLabel,
  EditRowSC,
  TableSC,
  TableWrapperSC
}
