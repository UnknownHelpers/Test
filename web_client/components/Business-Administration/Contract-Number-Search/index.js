import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SearchField from '../../Shared/Shared-Components/SearchField/SearchField'
import Divider from '@material-ui/core/Divider'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'

//import './CustomerAdvocate.css'

export const Heading = styled.p`
    color:#2e4053;
    font-weight: bold
    font-size: 18px;
    margin-bottom: -12px;
    font-family: sans-serif;
    `
    const theme = createMuiTheme({
      overrides: {
        MuiToggleButton: {
          label: {
            textTransform: 'capitalize'
          },
          selected: {
            backgroundColor: '#1a5276',
            color: 'white',
            '&:after': {
              backgroundColor: 'initial'
            }
          }
        }
      },
    });

const styles = theme => ({
  layout: {
    flexGrow: 1,
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    overflow: 'auto', //added for scrolling
    color: theme.palette.text.secondary,
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  contractBlock: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    marginTop: '0px',
    marginBottom: '0px',
    padding: theme.spacing.unit * 2,
    cursor: 'pointer',
    paddingBottom: '1px',
    paddingTop: '8px'
  },
  indent:{
      marginLeft: '7%'
  },
  CNSMarginBottom:{
      marginBottom: '3%'
  },
  buttonBottom:{
      marginBottom: '20%',
      marginRight: '25%'
  },
  selectedContractBlock: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    marginTop: '0px',
    marginBottom: '0px',
    padding: theme.spacing.unit * 2,
    cursor: 'pointer',
    backgroundColor: '#1a5276',
    color: 'white',
    paddingBottom: '1px',
    paddingTop: '8px'

  },
  label: {
    color:'#959da8',
    float: 'right',
    marginTop: '7px',
    fontSize: '15px',
    fontFamily:'sans-serif'

  },
  dot: {
    width: '5px',
    marginBottom: '2.5px',
    height: '5px',
    backgroundColor: 'grey',
    borderRadius: '50%',
    display: 'inline-block'
  },
  
  callerTypeContainer: {
      color: 'red',
      width: '306px'
  },
  covergaeTypeContainer: {
      width: '216px'
  },
  toogleBtn: {
    textTransform: 'capitalize'

  },
  heading: {
      marginTop: '0px',
      marginBottom: '-10px'
  },
  contractDesc: {
      fontSize: '14px',
      marginTop: '3px',
      fontFamily:'sans-serif'
  },
  searchBtn : {
    float: 'right',
    backgroundColor: '#00bcd4'
  },
  headingColor:{
    color:' #344457'

  },
  whiteFont: {
    color: '#fff'
  },
  whiteDot: {
    width: '5px',
    marginBottom: '2.5px',
    height: '5px',
    backgroundColor: 'white',
    borderRadius: '50%',
    display: 'inline-block'
  }
})

class ContractNumberSearch extends Component {
  constructor (props) {
    super(props)

    this.state = {
      contractNumber: ''
    }
  }

  componentWillReceiveProps (newProps) {}

  handleChange (name, value) {
    this.setState({
      [name]: value
    });
  }

  onChangeCallIntent (type) {
    this.handleChange('memberCallIntent', type);
  }

  onSubmitClick () {
    console.log('Button Clicked')
  }


render () {
    const { classes } = this.props
    return (
      <MuiThemeProvider theme={theme}>
        <main className={classes.layout}>
            <Grid container>
                <Grid item xs={3} sm={6} md={8} lg={12}>
                    <Paper className={classes.paper}>
                        <Grid container alignItems="center" spacing={40}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Heading>Contract Number Search</Heading>
                            </Grid>
                            <Grid item className={classes.indent}  sm={2} md={2} lg={1}>
                                Number
                            </Grid>
                            <Grid item sm={1}>
                              <SearchField
                                  id='crtCNS'
                                  name='crtCNS'
                                  placeholder='H000000000'
                                  value={this.state.contractNumber}
                                  fieldChange={(event) => this.handleChange('contractNumber', event.target.value)}
                                  onInput={e => {
                                  e.target.value = e.target.value.replace(/[^0-9A-Za-z]/g, '')
                                  }}
                                  inputProps={{
                                  maxLength: 10
                                  }}
                              />
                            </Grid>
                            <Grid item xs={3} sm={12}>
                              <Divider />
                            </Grid>
                            <Grid container justify="flex-end">
                              <Grid item>                                
                                <Button variant="contained" color="primary" className={`${classes.button} ${classes.searchBtn} ${classes.buttonBottom}`} onClick={() => { this.onSubmitClick() }}>
                                    Submit
                                </Button>
                              </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </main>
      </MuiThemeProvider>
    )
  }
}

ContractNumberSearch = withStyles(styles)(ContractNumberSearch)
export default ContractNumberSearch

