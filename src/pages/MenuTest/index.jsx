import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

import {
  FindTagContainer,
  FindTown,
  Footer,
  Header,
  MainButton,
  MainContaier,
  MainContent,
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

const MenuTest = () => {
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
          <span className="FindTown_selectBox">성산 제1동</span>
          <img
            className="FindTown_selectBox_pointer"
            src={process.env.PUBLIC_URL + "/assets/main/select_pointer.png"}
            alt="pointer"
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

      <MainContent>MainContent</MainContent>

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
