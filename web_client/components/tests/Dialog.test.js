import React from "react";
import sinon from "sinon";
import {shallow} from "enzyme";
import _ from "lodash";
import DDialog from "../Shared/Shared-Components/DialogBox/DeleteDialog";

describe("DDialog", () => {
    let _wrapper, _handleClose, _handleSuccess, _props, _state;
    const _componentWillReceivePropsSpy = sinon.spy(DDialog.prototype, 'componentWillReceiveProps');
    beforeAll(()=>{
        _handleClose = sinon.spy();
        _handleSuccess = sinon.spy();
      });

      beforeEach(() => {
        _props = {
          data: {isOpen: true, title: "test title", content: "test content", selectedRowForDelete: 0},
          handleClose: _handleClose,
          handleSuccess: _handleSuccess
        };
        _state = {
            data: _props.data
        };
        _wrapper = shallow(<DDialog {..._props} {..._state} />);
      });

      afterAll(()=>{
        _handleClose.reset();
        _handleSuccess.reset();
      });

      it("should render DDialogWrapper", () => {
        expect(_wrapper.find({id: "DDialogWrapper"}).length).toEqual(1)
      });

      it("should call componentWillReceiveProps whenever the props changes", () => {
        expect(_componentWillReceivePropsSpy).toHaveProperty('callCount', 0);
        _wrapper.setProps({ title: 'title2' });
        expect(_componentWillReceivePropsSpy).toHaveProperty('callCount', 1);
     });

      it("should render the DDialog", () => {
        expect(_wrapper.find({id: "DDialog"}).length).toEqual(1)
      });

      it("should render the title", () => {
        expect(_wrapper.find({id: "DDialogTitle"}).length).toEqual(1)
      });

      it("should render the content", () => {
        expect(_wrapper.find({id: "DDialogContent"}).length).toEqual(1)
      });

      it("should content render the content", () => {
        const _wrapperContent = _wrapper.find({id: "DDialogContent"});
        expect(_wrapperContent.length).toEqual(1);
        expect(_wrapperContent.children()).toHaveLength(1);
      });

      it("should render the actions", () => {
        const _wrapperContentActions = _wrapper.find({id: "DDialogDialogActionsWrapper"});
        expect(_wrapperContentActions.length).toEqual(1);
        expect(_wrapperContentActions.children()).toHaveLength(2);
      });

      it("should render the button cancel and on click call the handleClose", () => {
        const _btnCancel = _wrapper.find({id: "DDialogBtnCancel"});
        expect(_btnCancel.length).toEqual(1);
        _btnCancel.simulate('click');
        expect(_handleClose.calledOnce).toBe(true);
      });

      it("should render the button Ok and on click call the handleSuccess", () => {
        const _btnOk = _wrapper.find({id: "DDialogBtnOk"});
        expect(_btnOk.length).toEqual(1);
        _btnOk.simulate('click');
        expect(_handleSuccess.calledOnce).toBe(true);
      });

});