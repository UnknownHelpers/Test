import React, {Component, Fragment} from 'react';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import _ from 'lodash';
import * as StyledComponents from '../../Shared-Styles/Filter';

class OFilter extends Component {
    constructor(props) {
        super(props); 
        this.state = { 
            isSearch: props.isSearch,
            filterArray: props.data
        };
      }

    componentWillReceiveProps(nextProps){
        if(this.props.data!==nextProps.data){
            this.setState({filterArray: nextProps.data});
        }
    }

    filterItem(item, index){
        return <Fragment key={'filterListItem.' + index}>{item}</Fragment>
    }

    onClose(){
        this.props.onClose();
    }
    
    onPinClick(){
        this.props.onPinClick();
    }

    onResetClick(){
        this.props.onResetClick();
    }

    onSearch(event){
        if(event.keyCode == 13){
            this.props.onSearch(event.target.value);
        }
    }

    render(){
        return(<StyledComponents.FilterComponent ><StyledComponents.FilterWrapperSC
                        tabIndex={0}
                        role='button'>
                        <StyledComponents.OFilterContentSC>
                            <StyledComponents.OFliterTitleWrapperSC>
                                <StyledComponents.OFliterTitleSC>
                                        Filter Rule Administration
                                        <StyledComponents.OFilterTitleActionsSC>
                                                <StyledComponents.FontAwesomeIconSC icon='sync-alt' onClick={this.onResetClick.bind(this)} />
                                                {this.props.isPinEnabled && <StyledComponents.PinFontAwesomeIconSC  icon='thumbtack' onClick={this.onPinClick.bind(this)} />}
                                                {!this.props.isPinEnabled &&  <StyledComponents.UnPinFontAwesomeIconSC icon='thumbtack' onClick={this.onPinClick.bind(this)} />}
                                                <StyledComponents.FontAwesomeIconSC icon='times' onClick={this.onClose.bind(this)} />
                                        </StyledComponents.OFilterTitleActionsSC>
                                </StyledComponents.OFliterTitleSC>
                            </StyledComponents.OFliterTitleWrapperSC>
                            <StyledComponents.OFilterBodySC>
                            <StyledComponents.SearchBar>
                                {this.state.isSearch && <Input onKeyUp={this.onSearch.bind(this)}
                                        id='txtSearch' placeholder='Search'
                                        startAdornment={<InputAdornment position='start'><SearchIcon /></InputAdornment>}
                                />}
                            </StyledComponents.SearchBar>
                            <StyledComponents.ShowLabelSC>Show</StyledComponents.ShowLabelSC>
                            <StyledComponents.OFliterItemListSC>
                                {this.state.filterArray && _.size(this.state.filterArray)>0 && this.state.filterArray.map((item, index)=>{
                                    return this.filterItem(item, index)
                                })}
                            </StyledComponents.OFliterItemListSC>
                            </StyledComponents.OFilterBodySC>
                        </StyledComponents.OFilterContentSC>
                    </StyledComponents.FilterWrapperSC></StyledComponents.FilterComponent>);
    }
}
  export default OFilter;
