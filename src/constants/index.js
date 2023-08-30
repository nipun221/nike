import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe4, bigShoe6, bigShoe7, customer1, customer2, customer3, nike1, nike3, nike4, nike6 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#about-us", label: "About Us" }, 
    { href: "#services", label: "Services"},
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: bigShoe4,
        bigShoe: bigShoe4,
    },
    {
        thumbnail: bigShoe6,
        bigShoe: bigShoe6,
    },
    {
        thumbnail: bigShoe7,
        bigShoe: bigShoe7,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: nike1,
        name: "Air Jordan 7 Retro White/Black",
        price: "₹18,697.00",
    },
    {
        imgURL: nike3,
        name: "Air Force 1 Low White Gum",
        price: "₹7,939.00",
    },
    {
        imgURL: nike4,
        name: "Air Jordan 1 Off White Chicago",
        price: "₹5,40,000.00",
    },
    {
        imgURL: nike6,
        name: "Air Jordan 4 Golf Military Blue",
        price: "₹48,444.00",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Noa Chandler',
        rating: 4.5,
        feedback: `I‘ve just received my second pair of shoes. So my only problem is to decide which one to wear. Do I have to say more? Btw, I’ll wear them with the green laces not only on St.Patrick‘s Day.`
    },
    {
        imgURL: customer2,
        customerName: 'Aron Willis',
        rating: 4.1,
        feedback: `Very comfortable. The sizing is true. The toe-box is roomy. I think I will get the sneaker style in cognac next. And of course I need something in black. Clean lines. Low heel. Kitten Testicle Grey? What a great name for the color.`
    },
    {
        imgURL: customer3,
        customerName: 'Lily-Mae Potts',
        rating: 4.8,
        feedback: `That's it. I've worn them one day, and they're the best sneakers I've ever owned. Worth every penny and then some. Truly excellent quality, comfort, style- you name it, they've got it!`

    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];