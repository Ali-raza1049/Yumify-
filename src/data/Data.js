import { Utensils, Award, ShoppingBag, Clock } from "lucide-react";
import avater1 from "../assets/images/avater1.jpg";
import avater2 from "../assets/images/avater2.jpg";
import avater3 from "../assets/images/avater3.jpg";
import Crown from "../assets/images/crown-crust.jpg"
import Fajita from "../assets/images/Fajita.jpg"
import ChickenDeluxe from "../assets/images/Chickendeluxe.jpg"
import BeefBurger from "../assets/images/BeefBurger.jpeg"
import PizzaHub from "../assets/images/pizza-hub.jpg"
import PizzaBanner from "../assets/images/pizzabanner.jpg"
import CheeseBurger from "../assets/images/BeefCheeseburger.jpeg"



export const cardsData = [
  {
    icon: Award,
    title: "Master Chefs",
    text: "Our chefs are world-class professionals with years of culinary experience.",
    iconcolor: "text-yellow-500",
  },
  {
    icon: Utensils,
    title: "Quality Food",
    text: "We use only the freshest ingredients to create mouth-watering dishes.",
    iconcolor: "text-red-500",
  },
  {
    icon: ShoppingBag,
    title: "Online Order",
    text: "Easily order your favorite meals online and get them delivered fast.",
    iconcolor: "text-red-500",
  },
  {
    icon: Clock,
    title: "24/7 Service",
    text: "Our team is always ready to serve you at any time of the day.",
    iconcolor: "text-blue-500",
  },
];

export const menuData = {
  Pizza: [
    {
      name: "Cheese Pizza",
      price: 12,
      img: "img/menu-1.jpg",
      desc: "Classic cheesy goodness with fresh herbs.",
    },
    {
      name: "Pepperoni Pizza",
      price: 15,
      img: "img/menu-2.jpg",
      desc: "Loaded with spicy pepperoni slices.",
    },
  ],
  Burger: [
    {
      name: "Beef Burger",
      price: 10,
      img: "img/menu-4.jpg",
      desc: "Juicy grilled beef patty with fresh veggies.",
    },
    {
      name: "Chicken Burger",
      price: 9,
      img: "img/menu-4.jpg",
      desc: "Crispy fried chicken with mayo sauce.",
    },
  ],
  Fries: [
    {
      name: "Classic Fries",
      price: 5,
      img: "img/menu-5.jpg",
      desc: "Crispy golden french fries.",
    },
    {
      name: "Peri Peri Fries",
      price: 6,
      img: "img/menu-6.jpg",
      desc: "Spicy fries tossed in peri peri seasoning.",
    },
  ],
};

export const testimonials = [
  {
    img: avater1,
    name: "Emily Johnson",
    role: "Food Blogger",
    text: "Yumify’s food is absolutely delightful! Fresh, tasty, and presented beautifully. Highly recommend to food lovers!",
  },
  {
    img: avater2,
    name: "Mark Thompson",
    role: "Chef Enthusiast",
    text: "From the first bite, I could tell the quality and passion behind every dish. Truly an amazing dining experience!",
  },
  {
    img: avater3,
    name: "Sophia Lee",
    role: "Food Critic",
    text: "Yumify combines flavor, freshness, and ambiance perfectly. The team is professional and the dishes are top-notch!",
  },
];

export const ordersData = [
  {
    id: "ORD-1847",
    customer: "Sarah",
    email: "sarah.j@email.com",
    items: 2,
    total: 28.5,
    status: "Delivered",
    date: "2024-11-25",
    time: "14:30",
  },
  {
    id: "ORD-1848",
    customer: "Hamid Ali",
    email: "Hamid.j@email.com",
    items: 3,
    total: 34.5,
    status: "Preparing",
    date: "2024-11-25",
    time: "15:30",
  },
  {
    id: "ORD-1849",
    customer: "Zain Gujjar",
    email: "zain.j@email.com",
    items: 4,
    total: 48.5,
    status: "Cancelled",
    date: "2024-11-25",
    time: "16:30",
  },
  {
    id: "ORD-1850",
    customer: "Zahid Jutt",
    email: "zahid.j@email.com",
    items: 4,
    total: 48.5,
    status: "In Transit",
    date: "2024-11-25",
    time: "15:30",
  },
];


