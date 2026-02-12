const navLinks = [
    {
        id: "coffee",
        title: "Coffee",
    },
    {
        id: "about",
        title: "About Kaffa",
    },
    {
        id: "craft",
        title: "Our Craft",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const coffeeLists = [
    {
        name: "Ethiopian Yirgacheffe",
        country: "ET",
        detail: "Single Origin",
        price: "$12",
    },
    {
        name: "Colombian Supremo",
        country: "CO",
        detail: "Medium Roast",
        price: "$10",
    },
    {
        name: "Brazil Santos",
        country: "BR",
        detail: "Dark Roast",
        price: "$14",
    },
    {
        name: "Kenya AA",
        country: "KE",
        detail: "Premium Beans",
        price: "$16",
    },
];

const mockLists = [
    {
        name: "Vanilla Latte",
        country: "IT",
        detail: "Hot",
        price: "$6",
    },
    {
        name: "Caramel Cappuccino",
        country: "IT",
        detail: "Hot",
        price: "$7",
    },
    {
        name: "Cold Brew Classic",
        country: "US",
        detail: "350 ml",
        price: "$5",
    },
    {
        name: "Mocha Frappe",
        country: "US",
        detail: "450 ml",
        price: "$8",
    },
];

const profileLists = [
    {
        imgPath: "/images/profile1.png",
    },
    {
        imgPath: "/images/profile2.png",
    },
    {
        imgPath: "/images/profile3.png",
    },
    {
        imgPath: "/images/profile4.png",
    },
];

const featureLists = [
    "Freshly roasted beans",
    "Rich and bold flavors",
    "Perfectly brewed every time",
    "Crafted by passionate baristas",
];

const goodLists = [
    "Ethically sourced beans",
    "Small-batch roasting",
    "Artisan brewing techniques",
    "Warm and cozy experience",
];

const storeInfo = {
    heading: "Visit Kaffa",
    address: "22 Brew Street, Downtown District, Kochi, India",
    contact: {
        phone: "+91 98765 43210",
        email: "hello@kaffa.coffee",
    },
};

const openingHours = [
    { day: "Mon–Thu", time: "8:00am – 9:00pm" },
    { day: "Fri", time: "8:00am – 10:00pm" },
    { day: "Sat", time: "9:00am – 10:00pm" },
    { day: "Sun", time: "9:00am – 8:00pm" },
];

const socials = [
    {
        name: "Instagram",
        icon: "/images/insta.png",
        url: "#",
    },
    {
        name: "X (Twitter)",
        icon: "/images/x.png",
        url: "#",
    },
    {
        name: "Facebook",
        icon: "/images/fb.png",
        url: "#",
    },
];

const sliderLists = [
    {
        id: 1,
        name: "Signature Espresso",
        image: "/images/drink1.png",
        title: "Pure. Bold. Energizing.",
        description:
            "Our signature espresso is crafted from premium roasted beans, delivering a deep aroma and strong, smooth taste in every shot.",
    },
    {
        id: 2,
        name: "Caramel Latte",
        image: "/images/drink2.png",
        title: "Sweet Comfort in Every Sip",
        description:
            "A perfect blend of rich espresso, steamed milk, and smooth caramel. Warm, creamy, and irresistibly satisfying.",
    },
    {
        id: 3,
        name: "Cold Brew Reserve",
        image: "/images/drink3.png",
        title: "Slow Brewed, Smooth Taste",
        description:
            "Steeped for hours to unlock deep flavors and natural sweetness. A refreshing and bold coffee experience.",
    },
    {
        id: 4,
        name: "Mocha Delight",
        image: "/images/drink4.png",
        title: "Chocolate Meets Coffee",
        description:
            "A luxurious blend of cocoa, espresso, and steamed milk — crafted for those who love a rich and indulgent treat.",
    },
];

export {
    navLinks,
    coffeeLists,
    mockLists,
    profileLists,
    featureLists,
    goodLists,
    openingHours,
    storeInfo,
    socials,
    sliderLists,
};
