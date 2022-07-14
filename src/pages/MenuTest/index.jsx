import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { Scrollbars } from "react-custom-scrollbars-2";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import styled from "styled-components";

const Header = () => {
  return (
    <div
      className="header_container"
      style={{
        width: "100%",
        height: "24px",
        background: "rgba(33, 33, 33, 0.08)",
      }}
    >
      <div
        className="header_button"
        style={{
          position: "absolute",
          top: "7px",
          right: "8px",
          display: "flex",
          gap: "8px",
        }}
      >
        <div
          className="square"
          style={{
            width: "10px",
            height: "10px",
            background: "rgba(0, 0, 0, 0.38)",
          }}
        ></div>
        <div
          className="circle"
          style={{
            width: "10px",
            height: "10px",
            background: "rgba(0, 0, 0, 0.38)",
            borderRadius: "50%",
          }}
        ></div>
        <div
          className="triangle-down"
          style={{
            width: 0,
            height: 0,
            borderLeft: "calc(10px / 1.732) solid transparent",
            borderRight: "calc(10px / 1.732) solid transparent",
            borderTop: "10px solid rgba(0, 0, 0, 0.38)",
          }}
        ></div>
      </div>
    </div>
  );
};

const FindTown = () => {
  return (
    <div
      className="FindTown_container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "64px",

        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: "24px",

        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div
        className="FindTown_selectBox_container"
        style={{ display: "flex", alignItems: "center" }}
      >
        <span
          className="FindTown_selectBox"
          style={{ marginLeft: "16px", marginRight: "14px" }}
        >
          성산 제1동
        </span>
        <img
          className="FindTown_selectBox_pointer"
          src={process.env.PUBLIC_URL + "/assets/main/select_pointer.png"}
          alt="pointer"
          style={{ width: "12px", height: "7.41px", cursor: "pointer" }}
        />
      </div>
      <div className="FindTown_search_container">
        <img
          className="FindTown_search"
          src={process.env.PUBLIC_URL + "/assets/main/search_img.png"}
          alt="search"
          style={{ width: "17.49px", height: "17.49px" }}
        />
        <img
          className="FindTown_alarm"
          src={process.env.PUBLIC_URL + "/assets/main/alarm.png"}
          alt="alarm"
          style={{
            width: "16px",
            height: "19.5px",
            marginRight: "20px",
            marginLeft: "31.51px",
          }}
        />
      </div>
    </div>
  );
};

const tagData = [
  { text: "모두" },
  { text: "같이 사요" },
  { text: "너무 많아요" },
  { text: "같이 나눠요" },
  { text: "같이 주문해요" },
];

const FindTagContainer = styled.div`
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 60px;
  margin-top: 10px;
  display: flex;
  gap: 15px;
  background-color: #ececec;

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
const FindTag = () => {
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <FindTagContainer ref={ref} {...events}>
      {tagData.map((data, idx) => (
        <div
          id={idx}
          className="findtag"
          style={{
            padding: "5px 10px",
            border: "1px solid rgba(0,0,0,0.4)",
            borderRadius: "25px",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            flex: "none",
            cursor: "pointer",
          }}
        >
          {data.text}
        </div>
      ))}
    </FindTagContainer>
  );
};
const Footer = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "80px",

        display: "flex",
        gap: "8px",
      }}
    >
      <div
        className="menu_container"
        style={{
          marginTop: "8px",
          marginLeft: "14px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <div
          className="menu_border"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            width: "64px",
            height: "32px",
            borderRadius: "16px",
            background: "#D9D9D9",
          }}
        >
          <img
            className="menu_photo"
            src={process.env.PUBLIC_URL + "/assets/main/home.png"}
            alt="home"
          />
        </div>
        <div
          className="menu_text"
          style={{
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "18px",
          }}
        >
          홈
        </div>
      </div>
      <div
        className="menu_container"
        style={{
          marginTop: "8px",
          marginLeft: "14px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          cursor: "pointer",
        }}
      >
        <div
          className="menu_border"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            width: "64px",
            height: "32px",
            borderRadius: "16px",
            background: "#D9D9D9",
          }}
        >
          <img
            className="menu_photo"
            src={process.env.PUBLIC_URL + "/assets/main/heart.png"}
            alt="heart"
          />
        </div>
        <div
          className="menu_text"
          style={{
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "18px",
          }}
        >
          관심
        </div>
      </div>
      <div
        className="menu_container"
        style={{
          marginTop: "8px",
          marginLeft: "14px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <div
          className="menu_border"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            width: "64px",
            height: "32px",
            borderRadius: "16px",
            background: "#D9D9D9",
          }}
        >
          <img
            className="menu_photo"
            src={process.env.PUBLIC_URL + "/assets/main/talk.png"}
            alt="talk"
          />
        </div>
        <div
          className="menu_text"
          style={{
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "18px",
          }}
        >
          채팅
        </div>
      </div>
      <div
        className="menu_container"
        style={{
          marginTop: "8px",
          marginLeft: "14px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <div
          className="menu_border"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            width: "64px",
            height: "32px",
            borderRadius: "16px",
            background: "#D9D9D9",
          }}
        >
          <img
            className="menu_photo"
            src={process.env.PUBLIC_URL + "/assets/main/person.png"}
            alt="person"
          />
        </div>
        <div
          className="menu_text"
          style={{
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "18px",
          }}
        >
          My
        </div>
      </div>
    </div>
  );
};

const MenuTest = () => {
  return (
    <div
      className="menu_container"
      style={{
        width: "360px",
        height: "800px",
        background: "#ffffff",
        margin: "auto",
        marginTop: "70px",
        position: "relative",
        border: "1px solid #ececec",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Header />
      <FindTown />
      <FindTag />
      {/* <Scrollbars style={{ height: 100 }}>
        <p>Some great content...ddddddddddddddddddddddddddddddddddddd</p>
      </Scrollbars> */}
      <button
        style={{
          position: "absolute",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "#39A45C",
          bottom: "100px",
          right: "17px",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          cursor: "pointer",
          border: "none",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "assets/main/pencil.png"}
          alt="pencil"
          style={{ width: "18px", height: "18px" }}
        />
      </button>
      <Footer />
    </div>
  );
};

export default MenuTest;
