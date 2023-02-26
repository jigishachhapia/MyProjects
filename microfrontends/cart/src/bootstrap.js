import faker from "faker"
const mount = (el) => {
   
    el.innerHTML= `you have ${faker.random.number()} items in cart`
}
if(process.env.NODE_ENV === "development") {
    const el = document.querySelector("#cart-div");
    if(el)
    mount(el);
}
export {mount}