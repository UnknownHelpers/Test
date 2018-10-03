/* React Core Package */
import React, {Component, Fragment} from 'react';
import OTable  from '../../Shared/Shared-Components/Table/Table';
import {getVDNOverrides, postVDNData, putVDNData, getVDNIDList} from './actions';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {TextFieldAddVDN, DropdownSC, FontAwesomeCloseIconSC, DeleteIconSC, SaveIconSC, DeleteIconTextSC, SaveIconTextSC, ButtonCancelSC, EditColCellSC, ToggleTextSC, SwitchSC, TextFieldSC, CircularProgressStyledComponent, FontAwesomeIconSC} from './VDNOverridesStyle';
import ODialog from '../../Shared/Shared-Components/DialogBox/DeleteDialog';
import OButton from '../../Shared/Shared-Components/AddButton/Button';
import 'react-dropdown/style.css'
import { faSyncAlt, faFlag, faTimes } from 'fa5-pro-solids';
import {Row, Col} from 'react-bootstrap';


class VdnOverRides extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
            editRow: null,
            currentEditIndexValue: -1,
            isAddForm: false,
            dialog: null,
            selectedVDN: '',
            selectedReason: '',
            returnVDN: '',
            successDialog: null
        };
    }

    getHeaders(headers){
        return headers.map((item)=>{
            return Object.assign({}, item, {isVisible: true});
        });
    }

    getRows(getRows){
        return getRows.map((item)=>{
            return item.map((colItem)=> {
                return Object.assign({}, colItem, {isVisible: true});
            })
        });
    }

    componentWillMount(){
        this.props.getVDNOverrides().then(()=>{
            this.setState({data: {
                 headers: this.getHeaders(this.props.data.headers),
                 rows: this.getRows(this.props.data.rows)
            }});
        }).catch((error)=>{

        });
        this.props.getVDNIDList();
    }

    modifyLengthy(text){
        if(text && text.length > 20){
            return text.substring(0, 20) + '...';
        }
        return text;
    }
    
    constructRowsByColType(rows){
        let _rows = Object.assign([], rows);
        let _dom = [];
        _.size(_rows)>0 && _rows.forEach((element, rowIndex) => {
           let _cols = [];
           element.forEach((col)=> {
              if(col.isVisible){
                let _domObj = this.modifyLengthy(col.value); //col.col == 2 ? col.value == 'Repeat'? (<span style={{color: 'green'}}><FontAwesomeIconSCRepeat icon= { faSyncAlt } />Repeat</span>):(<span style={{color: 'red'}}><FontAwesomeIconSCFlags icon= { faFlag } />Flags</span>):
                _cols.push(_domObj);
              }
          });
          _dom.push(_cols);
        });
        return _dom;
    }

    onEditRowClick(index){
        if(index!==-1){
            this.setState({currentEditIndexValue: index, editRow: this.state.data.rows[index]});
        }else{
            this.setState({currentEditIndexValue: index, editRow: null});
        }
    }

    getComponentByKey(item, index, colIndex){
        let {col, key, value} = item;
        switch(col){
            case 4:  return <TextFieldSC id={_.toString(index + '.' + col)} name={'txtField.' + index + '.' + colIndex + '.' + key}  defaultValue={value}/>
            case 3:  return <TextFieldSC id={_.toString(index + '.' + col)} name={'txtField.' + index + '.' + colIndex + '.' + key}  defaultValue={value}/>
            case -32:  return <div><ToggleTextSC><span style={{color: 'red'}}><FontAwesomeIconSC icon={ faFlag } />Flags</span></ToggleTextSC>{<SwitchSC className={'toggle'} id={index + '.' + col} defaultChecked={value} />}<ToggleTextSC><span style={{color: 'green'}}><FontAwesomeIconSC icon={faSyncAlt} />Repeat</span></ToggleTextSC></div>
            default: return _.toString(item.value);
        }
    }

    onDeleteClick(index){
        let _row = this.state.data.rows[index];
        const {currentEditIndexValue} = this.state;
        const _vdn = _.find(_row, ['col', 1]).value;
        const title = 'contactrouting-stga.bcbsfi.com says';
        const content = `Are you sure you want to delete VDN[${_vdn}]?`;
        this.setState({dialog: {
            isOpen: true,
            title,
            content,
            selectedRowForDelete: currentEditIndexValue
        }})
    }

    onSaveClick(index){
        let overRideReason = document.getElementById(index + '.' + 2);
        let returnValue = document.getElementById(index + '.' + 3);
        let notes = document.getElementById(index + '.' + 4);
        if(overRideReason && returnValue && notes){
            if(_.isEmpty(returnValue.value) || _.isEmpty(notes.value)){
                alert('Invalida Data');
            }else {
            let rows = _.assign([], this.state.data.rows);
            let _row = rows[index];
            _.find(_row, ['col', 2]).value= overRideReason.checked;
            _.find(_row, ['col', 3]).value= returnValue.value;
            _.find(_row, ['col', 4]).value= notes.value;
            let _data = { 
                "vdnID": _.find(_row, ['col', 1]).value, 
                "vrReason": overRideReason.checked? 'Repeat' : 'Flags', 
                "vrReturn": returnValue.value, 
                "voNotes": notes.value, 
                "racf": "99999"
            }
            this.props.putVDNData(_data);

            this.setState({currentEditIndexValue: -1, editRow: null, data : Object.assign({}, this.state.data, {rows})});
         }
       }
    }

    toggleEditRow(index){
        this.setState({currentEditIndexValue: -1, editRow: null});
    }

    constructEditRow(){
        if(this.state.data){
        let index = this.state.currentEditIndexValue;
        let _editableRow = this.state.data.rows[index];
        let _dom =[];
            _.size(_editableRow) > 0 && _editableRow.forEach((item, colIndex)=>{
                if(item.isVisible){
                    _dom.push(<EditColCellSC>{this.getComponentByKey(item, index, colIndex)}</EditColCellSC>)
                }
            });
            _dom.push(<EditColCellSC id={'OTableBodyEditColActionItems.' + index}  key={'OTableBodyEditColActionItems.' + index}>
                            <DeleteIconSC id={'OTableDeleteIconSC.' + index} onClick={this.onDeleteClick.bind(this, index)} color='error'/>
                            <SaveIconSC id={'OTableSaveIconSC.' + index} onClick={this.onSaveClick.bind(this, index)}/>
                            <DeleteIconTextSC id={'OTableDeleteIconTextSC.' + index}>Delete</DeleteIconTextSC>
                            <SaveIconTextSC id={'OTableSaveIconTextSC.' + index}>Save</SaveIconTextSC>
                            <ButtonCancelSC id={'OTableButtonCancelSC.' + index} onClick={this.toggleEditRow.bind(this, index)}>Cancel</ButtonCancelSC>
            </EditColCellSC>);
          return _dom;
        }
    }

    onSubmit(){
        let  {selectedVDN, selectedReason, returnVDN} = this.state;
        let _txtRetunValue = _.trim(selectedReason)==='Flags' ?  document.getElementById('txtRetunValue').value : returnVDN;
        let _notes = document.getElementById('txtNotes').value;
        let _selectedReason = selectedReason;
        if(_.isEmpty(_txtRetunValue) || _.isEmpty(_notes) || _.isEmpty(selectedVDN) || _.isEmpty(selectedReason)){
            alert('Invalid Data');
        }
        else {
            let _row = [{'col':1,'key':3,'value':selectedVDN},{'col':2,'key':3,'value':_selectedReason},{'col':3,'key':3,'value':_txtRetunValue},{'col':4,'key':3,'value':_notes}];
            let rows = Object.assign([], this.state.data.rows);
            rows.push(_row);
            let _data = { 
                "vdnID": selectedVDN, 
                "vrReason": selectedReason, 
                "vrReturn": _txtRetunValue, 
                "voNotes": _notes, 
                "racf": "99999"
            }
            this.props.postVDNData(_data);
            this.setState({selectedOverRideReason: 'f', isAddForm: false, selectedVDN: '',
            selectedReason: '', returnVDN: '', data: _.assign({}, this.state.data, {rows: this.getRows(rows)}), successDialog: {
                isOpen: true,
                title: 'Added',
                content: '',
                selectedRowForDelete: -1
            }});
        }
    }

    toggleAddForm(isAddForm){
        this.setState({isAddForm});
    }

    handleClose(){
        this.setState({dialog: null, currentEditIndexValue: -1, editRow: null});
    }

    handleSuccess(index) {
        let rows = _.assign([], this.state.data.rows);
        _.pullAt(rows, index);
        this.setState({currentEditIndexValue: -1, editRow: null, dialog: null, data : _.assign({}, this.state.data, {rows})});
    }
    handleSuccessDialog(index){
        this.setState({successDialog: null});
    }
    handleChange(option){
        this.setState({ selectedVDN: option.value });
    }

    handleChangeOverRide(option){
        this.setState({ selectedReason: option.value });
    }

    handleReturnVDNChange(option){
        this.setState({ returnVDN: option.value });
    }
    
    render(){
        let data = null;
        if(!this.props.isTableDataLoading && this.state.data){
            data = {
                headers: Object.assign([], this.state.data.headers),
                rows:    Object.assign([], this.constructRowsByColType(this.state.data.rows)),
            } 
        }
        return(<Fragment>
            <div style={{width: '100%'}}>
                <ODialog isClose={true}  id='dialogBox' data={this.state.dialog} handleSuccess={this.handleSuccess.bind(this)} handleClose={this.handleClose.bind(this)}/>
                <ODialog isClose={false}  id='dialogBox' data={this.state.successDialog} handleSuccess={this.handleSuccessDialog.bind(this)} />
                <Row style={{margin: '0px'}}>
                <Col xs={12} sm={12} md={12} lg={12}>
                <span style={{float: 'right', margin: '25px 25px 25px 1175px'}}>
                            <OButton  onButtonClick={this.toggleAddForm.bind(this, true)} variant='contained' text='Add VDN Override' type='default' />
                </span>
                </Col>
                </Row>
                <Row style={{margin: '0px'}}>
                    <Col xs={12} sm={12} md={this.state.isAddForm? 9: 12} lg={this.state.isAddForm? 9: 12}>
                    {this.props.isTableDataLoading && <CircularProgressStyledComponent id='circularProgress' />}
                    {!this.props.isTableDataLoading && data &&
                         <div style={{marginLeft: '80px'}}>
                            <OTable editRow={this.constructEditRow()} currentEditIndexValue={this.state.currentEditIndexValue} data={data} isEditable={true} onEditRowClick={this.onEditRowClick.bind(this)} />
                        </div>
                    }
                    </Col>
                    
                    {this.state.isAddForm && this.state.currentEditIndexValue == -1 && <Col xs={12} sm={12} md={3} lg={3}>
                            <div style={{height: '550px', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderTop:'5px solid #3f51b5', backgroundColor: 'white'}}>
                                <div style={{backgroundColor: '#ffffff', borderBottom: '1px  solid lightgray', padding: '5px', color: '#3f51b5', fontWeight: 'bolder', margin: '0px 0px'}}>
                                    New VDN Overrides
                                    <span style={{float: 'right'}}>
                                        <FontAwesomeCloseIconSC onClick={this.toggleAddForm.bind(this, false)} icon= { faTimes } />
                                    </span>
                                </div>
                                <div style={{backgroundColor: 'white'}}>
                                    <div style={{margin: '10px'}}>
                                        <label style={{fontSize: '12px', color: '#3f51b5', fontWeight: '500', fontFamily: 'sans-serif'}}>VDN</label>
                                        <DropdownSC options={this.props.vdnIdList} onChange={this.handleChange.bind(this)} value={this.state.selectedVDN} placeholder='Select VDN' />
                                    </div>
                                    <div style={{margin: '10px'}}>
                                    <label style={{fontSize: '12px', color: '#3f51b5', fontWeight: '500', fontFamily: 'sans-serif'}}>Over Ride Reason</label><DropdownSC options={this.props.reasonsList} onChange={this.handleChangeOverRide.bind(this)} value={this.state.selectedReason} placeholder='Select Override Reason' />
                                    </div>
                                    {!_.isEmpty(this.state.selectedReason) && _.trim(this.state.selectedReason)==='Flags'  && <div style={{margin: '10px', fontFamily: 'sans-serif'}}>
                                                    <label style={{fontSize: '12px', color: '#3f51b5', fontWeight: '500', fontFamily: 'sans-serif'}}>Return Value</label><br/>
                                                    <TextFieldAddVDN  id='txtRetunValue'  />
                                    </div>}
                                    {!_.isEmpty(this.state.selectedReason) && _.trim(this.state.selectedReason)!=='Flags'  && <div style={{margin: '10px', fontFamily: 'sans-serif'}}>
                                                    <label style={{fontSize: '12px', color: '#3f51b5', fontWeight: '500', fontFamily: 'sans-serif'}}>Return VDN</label><br/>
                                                    <DropdownSC options={this.props.vdnIdList} onChange={this.handleReturnVDNChange.bind(this)} value={this.state.returnVDN} placeholder='Return VDN' />
                                    </div>}
                                    <div style={{margin: '10px'}}>
                                    <label style={{fontSize: '12px', color: '#3f51b5', fontWeight: '500', fontFamily: 'sans-serif'}}>Notes</label><br/>
                                    <TextFieldAddVDN  id='txtNotes'  />
                                </div>
                                    <div style={{margin: '10px', float: 'right', backgroundColor: 'white'}}>
                                        <OButton  onButtonClick={this.onSubmit.bind(this)} variant='contained' text='Submit' type='default' />
                                    </div>
                            </div>
                        </div> </Col>}
                </Row> 
            </div>
            </Fragment>);
    }
}

function mapStateToProps(state){
    return {
        data: state.vdnOverRides? state.vdnOverRides.data : null,
        isTableDataLoading: state.vdnOverRides  && state.vdnOverRides.isLoading ? state.vdnOverRides.isLoading : false,
        vdnIdList: state.vdnOverRides? state.vdnOverRides.vdnIdList : [],
        reasonsList: state.vdnOverRides? state.vdnOverRides.reasonsList : []
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({getVDNOverrides, postVDNData, putVDNData, getVDNIDList}, dispatch);
    }

export default connect(mapStateToProps,mapDispatchToProps)(VdnOverRides);