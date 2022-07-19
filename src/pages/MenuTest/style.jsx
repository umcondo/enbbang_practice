import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 24px;
  background: rgba(33, 33, 33, 0.08);

  .header_button {
    position: absolute;
    top: 7px;
    right: 8px;
    display: flex;
    gap: 8px;
  }
  .square {
    width: 10px;
    height: 10px;
    background: rgba(0, 0, 0, 0.38);
  }
  .circle {
    width: 10px;
    height: 10px;
    background: rgba(0, 0, 0, 0.38);
    border-radius: 50%;
  }
  .triangle-down {
    width: 0;
    height: 0;
    border-left: calc(10px / 1.732) solid transparent;
    border-right: calc(10px / 1.732) solid transparent;
    border-top: 10px solid rgba(0, 0, 0, 0.38);
  }
`;

export const FindTown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  .FindTown_selectBox_container {
    display: flex;
    align-items: center;
  }
  .FindTown_selectBox {
    margin-left: 16px;
    margin-right: 14px;
    cursor: pointer;
  }
  .FindTown_selectBox_pointer {
    width: 12px;
    height: 7.41px;
    cursor: pointer;
  }
  .FindTown_search {
    width: 17.49px;
    height: 17.49px;
    cursor: pointer;
  }
  .FindTown_alarm {
    width: 16px;
    height: 19.5px;
    margin-right: 20px;
    margin-left: 31.51px;
    cursor: pointer;
  }
`;

export const FindTagContainer = styled.div`
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 60px;
  margin-top: 10px;
  display: flex;
  gap: 15px;
  background-color: #ececec;

  .find_tag {
    padding: 5px 10px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 25px;
    display: flex;
    align-items: center;
    text-align: center;
    flex: none;
    cursor: pointer;
  }
  // 스크롤 설정
  overflow-x: scroll;

  /* Hide scrollbar for IE and Edge */
  & {
    -ms-overflow-style: none;
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  div:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;

  display: flex;
  gap: 8px;

  div.menu_container {
    margin-top: 8px;
    margin-left: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  .menu_border {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 64px;
    height: 32px;
    border-radius: 16px;
  }
  .menu_border.first_border {
    background-color: #d9d9d9;
  }
  .menu_text {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }
`;

export const SortBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 9px;
  margin-left: 20px;
  margin-top: 30px;

  img {
    width: 16px;
    height: 6px;
    cursor: pointer;
  }
  span {
    font-family: "Gothic A1";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    cursor: pointer;
  }
`;

export const MainContent = styled.div`
  margin-top: 10px;
`;

export const MainItemsContainer = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  border-bottom: 4px solid #eeeeee;
  padding-bottom: 5px;

  .items_header {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .items_header .items_tag_wrapper {
    display: flex;
  }
  .items_header .items_tag_wrapper .items_tag {
    display: flex;
    justify-content: center;
    align-items: center;

    background: #b3e5fc;
    border-radius: 4px;
    height: 22px;

    padding: 3px 9px 1px 8px;

    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    margin-right: 4px;
  }
  .items_header .items_detail {
    height: 10.67px;
    width: 2.67px;
    cursor: pointer;
  }

  .items_content_wrapper {
    display: flex;
    gap: 16px;
  }
  .items_img_wrapper img {
    width: 96px;
    height: 96px;
  }
  .items_content_wrapper .items_img_wrapper {
    position: relative;
  }
  .items_content_wrapper .items_heart {
    position: absolute;
    bottom: 11.04%;
    left: 8.33%;
    width: 16.67px;
    height: 15.29px;
    cursor: pointer;
  }
  .items_content_wrapper .items_text_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
  .items_text_wrapper h1 {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }
  .items_text_wrapper p {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.25px;

    color: #9e9e9e;
  }
  .items_text_wrapper .items_footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .items_text_wrapper .items_footer .items_participants img {
    width: 16.67px;
  }
  .items_text_wrapper .items_footer .items_participants span {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    margin-left: 3px;
  }
  .items_text_wrapper .items_deadline {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;

    text-align: right;
    letter-spacing: -0.25px;

    color: #9e9e9e;
  }
`;

export const MainButton = styled.button`
  position: absolute;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #39a45c;
  bottom: 100px;
  right: 17px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: none;

  img {
    width: 18px;
    height: 18px;
  }
`;

export const MainContaier = styled.div`
  width: 360px;
  height: 800px;
  background: #ffffff;
  margin: auto;
  margin-top: 70px;
  position: relative;
  border: 1px solid #ececec;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;
