import tourOneImg from "./images/tour-1.jpeg"
import tourTwoImg from "./images/tour-2.jpeg"
import tourThreeImg from "./images/tour-3.jpeg"
import tourFourImg from "./images/tour-4.jpeg"
import tourFiveImg from "./images/tour-5.jpeg"
import tourSixImg from "./images/tour-6.jpeg"

// when using in a different file, make sure to spell the variable as spelled in its declaration
export const pageLinks = [
    {   link: "#home", text: "home"         }, 
    {   link: "#about", text: "about"       }, 
    {   link: "#services", text: "services" },
    {   link: "#tours", text: "tours"       },
]

export const socialMedias = [
    {   link: "https://www.facebook.com", icon_name: "fab fa-facebook" }, 
    {   link: "https://www.twitter.com", icon_name: "fab fa-twitter"   }, 
    {   link: "https://www.tumblr.com", icon_name: "fab fa-tumblr"     }
]

export const services = [
    {
        icon: "fas fa-wallet fa-fw",
        title: "Saving Money",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At necessitatibus optio praesentium doloremque voluptatibus, pariatur qui velit consequuntur nulla, facere eius! Cumque aliquam laborum corrupti molestiae corporis quibusdam quam nostrum."
    },
    {
        icon: "fas fa-tree fa-fw",
        title: "Endless Hiking", 
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, excepturi dolorem aliquid possimus cum nesciunt impedit numquam. Enim, nihil. In nostrum iusto perspiciatis officiis deleniti consequuntur libero exercitationem corporis soluta."
    },
    {
        icon: "fas fa-socks fa-fw",
        title: "Amazing Comfort",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni explicabo pariatur ad! Rerum numquam doloremque error cum quae. Ex eligendi sed a atque corrupti architecto reprehenderit. Praesentium accusantium perspiciatis inventore!"
    }
]

export const tours = [
    {
        image: tourOneImg,
        date: "August 26th, 2020",
        title: "Tibet Adventure",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quidem nesciunt esse repellendus, odio ex quod eveniet dignissimos illo ab asperiores, in temporibus distinctio reprehenderit ut officia eius, adipisci consequatur.",
        country: "China",
        days: "7",
        price: "7,000"
    }, 
    {
        image: tourTwoImg, 
        date: "July 18, 2023", 
        title: "Best of Java",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum temporibus commodi magni molestiae? Dolore porro facere nihil eos fugit esse explicabo, velit quas repellendus cum sapiente laudantium minus pariatur officia?",
        country: "Indonesia",
        days: "10", 
        price: "8,550" 
    }, 
    {
        image: tourThreeImg,
        date: "December 10, 2024",
        title: "Explore Hong Kong", 
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum amet magnam quia deleniti deserunt inventore quos doloremque! Libero corporis ut tempora illum optio quo fugit voluptates molestias totam? Pariatur, voluptate.",
        country: "Hong Kong",
        days: "5",
        price: "3,650"
    }, 
    {
        image: tourFourImg,
        date: "January 4, 2024",
        title: "Kenya Highlights",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, aliquid inventore voluptate quia libero doloremque nisi odio nemo odit deserunt explicabo similique ducimus dolore, sapiente quos voluptates velit obcaecati delectus?",
        country: "Kenya",
        days: "12",
        price: "15,000"
    },
    {
        image: tourFiveImg,
        date: "March 26, 2025",
        title: "Coffees and the Wild",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolor necessitatibus voluptates nisi harum. Deserunt quia ducimus vel modi officia earum quisquam minus culpa doloribus? Explicabo quibusdam nemo amet incidunt?",
        country: "Ethiopia",
        days: "8",
        price: "9,700"
    },
    {
        image: tourSixImg,
        date: "May 18,",
        title: "Beauty of India",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, voluptatibus voluptatum quis consequatur quod dolorum unde laboriosam facilis enim sapiente qui quaerat repellendus modi quam temporibus eius molestiae, impedit deleniti.",
        country: "India",
        days: "13", 
        price: "10,430"
    }
]