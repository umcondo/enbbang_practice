import styled from "styled-components";
import { FindTag } from "../MenuTest";

export const PostingContainer = styled.div`
  width: 360px;
  background: #ffffff;
  margin: auto;
  margin-top: 30px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  height: 800px;
`;

export const HeaderTextContainer = styled.div`
  position: relative;
  height: 100px;
  border-bottom: 1px solid #e0e0e0;

  h1 {
    padding-top: 16px;
    margin-left: 16px;
    font-weight: 275;
    font-size: 24px;
    line-height: 32px;
  }
  img {
    position: absolute;
    width: 13.18px;
    top: 25px;
    right: 21px;
    cursor: pointer;
  }
`;

export const SelectPhotoContainer = styled.div`
  height: 104px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;

  div {
    margin-left: 16px;
    width: 72px;
    height: 72px;
    background: #eeeeee;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }
`;

export const SelectCategoryContainer = styled.div`
  height: 62px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;

  .react-select-category {
    margin-left: 16px;
    margin-right: 14px;
    width: 150px;
  }
  .react-select__control {
    border: none;
    box-shadow: none;
  }

  .react-select__indicators span {
    width: 0;
  }
  .react-select__indicator {
    color: #212121;
  }
  .react-select__placeholder {
    color: #212121;
  }
`;

export const SelectTagContainer = styled(FindTag)``;

export const HeadAndTextContainer = styled.div`
  height: 320px;
  border-bottom: 1px solid #e0e0e0;
  border-top: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  align-items: flex-start;

  label {
    margin-top: 16px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;
  }

  input {
    margin-top: 8px;
    width: 328px;
    height: 56px;
    border: 1px solid #000000;
    border-radius: 4px;
  }
  textarea {
    margin-top: 8px;
    width: 328px;
    height: 150px;
    border: 1px solid #000000;
    border-radius: 4px;
  }
`;

export const LinkAndPriceContainer = styled.div`
  height: 340px;
  border-bottom: 1px solid #e0e0e0;
  padding-left: 16px;

  .link-price-block {
    display: block;
  }
  label.link {
    display: inline-flex;
    align-items: center;
    margin-top: 13px;
    gap: 15px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;
  }
  input.textbox {
    margin-top: 8px;
    margin-bottom: 20px;
    width: 328px;
    height: 56px;
    border: 1px solid #000000;
    border-radius: 4px;
  }
  label.price {
    display: inline-flex;
    align-items: center;
    margin-top: 13px;
    gap: 8px;
    font-weight: 500;
    font-size: 12px;
    cursor: pointer;
  }
  label.price .price-span {
    font-size: 22px;
    font-weight: bold;
  }
  .confidence-wrapper {
    display: flex;
    gap: 10px;
    margin-top: 23px;
    margin-bottom: 38px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
  .barter-wrapper {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    margin-top: 17px;
    margin-right: 37px;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
  }
`;

export const SelectPaticipantContainer = styled.div`
  height: 100px;
  font-weight: 500;
  font-size: 14px;
  margin-left: 17px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .participant-wrapper {
    cursor: pointer;
  }

  .participant-wrapper span {
    margin-left: 8px;
  }
  .participant-control-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 100px;
  }
  .participant-control-wrapper span {
    font-weight: 500;
    font-size: 40px;
    cursor: pointer;
  }
  .participant-control-wrapper div {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    border: 1px solid #000000;
    border-radius: 4px;
    width: 73px;
    height: 56px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const SelectLocationContainer = styled.div`
  height: 120px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  margin-left: 17px;

  label {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    cursor: pointer;
  }
  input {
    margin-top: 8px;
    margin-bottom: 20px;
    width: 328px;
    height: 56px;
    border: 1px solid #000000;
    border-radius: 4px;
  }
`;
export const SelectDateContainer = styled.div`
  height: 70px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  margin-left: 17px;
  .calendar-wrapper {
    display: inline-flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
  }
`;
export const SelectSubmitContainer = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  button {
    padding: 10px 24px;
    width: 326px;
    height: 40px;
    border: none;
    background: #39a45c;
    border-radius: 100px;

    color: #ffffff;
    cursor: pointer;
  }
`;
