import { useState } from "react";
import { useRef } from "react";
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

const FindTag = () => {
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <FindTagContainer ref={ref} {...events}>
      {tagData.map((data, idx) => (
        <div id={idx} className="find_tag">
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
  },
  {
    itemId: 2,
    itemsTag: ["너무 많아요 🤝", "홈메이드 🏠"],
    itemsImg: process.env.PUBLIC_URL + "/assets/main/items_img.png",
    itemsHeadText: "집반찬 물물교환해요",
    itemsTownLocation: "동네이웃3 성산 제2동",
    itemsParticipants: "1/2",
    itemsDeadline: "2022/06/30 일까지",
  },
];

const MainItems = ({
  itemsTag,
  itemsImg,
  itemsHeadText,
  itemsTownLocation,
  itemsParticipants,
  itemsDeadline,
}) => {
  const [onHeart, setOnHeart] = useState(false);

  const onClickHeart = () => {
    setOnHeart(!onHeart);
  };
  return (
    <MainItemsContainer>
      <div className="items_header">
        <div className="items_tag_wrapper">
          {itemsTag.map((tag, idx) => (
            <div id={idx} className="items_tag">
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
              onHeart
                ? process.env.PUBLIC_URL + "/assets/main/heart.png"
                : process.env.PUBLIC_URL + "/assets/main/empty_heart.svg"
            }
            alt="heart"
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
          {/* <span className="FindTown_selectBox">성산 제1동</span>
          <img
            className="FindTown_selectBox_pointer"
            src={process.env.PUBLIC_URL + "/assets/main/select_pointer.png"}
            alt="pointer"
          /> */}
          <Select
            classNamePrefix="react-select"
            className="FindTown_selectBox"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
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

      <FindTag />

      <SortBar>
        <img
          src={process.env.PUBLIC_URL + "/assets/main/sort_bar.png"}
          alt="sortbar"
        />
        <span>정렬</span>
      </SortBar>

      <MainContent>
        {mainItemsData.map((data) => (
          <MainItems id={data.itemId} {...data} />
        ))}
      </MainContent>

      <MainButton>
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
