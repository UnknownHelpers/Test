import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
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

class CSRTransfer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      contractNumber: '',
      ssnNo: '',
      dateOfBirth: '',
      callerType: 'callTypeMemberEng',
      coverageType: 'covTypeHealth',
      memberCallIntent: ''
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
    this.props.history.push('/csrroute-detail')
  }


  render () {
    const { classes } = this.props
    return (
      <MuiThemeProvider theme={theme}>
      <main className={classes.layout}>
         <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={9}>
                  <Heading> Caller Information</Heading>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Divider />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Grid container spacing={24}>
                    <Grid item xs={6} sm={2}>
                      <label className={classes.label}>Contract Number</label>
                    </Grid>
                    <Grid item xs={6} sm={10}>
                      <TextField
                        id='contractNumber'
                        name='contractNumber'
                        placeholder='H000000000'
                        value={this.state.contractNumber}
                        onChange={(event) => this.handleChange('contractNumber', event.target.value)}
                        onInput={e => {
                          e.target.value = e.target.value.replace(/[^0-9A-Za-z]/g, '')
                        }}
                        inputProps={{
                          maxLength: 10
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Grid container spacing={24}>
                    <Grid item xs={6} sm={2}>
                      <label className={classes.label}>
                        Last 4 digits of SSN
                      </label>
                    </Grid>
                    <Grid item xs={6} sm={10}>
                      <TextField
                        required
                        id='ssnNo'
                        name='ssnNo'
                        placeholder='****'
                        value={this.state.ssnNo}
                        onChange={(event) => this.handleChange('ssnNo', event.target.value)}
                        type='number'
                        onInput={e => {
                          e.target.value = Math.max(0, parseInt(e.target.value))
                            .toString()
                            .slice(0, 4)
                        }}
                        min={0}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Grid container spacing={24}>
                    <Grid item xs={6} sm={2}>
                      <label className={classes.label}>Date of Birth</label>
                    </Grid>
                    <Grid item xs={6} sm={10}>
                      <TextField
                        id='dateOfBirth'
                        name='dateOfBirth'
                        placeholder='MM/DD/YYYY'
                        value={this.state.dateOfBirth}
                        onChange={(event) => this.handleChange('dateOfBirth', event.target.value)}
                        type='date'
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Grid container spacing={24}>
                    <Grid item xs={6} sm={2}>
                      <label className={classes.label}>Caller Type</label>
                    </Grid>
                    <Grid item xs={6} sm={10}>
                      <ToggleButtonGroup
                        value={this.state.callerType}
                        onChange={(value) => this.handleChange('callerType', value.currentTarget.value)}
                        exclusive
                        className={classes.callerTypeContainer}
                      >
                        <ToggleButton value='callTypeMemberEng' classes={{ label: classes.toggleBtn}}>
                          Member (Eng)
                        </ToggleButton>
                        <ToggleButton value='callTypeMemberEspl'>
                          Member (Espl)
                        </ToggleButton>
                        <ToggleButton value='callTypeProvider'>
                          Provider
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container spacing={24}>
                <Grid item xs={12} sm={9}>
                    <Heading>Call Intent Details</Heading>
              
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Divider />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Grid container spacing={24}>
                    <Grid item xs={6} sm={2}>
                      <label className={classes.label}>Coverage Type</label>
                    </Grid>
                    <Grid item xs={6} sm={10}>
                      <ToggleButtonGroup
                        value={this.state.coverageType}
                        onChange={(value) => this.handleChange('coverageType', value.currentTarget.value)}
                        exclusive
                        className={classes.covergaeTypeContainer}
                      >
                        <ToggleButton value='covTypeHealth'>
                          Health
                        </ToggleButton>
                        <ToggleButton value='covTypePharmacy'>
                          Pharmacy
                        </ToggleButton>
                        <ToggleButton value='covTypeDental'>
                          Dental
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Grid container spacing={24}>
                    <Grid item xs={6} sm={2}>
                      <label className={classes.label}>Member Caller Intent</label>
                    </Grid>
                    <Grid item xs={6} sm={10}>
                      <Grid container spacing={8}>
                        <Grid item xs={6} sm={6}>
                          <Paper className={(this.state.memberCallIntent === 'mentalHealth') ? classes.selectedContractBlock : classes.contractBlock} onClick={() => this.onChangeCallIntent('mentalHealth')}>
                            <Typography variant='body2' gutterBottom className={(this.state.memberCallIntent === 'mentalHealth') ? classes.whiteFont : ''}>
                              Mental Health
                            </Typography>

                            <p className={classes.contractDesc}>Mental Health <span className={(this.state.memberCallIntent === 'mentalHealth') ? classes.whiteDot : classes.dot}></span> Substance Abuse <span  className={(this.state.memberCallIntent === 'mentalHealth') ? classes.whiteDot : classes.dot}></span> Psychiatrist</p>
                          </Paper>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                          <Paper className={(this.state.memberCallIntent === 'purchase') ? classes.selectedContractBlock : classes.contractBlock} onClick={() => this.onChangeCallIntent('purchase')}>
                          <Typography variant='body2' gutterBottom className={(this.state.memberCallIntent === 'purchase') ? classes.whiteFont : ''} >
                              Purchase
                            </Typography>
                            <p className={classes.contractDesc}>Buy Insurance <span className={(this.state.memberCallIntent === 'purchase') ? classes.whiteDot : classes.dot}></span> New Insurance <span className={(this.state.memberCallIntent === 'purchase') ? classes.whiteDot : classes.dot}></span> Shop</p>
                          </Paper>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                          <Paper className={(this.state.memberCallIntent === 'billing') ? classes.selectedContractBlock : classes.contractBlock} onClick={() => this.onChangeCallIntent('billing')}>
                          <Typography variant='body2' gutterBottom>
                              Billing
                            </Typography>
                            <p className={classes.contractDesc}>Paymnent Status <span className={classes.dot}></span> APO <span className={classes.dot}></span>  Enrollment <span className={classes.dot}></span> Plan Aministration</p>
                          </Paper>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                          <Paper className={(this.state.memberCallIntent === 'policyCancellation') ? classes.selectedContractBlock : classes.contractBlock} onClick={() => this.onChangeCallIntent('policyCancellation')}>
                          <Typography variant='body2' gutterBottom>
                              Policy Cancellations
                            </Typography>
                            <p className={classes.contractDesc}>Retention/Save Desk for Policy Cancellations</p>
                          </Paper>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                          <Paper className={(this.state.memberCallIntent === 'accountAdjustments') ? classes.selectedContractBlock : classes.contractBlock} onClick={() => this.onChangeCallIntent('accountAdjustments')}>
                          <Typography variant='body2' gutterBottom>
                              Account Adjustments
                            </Typography>
                            <p className={classes.contractDesc}>Address Updates <span className={classes.dot}></span> Add/Remove Members <span className={classes.dot}></span> Death Notifications </p>
                          </Paper>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                          <Paper className={(this.state.memberCallIntent === 'healthCoverageBenefits') ? classes.selectedContractBlock : classes.contractBlock} onClick={() => this.onChangeCallIntent('healthCoverageBenefits')}>
                          <Typography variant='body2' gutterBottom>
                              Health Coverage & Benefits
                            </Typography>
                            <p className={classes.contractDesc}>Claims <span className={classes.dot}></span> ID Cards <span className={classes.dot}></span> Docs <span className={classes.dot}></span> PCP <span className={classes.dot}></span> Tech Support <span className={classes.dot}></span> Find Doctor/Facility</p>
                          </Paper>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                          <Paper className={(this.state.memberCallIntent === 'taxes') ? classes.selectedContractBlock : classes.contractBlock} onClick={() => this.onChangeCallIntent('taxes')}>
                          <Typography variant='body2' gutterBottom>
                             Taxes
                            </Typography>
                            <p className={classes.contractDesc}>Tax Forms <span className={classes.dot}></span> Tax Related Questions </p>
                          </Paper>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                          <Paper className={(this.state.memberCallIntent === 'authorization') ? classes.selectedContractBlock : classes.contractBlock} onClick={() => this.onChangeCallIntent('authorization')}>
                          <Typography variant='body2' gutterBottom>
                             Authorization
                            </Typography>
                            <p className={classes.contractDesc}>Authorization <span className={classes.dot}></span> Referrals </p>
                          </Paper>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                          <Paper className={(this.state.memberCallIntent === 'assistance') ? classes.selectedContractBlock : classes.contractBlock} onClick={() => this.onChangeCallIntent('assistance')}>
                          <Typography variant='body2' gutterBottom>
                              Assistance
                            </Typography>
                            <p className={classes.contractDesc}>Speak To Nurse <span className={classes.dot}></span> Health Coach <span className={classes.dot}></span> Health Dialog</p>
                          </Paper>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                          <Paper className={(this.state.memberCallIntent === 'dental') ? classes.selectedContractBlock : classes.contractBlock} onClick={() => this.onChangeCallIntent('dental')}>
                          <Typography variant='body2' gutterBottom>
                              Dental
                            </Typography>
                            <p className={classes.contractDesc}>Dental Benefits <span className={classes.dot}></span> Dental Claims</p>
                          </Paper>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button variant="contained" color="primary" className={`${classes.button} ${classes.searchBtn}`} onClick={() => { this.onSubmitClick() }}>
                    Search
                  </Button>
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

function mapDispatchToProps (dispatch) {
  return bindActionCreators({}, dispatch)
          }

          CSRTransfer.propTypes = {
            classes: PropTypes.object.isRequired
          }

CSRTransfer = withStyles(styles)(CSRTransfer)

export default withRouter(connect(null, mapDispatchToProps)(CSRTransfer))

