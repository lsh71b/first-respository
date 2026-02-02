// src/data.js

export const GROUP_KEYS = ["A","B","C","D","E","F","G","H","I","J","K","L"];

// 국기(emoji) 매핑: UI에서 🇰🇷 대한민국 처럼 표시용
// - 일부 지역/연합(잉글랜드/스코틀랜드/웨일스/북아일랜드)은 표준 유니코드 국기 이모지가 없어
//   플랫폼마다 다르게 보일 수 있어(대부분은 🏴 또는 🇬🇧로 대체).
export const FLAGS = {
  "멕시코": "🇲🇽",
  "남아공": "🇿🇦",
  "대한민국": "🇰🇷",

  "캐나다": "🇨🇦",
  "카타르": "🇶🇦",
  "스위스": "🇨🇭",

  "브라질": "🇧🇷",
  "모로코": "🇲🇦",
  "아이티": "🇭🇹",
  "스코틀랜드": "🏴",

  "미국": "🇺🇸",
  "파라과이": "🇵🇾",
  "호주": "🇦🇺",

  "독일": "🇩🇪",
  "퀴라소": "🇨🇼",
  "코트디부아르": "🇨🇮",
  "에콰도르": "🇪🇨",

  "네덜란드": "🇳🇱",
  "일본": "🇯🇵",
  "튀니지": "🇹🇳",

  "벨기에": "🇧🇪",
  "이집트": "🇪🇬",
  "이란": "🇮🇷",
  "뉴질랜드": "🇳🇿",

  "스페인": "🇪🇸",
  "카보베르데": "🇨🇻",
  "사우디아라비아": "🇸🇦",
  "우루과이": "🇺🇾",

  "프랑스": "🇫🇷",
  "세네갈": "🇸🇳",
  "노르웨이": "🇳🇴",

  "아르헨티나": "🇦🇷",
  "알제리": "🇩🇿",
  "오스트리아": "🇦🇹",
  "요르단": "🇯🇴",

  "포르투갈": "🇵🇹",
  "우즈베키스탄": "🇺🇿",
  "콜롬비아": "🇨🇴",

  "잉글랜드": "🏴",
  "크로아티아": "🇭🇷",
  "가나": "🇬🇭",
  "파나마": "🇵🇦",

  // 플레이오프 후보
  "보스니아헤르체고비나": "🇧🇦",
  "이탈리아": "🇮🇹",
  "북아일랜드": "🇬🇧",
  "웨일스": "🏴",

  "알바니아": "🇦🇱",
  "폴란드": "🇵🇱",
  "스웨덴": "🇸🇪",
  "우크라이나": "🇺🇦",

  "코소보": "🇽🇰",
  "루마니아": "🇷🇴",
  "슬로바키아": "🇸🇰",
  "튀르키예": "🇹🇷",

  "체코": "🇨🇿",
  "덴마크": "🇩🇰",
  "북마케도니아": "🇲🇰",
  "아일랜드": "🇮🇪",

  "DR콩고": "🇨🇩",
  "자메이카": "🇯🇲",
  "뉴칼레도니아": "🇳🇨",

  "볼리비아": "🇧🇴",
  "이라크": "🇮🇶",
  "수리남": "🇸🇷",
};

// 국기 이미지용 ISO 코드 매핑 (flagcdn.com)
export const FLAG_ISO = {
  "멕시코": "mx",
  "남아공": "za",
  "대한민국": "kr",
  "캐나다": "ca",
  "카타르": "qa",
  "스위스": "ch",
  "브라질": "br",
  "모로코": "ma",
  "아이티": "ht",
  "스코틀랜드": "gb-sct",
  "미국": "us",
  "파라과이": "py",
  "호주": "au",
  "독일": "de",
  "퀴라소": "cw",
  "코트디부아르": "ci",
  "에콰도르": "ec",
  "네덜란드": "nl",
  "일본": "jp",
  "튀니지": "tn",
  "벨기에": "be",
  "이집트": "eg",
  "이란": "ir",
  "뉴질랜드": "nz",
  "스페인": "es",
  "카보베르데": "cv",
  "사우디아라비아": "sa",
  "우루과이": "uy",
  "프랑스": "fr",
  "세네갈": "sn",
  "노르웨이": "no",
  "아르헨티나": "ar",
  "알제리": "dz",
  "오스트리아": "at",
  "요르단": "jo",
  "포르투갈": "pt",
  "우즈베키스탄": "uz",
  "콜롬비아": "co",
  "잉글랜드": "gb-eng",
  "크로아티아": "hr",
  "가나": "gh",
  "파나마": "pa",
  "보스니아헤르체고비나": "ba",
  "이탈리아": "it",
  "북아일랜드": "gb-nir",
  "웨일스": "gb-wls",
  "알바니아": "al",
  "폴란드": "pl",
  "스웨덴": "se",
  "우크라이나": "ua",
  "코소보": "xk",
  "루마니아": "ro",
  "슬로바키아": "sk",
  "튀르키예": "tr",
  "체코": "cz",
  "덴마크": "dk",
  "북마케도니아": "mk",
  "아일랜드": "ie",
  "DR콩고": "cd",
  "자메이카": "jm",
  "뉴칼레도니아": "nc",
  "볼리비아": "bo",
  "이라크": "iq",
  "수리남": "sr",
};


