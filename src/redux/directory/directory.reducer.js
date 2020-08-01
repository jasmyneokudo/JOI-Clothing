const INITIAL_STATE = {
    sections:[{
        title:'hats',
        imageUrl: '/images/hat3.jpg',
        id:1,
        linkUrl: 'shop/hats'
    },
    {
        title:'jackets',
        imageUrl: '/images/jacket3.jpg',
        id:2,
        linkUrl: 'shop/jackets'
    },
    {
        title:'sneakers',
        imageUrl: '/images/sneakers2.jpg',
        id:3,
        linkUrl: 'shop/sneakers'
    },
    {
        title:'womens',
        imageUrl: '/images/womens4.jpg',
        size:'large',
        id:4,
        linkUrl: 'shop/womens'
    },
    {
        title:'mens',
        imageUrl: '/images/mens1.jpg',
        size:'large',
        id:5,
        linkUrl: 'shop/mens'
    }]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default directoryReducer;