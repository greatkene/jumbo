const categories = [
    {
        id: "1",
        name: "Fast Food",
        icon: require("../assets/icons/burger.png")
    },
    {
        id: "2",
        name: "Fruit Item",
        icon: require("../assets/icons/cherry.png")
    },
    {
        id: "3",
        name: "Rice Item",
        icon: require("../assets/icons/rice.png")
    }
]

const freeDelivery = [
    {
        id: 0,
        restaurantName: "Shop Veggies",
        deliveryTime: "20-30mins",
        deliveryPrice: "Free",
        discount: '-20%', 
        averageReview: '4.5',
        image: require("../assets/freeDelivery/shopveggies.jpg"),
        foodType: 'fruits',
        productData: [
            {
                name: 'Orange',
                price: '₦100',
                image: require("../assets/freeDelivery/shopveggies.jpg")
            },
            {
                name: 'Strawberries',
                price: '₦1000',
                image: require("../assets/freeDelivery/shopveggies.jpg")
            },
            {
                name: 'Banana Bunch',
                price: '₦800',
                image: require("../assets/freeDelivery/shopveggies.jpg")
            },
            {
                name: 'Apple',
                price: '₦200',
                image: require("../assets/freeDelivery/shopveggies.jpg")
            },
            {
                name: 'Cherry',
                price: '₦200',
                image: require("../assets/freeDelivery/shopveggies.jpg")
            },
            {
                name: 'Date',
                price: '₦800',
                image: require("../assets/freeDelivery/shopveggies.jpg")
            },
        ]
    },
    {
        id: 1,
        restaurantName: "Burger Points",
        deliveryTime: "30-40mins",
        deliveryPrice: "Free",
        discount: '-15%', 
        averageReview: '4.5',
        image: require("../assets/freeDelivery/burgerpoints.jpg"),
        foodType: 'fast food',
        productData: [
            {
                name: 'Burger',
                price: '₦2500',
                image: require("../assets/freeDelivery/burgerpoints.jpg")
            },
            {
                name: 'Chicken Wings',
                price: '₦1800',
                image: require("../assets/freeDelivery/burgerpoints.jpg")
            },
            {
                name: 'Potato Fries',
                price: '₦1000',
                image: require("../assets/freeDelivery/burgerpoints.jpg")
            },
        ]
    },
    {
        id: 2,
        restaurantName: "Pasta Plug",
        deliveryTime: "35-45mins",
        deliveryPrice: "Free",
        discount: '-5%', 
        averageReview: '4.9',
        image: require("../assets/freeDelivery/pastaplug.jpg"),
        foodType: 'fast food',
        productData: [
            {
                name: 'Jollof Spaghetti',
                price: '₦1500',
                image: require("../assets/freeDelivery/pastaplug.jpg")
            },
            {
                name: 'Macaroni',
                price: '₦1200',
                image: require("../assets/freeDelivery/pastaplug.jpg")
            },
            {
                name: 'Stir Fried Spaghetti',
                price: '₦1700',
                image: require("../assets/freeDelivery/pastaplug.jpg")
            },
        ]
    },
    {
        id: 3,
        restaurantName: "Hillyspizza",
        deliveryTime: "80-95mins",
        deliveryPrice: "Free",
        discount: '12%', 
        averageReview: '4.9',
        image: require("../assets/freeDelivery/hillyspizza.jpg"),
        foodType: 'fast food',
        productData: [
            {
                name: 'Pepronni Pizza',
                price: '₦3500',
                image: require("../assets/freeDelivery/hillyspizza.jpg")
            },
            {
                name: 'Macaroni Pizza',
                price: '₦3200',
                image: require("../assets/freeDelivery/hillyspizza.jpg")
            },
            {
                name: 'Plantain Dry Pizza',
                price: '₦4700',
                image: require("../assets/freeDelivery/hillyspizza.jpg")
            },
        ]
    },
    {
        id: 4,
        restaurantName: "Suya College",
        deliveryTime: "20-35mins",
        deliveryPrice: "Free",
        discount: '3%', 
        averageReview: '4.2',
        image: require("../assets/freeDelivery/suya.jpg"),
        foodType: 'fast food',
        productData: [
            {
                name: 'Chicken Suya',
                price: '₦1500',
                image: require("../assets/freeDelivery/suya.jpg")
            },
            {
                name: 'Dry Suya',
                price: '₦1200',
                image: require("../assets/freeDelivery/suya.jpg")
            },
            {
                name: 'Beef Suya',
                price: '₦1700',
                image: require("../assets/freeDelivery/suya.jpg")
            },
        ]
    },
    {
        id: 5,
        restaurantName: "Wrap HQ",
        deliveryTime: "20-35mins",
        deliveryPrice: "Free",
        discount: '-10%', 
        averageReview: '5.0',
        image: require("../assets/freeDelivery/wrapstar.jpg"),
        foodType: 'fast food',
        productData: [
            {
                name: 'Beef Wrap',
                price: '₦2000',
                image: require("../assets/freeDelivery/wrapstar.jpg")
            },
            {
                name: 'Chicken Wrap',
                price: '₦2200',
                image: require("../assets/freeDelivery/wrapstar.jpg")
            },
            {
                name: 'Beef and Chicken Wrap',
                price: '₦3000',
                image: require("../assets/freeDelivery/wrapstar.jpg")
            },
        ]
    },
    {
        id: 6,
        restaurantName: "Fruits Always",
        deliveryTime: "10-15mins",
        deliveryPrice: "Free",
        discount: '0%', 
        averageReview: '4.3',
        image: require("../assets/freeDelivery/fruitsalad.jpg"),
        foodType: 'fast food',
        productData: [
            {
                name: 'Small Pack',
                price: '₦1000',
                image: require("../assets/freeDelivery/fruitsalad.jpg")
            },
            {
                name: 'Medium Pack',
                price: '₦1500',
                image: require("../assets/freeDelivery/fruitsalad.jpg")
            },
            {
                name: 'Full Pack',
                price: '₦2000',
                image: require("../assets/freeDelivery/fruitsalad.jpg")
            },
        ]
    }
]

