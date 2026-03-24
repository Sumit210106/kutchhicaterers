export const popularDishesData = [
  { name: 'Veg Thali', desc: 'An endless royal feast of authentic Indian flavors', img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80', featured: true },
  { name: 'Pizza', desc: 'Wood-fired perfection with rich melted mozzarella', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Soup', desc: 'Warm, comforting, and exquisitely seasoned broths', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Fresh Juice', desc: 'Pure refreshing blends of handpicked seasonal fruits', img: 'https://images.unsplash.com/photo-1600271886742-f049cd451b62?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Italian', desc: 'Handcrafted pasta and signature coastal sauces', img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Salad', desc: 'Crisp organic greens tossed in vibrant vinaigrettes', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80' }
];

export const allMenuData: Record<string, { pageTitle: string, description: string, categories: {title: string, items: string[], image: string}[] }> = {
  'veg-thali': {
    pageTitle: 'Authentic Veg Thali',
    description: 'A glimpse into our meticulously crafted Gujarati thalis. For the complete culinary experience, our full brochure is available for download.',
    categories: [
      {
        title: 'Gujarati 1',
        items: ['Gulab Jamun', 'Khaman khandvi', 'Puri, Fusi', 'Undhiyu', 'Raita / Kachumber', 'Papad', 'Dal rice / Kadthi khichadi', 'Chaash'],
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Gujarati 2',
        items: ['Moong dal Halwa', 'Samosa', 'Puri / Phulka / Bakhari', 'Vaal / Chana', 'Bhindi / Tindora / Kobi', 'Raita / Kachumber', 'Papad', 'Dal rice', 'Chaash'],
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Gujarati 3',
        items: ['Shrikhand / Amrakhand / Fruit Salad', 'Patra / Dhokla', 'Puri / Phulka / Bakhari', 'Chole / Kala Chana', 'Jeera Aloo / Sukhi bhaji', 'Raita / Kachumber', 'Papad', 'Dal rice / Kadthi khichadi', 'Chaash'],
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  'pizza': {
    pageTitle: 'Wood-Fired Pizzas',
    description: 'Explore our artisan crafted pizzas made with fresh dough and premium imported toppings.',
    categories: [
      {
        title: 'Classic Neapolitan',
        items: ['Margherita', 'Marinara', 'Quattro Formaggi', 'Capricciosa', 'Diavola'],
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Gourmet Veggie',
        items: ['Truffle Mushroom', 'Mediterranean Veggie', 'Pesto Artichoke', 'Spicy Paneer Tikka', 'Roasted Garlic & Spinach'],
        image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  'soup': {
    pageTitle: 'Premium Soups',
    description: 'Warm, comforting, and exquisitely seasoned broths prepared by our master chefs.',
    categories: [
      {
        title: 'Clear & Broths',
        items: ['Lemon Coriander', 'Manchow', 'Hot & Sour', 'Sweet Corn', 'Minestrone'],
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Cream & Thick Soups',
        items: ['Cream of Tomato', 'Cream of Mushroom', 'Broccoli Almond', 'Roasted Pumpkin', 'Thai Coconut'],
        image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  'fresh-juice': {
    pageTitle: 'Fresh Juices & Mocktails',
    description: 'Pure refreshing blends of handpicked seasonal fruits right at your event.',
    categories: [
      {
        title: 'Seasonal Fresh Juices',
        items: ['Watermelon Mint', 'Valencia Orange', 'Pineapple Sweet Lime', 'Pomegranate', 'Mixed Fruit Punch'],
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451b62?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Signature Mocktails',
        items: ['Virgin Mojito', 'Blue Lagoon', 'Pina Colada', 'Strawberry Margarita', 'Peach Iced Tea'],
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  'italian': {
    pageTitle: 'Italian Cuisine',
    description: 'Handcrafted pasta and signature coastal sauces creating magical Italian dining experiences.',
    categories: [
      {
        title: 'Artisan Pasta',
        items: ['Penne Arrabbiata', 'Fettuccine Alfredo', 'Spaghetti Aglio e Olio', 'Ravioli in Pink Sauce', 'Baked Lasagna'],
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Italian Mains',
        items: ['Eggplant Parmigiana', 'Risotto alla Milanese', 'Mushroom Risotto', 'Garlic Bread with Cheese', 'Bruschetta'],
        image: 'https://images.unsplash.com/photo-1600803907087-f56d462fd26b?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  'salad': {
    pageTitle: 'Organic Salads',
    description: 'Crisp organic greens tossed in vibrant vinaigrettes and premium olive oil.',
    categories: [
      {
        title: 'Classic Salads',
        items: ['Caesar Salad', 'Greek Salad', 'Caprese Salad', 'Waldorf Salad', 'Russian Salad'],
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Exotic Bowls',
        items: ['Quinoa & Avocado', 'Roasted Beetroot & Feta', 'Thai Papaya Salad', 'Mediterranean Chickpea', 'Mexican Corn Salad'],
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
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
