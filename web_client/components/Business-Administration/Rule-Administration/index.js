import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import {Col} from 'react-bootstrap';


import Filter from '../../Shared/Shared-Components/Filter';
import DataTable  from '../../Shared/Shared-Components/DataTable';
import Dialog from '../../Shared/Shared-Components/Dialog';
import AutoComplete from '../../Shared/Shared-Components/AutoComplete';
import DropDown from '../../Shared/Shared-Components/DropDown';

import {getRulesAdmin} from './actions';

import * as StyledComponents from './styles';

const suggestions = [
    { label: 'BLUECARD PROVIDER' },
    { label: 'CHANNEL PARTNER GOLD SILVER' },
    { label: 'DEFAULT SBL WRITTEN' },
    { label: 'ENTAL COMPB' },
    { label: 'DENTAL DEFAULT' },
    { label: 'DENTAL HPS' },
    { label: 'DIR HPS ENROLL OffEx' },
    { label: 'DIR HPS ENROLL OnEx' },
    { label: 'DIR NAS ENROLL OffEx' },
    { label: 'DIR NAS ENROLL OnEx' },
    { label: 'Direct Blue Options' },
    { label: 'Direct PPO' },
    { label: 'EMPLOYEE GROUP' },
    { label: 'EMPLOYEE GROUP SPECIAL' },
    { label: 'FEDERAL EMPLOYEE FEP' },
    { label: 'FL BLUE RETIREES' },
    { label: 'Group Blue Options' },
    { label: 'GROUP EMB' },
    { label: 'GROUP HMO' },
    { label: 'GROUP MEDICARE HMO' },
    { label: 'GROUP MEDICARE PHARM' },
    { label: 'GROUP MEDICARE PPO' },
    { label: 'GROUP PPO' },
    { label: 'HMO MSO IND' },
    { label: 'MCC_CCT_SPECIAL_RTE' },
    { label: 'MedAdvantage HMO' },
    { label: 'MedAdvantage PPO' },
    { label: 'MedAdvantage RX' },
    { label: 'MedAdvantage Special' },
    { label: 'MEMBER DEFAULT' },
    { label: 'MIAMI DATA BLUE' },
    { label: 'MY BLUE' },
    { label: 'NSA AON' },
    { label: 'NSA BAPTIST JAX' },
    { label: 'NSA Brown&Brown' },
    { label: 'NSA BrownAndBrown' },
    { label: 'NSA CityofJax' },
    { label: 'NSA DuvalCoSB' },
    { label: 'NSA GatorCare' },
    { label: 'NSA GEO' },
    { label: 'NSA GEVITY' },
    { label: 'NSA	ICUBA' },
    { label: 'NSA LEE CO SCHOOLS' },
    { label: 'NSA NO Prime' },
    { label: 'NSA Polk CSB' },
    { label: 'NSA Prime' },
    { label: 'NSA Prime_NoBEH' },
    { label: 'NSA	PROGRESS PPO Noprime' },
    { label: 'NSA TRINET' },
    { label: 'NSA TRINET SOI' },
    { label: 'NSA WastePro' },
    { label: 'PCC ALACHUA CITY' },
    { label: 'PCC WASTE PRO' },
    { label: 'PPO LOCAL DEFAULT' },
    { label: 'PPO LOCAL FFB' },
    { label: 'PRE EFFECTUATED' },
    { label: 'Preferred Medicare HMO' },
    { label: 'RBMS Med Supp' },
    { label: 'SBU CTM' },
    { label: 'SBU DEFAULT' },
    { label: 'SBU Med Supp' },
    { label: 'SIEBEL WRITTEN ROUTE' },
    { label: 'STATE GROUP' },
    { label: 'TEST CACR' }
  ];


