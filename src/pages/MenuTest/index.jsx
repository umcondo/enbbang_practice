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
  MainButton,
  MainContaier,
  MainContent,
  MainItemsContainer,
  SortBar,
} from "./style";

import Header from "../../components/Header";

import {
  mainItemsData,
  tagData,
  options,
} from "../../utils/dummyData/mainPageData.js";

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
      <Header />

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
