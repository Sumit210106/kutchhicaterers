export const popularDishesData = [
  {
    name: 'Veg Thali',
    desc: 'A complete traditional feast featuring a variety of authentic Indian dishes',
    img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  {
    name: 'Beverages',
    desc: 'Refreshing juices, mocktails, and drinks crafted for every occasion',
    img: 'https://images.unsplash.com/photo-1600271886742-f049cd451b62?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Starters',
    desc: 'Delicious bite-sized appetizers to kickstart your dining experience',
    img: 'https://images.unsplash.com/photo-1604908176997-4316c7c57e4d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Soups & Salads',
    desc: 'Comforting soups and fresh, crisp salads for a balanced start',
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Main Course',
    desc: 'Rich and flavorful dishes forming the heart of your meal',
    img: 'https://images.unsplash.com/photo-1604908554027-2b3f8b80b9a1?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Desserts',
    desc: 'Indulgent sweets and desserts to end your meal on a high note',
    img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Cuisine Counters',
    desc: 'Live counters featuring South Indian, BBQ, and global cuisines',
    img: 'https://images.unsplash.com/photo-1555992336-03a23c7b20ee?auto=format&fit=crop&w=1200&q=80'
  }
];
const LIMIT = 20;

const formatItems = (items: string[]) => {
  if (items.length <= LIMIT) return items;
  return [...items.slice(0, LIMIT), `${items.length - LIMIT} more...`];
};

export const allMenuData = {
  'veg-thali': {
    pageTitle: 'Authentic Veg Thali',
    description: 'A glimpse into our meticulously crafted Gujarati thalis. For the complete culinary experience, our full brochure is available for download.',
    categories: [
      {
        title: 'Gujarati 1',
        items: [
          'Gulab Jamun', 'Khaman Khandvi', 'Puri, Fusi', 'Undhiyu', 
          'Raita / Kachumber', 'Papad', 'Dal Rice / Kadthi Khichadi', 'Chaash'
        ],
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Gujarati 2',
        items: [
          'Moong Dal Halwa', 'Samosa', 'Puri / Phulka / Bakhari', 'Vaal / Chana', 
          'Bhindi / Tindora / Kobi', 'Raita / Kachumber', 'Papad', 'Dal Rice', 'Chaash'
        ],
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },

  beverages: {
    pageTitle: "Beverages & Starters",
    description: "Refreshing drinks and exciting starters to begin your event experience.",
    categories: [
      {
        title: "Juices",
        items: formatItems([
          "Kesariya Coconut",
          "Green Satin",
          "Muskmelon",
          "Litchi",
          "Red Indian",
          "Strawberry",
          "Pomegranate",
          "Black Grapes",
          "Strawberry Plum",
          "Twinkle Star",
          "Peach",
          "Plum",
          "Pineapple",
          "Peach Kiwi Pineapple",
          "White Feather",
          "Litchi Coconut Sitaphal",
          "Orange Juice",
          "Mango Juice",
          "Guava Juice",
          "Apple Juice",
          "Watermelon Juice",
          "Dragon Fruit Juice",
          "Kiwi Juice",
          "Mixed Fruit Juice"
        ]),
        image: ""
      },
      {
        title: "Mocktails",
        items: formatItems([
          "Virgin Mojito",
          "Blue Lagoon",
          "Pina Colada",
          "Strawberry Margarita",
          "Peach Ice Tea",
          "Green Apple Fizz",
          "Cranberry Punch",
          "Mint Cooler",
          "Lemon Ice Tea",
          "Berry Blast",
          "Orange Sparkle",
          "Watermelon Mojito",
          "Guava Chilli",
          "Pineapple Punch",
          "Kiwi Delight",
          "Rose Cooler",
          "Aam Panna",
          "Jaljeera",
          "Masala Soda",
          "Cola Float",
          "Energy Blast",
          "Tropical Mix"
        ]),
        image: ""
      }
    ]
  },

  starters: {
    pageTitle: "Starters",
    description: "Delicious bite-sized starters to kick off your feast.",
    categories: [
      {
        title: "Veg Starters",
        items: formatItems([
          "Paneer Tikka",
          "Paneer Hariyali",
          "Paneer Achari",
          "Hara Bhara Kabab",
          "Veg Seekh Kabab",
          "Dahi Ke Kabab",
          "Cheese Balls",
          "Spring Rolls",
          "Veg Manchurian",
          "Chilli Paneer",
          "Crispy Corn",
          "Stuffed Mushrooms",
          "Baby Corn Fry",
          "Aloo Tikki",
          "Corn Cheese Balls",
          "Veg Cutlet",
          "Schezwan Paneer",
          "Dragon Paneer",
          "Chilli Mushroom",
          "Tandoori Broccoli",
          "Veg Nuggets",
          "Peri Peri Paneer"
        ]),
        image: ""
      }
    ]
  },

  soups: {
    pageTitle: "Soups & Salads",
    description: "Warm soups and refreshing salads crafted with perfection.",
    categories: [
      {
        title: "Soups",
        items: formatItems([
          "Tomato Soup",
          "Sweet Corn Soup",
          "Hot & Sour Soup",
          "Manchow Soup",
          "Lemon Coriander Soup",
          "Veg Clear Soup",
          "Cream of Mushroom",
          "Cream of Tomato",
          "Broccoli Soup",
          "Spinach Soup",
          "Pumpkin Soup",
          "Thai Coconut Soup",
          "Veg Noodle Soup",
          "Corn Spinach Soup",
          "Garlic Soup",
          "Cheese Soup",
          "Carrot Ginger Soup",
          "Mexican Soup",
          "Italian Soup",
          "Asian Soup",
          "Herbal Soup"
        ]),
        image: ""
      },
      {
        title: "Salads",
        items: formatItems([
          "Green Salad",
          "Russian Salad",
          "Pasta Salad",
          "Fruit Salad",
          "Sprout Salad",
          "Caesar Salad",
          "Coleslaw",
          "Corn Salad",
          "Greek Salad",
          "Cucumber Salad",
          "Beetroot Salad",
          "Carrot Salad",
          "Apple Walnut Salad",
          "Mexican Salad",
          "Chickpea Salad",
          "Quinoa Salad",
          "Kachumber",
          "Aloo Chana Salad",
          "Paneer Salad",
          "Tropical Salad",
          "Dry Fruit Salad"
        ]),
        image: ""
      }
    ]
  },

  mainCourse: {
    pageTitle: "Main Course",
    description: "Rich and flavorful main course dishes for a complete dining experience.",
    categories: [
      {
        title: "Indian Sabzi",
        items: formatItems([
          "Paneer Butter Masala",
          "Paneer Tikka Masala",
          "Kadai Paneer",
          "Shahi Paneer",
          "Palak Paneer",
          "Mix Veg",
          "Veg Kolhapuri",
          "Veg Handi",
          "Malai Kofta",
          "Dum Aloo",
          "Jeera Aloo",
          "Bhindi Masala",
          "Aloo Gobi",
          "Chole Masala",
          "Rajma",
          "Dal Tadka",
          "Dal Makhani",
          "Gujarati Kadhi",
          "Undhiyu",
          "Sev Tamatar",
          "Baingan Bharta",
          "Methi Malai Mutter"
        ]),
        image: ""
      },
      {
        title: "Rice & Biryani",
        items: formatItems([
          "Plain Rice",
          "Jeera Rice",
          "Veg Pulao",
          "Kashmiri Pulao",
          "Veg Biryani",
          "Hyderabadi Biryani",
          "Paneer Biryani",
          "Peas Pulao",
          "Corn Pulao",
          "Schezwan Rice",
          "Fried Rice",
          "Curd Rice",
          "Lemon Rice",
          "Coconut Rice",
          "Tomato Rice",
          "Masala Rice",
          "Veg Khichdi",
          "Dal Khichdi",
          "Gujarati Khichdi",
          "Tawa Pulao",
          "Burnt Garlic Rice"
        ]),
        image: ""
      }
    ]
  },

  desserts: {
    pageTitle: "Sweets & Desserts",
    description: "End your meal with delightful sweets and desserts.",
    categories: [
      {
        title: "Indian Sweets",
        items: formatItems([
          "Gulab Jamun",
          "Rasmalai",
          "Rasgulla",
          "Jalebi",
          "Malpua",
          "Kaju Katli",
          "Motichoor Ladoo",
          "Besan Ladoo",
          "Peda",
          "Barfi",
          "Milk Cake",
          "Kalakand",
          "Shrikhand",
          "Amrakhand",
          "Fruit Shrikhand",
          "Moong Dal Halwa",
          "Gajar Halwa",
          "Doodhi Halwa",
          "Badam Halwa",
          "Anjeer Halwa",
          "Pineapple Halwa",
          "Dry Fruit Halwa"
        ]),
        image: ""
      },
      {
        title: "Desserts",
        items: formatItems([
          "Ice Cream",
          "Brownie",
          "Chocolate Mousse",
          "Fruit Custard",
          "Pudding",
          "Pastry",
          "Cheesecake",
          "Tiramisu",
          "Waffles",
          "Pancakes",
          "Falooda",
          "Kulfi",
          "Rabdi",
          "Ice Cream Sundae",
          "Chocolate Fountain",
          "Donuts",
          "Cupcakes",
          "Macarons",
          "Choco Lava Cake",
          "Fruit Tart",
          "Mango Delight"
        ]),
        image: ""
      }
    ]
  },

  cuisineCounters: {
    pageTitle: "Cuisine Counters",
    description: "Live counters serving global cuisines.",
    categories: [
      {
        title: "South Indian",
        items: formatItems([
          "Dosa",
          "Masala Dosa",
          "Mysore Dosa",
          "Rava Dosa",
          "Idli",
          "Vada",
          "Uttapam",
          "Appe",
          "Upma",
          "Pongal",
          "Curd Rice",
          "Lemon Rice",
          "Coconut Rice",
          "Tomato Rice",
          "Medu Vada",
          "Mini Idli",
          "Cheese Dosa",
          "Paneer Dosa",
          "Butter Dosa",
          "Onion Uttapam",
          "Set Dosa"
        ]),
        image: ""
      },
      {
        title: "Barbeque",
        items: formatItems([
          "Paneer Tikka",
          "Paneer Hariyali",
          "Paneer Achari",
          "Tandoori Aloo",
          "Baby Corn",
          "Mushroom",
          "Pineapple",
          "Veg Seekh",
          "Cheese Corn",
          "Grilled Veggies",
          "Peri Peri Paneer",
          "Malai Paneer",
          "BBQ Corn",
          "Stuffed Paneer",
          "Spicy Mushroom",
          "Tandoori Broccoli",
          "BBQ Pineapple",
          "BBQ Potato",
          "BBQ Capsicum",
          "BBQ Tomato",
          "BBQ Zucchini"
        ]),
        image: ""
      }
    ]
  }
};

export const servicesData = [
  {
    id: "wedding",
    title: "Wedding Services",
    description: "Make your special day truly memorable with our comprehensive wedding catering. We go places others wouldn't to ensure your feast is perfect.",
    fullDescription: "Your wedding day is a once-in-a-lifetime event, and we believe the food should reflect that. From traditional Gujarati feasts to contemporary fusion cuisines, we provide a tailored catering experience that will leave your guests in awe.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
    link: "/services/wedding",
    gridSpan: "md:col-span-8",
    features: ["Custom Menu Design", "Live Counter Experience", "Full Service Staff", "Exquisite Table Settings"]
  },
  {
    id: "corporate",
    title: "Corporate",
    description: "Elevate your corporate events with premium catering designed to impress clients and colleagues.",
    fullDescription: "Whether it's a high-stakes board meeting, a product launch, or a company-wide celebration, our corporate catering services deliver professionalism and flavor in equal measure.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80",
    link: "/services/corporate",
    gridSpan: "md:col-span-4",
    features: ["Breakfast & Lunch Boxes", "Themed Coffee Breaks", "Executive Dining", "Gala Dinner Setup"]
  },
  {
    id: "cocktail",
    title: "Cocktail",
    description: "Exquisite drinks and bite-sized delicacies linking fun and taste perfectly.",
    fullDescription: "Our cocktail catering focuses on small bites with big flavors. Perfectly paired with a curated selection of mocktails and beverages, we create a social atmosphere that flows beautifully.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
    link: "/services/cocktail",
    gridSpan: "md:col-span-4",
    features: ["Signature Mocktails", "Global Hors d'oeuvres", "Roaming Service", "Stylish Bar Setup"]
  },
  {
    id: "buffet",
    title: "Buffet Catering",
    description: "A grand spread of authentic Indian delicacies, offering a diverse and rich culinary experience for all your guests.",
    fullDescription: "Our buffet catering is a grand celebration of Indian culinary heritage. We offer a wide variety of dishes, from regional specialties to popular favorites, all served with the warmth and hospitality Kutchhi Caterers is known for.",
    image: "https://images.unsplash.com/photo-1530103862676-de889243da87?auto=format&fit=crop&q=80",
    link: "/services/buffet",
    gridSpan: "md:col-span-8",
    features: ["Authentic Gujarati Thali", "Multi-Cuisine Options", "Elegant Buffet Setup", "Hygiene & Safety Focused"]
  }
];
