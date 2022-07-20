import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import Select from "react-select";
import styled from "styled-components";
import Header from "../../components/Header";
import Scrollbars from "react-custom-scrollbars-2";

import { options } from "../../utils/dummyData/createPageData";
import { tagData } from "../../utils/dummyData/mainPageData";
import { FindTag } from "../MenuTest";
import { useDraggable } from "react-use-draggable-scroll";
import {
  HeadAndTextContainer,
  HeaderTextContainer,
  LinkAndPriceContainer,
  PostingContainer,
  SelectCategoryContainer,
  SelectDateContainer,
  SelectLocationContainer,
  SelectPaticipantContainer,
  SelectPhotoContainer,
  SelectSubmitContainer,
  SelectTagContainer,
} from "./styles";

const NewData = () => {
  const [categoryOptions, setCategoryOptions] = useState();

  const navigate = useNavigate();

  const onClickToMainPage = () => {
    navigate("/main2");
  };
  return (
    <PostingContainer>
      <Header />
      <Scrollbars autoHide style={{ height: "780px" }}>
        <HeaderTextContainer>
          <h1>
            두근두근 어떤 이웃과
            <br />
            만나게 될까요?
          </h1>
          <img
            onClick={onClickToMainPage}
            alt="x"
            src={process.env.PUBLIC_URL + "/assets/create/x.png"}
          />
        </HeaderTextContainer>
        <SelectPhotoContainer>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/assets/create/photo.png"}
              alt="dummy_photo"
            />
          </div>
        </SelectPhotoContainer>
        <SelectCategoryContainer>
          <Select
            classNamePrefix="react-select"
            className="react-select-category"
            placeholder="카테고리*"
            onChange={setCategoryOptions}
            options={options}
            isSearchable={false}
          />
        </SelectCategoryContainer>
        <SelectTagContainer />
        <HeadAndTextContainer>
          <label htmlFor="headText">제목*</label>
          <input id="headText" />
          <label htmlFor="explanation">설명*</label>
          <textarea
            id="explanation"
            placeholder="- 작성 팁
식품의 경우, 구매시기/유통기간이 있나요? 
이웃과 얼만큼 혹은 몇 개씩 나눌 수 있나요?"
          />
        </HeadAndTextContainer>
        <LinkAndPriceContainer>
          <label htmlFor="link" className="link-price-block link">
            <img
              src={process.env.PUBLIC_URL + "/assets/create/clip.png"}
              alt="clip"
            />
            <span>링크</span>
          </label>

          <input className="textbox link-price-block" id="link" />

          <div className="confidence-wrapper">
            <input type="checkbox" id="confidence" />

            <label htmlFor="confidence">당신의 용기✨가 필요해요</label>
          </div>
          <label htmlFor="price" className="textbox link-price-block price">
            <span className="price-span">￦</span>
            <span>금액</span>
          </label>

          <input className="textbox link-price-block" id="price" />

          <div className="barter-wrapper">
            <input type="checkbox" id="barter" />
            {/* 물물교환 */}
            <label htmlFor="barter">물물교환🍞해요</label>
          </div>
        </LinkAndPriceContainer>
        <SelectPaticipantContainer>
          <div className="participant-wrapper">
            <img
              alt="pariticipant"
              src={process.env.PUBLIC_URL + "/assets/create/participant.png"}
            />
            <span>인원*</span>
          </div>
          <div className="participant-control-wrapper">
            <span>-</span>
            <div>1</div>
            <span>+</span>
          </div>
        </SelectPaticipantContainer>
        <SelectLocationContainer>
          <label htmlFor="location">
            <img
              alt="location"
              src={process.env.PUBLIC_URL + "/assets/create/location_point.png"}
            />
            <span>장소*</span>
          </label>
          <input id="location" />
        </SelectLocationContainer>
        <SelectDateContainer>
          <div className="calendar-wrapper">
            <img
              alt="calendar"
              src={process.env.PUBLIC_URL + "/assets/create/calendar.png"}
            />
            <span>날짜 및 시간*</span>
          </div>
        </SelectDateContainer>
        <SelectSubmitContainer>
          <button>작성 완료 🎉</button>
        </SelectSubmitContainer>
      </Scrollbars>
    </PostingContainer>
  );
};

export default NewData;
