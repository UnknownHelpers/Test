import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
// import VDNOverridesTable from "../components/Business-Administration/VDN-Override";
import CSRTransfer from '../components/Customer-Advocate/CSRTransfer'
import CSRTransferRouting from '../components/Customer-Advocate/CSRTransferRouting'

import  ContractNumberSearch from '../components/Business-Administration/Contract-Number-Search'
import  VIPAdministartion from '../components/Business-Administration/VIP-Administration'
import  ASCRouting from '../components/Business-Administration/ASC-Dedicated-Routing'
import  CallerIntent from '../components/Business-Administration/Caller-Intent'
import  ClaimDenial from '../components/Business-Administration/Claim-Denial'
import RuleAdministration from '../components/Business-Administration/Rule-Administration'
import VDNOverride from '../components/Business-Administration/VDN-Override'
import VDNGrid from '../components/Business-Administration/VDN-Grid'
import  DNISInformation from '../components/Business-Administration/DNIS-Information'
import  EMBDedicatedRouting  from '../components/Business-Administration/EMB-Dedicated-Routing'
 // import  EMBDedicatedRouting  from '../components/Business-Administration/EMB-Dedicated-Routing'

import   AuthServiceTypes from '../components/Lookup/Auth-Service-Types'
import   AvailableLanguages from '../components/Lookup/Available-Languages'
import   BenefitPrompts from '../components/Lookup/Benefit-Prompts'
 import   UserRoles from '../components/Technical-Support/User-Roles';
 import   MemberDebug from '../components/Technical-Support/Member-Debug';
 import   MessageInformation from '../components/Technical-Support/Message-Information';
 import   MessageOutbound from '../components/Lookup/Message-Outbound';
import   BenefitTypes from '../components/Lookup/Benefit-Types'
import   CallerTypes from '../components/Lookup/Caller-Types'
import   CallLocation from '../components/Lookup/Call-Location'
// import   ClaimDenial from '../components/Lookup/Claim-Denial'
import   ContactType from '../components/Lookup/Contact-Type'
import   CoverageType from '../components/Lookup/Coverage-Type'
import   MessageCampaign from '../components/Lookup/Message-Campaign'
import   MessageFormat from '../components/Lookup/Message-Format'
// import   MessageOutbound from '../components/Lookup/Message-Outbound'
import   MessageQualifier from '../components/Lookup//Message-Qualifier-Type'
import   MessageStatus from '../components/Lookup/Message-Status'
import   Nludisambg from '../components/Lookup/Nludisambg'
import   POE from '../components/Lookup/POE'
import   ProductCodes from '../components/Lookup/Product-Codes'
import   RoutingTagRef from '../components/Lookup/Routing-Tag-Cross-Ref'
import   RoutingTags from '../components/Lookup/Routing-Tags'
import   VDNReason  from '../components/Lookup/VDN-Reason'

 // import   MessageInformation from '../components/Technical-Support/Message-Information'
import   VDNDebug from '../components/Technical-Support/VDN-Debug'
import   CACRDegug from '../components/Technical-Support/CACR-Debug'
// import   MemberDebug from '../components/Technical-Support/Member-Debug'
// import   UserRoles  from '../components/Technical-Support/User-Roles'
const AppRouter = () => (
    <div>
      <Switch>
        <Route exact path='/' component={CSRTransfer} />

        <Route path='/csrroute-search' component={CSRTransfer} />
        <Route path='/csrroute-detail' component={CSRTransferRouting} />
        <Route path='/contract-search' component={ContractNumberSearch} />
        <Route path='/vip-admin' component={ VIPAdministartion } />
        <Route path='/asc-routing' component={ASCRouting} />
        <Route path='/caller-intent' component={CallerIntent} />
        <Route path='/rule-admin' component={RuleAdministration} />
        <Route path='/vdn-override' component={VDNOverride} />
        <Route path='/vdn-grid' component={VDNGrid} />


        <Route path='/claim-denial' component={ClaimDenial} />
        <Route path='/dnis-information' component={DNISInformation} /> 
        <Route path='/emb-routing' component={EMBDedicatedRouting} />
        
        <Route path='/auth-service' component={AuthServiceTypes} />
        <Route path='/available-lang' component={AvailableLanguages} />
        <Route path='/benefit-prompts' component={BenefitPrompts} />
        <Route path='/benefit-types' component={BenefitTypes} />
        <Route path='/caller-types' component={CallerTypes} />
        <Route path='/call-location' component={CallLocation} />
        <Route path='/claim-denial' component={ClaimDenial} />
        <Route path='/contact-type' component={ContactType} />
        <Route path='/coverage-type' component={CoverageType} />
        <Route path='/message-campaign' component={MessageCampaign} />
        <Route path='/message-format' component={MessageFormat} />
        <Route path='/message-outbound' component={MessageOutbound} />
        <Route path='/message-qualifier' component={MessageQualifier} />
        <Route path='/message-status' component={MessageStatus} />
        <Route path='/nludisambg' component={Nludisambg} />
        <Route path='/poe' component={POE} />
        <Route path='/product-codes' component={ProductCodes} />
        <Route path='/routing-tag-ref' component={RoutingTagRef} />
        <Route path='/routing-tag' component={RoutingTags} />
        <Route path='/vdn-reason' component={VDNReason} />


        <Route path='/message-info' component={MessageInformation} />
        <Route path='/vdn-debug' component={VDNDebug} />
        <Route path='/cacr-debug' component={CACRDegug} />
        <Route path='/member-debug' component={MemberDebug} />
        <Route path='/user-roles' component={UserRoles} />
        
      </Switch>
    </div>
)

export default AppRouter