class RuleAdministration extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
            isFilterVisible: null,
            filterCriteriaList: null,
            selectedFilteredCriteriaList: null,
            currentEditIndexValue: -1,
            editRow: null,
            dialog: null,
            isPinEnabled: false
        };
    }

    componentWillMount(){
        this.props.getRulesAdmin().then(()=>{
            this.onreset();
        }).catch((error)=>{

        });
    }

    getHeaders(headers){
        return headers.map((item, index)=>{
            return Object.assign({}, item, {isVisible: true});
        });
    }

    getRows(getRows){
        return getRows.map((item, index)=>{
            return item.map((colItem, childIndex)=> {
                return Object.assign({}, colItem, {isVisible: true});
            })
        });
    }

    onreset() {
        let _selectedFilters = this.setCriteriaList(this.props.data.headers);
            this.setState({
                data: Object.assign({}, {
                    headers: this.getHeaders(this.props.data.headers),
                    rows: this.getRows(this.props.data.rows),
                }),
                selectedFilteredCriteriaList: _selectedFilters,
                filterCriteriaList: this.props.filterArray
            });
    }

    constructFilterComponent(filterList){
        let _dom;
        if(_.size(filterList)>0) { 
            _dom = filterList.map((item, index)=>{
            return(<StyledComponents.CheckboxItem key={'filterKeyItem' + index}>
                        <StyledComponents.CheckboxSC checked={_.some(this.state.selectedFilteredCriteriaList, ['key', item.key])}  value={_.toString(item.key)} color='primary' onChange={this.handleChange.bind(this, item.key)} />
                            <span style={{fontSize: 14, color: '#86919d'}}>{_.toString(item.value)}</span>
                            <div style={{marginLeft: 30}}>{
                                            item && item.subList && _.size(item.subList)>0 && item.subList.map((subItem, index)=> {
                                                return(<StyledComponents.CheckboxGroupItem key={'filterKeySubItem' + index}>
                                                                <StyledComponents.CheckboxSC checked={_.some(this.state.selectedFilteredCriteriaList, ['key', subItem.key])}  value={_.toString(subItem.key)} color='primary' onChange={this.handleChange.bind(this, subItem.key)} />
                                                                <span style={{fontSize: 12, color: '#86919d'}}>{_.toString(subItem.value)}</span>
                                                </StyledComponents.CheckboxGroupItem>)
                     })}</div>
          </StyledComponents.CheckboxItem>)
        });
      }
        return _dom;
    }

    constructRowsByColType(rows){
        let _rows = Object.assign([], rows);
        let _dom = [];
        _.size(_rows)>0 && _rows.forEach((element, rowIndex) => {
           let _cols = [];
           element.forEach((col, colIndex)=> {
              if(col.isVisible){
                let _domObj = typeof col.value === 'boolean' ? col.value? 'Yes': 'No': col.value;
                _cols.push(_domObj);
              }
          });
          _dom.push(_cols);
        });
        return _dom;
    }

    setCriteriaList(headers){
        let _selectedList= [];
        _.size(headers)>0 && headers.forEach((item, rowIndex) => {
           if((!_.some(_selectedList, ['key', item.key]))){
            _selectedList.push({key: item.key})
           }
           else {
               _.remove(_selectedList, ['key', selectedFilter]);
           }
        });
        return _.uniqWith(_selectedList, ['key']);
     }

     toggleDrawer () {
        if(!this.state.isPinEnabled){
            this.setState({
                isFilterVisible: !this.state.isFilterVisible
              });
        }
      };

      handleChange(selectedFilter){
        let selectedFilteredCriteriaList = Object.assign([], this.state.selectedFilteredCriteriaList);
        let _data = Object.assign({}, this.state.data);
        let headers = Object.assign([], _data.headers);
        let rows = Object.assign([], _data.rows);
        if(_.some(selectedFilteredCriteriaList, ['key', selectedFilter])){
            _.remove(selectedFilteredCriteriaList, ['key', selectedFilter]);
            headers[_.findIndex(headers, ['key', selectedFilter])].isVisible = false;
            rows.forEach((row, index)=> {
                row[_.findIndex(row, ['col', selectedFilter])].isVisible = false;
            })
        }
        else {
            selectedFilteredCriteriaList.push({key: selectedFilter});
            headers[_.findIndex(headers, ['key', selectedFilter])].isVisible = true;
            rows.forEach((row, )=> {
                row[_.findIndex(row, ['col', selectedFilter])].isVisible = true;
            })
        }
        this.setState({currentEditIndexValue: -1, editRow: null, selectedFilteredCriteriaList, data: Object.assign({}, this.state.data, {headers, rows})});
    }

    onDataChange(data){
        if(this.state.data){
            let index = this.state.currentEditIndexValue;
            let _editableRow = this.state.data.rows[index];
            let _data = Object.assign({}, this.state.data);
            let headers = Object.assign([], _data.headers);
            let rows = Object.assign([], _data.rows);
            rows[index][1].value = data;
            this.setState({data: Object.assign({}, data, {rows, headers})});
        }
    }

    getComponentByKey(item, index, colIndex){
        let {col, key, value} = item;
        switch(col){
            case 2:  return  <Fragment><AutoComplete id={_.toString(index + '.' + col)}  selectedValue={value} onDataChange={this.onDataChange.bind(this)} suggestions={suggestions}/><DropDown selectedValue={value} suggestions={suggestions} onDataChange={this.onDataChange.bind(this)} /></Fragment>
            case 4:  return <StyledComponents.TextFieldSC id={_.toString(index + '.' + col)} name={'txtField.' + index + '.' + colIndex + '.' + key}  defaultValue={value}/>
            case 5:  return <StyledComponents.TextFieldSC id={_.toString(index + '.' + col)} name={'txtField.' + index + '.' + colIndex + '.' + key}  defaultValue={value}/>
            case 6:  return <div><StyledComponents.ToggleTextSC>No</StyledComponents.ToggleTextSC>{<StyledComponents.SwitchSC className={'toggle'} id={index + '.' + col} defaultChecked={value} />}<StyledComponents.ToggleTextSC>Yes</StyledComponents.ToggleTextSC></div>
            default: return _.toString(item.value);
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
                    _dom.push(<StyledComponents.EditColCellSC>{this.getComponentByKey(item, index, colIndex)}</StyledComponents.EditColCellSC>)
                }
            })
            _dom.push(<StyledComponents.EditColCellSC id={'OTableBodyEditColActionItems.' + index}  key={'OTableBodyEditColActionItems.' + index}>
                                <StyledComponents.DeleteIconSC id={'OTableDeleteIconSC.' + index} onClick={this.onDeleteClick.bind(this, index)} color='error'/>
                                <StyledComponents.SaveIconSC id={'OTableSaveIconSC.' + index} onClick={this.onSaveClick.bind(this, index)}/>
                                <StyledComponents.DeleteIconTextSC id={'OTableDeleteIconTextSC.' + index}>Delete</StyledComponents.DeleteIconTextSC>
                                <StyledComponents.SaveIconTextSC id={'OTableSaveIconTextSC.' + index}>Save</StyledComponents.SaveIconTextSC>
                                <StyledComponents.ButtonCancelSC id={'OTableButtonCancelSC.' + index} onClick={this.toggleEditRow.bind(this, index)}>Cancel</StyledComponents.ButtonCancelSC>
                </StyledComponents.EditColCellSC>)
            return _dom;
      }
    }

    onDeleteClick(index){
        let _row = this.state.data.rows[index];
        const {currentEditIndexValue} = this.state;
        const _rule = _.find(_row, ['col', 1]).value;
        const _cacr_id = _.find(_row, ['col', 2]).value;
        const title = 'contactrouting-stga.bcbsfi.com says';
        const content = `Are you sure you want to delete Rule[${_rule}] with CACR ID [${_cacr_id}]?`;
        this.setState({dialog: {
            isOpen: true,
            title,
            content,
            selectedRowForDelete: currentEditIndexValue
        }});
    }

    onEditRowClick(index){
        if(index!==-1){
            this.setState({currentEditIndexValue: index, editRow: this.state.data.rows[index], isFilterVisible: false, isPinEnabled: false});
        }else{
            this.setState({currentEditIndexValue: index, editRow: null, isFilterVisible: false, isPinEnabled: false});
        }
    }

    onSaveClick(index){
        let lob = document.getElementById(index + '.' + 4);
        let groupDivisionId = document.getElementById(index + '.' + 5);
        let exchange = document.getElementById(index + '.' + 6);
        let cacr = document.getElementsByName('txtCACRId');
        if(lob && groupDivisionId && exchange && cacr){
            if(_.isEmpty(lob.value) || _.isEmpty(groupDivisionId.value)){
                alert('Invalida Data');
            }else {
            let rows = _.assign([], this.state.data.rows);
            let _row = rows[index];
            _.find(_row, ['col', 4]).value= lob.value;
            _.find(_row, ['col', 5]).value= groupDivisionId.value;
            _.find(_row, ['col', 6]).value= exchange.checked;
            _.find(_row, ['col', 2]).value= cacr[0].value;
            this.setState({currentEditIndexValue: -1, editRow: null, data : Object.assign({}, this.state.data, {rows})});
            }
        }
    }
    
    handleClose(){
        this.setState({dialog: null, currentEditIndexValue: -1, editRow: null});
    }
        
    handleSuccess(index) {
        let rows = _.assign([], this.state.data.rows);
        _.pullAt(rows, index);
        this.setState({currentEditIndexValue: -1, editRow: null, dialog: null, data : _.assign({}, this.state.data, {rows})});
    }

    onClose(){
        if(!this.state.isPinEnabled){
            this.setState({isFilterVisible: false, isPinEnabled: false});
        }
    }

    onPinClick() {
        this.setState({isPinEnabled: !this.state.isPinEnabled });
    }

    onResetClick(){
        this.onreset();
    }

    onSearch(searchValue) {
        if(!_.isEmpty(searchValue)){
            let filterCriteriaList = _.filter(this.state.filterCriteriaList, (item) => _.includes(_.toLower(item.value), _.toLower(searchValue)))
            if(_.size(filterCriteriaList)>0){
                this.setState({filterCriteriaList});
            }
            else {
            this.setState({filterCriteriaList: this.props.filterArray});
            }
        } else {
            this.setState({filterCriteriaList: this.props.filterArray});
            }
    }

    render(){
        let data = null;
        if(!this.props.isTableDataLoading && this.state.data){
            data = {
                headers: Object.assign([], this.state.data.headers),
                rows:    Object.assign([], this.constructRowsByColType(this.state.data.rows)),
            }
        }
        const gridColTable = this.state.isFilterVisible ? 9 : 12
        const gridTableStyle = this.state.isFilterVisible ? { marginLeft: '0px' } : { marginLeft: '40px', paddingRight: '40px' }

        return(<Fragment>
                {this.state.dialog && this.state.dialog.isOpen && <Dialog id='dialogBox' data={this.state.dialog} handleSuccess={this.handleSuccess.bind(this)} handleClose={this.handleClose.bind(this)}/>}
                <StyledComponents.RowSC>
                    
                        {this.state.isFilterVisible && 
                                <StyledComponents.HideFilterButtonSC onClick={this.toggleDrawer.bind(this)}>
                                    <StyledComponents.SpacerSC>Hide  Filter  </StyledComponents.SpacerSC>
                                    <StyledComponents.SpacerSC><StyledComponents.FontAwesomeIconSC icon='filter' /></StyledComponents.SpacerSC>
                                </StyledComponents.HideFilterButtonSC>
                        }
                        {!this.state.isFilterVisible && 
                                <StyledComponents.FilterButtonSC onClick={this.toggleDrawer.bind(this)}>
                                    <StyledComponents.SpacerSC>Show Filter </StyledComponents.SpacerSC>
                                    <StyledComponents.SpacerSC><StyledComponents.FontAwesomeIconSC icon='filter' /></StyledComponents.SpacerSC>
                                </StyledComponents.FilterButtonSC>
                        }
                        {this.state.filterCriteriaList && this.state.isFilterVisible && 
                            _.size(this.state.filterCriteriaList)>0 && 
                                        <Col style={{paddingLeft: '30px', paddingRight: '40px'}} md={3}>
                                                <Filter isPinEnabled={this.state.isPinEnabled} data={this.constructFilterComponent(this.state.filterCriteriaList)} isSearch={true} onPinClick={this.onPinClick.bind(this)} onClose={this.onClose.bind(this)} onResetClick={this.onResetClick.bind(this)} onSearch={this.onSearch.bind(this)} />
                                        </Col>
                        }
                    
              
                    {this.props.isTableDataLoading && 
                                    <Col md={9}>
                                        <StyledComponents.CircularProgressSC id='circularProgress' />
                                    </Col>
                    }
                    {!this.props.isTableDataLoading && 
                                <Col style={gridTableStyle} md={gridColTable}>
                                        <DataTable editRow={this.constructEditRow()} currentEditIndexValue={this.state.currentEditIndexValue} data={data} isEditable={true} onEditRowClick={this.onEditRowClick.bind(this)} />
                                </Col>
                    }
                </StyledComponents.RowSC>
            </Fragment>);
    }
}

function mapStateToProps(state){
    return {
        data: state.rules && state.rules.rulesList? state.rules.rulesList : null,
        filterArray: state.rules && state.rules.filtersList ? state.rules.filtersList.data : null,
        isTableDataLoading: state.rules  && state.rules.isLoading ? state.rules.isLoading : false
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getRulesAdmin}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(RuleAdministration);