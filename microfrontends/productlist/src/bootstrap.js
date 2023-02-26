import faker from "faker";

const mount = (el) => {
    let products = '';
    for(let i=0;i<5;i++) {
        let product = faker.commerce.product();
        products += `<div> ${product} </div>`;
    }
    el.innerHTML=products;
}
if (process.env.NODE_ENV === "development") {
    //if application is accessed directly
    const el = document.querySelector("#prod-list")
    if (el)
    mount(el);
}
//if application is accessed via container
export {mount};