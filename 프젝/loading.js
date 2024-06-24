var areaName='area1';
var food_recommend = {};
var food_img = {};
var fooder = {};
food_recommend['area1'] = {
  page1:"상호명 : 거대곰탕\n장소 : 부산 해운대구 해운대해변로 163 현대베네시티아파트 상가동 103호\n평점 : 4.51\n가격 : 17000\n설명 :거대 곰탕은 해운대 거대갈비, 거대숯불구이에서 함께 운영하는 식당으로 1++ 등급 이상의 한우만을 사용하여 곰탕을 만들어 판매하고 있습니다.\n최고의 깊이 있는 한국곰탕을 만들고 싶었습니다.\n세계적으로 인정받을 수 있는 진하고 깔끔하면서도 맛있는 한국탕반을 만들기 위하여 공부하고 경험하였습니다.\n한우 1++ 등급중에서도 엄선한 차돌양지로 고운 고기국물과 최고의 소에서 나온 사골로 우려낸 육구를 혼합한 뒤 제 5의\n맛이라는 감칠맛을 한국식 천연재료들로 직접 만들어 여태껏 없었던 새로운 깊이 있는 탕반을 만들게 되었습니다.\n육수 한 수저 드시다 보시면 이것이 최고의 고기국물 음식을 만들려고 노력했던 고민과 정성 땀방울들이 느껴지시리라 의심치 않습니다. 세계에서 인정받는 한국 최고의 탕반을 만들기 위한 노력은 지금도 계속 진행중입니다.", 
  page2:"상호명 : 냉수탕가든\n장소 : 부산 부산진구 가야공원로 107 \n평점 : 4.46\n가격 : 43000\n설명 : 냉수탕 가든 이라는 상호를 걸고 영업한 지 5년, 가야공원에 대표식당으로 자리 매김 하면서, 잘 구워진 오리불고기 한 점을 싱싱한 상추 위에 얹어 한 입 가득 싸서 먹으면, 쫀득하면서도 혀끝에서 살살 녹는 불고기 맛, 감자 등 다양한 재료가 듬뿍 들어가 담백하고 구수한 맛이 일품인 오리불고기, 씹으면 씹을수록 달짝지근한 육즙이 진하게 우러나온 옻 닭 과히 일품이라고 얘기할 수 있습니다. 저희 냉수탕 가든의 특선 메뉴이기도 합니다. 언제나 손님에게 편안함을 제공하기 위해 1층에는 가족식사용 공간, 2층에는 단체 손님들이 마음 놓고 놀고먹을 수 있도록 넉넉한 공간을 준비하였습니다. 한적한 곳이라서 도심 속에 시골이라는 느낌을 맛보실 수 있습니다. 공원을 만들어 항상 가까이 다가갈 수 있는 거리라서 언제나 쉽게 찾아올 수 있는 곳입니다. 편하게 오셔서 시원한 계곡에 발 담그고, 오리 불고기에 깊은맛을 느끼시면서 자연에 향기를 듬뿍 담아 가시길 바랍니다.", 
  page3:"상호명 : 대성칼치찌개구이\n장소 : 부산 기장군 기장읍 대변2길 9 대성갈치찌개구이\n평점 : 4.4\n가격 : 38,000\n설명 :제주갈치 맛의정석~ 제주갈치를 부산에서 더욱더 제주스럽게 드세요~\n어느 제주갈치 전문점 보다 신선하게 두툼하게 깨끗하게 손질된 갈치를 맛보세요~ 자신있게 권해드립니다~\n한번도 안드신분은 있어도 한번만 드신분은 없다고 자부합니다~\n항상 노력하는 제주갈치전문점 못난이식당 해운대점이 되겠습니다.",
  page4:"상호명 : 자매국밥\n장소 : 부산 수영구 미란본동로27번길 56\n평점 : 4.49\n가격 : 9000\n설명 : 돼지머리 고기를 기본 베이스로 해서 국밥이나 수육을 만드는 곳. 고기는 누린내가 없으며, 담백하다. 돼지 사골을 푹 고아서 만든 육수는 칼칼하면서도 구수하다. 돼지국밥은 맛이 자극적이지 않으면서, 느끼하지도 않다.",
  page5:"상호명 : 참가자미\n장소 : 부산 해운대구 마린시티3로 46 110호 참가자미\n평점 : 4.47\n가격 : 100000\n설명 : 참가자미는 100% 자연산 입니다.\n자연의 허락없이는 드실 수 없는 생선 입니다.\n왜 회는 자연산을 드셔야 하는지 한번 드셔보시면 그 달큰함이 입안에 멤돌려.. 앞으로 회는 참가자미만 고집하시게 될겁니다.\n세꼬시(뼈채썰기) 와 포 가 반반정도의 비율로 섞이며 뼈가 억세지 않아 남녀노소 불문하고 다들 좋아하십니다.\n최선을 다하겠습니다. 감사합니다."
};
food_recommend['area2'] = {
  page1:"상호명 : 개미분식\n장소 : 대구 중구 동성로 70-10\n평점 : 4.35\n가격 : 4000\n설명 : 20년전 시장에서 팔던 분식의 맛, 대구에 놀러왔을때 꼭 들여야할 분식집!\n납작만두, 오징어찌짐, 잔치국수, 떡볶이등 모든 메뉴가 맛있는집\n식객허영만의백반기행 100회, 21.04.23.2021년 4월 23일 납작만두편 출현!\n교동시장에 오면 꼭 들려주세요!", 
  page2:"상호명 : 단골식당백종원3대천왕연탄돼지불고기\n장소 : 대구 북구 칠성시장로7길 9-1 1,2층\n평점 : 4.5\n가격 : 7000\n설명 : 2014, 2015~2023년 까지 한국의 블루리본 서베이에 10회 연속으로 선정된 대구 대표 맛집입니다.\n전국 돼지불고기 TOP3 맛집으로 선정된 대구 칠성시장 '단골식당'은 60년 전통의 역사를 가지고 3대를 이어 정확한 양념의 비율로 연탁석쇠에 직접 구워내는 불향가득, 추억가득 연탄돼지불고기, 연탄고추장불고기를 사계절 변함없이 만날 수 있습니다. 캠핑요리, 캠핑 밀키트로 구워서 나가기 때문에 바로 드실 수 있으며, 특히 수제 야채양념은 새콤달콤 인기 만점입니다. 대구여행시 필수로 들러야하는 단골식당! 칠성시장 야시장, 아침식사로도 드실 수 있습니다.", 
  page3:"상호명 : 리안\n장소 : 대구 수성구 교학로4길 48\n평점 : 4.48\n가격 : 8000\n설명 : 수성대학교 인근에 있는 중식당입니다. 인근의 학생들이 즐겨찾는 곳이지요. 살짝 달콤한 맛이 나는 매운 소스로 새우, 오징어 등의 해산물과 야채를 볶아서 면과 따로 내오는 야끼우동이 인기입니다.",
  page4:"상호명 : 막창도둑수성못점\n장소 : 막창도둑 수성못점\n평점 : 4.97\n가격 : 10000\n설명 : 대구발 막창브랜드 130호점 돌파! 전국구를 사로잡은 막창브랜드!\n대구 1등 막창 프렌차이즈 막창도둑!\n막창을 깨끗하게 세척한 후 생과일로 숙성시켜 잡내를 확 잡은 생막창은 어디서도 볼 수 없는 막창도둑의 자랑입니다.\n다시 찾고 싶은 가게가 될 수 있도록 맛있는 음식으로 다가가겠습니다.",
  page5:"상호명 : 왕거미식당\n장소 : 대구 중구 국채보상로 696-8\n평점 : 4.42\n가격 : 50000\n설명 : 동인동 좁은 골목 안에서 30년 이상 영업해온 생고기 전문점입니다. 국내산 육우와 한우만을 재료로 사용하는데요. 오드레기와 혓바닥도 이 집의 인기 메뉴입니다.생고기는 월요일부터 금요일 판매, 공휴일,토요일,일요일은 생고기 빼고 모든 메뉴 판매. 단, 밥은 일년 내내 없음."
};
food_recommend['area3'] = {
  page1:"상호명 : 배키욘방\n장소 : 서울 송파구 올림픽로32길 22-23 1층\n평점 : 4.64\n가격 : 19000\n설명 : 한우 소곱창이 들어간 덮밥과 닭목살, 마리네이드 숙성 연어, 스테키 덮밥등\n일본에서 먹던 맛을 그대로 재현한 정통 일본가정식 우동,덮밥 요리 전문점", 
  page2:"상호명 : 키친205\n장소 : 서울 송파구 올림픽로 300 롯데월드몰 지하1층\n평점 : 4.48\n가격 : 42000\n설명 : 키친205에서 사용하는 딸기는 4계절 내내 생딸기만을 사용하고 디저트와 음료에 일체 냉동딸기를 사용하지 않습니다. 냉동 시트가 아닌 갓 구운 케이크 시트, 인위적인 촉촉함이 싫어 시럽을 바르지 않습니다. 겨울엔 함평 딸기 농장에서 새벽에 작업한 신선한 딸기를 사용하며 여름엔 일주일에 3번, 왕복 3시간 거리 무주에 있는 고랭지 딸기 농장에서 직접 딸기를 운반해 사용합니다.\n항상 신선하고 사용할 수 있는 최고급 재료로 디저트를 만들겠습니다.", 
  page3:"상호명 : 소문난성수감자탕\n장소 : 서울 성동구 연무장길 45\n평점 : 4.4\n가격 : 27000\n설명 : 자극적이거나 맵지 않은 순한 스타일로 짜지 않고 담백 깔끔한 스탠다드 맛\n고기는 신선해서 잡내 없고 매콤달달한 특제소스에 찍어먹으면 별미입니다 !",
  page4:"상호명 : 런던 베이글 뮤지엄\n장소 : 서울 강남구 언주로168길 33 1, 2층\n평점 : 4.38\n가격 : 14800\n설명 : 다정한 스텝과 방금 나온 베이글.\n그리고 따뜻한 수프가 기다리는 가장 가까운 런던 속 베이글 뮤지엄,\n국내 어디에서도 맛볼 수 없었던 베이글의 식감과 무드를 선보입니다.",
  page5:"상호명 : 삼청동수제비\n장소 : 서울 종로구 삼청로 101-1\n평점 : 4.26\n가격 : 9000\n설명 : 삼청동수제비를 아껴주시고 사랑해주신 고객 여러분께 진심으로 감사드립니다.\n종로구 삼청동에 위치한 삼청동수제비는 엄선된 재료, 편안한 분위기, 푸짐한 인심이 있는 음식점입니다.\n재료 하나하나에 정성을 들여 만든 음식은 어머니가 만들어주신 맛을 그대로 좀 더 좋은 맛과 친절한 서비스를 위해 언제나 노력하고 있습니다."
};
food_img['area1'] = {
  page1:'img/거대곰탕.jpg',
  page2:'img/냉수탕가든.jpg',
  page3:'img/대성칼치찌개구이.jpg',
  page4:'img/자매국밥.jpg',
  page5:'img/참가자미.jpg'
};
food_img['area2'] = {
  page1:'img/개미분식.jpg',
  page2:'img/단골식당백종원3대천왕연탄돼지불고기.jpg',
  page3:'img/리안.jpg',
  page4:'img/막창도둑수성못점.jpg',
  page5:'img/왕거미식당.jpg'
};
food_img['area3'] = {
  page1:'img/배키욘방.jpg',
  page2:'img/키친205.jpg',
  page3:'img/소문난성수감자탕.jpg',
  page4:'img/런던베이글뮤지엄.jpg',
  page5:'img/삼청동수제비.jpg'
};
fooder['area1'] = {
  p1 :'한우곰탕',
  s1 :'17000',
  p2 :'오리불고기',
  s2 :'43000',
  p3 :'갈치구이',
  s3 :'38000',
  p4 :'자매국밥',
  s4 :'9000',
  p5 :'참가자미',
  s5 :'100000'
}
fooder['area2'] = {
  p1 :'납작만두',
  s1 :'4000',
  p2 :'돼지불고기',
  s2 :'7000',
  p3 :'짜장면',
  s3 :'8000',
  p4 :'막창',
  s4 :'10000',
  p5 :'뭉티기',
  s5 :'50000'
}
fooder['area3'] = {
  p1 :'부채살 스테키동',
  s1 :'19000',
  p2 :'딸기케이크',
  s2 :'42000',
  p3 :'감자탕',
  s3 :'27000',
  p4 :'더블 베이컨 감자 샌드위치',
  s4 :'14800',
  p5 :'수제비',
  s5 :'9000'
}
var teamimg = {};
teamimg['team-manager'] = 'img/이원석.jpg';
teamimg['team-member1'] = 'img/이상수.jpg';
teamimg['team-member2'] = 'img/우승명.jpg';
var teamMember = {};
teamMember['team-manager'] = {
  구분: "팀장",이름: "이원석", 학번:20204081, 맡은역할: "JAVASCRIPT 코드 담당"
};
teamMember['team-member1'] = {
  구분: "팀원1",이름: "이상수", 학번:20193041, 맡은역할: "HTML 코드 담당"
};
teamMember['team-member2'] = {
  구분: "팀원2",이름: "우승명", 학번:20193042, 맡은역할: "CSS 코드 담당"
};
function areaclick(area) {
    document.getElementById('food-info1').textContent = food_recommend[area].page1;
    document.getElementById('food-info2').textContent = food_recommend[area].page2;
    document.getElementById('food-info3').textContent = food_recommend[area].page3;
    document.getElementById('food-info4').textContent = food_recommend[area].page4;
    document.getElementById('food-info5').textContent = food_recommend[area].page5;
}
function areaclick2(area) {
  document.getElementById('food1').src = food_img[area].page1;
  document.getElementById('food2').src = food_img[area].page2;
  document.getElementById('food3').src = food_img[area].page3;
  document.getElementById('food4').src = food_img[area].page4;
  document.getElementById('food5').src = food_img[area].page5;
}
function areaclick3(area) {
  document.getElementById('f1').textContent = fooder[area].p1;
  document.getElementById('ss1').textContent = fooder[area].s1;
  document.getElementById('f2').textContent = fooder[area].p2;
  document.getElementById('ss2').textContent = fooder[area].s2;
  document.getElementById('f3').textContent = fooder[area].p3;
  document.getElementById('ss3').textContent = fooder[area].s3;
  document.getElementById('f4').textContent = fooder[area].p4;
  document.getElementById('ss4').textContent = fooder[area].s4;
  document.getElementById('f5').textContent = fooder[area].p5;
  document.getElementById('ss5').textContent = fooder[area].s5;
}
function teamMemberclick(team) {
    document.getElementById('team_one').src = teamimg[team];
    var row = document.getElementById('team-info-row');
    var row1 = document.getElementById('team-info-row1');
    var row2 = document.getElementById('team-info-row2');
    var row3 = document.getElementById('team-info-row3');
    row.querySelector('td[data-column="구분"]').textContent = teamMember[team].구분;
    row1.querySelector('td[data-column="이름"]').textContent = teamMember[team].이름;
    row2.querySelector('td[data-column="학번"]').textContent = teamMember[team].학번;
    row3.querySelector('td[data-column="맡은역할"]').textContent = teamMember[team].맡은역할;
}
    // 초기값 설정 함수
