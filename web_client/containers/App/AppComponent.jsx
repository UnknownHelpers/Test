import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'

import List from '@material-ui/core/List'
import MenuList from './MenuList'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import AppRouter from '../../route'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faTv, faBinoculars, faCogs } from 'fa5-pro-light'
import { Link, Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const imageLogo = require("./CRT-logo.png");

const ColSC  = styled(Col)`
    width: 100% !important;
    display: inline !important;
`;

const RowSC  = styled(Row)`
    width: 100% !important;
    margin: 0px !important;
    display: inline-block !important;
`;
const FontAwesomeIconSC = styled(FontAwesomeIcon)`
    & {
        margin:5px;
}`

const FontAwesomeIconLookUpSC = styled(FontAwesomeIcon)`
    &&& {
      font-size: 19px;
}`

const ListSC = styled(List)`
 & {
  padding-top: 0px !important;
  padding-bottom: 8px !important;
  }
`
const styles = theme => {
  return {
    root: {
      flexGrow: 1,
      height: '100%',
      width: '100%',
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      minHeight: 850
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36
    },
    hide: {
      display: 'none'
    },
    drawerPaper: {
      position: 'fixed',
      whiteSpace: 'nowrap',
      width: '268px',
      marginLeft: '-10px',
      height: '100%',
      backgroundColor: '#4e5155',
      color: '#cecfd0',
      zIndex: '300',
      padding: '0px',
      overflow: 'hidden'
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      width: theme.spacing.unit * 8,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 8,
        overflow: 'hidden'
      }
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: '5px 10px'
    }
  }
}

const sideMenuList = [
  {
    key: 1,
    value: (
      <Link
        style={{
          textDecoration: 'none',
          color: 'white',
          cursor: 'pointer',
          fontWeight:'400',
          fontFamily: 'sans-serif'
        }}
        to={'/csrroute-search'}
      >
        Customer Advocate
      </Link>
    ),
    icon: <FontAwesomeIconSC icon={faUsers} />,
    isSelected: false
  },
  {
    key: 2,
    value: 'Business Administration',
    icon: <FontAwesomeIconSC icon={faTv} />,
    isSelected: false,
    subMenu: [
      {
        key: 41,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/contract-search'}
          >
            Contract Number Search
          </Link>
        ),
        isSelected: false
      },
      {
        key: 42,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/vip-admin'}
          >
            VIP  Administartion
          </Link>
        ),
        isSelected: false
      },
      {
        key: 43,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/rule-admin'}
          >
            Rule Administration
          </Link>
        ),
        isSelected: false
      },
      {
        key: 44,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/vdn-grid'}
          >
            Vdn Grid
          </Link>
        ),
        isSelected: false
      },
      {
        key: 45,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/asc-routing'}
          >
            ASC Dedicated Routing
          </Link>
        ),
        isSelected: false
      },
      {
        key: 46,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/caller-intent'}
          >
            Caller Intent
          </Link>
        ),
        isSelected: false
      },
      {
        key: 47,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/dnis-information'}
          >
            DNIS Information
          </Link>
        ),
        isSelected: false
      },
      {
        key: 48,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/vdn-override'}
          >
            VDN Override
          </Link>
        ),
        isSelected: false
      },
      {
        key: 49,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/claim-denial'}
          >
            Claim Denial
          </Link>
        ),
        isSelected: false
      },
      {
        key: 50,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'emb-routing'}
          >
            EMB Dedicated Routing
          </Link>
        ),
        isSelected: false
      }
    ]
  },
  {
    key: 3,
    value: 'Lookup',
    icon: <FontAwesomeIconLookUpSC icon={faBinoculars} />,
    isSelected: false,
    subMenu: [
      {
        key: 51,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/auth-service'}
          >
            Auth Service Types
          </Link>
        ),
        isSelected: false
      },
      {
        key: 52,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/available-lang'}
          >
            Available Languages
          </Link>
        ),
        isSelected: false
      },
      {
        key: 53,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/benefit-prompts'}
          >
            Benefit Prompts{' '}
          </Link>
        ),
        isSelected: false
      },
      {
        key: 54,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/benefit-types'}
          >
            Benefit Types
          </Link>
        ),
        isSelected: false
      },
      {
        key: 55,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/caller-types'}
          >
            Caller Types
          </Link>
        ),
        isSelected: false
      },
      {
        key: 56,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/call-location'}
          >
            Call Location
          </Link>
        ),
        isSelected: false
      },
      {
        key: 57,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/claim-denial'}
          >
            Claim Denial Category
          </Link>
        ),
        isSelected: false
      },
      {
        key: 58,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/contact-type'}
          >
            Contact Type
          </Link>
        ),
        isSelected: false
      },
      {
        key: 59,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/coverage-type'}
          >
            Coverage Type
          </Link>
        ),
        isSelected: false
      },
      {
        key: 60,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/message-campaign'}
          >
            Message Campaign
          </Link>
        ),
        isSelected: false
      },
      {
        key: 61,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/message-format'}
          >
            Message Format{' '}
          </Link>
        ),
        isSelectPed: false
      },
      {
        key: 62,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/message-outbound'}
          >
            message Outbound
          </Link>
        ),
        isSelected: false
      },
      {
        key: 63,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/message-qualifier'}
          >
            Message Qualifier Type
          </Link>
        ),
        isSelected: false
      },
      {
        key: 64,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/message-status'}
          >
            Message Status
          </Link>
        ),
        isSelected: false
      },
      {
        key: 65,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/nludisambg'}
          >
            Nludisambg
          </Link>
        ),
        isSelected: false
      },
      {
        key: 66,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/poe'}
          >
            POE
          </Link>
        ),
        isSelected: false
      },
      {
        key: 67,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/product-codes'}
          >
            Product Codes
          </Link>
        ),
        isSelected: false
      },
      {
        key: 68,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/routing-tag-ref'}
          >
            Routing Tags Cross Ref
          </Link>
        ),
        isSelected: false
      },
      {
        key: 69,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/routing-tag'}
          >
            Routing tags
          </Link>
        ),
        isSelected: false
      },
      {
        key: 70,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/vdn-reason'}
          >
            VDN Reason
          </Link>
        ),
        isSelected: false
      }
    ]
  },
  {
    key: 4,
    value: 'Technical Support',
    icon: <FontAwesomeIconSC icon={faCogs} />,
    isSelected: false,
    subMenu: [
      {
        key: 71,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/message-info'}
          >
            Message Information
          </Link>
        ),
        isSelected: false
      },
      {
        key: 72,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/vdn-debug'}
          >
            VDN Debug
          </Link>
        ),
        isSelected: false
      },
      {
        key: 73,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/cacr-debug'}
          >
            Cacr Debug
          </Link>
        ),
        isSelected: false
      },
      {
        key: 74,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/member-debug'}
          >
            Member Debug
          </Link>
        ),
        isSelected: false
      },
      {
        key: 75,
        value: (
          <Link
            style={{
              textDecoration: 'none',
              color: '#cecfd0',
              cursor: 'pointer',
              fontWeight:'400',
              fontFamily: 'sans-serif'
            }}
            to={'/user-roles'}
          >
            User Roles
          </Link>
        ),
        isSelected: false
      }
    ]
  }
]

class AppComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      sideMenuList: sideMenuList
    }
  }

  handleDrawerOpen () {
    this.setState({ open: true })
  }

  handleDrawerClose () {
    this.setState({ open: false })
  }

  toggleMenu () {
    this.setState({ open: !this.state.open })
  }

  componentDidMount () {
    let leftNav = document.querySelector('#leftNav')
    // Detect all clicks on the document
    let that = this
    document.addEventListener('click', function (event) {
      // If user clicks inside the element, do nothing
      if (event.target.closest('#leftNav')) {
      } else {
        that.setState({ open: false })
      }
    })
  }

  componentWillUnmount () {
    document.removeEventListener('click', document)
  }

  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
      <RowSC><ColSC xs={12} sm={12} md={2} lg={2}>
        <Drawer
            id='leftNav'
            variant='permanent'
            open={this.state.open}
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !this.state.open && classes.drawerPaperClose
              )
            }}>
            <div style={{ width: '100%', minHeight: '51px', backgroundColor: '#3d4043' }}>
              <img
                src={imageLogo}
                style={{
                  width: '38px',
                  height: '38px',
                  padding: '5px',
                  marginLeft: '18px',
                  marginTop: '6px'
                }}
              />
            </div>
            <ListSC>
              <MenuList open={this.state.open}
                sideMenuList={this.state.sideMenuList}
                toggleMenu={this.toggleMenu.bind(this)}
              />
            </ListSC>
          </Drawer></ColSC>
          <ColSC xs={12} sm={12} md={10} lg={10}>
          <AppRouter />
          </ColSC>
        </RowSC>
      </div>
    )
  }
}

AppComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

AppComponent = withStyles(styles, { withTheme: true })(AppComponent)

export default withRouter(connect(null, null)(AppComponent))

// export default withRouter(withStyles(styles, { withTheme: true })(AppComponent))
