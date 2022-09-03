import React from 'react';
export default function BrandList() {
    const users = [
      {
        id: 1,
        brandname: 'muji',
        saleperiod: '',
        relatedBrands: ['topten', 'h&m', 'zara', 'spao'],
        category: 'spa',
        tag: ['SPA', 'Basic', 'Simple']
      },
      {
        id: 2,
        brandname: 'spao',
        saleperiod: '',
        relatedBrands: ['topten', 'zara', 'h&m', 'muji'],
        category: 'spa',
        tag: ['SPA', 'Basic', 'Simple']
      },
      {
        id: 3,
        brandname: 'topten',
        saleperiod: '',
        relatedBrands: ['h&m', 'zara', 'spao', 'muji'],
        category: 'spa',
        tag: ['SPA', 'Basic', 'Simple']
      },
      {
        id: 4,
        brandname: 'adidas',
        saleperiod: '',
        relatedBrands: ['nike', 'nb', 'xexymix'],
        category: 'sports',
        tag: ['Sports', 'Casual', 'Outdoor']
      },
      {
        id: 5,
        brandname: 'nike',
        saleperiod: '',
        relatedBrands: ['adidas', 'nb', 'xexymix'],
        category: 'sports',
        tag: ['Sports', 'Casual', 'Outdoor']
      },
      {
        id: 6,
        brandname: 'beanpole',
        saleperiod: '',
        relatedBrands: ['polo', 'tomboy'],
        category: 'basic',
        tag: ['Normal', 'Classic', 'Modern']
      },
      {
        id: 7,
        brandname: 'polo',
        saleperiod: '',
        relatedBrands: ['beanpole', 'tomboy'],
        category: 'basic',
        tag: ['Normal', 'Classic', 'Modern']
      },
      {
        id: 8,
        brandname: 'tomboy',
        saleperiod: '',
        relatedBrands: ['polo', 'beanpole'],
        category: 'basic',
        tag: ['Normal', 'Classic', 'Modern']
      },
      {
        id: 9,
        brandname: 'kbp',
        saleperiod: '',
        relatedBrands: ['yankee', 'ikea'],
        category: 'etc',
        tag: ['Unique', 'Sensitive', 'Fabric']
      },
      {
        id: 10,
        brandname: 'nb',
        saleperiod: '',
        relatedBrands: ['adidas', 'nike', 'xexymix'],
        category: 'sports',
        tag: ['Sports', 'Casual', 'Outdoor']
      },
      {
        id: 11,
        brandname: 'h&m',
        saleperiod: '',
        relatedBrands: ['topten', 'zara', 'spao', 'muji'],
        category: 'spa',
        tag: ['SPA', 'Basic', 'Simple']
      },      
      {
        id: 12,
        brandname: 'xexymix',
        saleperiod: '',
        relatedBrands: ['adidas', 'nb', 'nike'],
        category: 'sports',
        tag: ['Sports', 'Casual', 'Outdoor']
      },
      {
        id: 13,
        brandname: 'yankee',
        saleperiod: '',
        relatedBrands: ['yankee', 'kbp'],
        category: 'etc',
        tag: ['Unique', 'Sensible ', 'Fragrant']
      },
      {
        id: 14,
        brandname: 'ikea',
        saleperiod: '',
        relatedBrands: ['kbp', 'ikea'],
        category: 'etc',
        tag: ['Reasonable', 'Modern', 'Indoor']
      },
      {
        id: 15,
        brandname: 'zara',
        saleperiod: '',
        relatedBrands: ['topten', 'h&m', 'spao', 'muji'],
        category: 'spa',
        tag: ['SPA', 'Basic', 'Simple']
      },
    ];
    // return (
    //     <div>
    //       <div>
    //         <b>{users[10].brandname}</b>
    //       </div>
    //     </div>
    //   );
}