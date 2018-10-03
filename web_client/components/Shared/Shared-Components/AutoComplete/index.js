import React, {Component} from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import * as _ from 'lodash';
import * as StyledComponents from '../../Shared-Styles/AutoComplete';



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

function renderInput(inputProps) {
  const { InputProps, classes, ref, other} = inputProps;
  let _InputProps = _.assign({},InputProps)
  return (
    <StyledComponents.TextFieldSC id='txtCACRId' name='txtCACRId' InputProps={{_InputProps}} />
  );
}

function renderSuggestion({
  suggestion,
  index,
  itemProps,
  highlightedIndex,
  selectedItem
}) {
  const isHighlighted = highlightedIndex === index;
  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component='div'>
            {suggestion.label}
    </MenuItem>
  );
}

renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.number,
  index: PropTypes.number,
  itemProps: PropTypes.object,
  selectedItem: PropTypes.string,
  suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired
};

function getSuggestions(value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;
  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}


const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    fontSize: '10px !important'
  },
  container: {
    flexGrow: 1,
    position: 'relative',
    fontSize: '10px !important'
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: 0,
    left: 0,
    right: 0,
    fontSize: '10px'
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`
  },
  inputRoot: {
    flexWrap: 'wrap'
  },
  divider: {
    height: theme.spacing.unit * 2
  }
});

class IntegrationDownshift extends Component {
    constructor(props){
        super(props);
        this.state = {
            cacrIdValue: props.selectedValue
        };
    }
    componentWillReceiveProps(nextProps){
        if(this.props.selectedValue!==nextProps.selectedValue){
            this.setState({cacrIdValue: nextProps.selectedValue});
        }
    }
    onFieldChange(event){
        this.setState({cacrIdValue: event.target.value});
        /// this.props.onDataChange(event.target.value);
    }

    getTextValue(inputValue){
      return _.isEmpty(inputValue)? this.state.cacrIdValue: inputValue
    }

render(){
  const { classes } = this.props;
  return (
    <div className={classes.root}>
      <StyledComponents.DownshiftSc id='downshift-simple'>
        {({
          getInputProps,
          getItemProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          selectedItem
        }) => (
          <div className={classes.container}>
            {renderInput({
              fullWidth: true,
              classes,
              InputProps: getInputProps({
                placeholder: '',
                value: this.getTextValue(inputValue),
                onChange: this.onFieldChange.bind(this)
              })
            })}
            <div {...getMenuProps()}>
              {isOpen ? (
                <StyledComponents.PaperSC className={classes.paper} square>
                  {getSuggestions(inputValue).map((suggestion, index) =>
                    renderSuggestion({
                      suggestion,
                      index,
                      itemProps: getItemProps({ item: suggestion.label }),
                      highlightedIndex,
                      selectedItem
                    })
                  )}
                </StyledComponents.PaperSC>
              ) : null}
            </div>
          </div>
        )}
      </StyledComponents.DownshiftSc>
    </div>
  );
 }
}

IntegrationDownshift.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IntegrationDownshift);
