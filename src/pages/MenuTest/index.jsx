import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useRef } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useNavigate } from "react-router";
import Select from "react-select";
import { useDraggable } from "react-use-draggable-scroll";

import {
  FindTagContainer,
  FindTown,
  Footer,
  Header,
  MainButton,
  MainContaier,
  MainContent,
  MainItemsContainer,
  SortBar,
} from "./style";

const tagData = [
  { text: "모두" },
  { text: "같이 사요" },
  { text: "너무 많아요" },
  { text: "같이 나눠요" },
  { text: "같이 주문해요" },
];

const FindTag = ({ onClickTag }) => {
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <FindTagContainer ref={ref} {...events}>
      {tagData.map((data, idx) => (
        <div key={idx} className="find_tag" onClick={onClickTag}>
          {data.text}
        </div>
      ))}
    </FindTagContainer>
  );
};

const mainItemsData = [
  {
    itemId: 0,
    itemsTag: ["같이 사요 🛍️", "배달비 🛵"],
    itemsImg: process.env.PUBLIC_URL + "/assets/main/items_img.png",
    itemsHeadText: "마포구청역 근처 같이 치킨시켜 드실 분?",
    itemsTownLocation: "동네이웃1 성산 제1동",
    itemsParticipants: "1/3",
    itemsDeadline: "2022/06/30 일까지",
    isHeartEmpty: false,
  },
  {
    itemId: 1,
    itemsTag: ["같이 사요 🛍️", "식품 🍞"],
    itemsImg: process.env.PUBLIC_URL + "/assets/main/items_img.png",
    itemsHeadText: `수박 같이 사서 나누실 분!
    어떻게 나눌지 같이 고민해봐요.`,
    itemsTownLocation: "동네이웃2 성산 제2동",
    itemsParticipants: "4/10",
    itemsDeadline: "2022/07/07 일까지",
    isHeartEmpty: false,
  },
  {
    itemId: 2,
    itemsTag: ["너무 많아요 🤝", "홈메이드 🏠"],
    itemsImg: process.env.PUBLIC_URL + "/assets/main/items_img.png",
    itemsHeadText: "집반찬 물물교환해요",
    itemsTownLocation: "동네이웃3 성산 제2동",
    itemsParticipants: "1/2",
    itemsDeadline: "2022/06/30 일까지",
    isHeartEmpty: false,
  },
  {
    itemId: 3,
    itemsTag: ["같이 나눠요 🤝", "홈메이드 🏠"],
    itemsImg: process.env.PUBLIC_URL + "/assets/main/items_img.png",
    itemsHeadText: "집반찬 물물교환해요",
    itemsTownLocation: "동네이웃4 성산 제2동",
    itemsParticipants: "1/2",
    itemsDeadline: "2022/06/30 일까지",
    isHeartEmpty: false,
  },
  {
    itemId: 4,
    itemsTag: ["너무 많아요 🤝", "같이 나눠요 🏠"],
    itemsImg: process.env.PUBLIC_URL + "/assets/main/items_img.png",
    itemsHeadText: "집반찬 물물교환해요",
    itemsTownLocation: "동네이웃5 성산 제3동",
    itemsParticipants: "1/2",
    itemsDeadline: "2022/06/30 일까지",
    isHeartEmpty: false,
  },
  {
    itemId: 5,
    itemsTag: ["같이 주문해요 🤝", "홈메이드 🏠"],
    itemsImg: process.env.PUBLIC_URL + "/assets/main/items_img.png",
    itemsHeadText: "집반찬 물물교환해요",
    itemsTownLocation: "동네이웃6 합정 제2동",
    itemsParticipants: "1/2",
    itemsDeadline: "2022/06/30 일까지",
    isHeartEmpty: false,
  },
  {
    itemId: 6,
    itemsTag: ["너무 많아요 🤝", "같이 주문해요 🏠", "같이 나눠요 🤝"],
    itemsImg: process.env.PUBLIC_URL + "/assets/main/items_img.png",
    itemsHeadText: "집반찬 물물교환해요",
    itemsTownLocation: "동네이웃7 성산 제1동",
    itemsParticipants: "1/2",
    itemsDeadline: "2022/06/30 일까지",
    isHeartEmpty: false,
  },
  {
    itemId: 7,
    itemsTag: ["너무 많아요 🤝", "같이 주문해요 🏠"],
    itemsImg: process.env.PUBLIC_URL + "/assets/main/items_img.png",
    itemsHeadText: "집반찬 물물교환해요",
    itemsTownLocation: "동네이웃7 성산 제1동",
    itemsParticipants: "1/2",
    itemsDeadline: "2022/06/30 일까지",
    isHeartEmpty: false,
  },
  {
    itemId: 8,
    itemsTag: ["너무 많아요 🤝", "같이 주문해요 🏠"],
    itemsImg: process.env.PUBLIC_URL + "/assets/main/items_img.png",
    itemsHeadText: "집반찬 물물교환해요",
    itemsTownLocation: "동네이웃7 성산 제1동",
    itemsParticipants: "1/2",
    itemsDeadline: "2022/06/30 일까지",
    isHeartEmpty: false,
  },
  {
    itemId: 9,
    itemsTag: ["너무 많아요 🤝", "같이 주문해요 🏠"],
    itemsImg: process.env.PUBLIC_URL + "/assets/main/items_img.png",
    itemsHeadText: "집반찬 물물교환해요",
    itemsTownLocation: "동네이웃7 망원 제1동",
    itemsParticipants: "1/2",
    itemsDeadline: "2022/06/30 일까지",
    isHeartEmpty: false,
  },
  {
    itemId: 10,
    itemsTag: ["너무 많아요 🤝", "같이 주문해요 🏠"],
    itemsImg: process.env.PUBLIC_URL + "/assets/main/items_img.png",
    itemsHeadText: "집반찬 물물교환해요",
    itemsTownLocation: "동네이웃7 망원 제1동",
    itemsParticipants: "1/2",
    itemsDeadline: "2022/06/30 일까지",
    isHeartEmpty: false,
  },
  {
    itemId: 11,
    itemsTag: ["너무 많아요 🤝", "같이 주문해요 🏠"],
    itemsImg: process.env.PUBLIC_URL + "/assets/main/items_img.png",
    itemsHeadText: "집반찬 물물교환해요",
    itemsTownLocation: "동네이웃7 망원 제1동",
    itemsParticipants: "1/2",
    itemsDeadline: "2022/06/30 일까지",
    isHeartEmpty: false,
  },
];