export const categories = [
  "All Categories",
  "Pizza",
  "Burger",
  "Fries",
];

export const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    status: "Active",
    img: "",
  },
  {
    id: 2,
    name: "Cheeseburger Deluxe",
    category: "Burger",
    status: "Active",
    img: "",
  },
  {
    id: 3,
    name: "Pepperoni Pizza",
    category: "Pizza",
    status: "Active",
    img: "",
  },
  {
    id: 4,
    name: "Zinger Burger",
    category: "Burger",
    status: "Active",
    img: "",
  },
  {
    id: 5,
    name: "Simple Fries",
    category: "Fries",
    status: "Active",
    img: "",
  },
  {
    id: 6,
    name: "Loaded Fries",
    category: "Fries",
    status: "Active",
    img: "",
  },
];



export const salesData = [
    { day: "Mon", sales: 4500, orders: 20 },
    { day: "Tue", sales: 5200, orders: 18 },
    { day: "Wed", sales: 4900, orders: 19 },
    { day: "Thu", sales: 6400, orders: 22 },
    { day: "Fri", sales: 7800, orders: 25 },
    { day: "Sat", sales: 9200, orders: 28 },
    { day: "Sun", sales: 8500, orders: 26 },
  ];

  export const categoryData = [
    { name: "Pizza", value: 35, color: "#8b5cf6" },
    { name: "Burgers", value: 25, color: "#f43f5e" },
    { name: "Pasta", value: 20, color: "#fb923c" },
    { name: "Salads", value: 12, color: "#22c55e" },
    { name: "Drinks", value: 8, color: "#3b82f6" },
  ];

  export  const popularItems = [
    { name: "Pep Pizza", orders: 320, price: "$12.99" },
    { name: "Cheese Burger", orders: 270, price: "$9.49" },
    { name: "Chicken Pasta", orders: 210, price: "$11.2" },
    { name: "Veggie Salad", orders: 180, price: "$7.89" },
  ];

  export const recentOrders = [
    { id: "#1021", customer: "John Doe", total: "$29.99", status: "Delivered" },
    {
      id: "#1022",
      customer: "Sarah Smith",
      total: "$18.50",
      status: "Pending",
    },
    {
      id: "#1023",
      customer: "David Wilson",
      total: "$42.10",
      status: "Delivered",
    },
    {
      id: "#1024",
      customer: "Emily Clark",
      total: "$15.75",
      status: "Cancelled",
    },
  ];


   export const customers = [
    {
      initials: "AR",
      name: "Ali Raza",
      email: "Ali.R@email.com",
      phone: "+92 0317608655",
      location: "Lahore, Pk",
      totalOrders: 47,
      totalSpent: 1248.5,
      lastOrder: "2024-11-25",
      gradient: "from-purple-500 to-pink-500",
      status: "active",
    },
    {
      initials: "HM",
      name: "Hamid Munir",
      email: "hamid.m@email.com",
      phone: "+92 3250705924",
      location: "Bhawalpur, Pk",
      totalOrders: 32,
      totalSpent: 845.2,
      lastOrder: "2024-11-12",
      gradient: "from-pink-500 to-rose-500",
      status: "active",
    },
    {
      initials: "MZ",
      name: "M Zahid",
      email: "zahid.m@email.com",
      phone: "+92 0313456456",
      location: "Sialkot, PK",
      totalOrders: 61,
      totalSpent: 1542.9,
      lastOrder: "2024-12-01",
      gradient: "from-orange-500 to-yellow-500",
      status: "active",
    },
    {
      initials: "SA",
      name: "Sayyam Ali",
      email: "sayyam.m@email.com",
      phone: "+92 03134578956",
      location: "Fort Abbas, PK",
      totalOrders: 61,
      totalSpent: 1542.9,
      lastOrder: "2024-12-01",
      gradient: "from-orange-500 to-yellow-500",
      status: "active",
    },
    {
      initials: "MW",
      name: "M waqas",
      email: "waqas.m@email.com",
      phone: "+92 031345645667",
      location: "Haroonabad, PK",
      totalOrders: 61,
      totalSpent: 1542.9,
      lastOrder: "2024-12-01",
      gradient: "from-orange-500 to-yellow-500",
      status: "active",
    },
  ];

 export const stats = [
    {
      label: "Total Customers",
      value: "2,847",
      bg: "bg-purple-100",
      color: "text-purple-600",
      icon: "🧑‍🤝‍🧑",
    },
    {
      label: "Avg. Order Value",
      value: "$28.45",
      bg: "bg-green-100",
      color: "text-green-600",
      icon: "💲",
    },
    {
      label: "Active Customers",
      value: "2,341",
      bg: "bg-blue-100",
      color: "text-blue-600",
      icon: "📦",
    },
    {
      label: "New This Month",
      value: "+184",
      bg: "bg-orange-100",
      color: "text-orange-600",
      icon: "📅",
    },
  ];

  export const restaurants = [
  {
    id: 1,
    name: "Burger Paradise",
    category: "American, Burgers",
    rating: 4.5,
    time: "20-30 min",
    price: "$$",
    discount: "20% OFF",
    image: BeefBurger,
  },
  {
    id: 2,
    name: "Pizza Town",
    category: "Italian, Pizza",
    rating: 4.7,
    time: "25-35 min",
    price: "$$",
    discount: "15% OFF",
    image: PizzaBanner,
  },
  {
    id: 3,
    name: "Daddy Zinger",
    category: "Pakistan , Burger",
    rating: 4.8,
    time: "30-40 min",
    price: "$$$",
    discount: "25% OFF",
    image:CheeseBurger,
  },
];

