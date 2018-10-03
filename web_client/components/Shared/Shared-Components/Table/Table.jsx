/* React Core Package */
import React, {Component, Fragment} from 'react';
import TableRow from '@material-ui/core/TableRow';
/* Icons */
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
/* Lodash Utils */
import * as _ from 'lodash';
/* OTable Styled Components */
import * as Styles from '../../Shared-Styles/Table';
import { Col } from 'react-bootstrap'

class OTable extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: {
        headers: props && props.data ? props.data.headers : null,
        rows: props && props.data ? props.data.rows : null
      },
      currentEditIndexValue: props && props.currentEditIndexValue ? props.currentEditIndexValue : -1,
      editRow: props && props.editRow ? props.editRow : null
    }
  }

  componentWillReceiveProps(nextProps){
    /// Check the props data if any data as been modified update state data with latest one
    if(this.props.data!==nextProps.data){
      this.setState({data: {
        headers: nextProps.data.headers, 
        rows: nextProps.data.rows
      }});
    }
    if(this.props.currentEditIndexValue!==nextProps.currentEditIndexValue){
      this.setState({currentEditIndexValue: nextProps.currentEditIndexValue});
    }
    if(this.props.editRow!==nextProps.editRow){
      this.setState({editRow: nextProps.editRow});
    }
  }
  renderHeader(headers){
    const {isEditable} = this.props;
    return(<Styles.HeaderSC id='OTableHeader'>
            <Styles.HeaderTableRow id='OTableHeaderRow'>
              {_.size(headers)> 0 && headers.map((header, index) => {
                  return header.isVisible && <Styles.HeaderTableCell id={'OTableHeaderCol.' + index} key={'OTableHeaderCol.'+ index} component='th' scope='row'>{header.value}</Styles.HeaderTableCell>
              })}
              {isEditable && 
                <Styles.HeaderTableCell id='OTableHeaderEditCol'>
                      <Styles.EditLabel> Edit </Styles.EditLabel> 
                </Styles.HeaderTableCell>
              }
            </Styles.HeaderTableRow>
        </Styles.HeaderSC>);
  }

  /// function is used to hide/show the editable row
  toggleEditRow(rowIndex){
    if(rowIndex === this.state.currentEditIndexValue){
      if(this.props.onEditRowClick){
        this.props.onEditRowClick(-1)
      }
    }else{
      if(this.props.onEditRowClick){
        this.props.onEditRowClick(rowIndex)
      }
    }
  }

  renderCell(row, rowIndex){
    const {isEditable} = this.props;
    let _domCols = [];
    if(_.size(row)>0){
      row.map((col, index)=>{
        _domCols.push(<Styles.TableSC id={'OTableBodyCol.' + index + '.' + rowIndex} key={'OTableBodyCol.' + index + '.' + rowIndex}>{col}</Styles.TableSC>);
      })
      isEditable && _domCols.push(<Styles.TableSC id={'OTableBodyColEditAction.' + rowIndex} key={'OTableBodyColEditAction.' + rowIndex}>
                                    <IconButton id={'OTableBodyColEditIconBtn.'  + rowIndex} onClick={this.toggleEditRow.bind(this, rowIndex)} aria-label='Edit'>
                                      <EditIcon id={'OTableBodyColEditIcon.' + rowIndex} />
                                    </IconButton>
                                  </Styles.TableSC>);
    }
    return _domCols;
  }

  renderEditCell(index){
    return <Styles.EditRowSC id={'OTableBodyRowEdit.' + index} key={'OTableBodyRowEdit.' + index}>
              {this.state.editRow}
          </Styles.EditRowSC>
  }

  render(){
    return(<Fragment>
     
              {this.state.data && 
                    <Styles.TableWrapperSC id='OTable'>
                      {this.state.data && this.state.data.headers && _.size(this.state.data.headers)>0 && this.renderHeader(this.state.data.headers)}
                      {this.state.data && this.state.data.rows && _.size(this.state.data.rows)>0 && <Styles.TableBodySC id='OTable BodyWrapper'>
                         {this.state.data.rows.map((row, index) => {
                            if(this.state.currentEditIndexValue !== index) {
                              return(<TableRow id={'OTableBodyRow.' + index} key={'OTableBodyRow.' + index}>{this.renderCell(row, index)}</TableRow>)
                            } else if(this.state.currentEditIndexValue === index) {
                              return this.renderEditCell(index)
                            }
                        })}
                      </Styles.TableBodySC>}
                    </Styles.TableWrapperSC>
             }
          </Fragment>);
  }
}

export default OTable;