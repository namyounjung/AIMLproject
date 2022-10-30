import adidasData from "../Brands/adidas/data.js";
import nikeData from "../Brands/nike/nike_data.js";

function getOverTwenty(list) {
  return list.filter((item) => item.percent > 20);
}
const totalBrandSaleData = getOverTwenty([...adidasData, ...nikeData]);

export default totalBrandSaleData;

// 1. 모든 브랜드의 data.js에 brand 추가하기
// 2. 여기에 모든 브랜드 데이터 임포팅하기
// 3. totalBrandSaleDataTemp에 합치기
//