export const restaurantData = [
  {
    id: 1,
    name: "Burger Paradise",
    category: "Burger, Lahore",
    rating: 4.5,
    time: "20-30 min",
    distance: "2.5 km away",
    banner:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80",
    menu: [
      {
        id: 1,
        title: "Classic Beef Burger",
        desc: "Juicy beef patty with lettuce, tomato, and special sauce",
        price: "$12.99",
        image:BeefBurger,
      },
      {
        id: 2,
        title: "Chicken Deluxe",
        desc: "Crispy chicken breast with mayo and pickles",
        price: "$11.99",
        image:ChickenDeluxe,
      },
    ],
    categories: ["All", "Burgers", "Chicken", "Drinks"],
  },
  {
 id: 2,
    name: "Pizza Town",
    category: "Pizza, Lahore",
    rating: 4.5,
    time: "20-30 min",
    distance: "2.5 km away",
    banner: PizzaHub,
    menu: [
      {
        id: 1,
        title: "Fajita pizza",
        desc: "Juicy creamy pizza with more chese",
        price: "$12.99",
        image:Fajita,
      },
      {
        id: 2,
        title: "Crown crust ",
        desc: "Crispy chicken breast with mayo and pickles",
        price: "$11.99",
        image: Crown,
      },
    ],
    categories: ["All", "pizza", "sides", "Drinks"],
  },
   {
    id: 3,
    name: "Daddy Zinger",
    category: "Burger, Lahore",
    rating: 4.5,
    time: "20-30 min",
    distance: "2.5 km away",
    banner:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80",
    menu: [
      {
        id: 1,
        title: "Classic Beef Burger",
        desc: "Juicy beef patty with lettuce, tomato, and special sauce",
        price: "$12.99",
        image:BeefBurger,
      },
      {
        id: 2,
        title: "Chicken Deluxe",
        desc: "Crispy chicken breast with mayo and pickles",
        price: "$11.99",
        image:ChickenDeluxe,
      },
    ],
    categories: ["All", "Burgers", "Chicken", "Drinks"],
  },
  
];