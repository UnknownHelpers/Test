/* React Core Package */
import AppBar from '@material-ui/core/AppBar';
import React, {Component, Fragment} from 'react';
import {Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import OButton from './AddButton/Button';
//const userImg = require('./panda.png');

const options = [
    '23456', '78901', '23456'
]

const reasons = [
    'Closed Hours', 'Flags', 'Repeat'
]


import 'react-dropdown/style.css'

class Butt extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
            editRow: null,
            currentEditIndexValue: -1,
            isAddForm: false,
            dialog: null,
            selectedVDN: '',
            selectedReason: ''
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
    }

    
    constructRowsByColType(rows){
        let _rows = Object.assign([], rows);
        let _dom = [];
        _.size(_rows)>0 && _rows.forEach((element, rowIndex) => {
           let _cols = [];
           element.forEach((col, colIndex)=> {
              if(col.isVisible){
                let _domObj = typeof col.value === 'boolean' ? col.value?(<span style={{color: 'orange'}}><FontAwesomeIconSCRepeat icon= { faSyncAlt } />Repeat</span>):(<span style={{color: 'orange'}}><FontAwesomeIconSCFlags icon= { faFlag } />Flags</span>): col.value;
                _cols.push(_domObj);
              }
          });
          _dom.push(_cols);
        });
        return _dom;
    }

    toggleAddForm(isAddForm){
        this.setState({isAddForm});
    }

    handleClose(){
        this.setState({dialog: null, currentEditIndexValue: -1, editRow: null});
    }

    handleChange(option){
        this.setState({ selectedVDN: option.value });
    }
    handleChangeOverRide(option){
        this.setState({ selectedReason: option.value });
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
                
                <RowSC>
                    <Col md={12}>
                        <span style={{}}>
                            <OButton  onButtonClick={this.toggleAddForm.bind(this, true)} variant='contained' text='Add ' type='default' />
                        </span>
                    </Col> 
                </RowSC>
                <RowSC>
                {this.state.isAddForm && <Col md={3}>
                        <div style={{border: '1px solid gray', borderTop:'5px solid #3f51b5', minHeight: '300px', width: '338px'}}>
                            <div style={{backgroundColor: '#ffffff', padding: '5px', color: '#3f51b5', fontWeight: '500', fontFamily: 'sans-serif', margin: '0px 0px', width: '94%'}}>
                                New 
                                <span style={{float: 'right'}}>
                                    <FontAwesomeCloseIconSC onClick={this.toggleAddForm.bind(this, false)} icon= { faTimes} />
                                </span>
                            </div>
                            <div style={{backgroundColor: 'white'}}>
                                <div style={{margin: '10px'}}>
                                    <label style={{fontSize: '12px', color: '#3f51b5', fontWeight: '500', ontFamily: 'sans-serif'}}>VDN</label><DropdownSC options={options} onChange={this.handleChange.bind(this)} value={this.state.selectedVDN} placeholder='Select VDN' />
                                </div>
                                {!_.isEmpty(this.state.selectedVDN) && <div style={{margin: '10px'}}>
                                <label style={{fontSize: '12px', color: '#3f51b5', fontWeight: '500', ontFamily: 'sans-serif'}}>Over Ride Reason</label><DropdownSC options={reasons} onChange={this.handleChangeOverRide.bind(this)} value={this.state.selectedReason} placeholder='Select Override Reason' />
                                </div>}
                                {!_.isEmpty(this.state.selectedReason) && <div style={{margin: '10px'}}>
                                <label style={{fontSize: '12px', color: '#3f51b5', fontWeight: '500', ontFamily: 'sans-serif'}}>Return Value</label><TextFieldAddVDN  id='txtRetunValue'  />
                                </div>}
                                <div style={{margin: '10px'}}>
                                <label style={{fontSize: '12px', color: '#3f51b5', fontWeight: '500', ontFamily: 'sans-serif'}}>Notes</label><br/>
                                 <TextFieldAddVDN  id='txtNotes'  />
                                </div>
                                <span style={{float: 'right'}}>
                                    <OButton  onButtonClick={this.onSubmit.bind(this)} variant='contained' text='Submit' type='default' />
                                </span>
                            </div>
                        </div>
                </Col>}
                </RowSC>
            </Fragment>);
    }
}

function mapStateToProps(state){
    return {
        data: state.vdnOverRides? state.vdnOverRides.data : null,
        isTableDataLoading: state.vdnOverRides  && state.vdnOverRides.isLoading ? state.vdnOverRides.isLoading : false
    }
}


export default connect(mapStateToProps)(Butt);