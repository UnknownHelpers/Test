import axios from 'axios';
import * as types from './ACTION_TYPES';
export const API_URL = 'https://api.myjson.com/bins/ks4l4'; //http://edclcdtd203:50007/cdt/api/v1/crt-vdn-override/all;
export const POST_URL = 'http://edclcdtd203:50007/cdt/api/v1/crt-vdn-override/add';
export const PUT_URL = 'http://edclcdtd203:50007/cdt/api/v1/crt-vdn-override/update';
export const GET_VDN_IDS_URL = 'https://api.myjson.com/bins/12opu0'; //http://edclcdtd203:50007/cdt/api/v1/crt-vdn-override/vdn
export const GET_OVERRIDE_REASON = 'https://api.myjson.com/bins/1bsv3s'; //http://edclcdtd203:50007/cdt/api/v1/crt-vdn-override/reason

function constructData(data) {
    const _data =  {
    "headers": [
        {
          "key": 1,
          "value": "VDN"
        },
        {
          "key": 2,
          "value": "Override Reason"
        },
        {
          "key": 3,
          "value": "Return Value"
        },
        {
          "key": 4,
          "value": "Notes"
        }
      ]
    }

    let rows = data.recordset.map((item, index) => {
        return [{
                    key: (index + 1),
                    col: 1,
                    value: item.vo_VDN_id
                },
                {
                    key: (index + 1),
                    col: 2,
                    value: item.vo_Reason
                },
                {
                    key: (index + 1),
                    col: 3,
                    value: item.vo_Return
                },
                {
                    key: (index + 1),
                    col: 4,
                    value: item.vo_notes
                }
            ]
    })

    return _.assign({}, _data, {rows});
}

function getVDNOverrides() {
    const gerRulesRequest = axios.get(API_URL);
    return(dispatch)=>{
        dispatch({type: types.SET_GET_VDN_READY, isLoading: true});
        return gerRulesRequest.then(({data})=>{
            let _data = constructData(data)
            dispatch({type: types.GET_VDN_OVERRIDES, data: _data, isLoading: false});
          }).catch((error)=>{
            dispatch({type: types.SET_GET_VDN_READY, isLoading: false});
            throw new Error(error);
          });
    }
}

function postVDNData(data) {
    const postRequest = axios.post(POST_URL, data);
    return(dispatch)=>{
        dispatch({type: types.SET_GET_VDN_READY, isLoading: true});
        return postRequest.then(({data})=>{

        }).catch((error)=>{
            dispatch({type: types.SET_GET_VDN_READY, isLoading: false});
            throw new Error(error);
        });
    }
}

function putVDNData(data) {
    const putRequest = axios.put(PUT_URL, data);
    return(dispatch)=>{
        dispatch({type: types.SET_GET_VDN_READY, isLoading: true});
        return putRequest.then(({data})=>{

        }).catch((error)=>{
            dispatch({type: types.SET_GET_VDN_READY, isLoading: false});
            throw new Error(error);
        });
    }
}

function getVDNIdsList() {
    return axios.get(GET_VDN_IDS_URL);
}

function getVDNReasonsList() {
    return axios.get(GET_OVERRIDE_REASON);
}

function getVDNIDList() {
    const gerVDNIdRequest = axios.all([getVDNIdsList(), getVDNReasonsList()]);
    return(dispatch)=>{
        dispatch({type: types.SET_GET_VDN_READY, isLoading: true});
        return gerVDNIdRequest.then(axios.spread(function (vdnIdListArray, reasonsArray) {
            let _vdnIdsList = vdnIdListArray.data.recordset.map((item) => {
                return item.VDN
            });
            let _reasonsList = reasonsArray.data.recordset.map((item) => {
                return item.vr_reason_id
            });

            dispatch({type: types.GET_VDN_IDS, vdnIdListArray: _vdnIdsList, reasonsList:_reasonsList,  isLoading: false});
        })).catch((error)=>{
            dispatch({type: types.SET_GET_VDN_READY, isLoading: false});
            throw new Error(error);
        });
    }
}
export {getVDNOverrides, postVDNData, putVDNData, getVDNIDList};