/**
 * 공식 기사 기준으로 “미확정 슬롯”은 총 6개:
 * - UEFA Play-Off A/B/C/D winner (각 4팀 후보)
 * - FIFA Play-Off Tournament winner 1/2 (각 3팀 후보)
 * (후보 팀 목록은 UEFA 기사에 명시되어 있음)
 */
export const PLAYOFF_SLOTS = {
  // Group B = UEFA Play-Off A winner
  UEFA_A: {
    slotName: "UEFA Play-Off A 승자",
    candidates: ["보스니아헤르체고비나", "이탈리아", "북아일랜드", "웨일스"],
  },

  // Group F = UEFA Play-Off B winner
  UEFA_B: {
    slotName: "UEFA Play-Off B 승자",
    candidates: ["알바니아", "폴란드", "스웨덴", "우크라이나"],
  },

  // Group D = UEFA Play-Off C winner
  UEFA_C: {
    slotName: "UEFA Play-Off C 승자",
    candidates: ["코소보", "루마니아", "슬로바키아", "튀르키예"],
  },

  // Group A = UEFA Play-Off D winner
  UEFA_D: {
    slotName: "UEFA Play-Off D 승자",
    candidates: ["체코", "덴마크", "북마케도니아", "아일랜드"],
  },

  // Group K = FIFA Play-Off Tournament winner 1
  IC_1: {
    slotName: "대륙간 플레이오프 승자 1",
    candidates: ["DR콩고", "자메이카", "뉴칼레도니아"],
  },

  // Group I = FIFA Play-Off Tournament winner 2
  IC_2: {
    slotName: "대륙간 플레이오프 승자 2",
    candidates: ["볼리비아", "이라크", "수리남"],
  },
};

// 조 구성(고정 3~4팀 + 미확정 슬롯 1)
export const BASE_GROUPS = {
  // Group A: Mexico, South Africa, Korea Republic, European Play-Off D winner
  A: { fixed: ["멕시코", "남아공", "대한민국"], playoffKey: "UEFA_D" },

  // Group B: Canada, European Play-Off A winner, Qatar, Switzerland
  B: { fixed: ["캐나다", "카타르", "스위스"], playoffKey: "UEFA_A" },

  // Group C
  C: { fixed: ["브라질", "모로코", "아이티", "스코틀랜드"], playoffKey: null },

  // Group D: US, Paraguay, Australia, European Play-Off C winner
  D: { fixed: ["미국", "파라과이", "호주"], playoffKey: "UEFA_C" },

  // Group E
  E: { fixed: ["독일", "퀴라소", "코트디부아르", "에콰도르"], playoffKey: null },

  // Group F: Netherlands, Japan, European Play-Off B winner, Tunisia
  F: { fixed: ["네덜란드", "일본", "튀니지"], playoffKey: "UEFA_B" },

  // Group G
  G: { fixed: ["벨기에", "이집트", "이란", "뉴질랜드"], playoffKey: null },

  // Group H
  H: { fixed: ["스페인", "카보베르데", "사우디아라비아", "우루과이"], playoffKey: null },

  // Group I: France, Senegal, FIFA Play-Off Tournament winner 2, Norway
  I: { fixed: ["프랑스", "세네갈", "노르웨이"], playoffKey: "IC_2" },

  // Group J
  J: { fixed: ["아르헨티나", "알제리", "오스트리아", "요르단"], playoffKey: null },

  // Group K: Portugal, FIFA Play-Off Tournament winner 1, Uzbekistan, Colombia
  K: { fixed: ["포르투갈", "우즈베키스탄", "콜롬비아"], playoffKey: "IC_1" },

  // Group L
  L: { fixed: ["잉글랜드", "크로아티아", "가나", "파나마"], playoffKey: null },
};
