
export const WINE_API_ENDPOINT  = 'https://api.sampleapis.com/wines/';
export const BEER_API_ENDPOINT  = 'https://api.sampleapis.com/beers/';


export const MEDA_QUERY_END_POINT = {
    MOBILE: '640px',
    TABLE: '1280px',
    DESKTOP: '1920px'
}

export const ROUTES = [
    {
        ID: 0,
        PATH: '/beers',
        LABEL: '맥주',
        SUBS: [
            {
                ID: 0,
                PATH: '/ale',
                LABEL: '에일',
                ORDER: 0,
            },
            {
                ID: 1,
                PATH: '/stouts',
                LABEL: '스타우트',
                ORDER: 1,
            }
        ]
    },
    {
        ID: 1,
        PATH: '/wines',
        LABEL: '와인',
        SUBS: [
            {
                ID: 0,
                PATH: '/port',
                LABEL: '포트',
                ORDER: 0,
            },
            {
                ID: 1,
                PATH: '/rose',
                LABEL: '로즈',
                ORDER: 1,
            },
            {
                ID: 3,
                PATH: '/reds',
                LABEL: '레드',
                ORDER: 3,
            },
            {
                ID: 4,
                PATH: '/whites',
                LABEL: '화이트',
                ORDER: 4,
            },
            {
                ID: 5,
                PATH: '/dessert',
                LABEL: '디저트',
                ORDER: 5,
            },
            {
                ID: 6,
                PATH: '/sparkling',
                LABEL: '스파클링',
                ORDER: 6,
            }
        ]
    }
]