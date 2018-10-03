import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsersInfo } from './action'
import AppComponent from './AppComponent'
import {Row, Col} from 'react-bootstrap';

import { Link, Route, Switch, withRouter } from 'react-router-dom'
import OButton from '../../components/Shared/Shared-Components/AddButton/Button';


class App extends Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {
    this.props.getUsers()
  }


  render () {
    return (
      <main>
        <Row>
          <Col md={12}>
            <Switch>
              <Route exact path='/' component={AppComponent} />
              <Route path='/csrroute-search' component={AppComponent} />
              <Route path='/csrroute-detail' component={AppComponent} />
              <Route path='/contract-search' component={AppComponent} />
              <Route path='/vip-admin' component={AppComponent} />
              <Route path='/asc-routing' component={AppComponent} /> 
              <Route path='/caller-intent' component={AppComponent} />   
              <Route path='/claim-denial' component={AppComponent} />    
              <Route path='/rule-admin' component={AppComponent} />  
              <Route path='/vdn-override' component={AppComponent} />  
            <Route path='/vdn-grid'component={AppComponent}/>  
              <Route path='/dnis-information'component={AppComponent}/>    
              <Route path='/emb-routing'component={AppComponent}/>   
              <Route path='/auth-service'component={AppComponent}/>    
              <Route path='/available-lang'component={AppComponent}/>     
              <Route path='/benefit-prompts'component={AppComponent}/>   
              <Route path='/benefit-types'component={AppComponent}/>   
              <Route path='/caller-types'component={AppComponent}/>   
              <Route path='/call-location'component={AppComponent}/>   
              <Route path='/claim-denial'component={AppComponent}/>   
              <Route path='/contact-type'component={AppComponent}/>   
              <Route path='/coverage-type'component={AppComponent}/>   
              <Route path='/message-campaign'component={AppComponent}/>   
              <Route path='/message-format'component={AppComponent}/>   
              <Route path='/message-outbound'component={AppComponent}/>   
              <Route path='/message-qualifier'component={AppComponent}/>   
              <Route path='/message-status'component={AppComponent}/>   
              <Route path='/nludisambg'component={AppComponent}/>   
              <Route path='/poe'component={AppComponent}/>   
              <Route path='/product-codes'component={AppComponent}/>   
              <Route path='/routing-tag-ref'component={AppComponent}/>   
              <Route path='/routing-tag'component={AppComponent}/>   
              <Route path='/vdn-reason'component={AppComponent}/>   
              <Route path='/message-info'component={AppComponent}/>   
              <Route path='/vdn-debug'component={AppComponent}/>   
              <Route path='/cacr-debug'component={AppComponent}/>   
              <Route path='/member-debug'component={AppComponent}/>   
              <Route path='/user-roles'component={AppComponent}/>   
            </Switch>
          </Col>
        </Row>
      </main>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    name: 'test'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsersInfo())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
