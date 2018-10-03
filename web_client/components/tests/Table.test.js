import React from "react";
import sinon from "sinon";
import {shallow} from "enzyme";
import _ from "lodash";
import Table from "../Shared/Shared-Components/Table";

describe("Table", () => {
    let _wrapper, _onDelete, _onSaveClick, _props, _state;
    const _componentWillReceivePropsSpy = sinon.spy(Table.prototype, 'componentWillReceiveProps');
    describe("When Props with data", () => {
      beforeEach(() => {
        _props = {
          data: null,
          isEditable: false,
          onDelete: _onDelete,
          onSaveClick: _onSaveClick
        };
        _state = {
          currentEditIndexValue: -1,
          data: _props.data,
          editObj: null
        };
        _wrapper = shallow(<Table {..._props} {..._state} />);
      });

      beforeAll(()=>{
        _onDelete = sinon.spy();
        _onSaveClick = sinon.spy();
      });

      afterAll(()=>{
        _onDelete.reset();
        _onSaveClick.reset();
      });


      it("should not render TablePaperWrapper", () => {
        let _wrapper = shallow(<Table {..._props} {..._state} />);
        expect(_wrapper.find({id: 'TablePaperWrapper'}).length).toEqual(0);
      });
    });

    describe("When Props with data", () => {
      beforeEach(() => {
        _props =  {
          isEditable: true,
          data: {
              headers: ["Rule", "CACR ID", "ICID", "LOB", "GROUP DIVISION ID", "EXCHANGE"],
              isReady: true,
              rows: [
                  [
                    {
                      "col": "Rule",
                      "key": 1,
                      "value": "GRP",
                      "type": "Label",
                      "isEditable": false,
                      "editableComp": null
                    },
                    {
                      "col": "CACR_ID",
                      "key": 1,
                      "value": "NSA_Prime",
                      "type": "Label",
                      "isEditable": false,
                      "editableComp": null
                    },
                    {
                      "col": "ICID",
                      "key": 1,
                      "value": 130002528,
                      "type": "Label",
                      "isEditable": false,
                      "editableComp": null
                    },
                    {
                      "col": "LOB",
                      "key": 1,
                      "value": "PPC",
                      "type": "Label",
                      "isEditable": true,
                      "editableComp": "Text"
                    },
                    {
                      "col": "GROUP_DIVISION_ID",
                      "key": 1,
                      "value": "MYB",
                      "type": "Label",
                      "isEditable": true,
                      "editableComp": "Text"
                    },
                    {
                      "col": "EXCHANGE",
                      "key": 1,
                      "value": false,
                      "type": "Label",
                      "isEditable": true,
                      "editableComp": "Toggle"
                    }
                  ],
                  [
                    {
                      "col": "Rule",
                      "key": 2,
                      "value": "GRP",
                      "type": "Label",
                      "isEditable": false,
                      "editableComp": null
                    },
                    {
                      "col": "CACR_ID",
                      "key": 2,
                      "value": "NSA_Prime",
                      "type": "Label",
                      "isEditable": false,
                      "editableComp": null
                    },
                    {
                      "col": "ICID",
                      "key": 2,
                      "value": 130002529,
                      "type": "Label",
                      "isEditable": false,
                      "editableComp": null
                    },
                    {
                      "col": "LOB",
                      "key": 2,
                      "value": "PPC",
                      "type": "Label",
                      "isEditable": true,
                      "editableComp": "Text"
                    },
                    {
                      "col": "GROUP_DIVISION_ID",
                      "key": 2,
                      "value": "MYB",
                      "type": "Label",
                      "isEditable": true,
                      "editableComp": "Text"
                    },
                    {
                      "col": "EXCHANGE",
                      "key": 2,
                      "value": false,
                      "type": "Label",
                      "isEditable": true,
                      "editableComp": "Toggle"
                    }
                  ]
                ]
          },
          onDelete: _onDelete,
          onSaveClick: _onSaveClick
      };
      _state = {
        currentEditIndexValue: -1,
        data: _props.data,
        editObj: null
      };
      _wrapper = shallow(<Table {..._props} {..._state} />);
      });
      
      beforeAll(()=>{
        _onDelete = sinon.spy();
        _onSaveClick = sinon.spy();
      });

    afterAll(()=>{
      _onDelete.reset();
      _onSaveClick.reset();
    });

      it("should contain a TableWrapper", () => {
        const _tableWrapper = _wrapper.find({id: "TableWrapper"});
        expect(_tableWrapper.length).toEqual(1);
        expect(_tableWrapper.name()).toEqual('div')
      });

       it("should call componentWillReceiveProps whenever the props changes", () => {
          expect(_componentWillReceivePropsSpy).toHaveProperty('callCount', 0);
          _wrapper.setProps({ isEditable: false });
          expect(_componentWillReceivePropsSpy).toHaveProperty('callCount', 1);
       });

      it("should have parent Paper Component", () =>{
        expect(_wrapper.find({id: "TablePaperWrapper"}).length).toEqual(1);
      });

      it("should render table", () => {
        const _table = _wrapper.find({id: 'table'});
        expect(_table.length).toEqual(1);
      });

      it("should render one header row with n columns and with edit column", () => {
        const _tableHeader = _wrapper.find({id: 'tableHeader'});
        expect(_tableHeader.length).toEqual(1);
        expect(_wrapper.find({id: 'tableHeaderRow'}).length).toEqual(1);
        const _headerDataSize = _.size(_props.data.headers) + 1;
        const _tableHeaderRow = _wrapper.find({id: 'tableHeaderRow'})
        expect(_tableHeaderRow.children()).toHaveLength(_headerDataSize);
        expect(_wrapper.find({id: 'tableHeaderEditCol'}).length).toEqual(1);
      });

      it("should render one header row with n columns and without edit column", () => {
        let _localProps = _.assign({}, _props, {isEditable: false});
        let _wrapper = shallow(<table {..._localProps} {..._state} />);
        const _tableHeader = _wrapper.find({id: 'tableHeader'});
        expect(_tableHeader.length).toEqual(1);
        expect(_wrapper.find({id: 'tableHeaderRow'}).length).toEqual(1);
        const _headerDataSize = _.size(_props.data.headers);
        const _tableHeaderRow = _wrapper.find({id: 'tableHeaderRow'})
        expect(_tableHeaderRow.children()).toHaveLength(_headerDataSize);
        expect(_wrapper.find({id: 'tableHeaderEditCol'}).length).toEqual(0);
      });

      it("should render table body with n rows based on data rows", () => {
        const _tableBodyWrapper = _wrapper.find({id: 'tableBodyWrapper'});
        expect(_tableBodyWrapper.length).toEqual(1);
        const _rowsDataSize = _.size(_props.data.rows);
        expect(_tableBodyWrapper.children()).toHaveLength(_rowsDataSize);
      });

      it("should show editable row based on selection", () => {
        const _firstRow = _wrapper.find({id: 'tableBodyRow.0'});
        const _editBtn = _firstRow.find({id: 'tableBodyColEditIconBtn.0'});
        _editBtn.simulate('click');
        expect(_wrapper.state('currentEditIndexValue')).toEqual(0);
        expect(_wrapper.state('editObj')).toEqual(_props.data.rows[0]);
        const _editFirstRow = _wrapper.find({id: 'tableBodyRowEdit.0'});
        expect(_editFirstRow.length).toEqual(1);
        const _colsDataSize = _.size(_props.data.rows[0]) + 1;
        expect(_editFirstRow.children()).toHaveLength(_colsDataSize);
        const _cancelBtn = _editFirstRow.find({id: 'tableButtonCancelSC.0'});
        _cancelBtn.simulate('click');
        expect(_wrapper.state('currentEditIndexValue')).toEqual(-1);
        expect(_wrapper.state('editObj')).toEqual(null);
      });

      it("should call onTextFieldChange onChange", () => {
        const _firstRow = _wrapper.find({id: 'tableBodyRow.0'});
        const _editBtn = _firstRow.find({id: 'tableBodyColEditIconBtn.0'});
        _editBtn.simulate('click');
        expect(_wrapper.state('currentEditIndexValue')).toEqual(0);
        const _editFirstRow = _wrapper.find({id: 'tableBodyRowEdit.0'});
        expect(_editFirstRow.length).toEqual(1);
        const _colLob = _editFirstRow.find({id: 'LOB'});
        const event = {
          target: {
            name: 'LOB',
            value: 'PPC1'
          }
        };
        _colLob.simulate('change', event);
        expect(_wrapper.state('editObj')).not.toEqual(_props.data.rows[0]);
      });

      it("should call onSaveClick on save click", () => {
        let _wrapper = shallow(<Table {..._props} {..._state} />);
        const _firstRow = _wrapper.find({id: 'tableBodyRow.0'});
        const _editBtn = _firstRow.find({id: 'tableBodyColEditIconBtn.0'});
        _editBtn.simulate('click');
        expect(_wrapper.state('currentEditIndexValue')).toEqual(0);
        const _editFirstRow = _wrapper.find({id: 'tableBodyRowEdit.0'});
        expect(_editFirstRow.length).toEqual(1);
        const _colLob = _editFirstRow.find({id: 'LOB'});
        const event = {
          target: {
            name: 'LOB',
            value: 'PPC1'
          }
        };
        _colLob.simulate('change', event);
        const _saveBtn = _editFirstRow.find({id: 'tableSaveIconSC.0'});
        _saveBtn.simulate('click');
        expect(_wrapper.state('currentEditIndexValue')).toEqual(-1);
        expect(_onSaveClick.calledOnce).toBe(true);
      });

      it("should call onDelete on remove click", () => {
        let _wrapper = shallow(<Table {..._props} {..._state} />);
        _wrapper.setState({currentEditIndexValue: 0, editObj: _props.data.rows[0]});
        expect(_wrapper.state('currentEditIndexValue')).toEqual(0);
        const _editFirstRow = _wrapper.find({id: 'TableBodyRowEdit.0'});
        expect(_editFirstRow.length).toEqual(1);
        const _removeBtn = _editFirstRow.find({id: 'TableDeleteIconSC.0'});
        _removeBtn.simulate('click');
        expect(_wrapper.state('currentEditIndexValue')).toEqual(-1);
        expect(_onDelete.calledOnce).toBe(true);
      })
    });
})