import { defineQuery } from "next-sanity";

export const allproducts = defineQuery(`
    *[_type == "product"]{
    _id,
    name,
    description,
    price,
    discountpercentage,
    pricewithoudiscount,
    rating,
    ratingcount,
    tags,
    sizes,
    colors,
    category,
    "imageUrl":image.asset->url
    }`)
    export const forPro = defineQuery(`
        *[_type =="product][0..3]{
        _id,
        name,
        description,
        price,
        discountpercentage,
        pricewithoudiscount,
        rating,
        ratingcount,
        tags,
        sizes,
        colors,
        category,
        "imageUrl":image.asset->url
        }`)