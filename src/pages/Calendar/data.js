import adidasData from "../Brands/adidas/data.js";
import nikeData from "../Brands/nike/nike_data.js";
import beanpoleData from "../Brands/Beanpole/beanpole_data.js";
import eightsecData from "../Brands/Eightsec/eightsec_data.js";
import filaData from "../Brands/Fila/fila_data.js";
import hnmData from "../Brands/HnM/data.js";
import ikeaData from "../Brands/Ikea/data.js";
import kbpData from "../Brands/kbp/kbp_data.js";
import mujiData from "../Brands/Muji/muji_data.js";
import newbalData from "../Brands/newbal/newbalance_data.js";
import northData from "../Brands/north/northface_data.js";
import poloData from "../Brands/polo/polo_data.js";
import spaoData from "../Brands/spao/spao_data.js";
import tomboyData from "../Brands/tomboy/data.js";
import toptenData from "../Brands/topten/topten_data.js";
import uniqloData from "../Brands/uniqlo/uniqlo_data.js";
import xexymixData from "../Brands/xexymix/xexymix_data.js";
import yankeeData from "../Brands/Yankee/data.js";
import zaraData from "../Brands/zara/zara_data.js";
import data from "./calendar_data_20.js";

function getOverTwenty(list) {
  return list.filter((item) => item.percent >= 20);
}
const totalBrandSaleData = getOverTwenty([
  ...data,
  // ...adidasData,
  // ...nikeData,
  // ...beanpoleData,
  // ...eightsecData,
  // ...filaData,
  // ...hnmData,
  // ...ikeaData,
  // ...kbpData,
  ...mujiData,
  // ...newbalData,
  // ...northData,
  // ...poloData,
  // ...spaoData,
  // ...tomboyData,
  // ...toptenData,
  // ...uniqloData,
  // ...xexymixData,
  // ...yankeeData,
  ...zaraData,
]);

export default totalBrandSaleData;

// 1. 모든 브랜드의 data.js에 brand 추가하기
// 2. 여기에 모든 브랜드 데이터 임포팅하기
// 3. totalBrandSaleDataTemp에 합치기
//
