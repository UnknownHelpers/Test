
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import FormLabel from '@material-ui/core/FormLabel';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';

const HeaderTableRow = styled(TableRow)`
&  {
  height: 50px !important;
  padding: 10px 0px;
  border-radius: 5px !important;
}
`;

const EditTableRow = styled(TableRow)`
  &  {
    border: 5px solid rgba(224, 224, 224, 1);
    height:20px;
    
  }
  & > th > label {
    color: #ffffff;
  }
`;

const HeaderTableCell = styled(TableCell)`
  & {
    color: #ffffff !important;
    padding: 1px 10px !important;
  }
  & > label {
    color: #ffffff !important;
    font-size: 12px;
  }
`;

const TableBodySC = styled(TableBody)`
  & {
    border-top: 1px solid rgba(224, 224, 224, 1);
    background-color: #ffffff;
  }
`;

const PaperSC = styled(Paper)`
& > div {
  width: 100%;
}
`;

const HeaderSC = styled(TableHead)`
  &&& {
    text-transform: uppercase;
    font-weight: bolder;
    border-bottom: 10px solid #eaf1f7;
    border-radius: 5px;
    color: #ffffff;
    background-color: #3f51b5;
    
  }
`;

const EditLabel = styled(FormLabel)`
    margin-left: 80px;
    margin-top: 20px;
    color: red !important;
    font-weight: normal;
    font-size: 12px !important;
    
`;

const EditRowSC = styled(TableRow)`
&&& {
    background-color: #3f51b5;
    color: #ffffff;
    border: 5px solid #eaf1f7;
}
`;

const TableSC = styled(TableCell)`
    color: black;
    padding: 1px 10px !important;
    & > button {
      color: #1769aa;
      height: 30px !important;
      margin-left: 60px;
    }
`;



const TableWrapperSC = styled(Table)`
  & {
      box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
      border-radius: 4px;
      margin-top: 1px;
  }
`;

export {
  HeaderTableCell, EditTableRow, EditLabel, TableBodySC, PaperSC, HeaderSC, EditRowSC, HeaderTableRow, TableSC, TableWrapperSC
}