function setInitialValues() {
    // 초기값을 설정할 팀을 지정하고 함수 호출
    teamMemberclick('team-manager');
}
  
    // 페이지 로드 시 초기값 설정 함수 호출
window.onload = setInitialValues;
  
function popup_open() {
    document.getElementById("layer_popup1").style.display = "block";
}
    
function popup_close() {
    document.getElementById("layer_popup1").style.display = "none";
}

function food_open() {
  document.getElementById("layer_popup2").style.display = "block";
}
  
function food_close() {
  // 초기화
  document.getElementById('food11').value = 0;
  document.getElementById('food22').value = 0;
  document.getElementById('food33').value = 0;
  document.getElementById('food44').value = 0;
  document.getElementById('food55').value = 0;

  document.getElementById('food1Total').value = 0;
  document.getElementById('food2Total').value = 0;
  document.getElementById('food3Total').value = 0;
  document.getElementById('food4Total').value = 0;
  document.getElementById('food5Total').value = 0;

  document.getElementById('totalNumber').value = 0;
  document.getElementById('totalPrice').value = 0;
  document.getElementById("layer_popup2").style.display = "none";
}

function getArea(){
  const areaNodeList = document.getElementsByName('area');
  areaNodeList.forEach((node) => {
    if(node.checked)  {
      areaName = node.value;
    }
  })
}