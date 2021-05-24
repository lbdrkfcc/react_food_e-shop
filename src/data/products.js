let prod = [
    {
        id: 1,
        title: 'Borszcz',
        desc: 'Sup so swekloj <b>200 g.</b>',
        price: 60,
        cat: ['supy'],
        nav: 'supy',
        weight: '200',
        cal: '100',
        measure: 'g.'
    },
    {
        id: 2,
        title: 'Sup gribnoj',
        desc: 'Sup s gribami <b>210 g.</b>',
        price: 75,
        cat: ['supy'],
        nav: 'supy',
        weight: '210',
        cal: '110',
        measure: 'g.'
    },
    {
        id: 3,
        title: 'Kotleta rybnaja',
        desc: 'Kotleta s ryboj <b>100 g.</b>',
        price: 80,
        cat: ['gorjaczee'],
        nav: 'gorjaczee',
        weight: '100',
        cal: '80',
        measure: 'g.'
    },
    {
        id: 4,
        title: 'Olivje',
        desc: 'Salat s majonezom <b>125 g.</b>',
        price: 55,
        cat: ['salaty'],
        nav: 'salaty',
        weight: '125',
        cal: '87',
        measure: 'g.'
    },
    {
        id: 5,
        title: 'Kompot',
        desc: 'Kakojto kompot <b>200 ml.</b>',
        price: 10,
        cat: ['napitki'],
        nav: 'napitki',
        weight: '200',
        cal: '50',
        measure: 'ml.'
    },
    {
        id: 6,
        title: 'Pirog s kapustoj',
        desc: 'Pirog s kapustoj <b>50 g.</b>',
        price: 18,
        cat: ['konditerskie izdelija'],
        nav: 'konditerskie izdelija',
        weight: '50',
        cal: '120',
        measure: 'g.'
    },
]

let carousel = [{
        src: 'https://via.placeholder.com/800x400.png?text=1',
        alt: 'First slide',
        title: 'First slide label',
        text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },{
        src: 'https://via.placeholder.com/800x400.png?text=2',
        alt: 'Second slide',
        title: 'Second slide label',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },{
        src: 'https://via.placeholder.com/800x400.png?text=3',
        alt: 'Third slide',
        title: 'Third slide label',
        text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    },

]


export let products = JSON.stringify(prod)
export let carouselData = JSON.stringify(carousel)

 

 