import {
  dryer,
  air,
  oven,
  range,
  washing,
  styler,
  conditioner,
  TV,
  cleaner,
  summer,
  backHome,
  happy,
  morning,
  tired,
} from "../../assets/index";

const RecData = [
  {
    name: "반복되는 아침",
    profileImg: morning,
    detail: "아침엔 준비만 해도 바쁘니까!",
    img: [TV, washing, cleaner],
    appliance: ["TV", "세탁기", "로봇청소기"],
    func: ["TV전원을 꺼줘요", "세탁기를 동작해요", "로봇청소기 전원을 꺼줘요"],
  },
  {
    name: "완벽한 귀가",
    profileImg: backHome,
    detail: "귀가 후 행복한 집콕을 위해!",
    img: [cleaner, conditioner, air, styler],
    appliance: ["로봇청소기", "에어컨", "공기청정기", "스타일러"],

    func: [
      "로봇청소기 전원을 켜줘요",
      "에어컨을 설정 온도로 켜줘요",
      "공기청정기를 동작해요",
      "스타일러 작동 준비를 해요",
    ],
  },
  {
    name: "여름엔 여기가 천국",
    profileImg: summer,
    detail: "무더운 여름, 김엘지님이 원하는건?",
    img: [TV, conditioner],
    appliance: ["TV", "에어컨"],
    func: ["TV전원을 켜줘요", "에어컨을 설정 온도로 켜줘요"],
  },
  {
    name: "방해되는 요소 차단",
    profileImg: tired,
    detail: "아무에게도 방해받기 싫으시죠?",
    img: [TV, washing, dryer],
    appliance: ["TV", "세탁기", "건조기"],
    func: [
      "TV전원을 꺼줘요",
      "세탁기 동작을 일시정지해요",
      "건조기 동작을 일시정지해요",
    ],
  },
];

export default RecData;
