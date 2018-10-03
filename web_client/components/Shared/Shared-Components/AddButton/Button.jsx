import React, {Component, Fragment} from "react";
import * as Styles from "../../Shared-Styles/Button";
 
class OButton extends Component {

    onButtonClick() {
        this.props.onButtonClick();
    }

    getButtonByType(){
        const {text, icon, variant, type} = this.props;
        switch(type){
            case "default": return <Styles.ButtonSC onClick={this.onButtonClick.bind(this)} variant={variant}>
                                     {icon && <span>{icon}</span>}   {text}
                                    </Styles.ButtonSC>
            default: return <Styles.ButtonSC onClick={this.onButtonClick.bind(this)} variant={variant}>{text}</Styles.ButtonSC>
        }
    }

    render(){
        return(<Fragment>
                    {this.getButtonByType()}
              </Fragment>)
    }
}

export default OButton;