const MainItems = ({
  itemId,
  itemsTag,
  itemsImg,
  itemsHeadText,
  itemsTownLocation,
  itemsParticipants,
  itemsDeadline,
  isHeartEmpty,
  onClickHeart,
}) => {
  const ref = useRef();
  const { events } = useDraggable(ref);
  return (
    <MainItemsContainer>
      <div className="items_header">
        <div className="items_tag_wrapper" ref={ref} {...events}>
          {itemsTag?.map((tag, idx) => (
            <div key={idx} className="items_tag">
              {tag}
            </div>
          ))}
        </div>
        <img
          className="items_detail"
          src={process.env.PUBLIC_URL + "/assets/main/detail_bar.png"}
          alt="items_detail_bar"
        />
      </div>
      <div className="items_content_wrapper">
        <div className="items_img_wrapper">
          <img src={itemsImg} alt="items_img" />
          <img
            onClick={onClickHeart}
            className="items_heart"
            src={
              isHeartEmpty
                ? process.env.PUBLIC_URL + "/assets/main/heart.png"
                : process.env.PUBLIC_URL + "/assets/main/empty_heart.svg"
            }
            alt={itemId}
          />
        </div>
        <div className="items_text_wrapper">
          <h1>{itemsHeadText}</h1>
          <p>{itemsTownLocation}</p>
          <div className="items_footer">
            <div className="items_participants">
              <img
                src={process.env.PUBLIC_URL + "/assets/main/participant.png"}
                alt="items_participants"
              />
              <span>{itemsParticipants}</span>
            </div>
            <div className="items_deadline">{itemsDeadline}</div>
          </div>
        </div>
      </div>
    </MainItemsContainer>
  );
};

const options = [
  { value: "성산 제1동", label: "성산 제1동" },
  { value: "성산 제2동", label: "성산 제2동" },
  { value: "성산 제3동", label: "성산 제3동" },
  { value: "망원 제1동", label: "망원 제1동" },
  { value: "망원 제2동", label: "망원 제2동" },
  { value: "합정 제1동", label: "합정 제1동" },
];

