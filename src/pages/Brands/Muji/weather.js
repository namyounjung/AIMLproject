import sun from "../../../assets/weather/sun.svg";
import rain from "../../../assets/weather/rain.svg";
import cloud from "../../../assets/weather/cloud.svg";


function Weather({percent}) {
    // percent = percent.slice(0,4);
    // var num = parseFloat(percent);
    if (percent < 10){
        return <dd><img src={rain} />{percent}%</dd> ;
    } else if (percent < 20){
        return <dd><img src={cloud} />{percent}%</dd>;
    } else if (percent > 20) {
      return <dd><img src={sun} />{percent}%</dd>;
    }
  }

export default Weather;