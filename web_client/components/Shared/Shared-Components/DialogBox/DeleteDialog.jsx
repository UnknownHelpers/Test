/* React Core Package */
import React, {Component} from "react";
/* Material UI Dialog */
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class ODialog extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null
        };
    }
    
    componentWillReceiveProps(nextProps){
        if(this.props.data!==nextProps.data){
            this.setState({data: nextProps.data});
        }
    }

    handleClose(){
        this.props.handleClose();
    };

    handlePrimary(){
        this.props.handleSuccess(this.state.data.selectedRowForDelete);
    };

    render(){
        
        return(<div id="ODialogWrapper">
            {this.state.data && <Dialog id="ODialog" fullScreen={this.props.fullScreen} open={this.state.data.isOpen}
              onClose={this.handleClose.bind(this)} aria-labelledby="responsive-dialog-title">
              <DialogTitle id="ODialogTitle">{this.state.data.title}</DialogTitle>
              <DialogContent id="ODialogContent">
                <DialogContentText id="ODialogContentText">
                  {this.state.data.content}
                </DialogContentText>
              </DialogContent>
              <DialogActions id="ODialogDialogActionsWrapper">
                {this.props.isClose && <Button id="ODialogBtnCancel" onClick={this.handleClose.bind(this)} color="primary">
                  Cancel
                </Button>}
                <Button id="ODialogBtnOk" onClick={this.handlePrimary.bind(this)} color="primary" autoFocus>
                  Ok
                </Button>
              </DialogActions>
            </Dialog>}
          </div>);
    }
}

export default ODialog;