const MenuTest = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const [maindata, setMaindata] = useState();

  const onClickTag = useCallback(
    (e) => {
      const tag = e.target.textContent;

      if (tag === "모두") {
        setMaindata([
          ...mainItemsData.filter((data) =>
            data.itemsTownLocation.includes(selectedOption?.label)
          ),
        ]);
      } else {
        setMaindata([
          ...mainItemsData
            .filter((data) =>
              data.itemsTownLocation.includes(selectedOption?.label)
            )
            .filter((data) => data.itemsTag.join("").includes(tag)),
        ]);
      }
    },
    [selectedOption?.label]
  );

  const onSortByLocation = useCallback(() => {
    setMaindata([
      ...mainItemsData.filter((data) =>
        data.itemsTownLocation.includes(selectedOption?.label)
      ),
    ]);
  }, [selectedOption?.label]);

  useEffect(() => {
    onSortByLocation();
  }, [onSortByLocation]);

  const onChangeTown = useCallback(
    (e) => {
      setSelectedOption(e);
      onSortByLocation();
    },
    [setSelectedOption, onSortByLocation]
  );

  const onClickHeart = (e) => {
    const target = e.target.attributes.alt?.nodeValue * 1;

    setMaindata((maindata) =>
      maindata.map((data) =>
        data.itemId === target
          ? { ...data, isHeartEmpty: !data.isHeartEmpty }
          : data
      )
    );
  };

  // const ref = useRef();
  // const { events } = useDraggable(ref);

  const navigate = useNavigate();
  const onClickToCreatePage = () => {
    navigate("/create");
  };
  return (
    <MainContaier>
      <Header>
        <div className="header_button">
          <div className="square"></div>
          <div className="circle"></div>
          <div className="triangle-down"></div>
        </div>
      </Header>

      <FindTown>
        <div className="FindTown_selectBox_container">
          <Select
            classNamePrefix="react-select"
            className="FindTown_selectBox"
            defaultValue={options[0]}
            onChange={onChangeTown}
            options={options}
            isSearchable={false}
          />
        </div>
        <div className="FindTown_search_container">
          <img
            className="FindTown_search"
            src={process.env.PUBLIC_URL + "/assets/main/search_img.png"}
            alt="search"
          />
          <img
            className="FindTown_alarm"
            src={process.env.PUBLIC_URL + "/assets/main/alarm.png"}
            alt="alarm"
          />
        </div>
      </FindTown>

      <FindTag onClickTag={onClickTag} />

      <SortBar>
        <img
          src={process.env.PUBLIC_URL + "/assets/main/sort_bar.png"}
          alt="sortbar"
        />
        <span>정렬</span>
      </SortBar>

      {/* react-custom-scroll */}
      <Scrollbars style={{ marginTop: "10px", height: "500px" }} autoHide>
        {maindata?.map((data) => (
          <MainItems key={data.itemId} {...data} onClickHeart={onClickHeart} />
        ))}
      </Scrollbars>

      {/* react-draggable */}
      {/* <MainContent ref={ref} {...events}>
        {maindata?.map((data) => (
          <MainItems key={data.itemId} {...data} onClickHeart={onClickHeart} />
        ))}
      </MainContent> */}

      <MainButton onClick={onClickToCreatePage}>
        <img
          src={process.env.PUBLIC_URL + "assets/main/pencil.png"}
          alt="pencil"
        />
      </MainButton>

      <Footer>
        <div className="menu_container">
          <div className="menu_border first_border">
            <img
              className="menu_photo"
              src={process.env.PUBLIC_URL + "/assets/main/home.png"}
              alt="home"
            />
          </div>
          <div className="menu_text">홈</div>
        </div>
        <div className="menu_container">
          <div className="menu_border">
            <img
              className="menu_photo"
              src={process.env.PUBLIC_URL + "/assets/main/heart.png"}
              alt="heart"
            />
          </div>
          <div className="menu_text">관심</div>
        </div>
        <div className="menu_container">
          <div className="menu_border">
            <img
              className="menu_photo"
              src={process.env.PUBLIC_URL + "/assets/main/talk.png"}
              alt="talk"
            />
          </div>
          <div className="menu_text">채팅</div>
        </div>
        <div className="menu_container">
          <div className="menu_border">
            <img
              className="menu_photo"
              src={process.env.PUBLIC_URL + "/assets/main/person.png"}
              alt="person"
            />
          </div>
          <div className="menu_text">My</div>
        </div>
      </Footer>
    </MainContaier>
  );
};

export default MenuTest;
