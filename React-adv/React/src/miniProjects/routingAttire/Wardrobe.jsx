import React from 'react'
import { useNavigate } from 'react-router-dom';

const Wardrobe = ({ setAttireData }) => {

    const articles = [
        {
            id: 1,
            title: "Classic Crewneck T-Shirt",
            description: "Soft 100% organic cotton daily essential short-sleeve tee.",
            price: 24.99,
            rating: 4.7,
            availableSizes: ["S", "M", "L", "XL", "XXL"],
            colors: ["Black", "White", "Navy Blue", "Heather Grey"],
            link: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500"
        },
        {
            id: 2,
            title: "Slim-Fit Stretch Denim Jeans",
            description: "Modern slim-fit jeans made with flexible performance stretch denim.",
            price: 59.99,
            rating: 4.5,
            availableSizes: ["30x30", "32x32", "34x32", "36x34"],
            colors: ["Dark Wash", "Light Blue", "Black"],
            link: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500"
        },
        {
            id: 3,
            title: "Oversized Fleece Pullover Hoodie",
            description: "Cozy heavyweight fleece hoodie with a kangaroo pocket and dropped shoulders.",
            price: 49.50,
            rating: 4.8,
            availableSizes: ["XS", "S", "M", "L", "XL"],
            colors: ["Beige", "Sage Green", "Charcoal", "Lavender"],
            link: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500"
        },
        {
            id: 4,
            title: "Tailored Linen Button-Down Shirt",
            description: "Breathable 100% linen shirt perfect for summer and casual formal events.",
            price: 45.00,
            rating: 4.3,
            availableSizes: ["S", "M", "L", "XL"],
            colors: ["White", "Sky Blue", "Olive Green"],
            link: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500"
        },
        {
            id: 5,
            title: "High-Waisted Athletic Leggings",
            description: "Squat-proof, moisture-wicking compression leggings with side pockets.",
            price: 38.00,
            rating: 4.9,
            availableSizes: ["XS", "S", "M", "L"],
            colors: ["Midnight Black", "Plum", "Forest Green"],
            link: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=500"
        },
        {
            id: 6,
            title: "Classic Faux Leather Biker Jacket",
            description: "Edgy moto jacket featuring asymmetrical zipper closures and metal hardware.",
            price: 89.99,
            rating: 4.6,
            availableSizes: ["S", "M", "L", "XL"],
            colors: ["Black", "Cognac Brown"],
            link: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500"
        },
        {
            id: 7,
            title: "A-Line Floral Print Summer Dress",
            description: "Lightweight chiffon midi dress with a floral pattern and tie waist.",
            price: 54.00,
            rating: 4.4,
            availableSizes: ["XS", "S", "M", "L", "XL"],
            colors: ["Yellow Floral", "Navy Floral", "Red Floral"],
            link: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500"
        },
        {
            id: 8,
            title: "Water-Resistant Windbreaker Jacket",
            description: "Lightweight shell jacket with zip hood and adjustable drawstrings.",
            price: 65.00,
            rating: 4.2,
            availableSizes: ["M", "L", "XL", "XXL"],
            colors: ["Teal/Navy Block", "Black", "Neon Yellow"],
            link: "https://images.unsplash.com/photo-1544441893-675973e31985?w=500"
        },
        {
            id: 9,
            title: "Ribbed Knit Turtleneck Sweater",
            description: "Warm, stretchy fitted turtleneck knit sweater for winter layering.",
            price: 42.50,
            rating: 4.6,
            availableSizes: ["XS", "S", "M", "L"],
            colors: ["Cream", "Burgundy", "Camel", "Black"],
            link: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500"
        },
        {
            id: 10,
            title: "Chino Workwear Shorts (9-Inch)",
            description: "Durable stretch-cotton chino shorts designed for casual comfort.",
            price: 29.99,
            rating: 4.1,
            availableSizes: ["30", "32", "34", "36", "38"],
            colors: ["Khaki", "Navy", "Stone Gray"],
            link: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500"
        },
        {
            id: 11,
            title: "Puffer Down Winter Coat",
            description: "Insulated heavy winter jacket with synthetic down fill and detachable hood.",
            price: 129.99,
            rating: 4.8,
            availableSizes: ["S", "M", "L", "XL", "XXL"],
            colors: ["Matte Black", "Army Green", "Off-White"],
            link: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500"
        },
        {
            id: 12,
            title: "Seamless Sports Bra",
            description: "Medium-support wireless sports bra with removable padding.",
            price: 22.00,
            rating: 4.7,
            availableSizes: ["XS", "S", "M", "L"],
            colors: ["Rose Pink", "Black", "Heather Gray", "Teal"],
            link: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=500"
        },
        {
            id: 13,
            title: "Classic Trench Coat",
            description: "Double-breasted timeless trench coat with waist belt and shoulder epaulets.",
            price: 110.00,
            rating: 4.5,
            availableSizes: ["S", "M", "L", "XL"],
            colors: ["Beige", "Black"],
            link: "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=500"
        },
        {
            id: 14,
            title: "Relaxed Fit Cargo Pants",
            description: "Streetwear-inspired utility cargo pants with adjustable drawstring cuffs.",
            price: 52.00,
            rating: 4.4,
            availableSizes: ["28", "30", "32", "34", "36"],
            colors: ["Olive Drab", "Black", "Tan"],
            link: "https://images.unsplash.com/photo-1624378443207-6f161f3674d1?w=500"
        },
        {
            id: 15,
            title: "Silk V-Neck Camisole",
            description: "Elegant Mulberry silk tank top with adjustable spaghetti straps.",
            price: 36.50,
            rating: 4.3,
            availableSizes: ["XS", "S", "M", "L"],
            colors: ["Champagne", "Black", "Emerald Green"],
            link: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500"
        },
        {
            id: 16,
            title: "Cotton Oxford Long-Sleeve Shirt",
            description: "Structured cotton oxford shirt suitable for smart-casual wear.",
            price: 48.00,
            rating: 4.6,
            availableSizes: ["S", "M", "L", "XL", "XXL"],
            colors: ["Light Blue", "White", "Pink/White Stripe"],
            link: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500"
        },
        {
            id: 17,
            title: "Pleated High-Waisted Tennis Skirt",
            description: "Athletic mini skirt featuring built-in shorts and hidden ball pocket.",
            price: 32.00,
            rating: 4.8,
            availableSizes: ["XS", "S", "M", "L"],
            colors: ["White", "Black", "Lilac"],
            link: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500"
        },
        {
            id: 18,
            title: "Heavyweight Flannel Plaid Shirt",
            description: "Brushed cotton thermal button-up shirt for cold weather.",
            price: 44.99,
            rating: 4.5,
            availableSizes: ["S", "M", "L", "XL", "XXL"],
            colors: ["Red/Black Plaid", "Green/Navy Plaid", "Grey Plaid"],
            link: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500"
        },
        {
            id: 19,
            title: "Cozy Fleece Jogger Pants",
            description: "Soft cotton-blend sweatpants with elastic drawstring waist and cuffed ankles.",
            price: 35.00,
            rating: 4.7,
            availableSizes: ["S", "M", "L", "XL"],
            colors: ["Charcoal", "Oatmeal", "Black"],
            link: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500"
        },
        {
            id: 20,
            title: "Single-Breasted Wool-Blend Blazer",
            description: "Structured tailor-fit blazer for professional office wear and formal attire.",
            price: 95.00,
            rating: 4.6,
            availableSizes: ["S", "M", "L", "XL"],
            colors: ["Navy", "Black", "Camel"],
            link: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500"
        }
    ];

    const navigate = useNavigate()

    const onClickHandler = (id) => {
        console.log(id, 'id');
        setAttireData(articles[id - 1])
        navigate(`/attire/${articles[id - 1].title}`);

    }
    return (

        <>
            <div>Wardrobe</div>
            <ul>
                <li onClick={() => navigate('/')}>Back to Home</li>
            </ul>
            <h1>Attire Section:</h1>
            {
                articles.map(({ id, title, description, price, rating, availableSizes, colors, link }) => (

                    <div key={id} onClick={() => onClickHandler(id)}>

                        <div>
                            <img src={link} alt={title} width='200' /><br />
                            {id}:
                            {title} <br />
                            {description} <br />
                            {price} <br />
                            {rating} <br />
                            {availableSizes} <br />
                            {colors} <br />
                        </div>

                    </div >
                ))
            }
        </>
    )
}




export default Wardrobe