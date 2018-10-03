import React, {Component} from 'react';
import Select from 'react-select';
import styled from 'styled-components';
const SelectSC = styled(Select)`
    & {
        color: black !important;
        width: 130px;
    }

    & > div:nth-child(1) {
        height: 25px !important;
        min-height: 25px !important;
        width: 110px;
    }        
`;
function getSuggestions(suggestions) {
    let _suggestions = suggestions.map((item)=>{
            return Object.assign({}, item, {value: item.label})
    })
    return _suggestions
}

class DropDown extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedOption: {label: props.selectedValue, value: props.selectedValue},
            suggestions: getSuggestions(this.props.suggestions)
          }
    }
  

  handleChange (selectedOption) {
    this.setState({ selectedOption });
    this.props.onDataChange(selectedOption.label);
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <SelectSC
        value={selectedOption}
        onChange={this.handleChange.bind(this)}
        options={this.state.suggestions}
      />
    );
  }
}

export default DropDown;