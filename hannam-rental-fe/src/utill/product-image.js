import umbrella from "../assets/umbrella.jpg"
import pen from "../assets/pen.jpg"


export function productImage(productId){
    switch(productId){
        case 1: return umbrella;
        case 2: return pen;
        default: return null;
    }
}