// This file is shared across the demos.
import React, { Component, Fragment } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import List from '@material-ui/core/List'
import _ from 'lodash'
import { faChevronDown, faChevronUp } from 'fa5-pro-solids'

const ListUItemIconSC = styled(ListItemIcon)`
& {
  width: 1em;
  height: 17px;
}
`;

const ListItemIconSC = styled(ListItemIcon)`
 & {
  color: #ffffff !important;
  width: 20px;
  height: 20px;
  margin: 10px 20px !important;
  font-size: 15px;
 }
`;

const SubMenuList = styled(List)`
  & {
    padding: 0px 5px !important;
  }
  & > li {
    padding: 8px 24px !important;
  }
`
const FontAwesomeIconSC = styled(FontAwesomeIcon)`
    & {
        position: 'relative';
        margin: 5px;
}`

const ListItemSCFOROneLevel = styled(ListItem)`
& {
  border-left: 14px solid #3f51b5 !important;
  padding: 5px 5px !important;
  margin: 0px 0px !important;
  cursor: pointer;
}
& > svg {
  color: lightgrey !important;
  margin: 10px 13px !important;
  font-size: 15px;
}
& > div {
  padding: 0px !important;
}
`;

const ListItemSC = styled(ListItem)`
  & {
    border-left: 14px solid #4e5155 !important;
    padding: 5px 5px !important;
    margin: 0px 0px !important;
    cursor: 'pointer'
  }
   & > svg {
     color: lightgrey !important;
     margin: 10px 13px !important;
     font-size: 15px;
   }
   & > div {
     padding: 0px !important;
   }
`

const ListItemTextSC = styled(ListItemText)`
  & > span {
    color: #ffffff;
    font-size: 11px;
    font-weight: 400;
    font-family: sans-serif;
    margin-left: 5px;
    text-transform: uppercase;
  }
`

const ListItemSubMenuSC = styled(ListItem)`
  & > svg {
    color: #ffffff !important;
    margin: 5px !important;
    font-size: 15px;
    font-weight: 500;
  }
`;

const ListItemTextSubMenuSC = styled(ListItemText)`
 &  {
   position: 'relative';
   margin-left: 10px;
   cursor: 'pointer';
  }
  & > span {
    color: #ffffff;
    font-size: 11px;
    margin-left: 10px;
    text-transform: uppercase;
    padding-left: 22px !important;
  }
`

class MenuList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sideMenuList: props.sideMenuList
    }
  }

  toggleMenu() {
    if(!this.props.open){
      let sideMenuList = Object.assign([], this.state.sideMenuList);
      let _sideMenuList = sideMenuList.map((element, rIndex)=> {
          return Object.assign({}, element, {isSelected: false});
      })
      this.setState({sideMenuList: _sideMenuList});
    this.props.toggleMenu();
  }
}

  componentWillReceiveProps(nextProps) {
    if (this.props.open !== nextProps.open && nextProps.open === false) {
      let sideMenuList = Object.assign([], this.state.sideMenuList);
      let _sideMenuList = sideMenuList.map((element, rIndex) => {
        return Object.assign({}, element, { isSelected: false });
      })
      this.setState({ sideMenuList: _sideMenuList });
    }
  }

  reset(sideMenuList, index) {
    let _sideMenuList = sideMenuList.map((element, rIndex) => {
      if (index !== rIndex) {
        return Object.assign({}, element, { isSelected: false });
      }
      return Object.assign({}, element);
    });
    return _sideMenuList;
  }

  expandCollapse(index) {
    if (this.props.open) {
      let sideMenuList = Object.assign([], this.state.sideMenuList);
      sideMenuList[index].isSelected = !sideMenuList[index].isSelected;
      let _slist = this.reset(sideMenuList, index);
      this.setState({ sideMenuList: _slist });
    }
  }

  getStyle(item) {
    if (item.isSelected && item.key != 1) {
      return { backgroundColor: '#343a40' }
    }
    else if (item.key == 1) {
      return {}
    }
    else if (item.isSelected && item.key == 1) {
      return { backgroundColor: '#343a40' }
    }
    return {}
  }

  render() {
    return (
      <div>
        {this.state.sideMenuList && this.state.sideMenuList.map((item, index) => {
          return (<Fragment key={'sideMenu.' + item.key}>
            {!item.subMenu && <a style={{textDecoration: 'none'}} href='/csrroute-search'>
              <ListItemSCFOROneLevel style={this.props.open ? { backgroundColor: '#4f5155' } : { backgroundColor: '#343a40' }} button>
                {item.isSelected && <ListItemIconSC>{item.icon}</ListItemIconSC>}
                {!item.isSelected && <ListUItemIconSC>{item.icon}</ListUItemIconSC>}
                <ListItemTextSC primary={item.value} />
              </ListItemSCFOROneLevel>
            </a>}

            {item.subMenu && _.size(item.subMenu) > 0 && <ListItemSC onClick={this.expandCollapse.bind(this, index)} style={this.getStyle(item)} button>
              {item.isSelected && <ListItemIconSC onClick={this.toggleMenu.bind(this)}>
                {item.icon}
              </ListItemIconSC>}
              {!item.isSelected && <ListUItemIconSC onClick={this.toggleMenu.bind(this)}>
                {item.icon}
              </ListUItemIconSC>}
              <ListItemTextSC primary={item.value} />{item.subMenu && <FontAwesomeIconSC style={{ margin: '2px' }} icon={item.isSelected ? faChevronUp : faChevronDown} />}
            </ListItemSC>}

            {item.subMenu && item.isSelected &&
              <SubMenuList>
                {item.subMenu.map((subItem) => {
                  return (<ListItemSubMenuSC onClick={this.expandCollapse.bind(this, index)} key={'sideMenu.' + subItem.key}>
                    <ListItemTextSubMenuSC primary={subItem.value} />
                  </ListItemSubMenuSC>)
                })}
              </SubMenuList>
            }
          </Fragment>)
        })}
      </div>
    );
  }
} export default MenuList;