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
} from "../../assets/index";

const ProductData = [
  {
    name: "TV",
    krName: "TV",
    img: TV,
    func: ["전원", "브리핑", "채널 설정", "볼륨 설정"],
    funcKey: ["power", "briefing", "set_ch", "set_vol"],
  },
  {
    name: "range",
    krName: "전기레인지",
    img: range,
    func: ["전원", "화구", "화력 설정", "타이머 설정"],
    funcKey: ["power", "burner", "fire_power", "set_time"],
  },
  {
    name: "oven",
    krName: "광파오븐",
    img: oven,
    func: ["전원", "작동 시간", "온도 설정"],
    funcKey: ["power", "set_time", "set_temp"],
  },
  {
    name: "washing",
    krName: "세탁기",
    img: washing,
    func: ["세탁 모드", "헹굼 횟수", "탈수 강도", "물 온도"],
    funcKey: ["set_mod", "rinsing", "spining", "set_temp"],
  },
  {
    name: "dryer",
    krName: "건조기",
    img: dryer,
    func: ["건조 모드", "절약 건조", "구김방지여부"],
    funcKey: ["set_mod", "eco_dry", "anti_wrinkle"],
  },
  {
    name: "cleaner",
    krName: "로봇청소기",
    img: cleaner,
    func: ["전원", "작동 시간"],
    funcKey: ["power", "set_time"],
  },
  {
    name: "conditioner",
    krName: "에어컨",
    img: conditioner,
    func: ["전원", "희망 온도", "바람 세기"],
    funcKey: ["power", "set_temp", "wind_power"],
  },
  {
    name: "air",
    krName: "공기청정기",
    img: air,
    func: ["전원", "바람 세기"],
    funcKey: ["power", "wind_power"],
  },
  {
    name: "styler",
    krName: "스타일러",
    img: styler,
    func: ["보관 여부", "시간 예약"],
    funcKey: ["preserve", "reserve_time"],
  },
];

export default ProductData;
