import brandsCss from './brands.module.css';
import Weather from './weather.js';
import moment from 'moment';

function Saleweek({data}) {

  const today = moment().subtract(6, 'day').format('YYYY-MM-DD');
  let filterdate = data.filter(filterdate => filterdate.ds >= today);

  return(
    <div className={brandsCss.saleWrapper}>
      <dl>
        <dt>{filterdate[0].month}월 <br />{filterdate[0].week}번째 주</dt>
        {/* <Day month={filterdate[0].month} week={filterdate[0].week} /> */}
        <Weather percent={filterdate[0].percent} />
      </dl>
      <dl>
        <dt>{filterdate[1].month}월 <br />{filterdate[1].week}번째 주</dt>
        <Weather percent={filterdate[1].percent} />
      </dl>
      <dl>
        <dt>{filterdate[2].month}월 <br />{filterdate[2].week}번째 주</dt>
        <Weather percent={filterdate[3].percent} />
        {/* <dd>
        <Weather percent={filterdate[3].percent} />
        </dd> */}
      </dl>
      <dl>
        <dt>{filterdate[3].month}월 <br />{filterdate[3].week}번째 주</dt>
        <Weather percent={filterdate[3].percent} />
      </dl>
      <dl>
        <dt>{filterdate[4].month}월 <br />{filterdate[4].week}번째 주</dt>
        <Weather percent={filterdate[4].percent} />
      </dl>
  </div>
  )
};

export default Saleweek; 