const filterData = [
    {
        name:"Fast food",
        image: require('../assets/filters/fastfood.png'), 
        id:"0"
    },
    {
        name:"Burgers",
        image:require("../assets/filters/burger.png"),
        id:"1"
    },
    {
        name:"Salads",
        image:require("../assets/filters/salads.png"),
        id:"2"
    },
    {
        name:"Hotdog",
        image:require("../assets/filters/hotdog.png"),
        id:"3"
    },
    {
        name:"Chinese",
        image:require("../assets/filters/chinese.png"),
        id:"4"
    },
    {
        name:"Mexican",
        image:require("../assets/filters/mexican.png"),
        id:"5"
    },
    {
        name:"Sea food",
        image:require("../assets/filters/seafood.png"),
        id:"6"
    },
]

const filterData2 = [
    {
        name:"Fast food",
        image:'https://bukasapics.s3.us-east-2.amazonaws.com/chicken.png' , 
        id:"0"
    },
    {
        name:"Burgers",
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/macdo.png',
        id:"1"
    },
    {
        name:"Salads",
        image:"https://bukasapics.s3.us-east-2.amazonaws.com/nandos.png",
        id:"2"
    },
    {
        name:"Hotdog",
        image: "https://bukasapics.s3.us-east-2.amazonaws.com/pizza.png",
        id:"3"
    },
    {
        name:"Chinese",
        image:"https://bukasapics.s3.us-east-2.amazonaws.com/pizza6.png",
        id:"4"
    },
    {
        name:"Mexican",
        image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png",
        id:"5"
    },  
    {
        name:"Sea food",
        image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate2.png",
        id:"6"
    },
    {
        name:"Chinese Food",
        image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png",
        id:"7"
    },
    {
        name:"Mexican pie",
        image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png",
        id:"8"
    },  
    {
        name:"Ocean dish",
        image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png",
        id:"9"
    },
];

export default {
    categories,
    freeDelivery,
    filterData,
    filterData2
}