import React from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

class SearchField extends React.Component {
  render () {
    return (
      <TextField
        {...this.props}
        label={this.props.label}
        helperText={this.props.helperText}
        margin='normal'
        value={this.props.value}
        onChange={this.props.fieldChange}
      />
    )
  }
}

SearchField.propTypes = {
  value: PropTypes.string.isRequired,
  fieldChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  helperText: PropTypes.string,
  classes: PropTypes.object
}

export default SearchField