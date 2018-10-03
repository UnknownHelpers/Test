import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const FilterWrapperSC = styled.div`
    & {
        border:"1px solid silver";
        height: "100%";
        width:"100%";
    }
`;

const FontAwesomeIconSC = styled(FontAwesomeIcon)`
& {
    margin:5px;
}`;

const PinFontAwesomeIconSC = styled(FontAwesomeIcon)`
& {
    margin:5px;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
}`;

const UnPinFontAwesomeIconSC = styled(FontAwesomeIcon)`
& {
    margin:5px;
}`;

const OFliterItemListSC = styled.div`
    position: relative;
    top: 30px;
    left: 10px;
`;

const OFilterTitleActionsSC = styled.span`
&{
    color: #3f51b5;
    float: right;
    margin: 13px;
}
`;

const ShowLabelSC = styled.label`
    font-size: 16px;
    color: #3f51b5;
    font-weight: none;
    position: relative;
    top: 40px;
    right: 210px;
`;

const OFilterBodySC = styled.div`
& {
    margin: 10px;
}
`;

const OFilterContentSC = styled.div`
& {
    border-top: 3px solid #3f51b5;
    height: 750px;
}
`;

const OFliterTitleWrapperSC = styled.div`
& {
    color: #3f51b5;
    background-color: white;
    height: 55px;
    border-bottom: 1px solid #E5E7E9;
}
`;

const OFliterTitleSC = styled.span`
    font-style: none;
    font-size: 16px;
    font-weight: bolder;
    color: #3f51b5;
    height: 30px;
    position: relative;
    top: 13px;
    left: 15px;
`;

const SearchBar = styled.span`
    margin: 20px;
`;

const FilterComponent = styled.div`
    background-color: white;
    border: 1px solid silver;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
    border-radius: 4px;
    width: auto;

`;

export {
    FilterWrapperSC,
    FontAwesomeIconSC,
    PinFontAwesomeIconSC,
    UnPinFontAwesomeIconSC,
    OFliterItemListSC,
    OFilterTitleActionsSC,
    ShowLabelSC,
    OFilterBodySC,
    OFilterContentSC,
    OFliterTitleWrapperSC,
    OFliterTitleSC,
    FilterComponent,
    SearchBar
}