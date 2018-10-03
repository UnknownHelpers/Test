import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'

export const Heading = styled.p`
    color:#2e4053;
    font-weight: bold
    font-size: 18px;
    
    font-family: sans-serif;
    `
export const Label = styled.p`
    color:#959da8;
    font-size: 15px;
    font-weight:bold;
    font-family: sans-serif;
    margin-top: 20px`

export const Description = styled.p`
    color: #1a5276;
    font-size: 14px;
    margin-top: 5px;
    font-family: sans-serif;
    font-weight: bold`


export const DescriptionWithGreen = styled.p`
    color: #56d489;
    font-size: 14px;
    margin-top: 5px;
    font-family: sans-serif;
    font-weight: bold`

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
    },
    abc: {}
  },
  dot: {
    width: '5px',
    marginBottom: '2.5px',
    height: '5px',
    backgroundColor: 'grey',
    borderRadius: '50%',
    display: 'inline-block'
  },
  caption: {
    marginTop: '20px'
  },
  routingDesContainer: {
    backgroundColor: '#4253AF',
    height: '100px',
    marginTop: '0px',
    color: '#ffffff',
    paddingLeft: '0px'
  },
  routingDesCaption: {
    color: 'white',
    paddingRight: '10px',
    fontSize: '10px'
  },
  routeNumberContainer: {
    borderLeft: '1px #ffffff solid',
    color: '#ffffff',
    height: '93px',
    paddingLeft: '25px',
    paddingTop: '0px'
  },
  routeNumber: {
    color: '#ffffff'
  },
  routeNumberLabel: {
    color: '#ffffff'
  },
  greenFont: {
    color: '#5ed791'
  },
  blueFont: {
    color: '#355e7e'
  },
  headlineFont: {
    color: '#2e4053'
  },
  upperContainer: {
    marginTop: '15px',
    borderBottom: '0.5px solid grey',
    marginLeft: '-24px',
    marginBottom: '25px',
    marginRight: '0px',
    height: '5px',
    width: '1200px'
  }
})
class CSRTransferRouting extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    const { classes } = this.props
    return (
      <main className={classes.layout}>
      <Link to={'/csrroute-search'}>Back</Link>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={12}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={6}>
                      <div className={classes.abc}>
                        <Heading>
                          CSR Transfer Routing
                        </Heading>
                        <Label>
                          Contract Number
                        </Label>
                        <Description>  H0054962</Description>
                        <Label
                          variant='caption'
                          className={classes.caption}
                          gutterBottom
                        >
                          Caller Type
                        </Label>
                        <Description>
                          Member English
                        </Description>
                        <Label
                          variant='caption'
                          className={classes.caption}
                          gutterBottom
                        >
                          Caller Intent
                        </Label>
                        <Description
                          variant='title'
                          className={classes.blueFont}
                          gutterBottom
                        >
                          Taxes-Tax Forms
                          <span className={classes.dot} />
                          Tax Related Questions
                        </Description>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Paper
                        className={`${classes.paper} ${classes.routingDesContainer}`}
                      >
                        <Grid container spacing={0}>
                          <Grid item xs={12} sm={8}>
                            <Grid container spacing={0}>
                              <Grid item xs={4} sm={4}>
                                <Typography
                                  variant='caption'
                                  gutterBottom
                                  align='right'
                                  className={classes.routingDesCaption}
                                >
                                  Destination
                                </Typography>
                                <Typography
                                  variant='caption'
                                  gutterBottom
                                  align='right'
                                  className={classes.routingDesCaption}
                                >
                                  Special Case Flags
                                </Typography>
                                <Typography
                                  variant='caption'
                                  gutterBottom
                                  className={classes.routingDesCaption}
                                  align='right'
                                >
                                  Call Center
                                </Typography>
                              </Grid>
                              <Grid item xs={8} sm={8}>
                              <Typography
                                  variant='caption'
                                  gutterBottom
                                  align='left'
                                  className={classes.routingDesCaption}
                                >
                                  OPEN
                                </Typography>
                                <Typography
                                  variant='caption'
                                  gutterBottom
                                  align='left'
                                  className={classes.routingDesCaption}
                                >
                                  --
                                </Typography>
                                <Typography
                                  variant='caption'
                                  gutterBottom
                                  align='left'
                                  className={classes.routingDesCaption}
                                >
                                  Health-MedAdvantage-PPO
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            <div className={`${classes.routeNumberContainer}`}>
                            <Typography
                                variant='display2'
                                gutterBottom
                                align='right'
                                className={classes.routeNumber}
                              >
                                89715
                              </Typography>
                              <Typography
                                variant='caption'
                                gutterBottom
                                align='right'
                                className={classes.routeNumberLabel}
                              >
                                Routing Description
                              </Typography>
                            </div>

                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <div className={classes.upperContainer} />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={6}>
                      <Heading>
                        Routing Details
                      </Heading>
                      <Label
                        variant='caption'
                        className={classes.caption}
                        gutterBottom
                      >
                        Route to
                      </Label>
                      <Description>
                        {' '}
                        89715
                      </Description>
                      <Label
                        variant='caption'
                        className={classes.caption}
                        gutterBottom
                      >
                        Destination
                      </Label>
                      <DescriptionWithGreen>
                        OPEN
                      </DescriptionWithGreen>
                      <Label
                        variant='caption'
                        className={classes.caption}
                        gutterBottom
                      >
                        Special Case Flags
                      </Label>
                      <Typography
                        variant='title'
                        className={classes.blueFont}
                        gutterBottom
                      >
                        {' '}
                        - -{' '}
                      </Typography>
                      <Label
                      >
                        EAS Transaction ID
                      </Label>
                      <Description
                        variant='title'
                        className={classes.blueFont}
                        gutterBottom
                      >
                        {' '}
                        BEF783-1B-5827-8D09-82BYscB
                      </Description>
                      <Description
                      >
                        {' '}
                        BEF783-1B-5827-8D09-82BYscB
                      </Description>

                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Label>
                        Identity Return Status
                      </Label>
                       <DescriptionWithGreen>
                        OPEN
                        </DescriptionWithGreen>
                      <Label>
                        Routing Return Status
                      </Label>
                      <DescriptionWithGreen>
                        OPEN
                      </DescriptionWithGreen>
                      <Label
                        variant='caption'
                        className={classes.caption}
                        gutterBottom
                      >
                        Pre Effectuated
                      </Label>
                      <Description
                      >
                        No
                      </Description>
                      <Label
                        variant='caption'
                        className={classes.caption}
                        gutterBottom
                      >
                        Special Routing Indicator
                      </Label>
                      <Typography
                        variant='title'
                        className={classes.blueFont}
                        gutterBottom
                      >
                        - -{' '}
                      </Typography>
                      <Label
                        variant='caption'
                        className={classes.caption}
                        gutterBottom
                      >
                        Enrolled at Florida Blue
                      </Label>
                      <Description
                      >
                        Yes
                      </Description>
                      <Label
                        variant='caption'
                        className={classes.caption}
                        gutterBottom
                      >
                        Contarct Alpha Prefix
                      </Label>
                      <Description
                      >
                        XOP
                      </Description>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </main>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({}, dispatch)
}

CSRTransferRouting.propTypes = {
  classes: PropTypes.object.isRequired
}
CSRTransferRouting = withStyles(styles)(CSRTransferRouting)

export default withRouter(connect(null, mapDispatchToProps)(CSRTransferRouting))
