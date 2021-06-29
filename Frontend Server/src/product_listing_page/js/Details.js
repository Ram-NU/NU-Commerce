import vivo from '../img/vivo_v15.jpg';
import sdcard from '../img/sd_card.jpg';
import mi_tv from '../img/mi_tv.jpg';
import joystick from '../img/joystick.jpg';
import ps4 from '../img/ps4.jpg';
import iphone_5s from '../img/iphone_5s.jpg';
import mi_powerbank from '../img/mi_powerbank.jpg';
import jbl_headphone from '../img/jbl_headphone.jpg';
import redmi from '../img/redmi_note_10.jpg';

const Categories={
    electronics:[
        {
            category:'Redmi Note 10',
            image: redmi,
            price:20000,
            type:"electronics"
        },

        {
            category:'Vivo V15',
            image: vivo,
            price:25000,
            type:"electronics"
        },
        
        {
            category:'Sd Pendrive',
            image: sdcard,
            price:450,
            type:"electronics"
        },
        {
            category:'Joystick',
            image: joystick,
            price:2000,
            type:"electronics"
        },
        {
            category:'PS4',
            image: ps4,
            price:20000,
            type:"electronics"
        },
        {
            category:'Mi Tv 80 inch',
            image: mi_tv,
            price:40000,
            type:"electronics"
        },
        {
            category:'Apple Iphone 5s',
            image: iphone_5s,
            price:28000,
            type:"electronics"
        },
        {
            category:'Mi power bank',
            image: mi_powerbank,
            price:600,
            type:"electronics"
        },
        {
            category:'JBL Headphones',
            image: jbl_headphone,
            price:4500,
            type:"electronics"
        }
        
    ],
    
    top_offer:[
        {
            category:'N95 Mask',
            image:ps4,
            price:40,
            type:"top offer"
        },
        {
            category:'Sanitizer',
            image:ps4,
            price:100,
            type:"top offer"
        },
        {
            category:'Titan Watch',
            image:ps4,
            price:4000,
            type:"top offer"
        }
    ]   
};




export default Categories;
