var areaName='';
const API_KEY = '602aaa7c76f913780e56bf255c798ef6';
const tempSection = document.querySelector('.temperature');
const placeSection = document.querySelector('.place');
const descSection = document.querySelector('.description');
const iconSection = document.querySelector('.icon');

function areaWeahterLocation(area){
  if(area=='area1'){
    return 'lat=35&lon=129';
  }
  else if(area=='area2'){
    return 'lat=35.8&lon=128.6';
  }
  else if(area=='area3'){
    return 'lat=37.56&lon=126.98';
  }
}

const getWeather = () => {
  const weatherLocation = areaWeahterLocation(areaName);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?${weatherLocation}&appid=${API_KEY}&units=metric&lang=kr`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
      const temperature = json.main.temp;
      const place = json.name;
      const description = json.weather[0].description;
      const icon = json.weather[0].icon;
      const iconURL = `./img/${icon}.png`;

      tempSection.innerText = temperature;
      placeSection.innerText = place;
      descSection.innerText = description;
      iconSection.setAttribute('src', iconURL);
      
      })
      .catch((error) => {
        alert(error);
      })
  }
window.addEventListener('load', areack);

function getArea2(){
  const areaNodeList = document.getElementsByName('area');
  areaNodeList.forEach((node) => {
    if(node.checked)  {
      areaName = node.value;
    }
  });
  getWeather();
}

function areack() {
  getArea2();
}

function query() {
  let ret = confirm("기상청 홈페이지로 이동하시겠습니까?");
  return ret; }   // confirm()의 리턴 값은 true 또는 false 
  function noAction(e) {   e.preventDefault(); } // 이벤트의 디폴트 행동 강제취소
