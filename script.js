/* =========================================================
   ORIGAMI SUSHI BAR — MENU QR
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   🟢 1. CATÉGORIES PRINCIPALES
   ========================================================= */

const categoriesOrder = [

    {
        id: "entrees",
        fr: "Entrées",
        en: "Appetizers"
    },

    {
        id: "sushi",
        fr: "Sushi",
        en: "Sushi"
    },

    {
        id: "plats-chauds",
        fr: "Plats Chauds",
        en: "Hot Dishes"
    },

    {
        id: "accompagnements",
        fr: "Accompagnements",
        en: "Sides"
    },

    {
        id: "desserts",
        fr: "Desserts",
        en: "Desserts"
    },

    {
        id: "boissons",
        fr: "Boissons",
        en: "Drinks"
    }

];


/* =========================================================
   🟢 2. SOUS-CATÉGORIES
   ========================================================= */

const subcategoriesOrder = {

    "entrees": [

        {
            id: "soupes",
            fr: "Soupes",
            en: "Soups"
        },

        {
            id: "gyozas",
            fr: "Gyozas",
            en: "Gyoza",
            titleFR: "Gyozas (4 pièces)",
            titleEN: "Gyoza (4 pieces)"
        },

        {
            id: "salades",
            fr: "Salades",
            en: "Salads"
        },

        {
            id: "tartares",
            fr: "Tartares",
            en: "Tartares"
        }

    ],


    "sushi": [

        {
            id: "plateaux",
            fr: "Plateaux",
            en: "Sets"
        },

        {
            id: "sashimis",
            fr: "Sashimis",
            en: "Sashimis",
            titleFR: "Sashimis (3 pièces)",
            titleEN: "Sashimis (3 pieces)"
        },

        {
            id: "nigiris",
            fr: "Nigiris",
            en: "Nigiris",
            titleFR: "Nigiris (2 pièces)",
            titleEN: "Nigiris (2 pieces)"
        },

        {
            id: "gunkan-maki",
            fr: "Gunkan Maki",
            en: "Gunkan Maki",
            titleFR: "Gunkan Maki (2 pièces)",
            titleEN: "Gunkan Maki (2 pieces)"
        },

        {
            id: "gunkan-fusion",
            fr: "Gunkan Fusion",
            en: "Fusion Gunkan",
            titleFR: "Gunkan Fusion (2 pièces)",
            titleEN: "Fusion Gunkan (2 pieces)"
        },

        {
            id: "hosomaki",
            fr: "Hosomaki",
            en: "Hosomaki",
            titleFR: "Hosomaki (6 pièces)",
            titleEN: "Hosomaki (6 pieces)"
        },

        {
            id: "california",
            fr: "California Rolls",
            en: "California Rolls",
            titleFR: "California Rolls (4 pièces)",
            titleEN: "California Rolls (4 pieces)"
        },

        {
            id: "futomaki",
            fr: "Futomaki",
            en: "Futomaki",
            titleFR: "Futomaki (5 pièces)",
            titleEN: "Futomaki (5 pieces)"
        },

        {
            id: "rouleaux",
            fr: "Rouleaux Du Chef",
            en: "Chef's Special Rolls",
            titleFR: "Rouleaux Du Chef (9 pièces)",
            titleEN: "Chef's Special Rolls (9 pieces)"
        },

        {
            id: "green",
            fr: "Green Maki",
            en: "Green Maki",
            titleFR: "Green Maki (8 pièces)",
            titleEN: "Green Maki (8 pieces)"
        },

        {
            id: "cake",
            fr: "Sushi Cake",
            en: "Sushi Cake",
            titleFR: "Sushi Cake (4 pièces)",
            titleEN: "Sushi Cake (4 pieces)"
        },

        {
            id: "panko",
            fr: "Sushi Panko",
            en: "Sushi Panko",
            titleFR: "Sushi Panko (4 pièces)",
            titleEN: "Sushi Panko (4 pieces)"
        },

        {
            id: "crolls",
            fr: "Crunchy Rolls",
            en: "Crunchy Rolls",
            titleFR: "Crunchy Rolls (6 pièces)",
            titleEN: "Crunchy Rolls (6 pieces)"
        },

        {
            id: "cmix",
            fr: "Crunchy Mix",
            en: "Crunchy Mix",
            titleFR: "Crunchy Mix (12 pièces)",
            titleEN: "Crunchy Mix (12 pieces)"
        },

        {
            id: "garni",
            fr: "Bols de Riz Garnis",
            en: "Rice Bowls"
        },

        {
            id: "tataki",
            fr: "Spécialités Tataki",
            en: "Tataki Specials"
        },

        {
            id: "onigarazu",
            fr: "Onigarazu",
            en: "Onigarazu"
        }

    ],


    "plats-chauds": [

        {
            id: "yakitori",
            fr: "Yakitori",
            en: "Yakitori",
            titleFR: "Yakitori (2 pièces)",
            titleEN: "Yakitori (2 pieces)"
        },

        {
            id: "kushikatsu",
            fr: "Kushikatsu",
            en: "Kushikatsu",
            titleFR: "Kushikatsu (2 pièces)",
            titleEN: "Kushikatsu (2 pieces)"
        },

        {
            id: "tempura",
            fr: "Spécialités Tempura",
            en: "Tempura Specials"
        },

        {
            id: "nouilles",
            fr: "Nouilles Yakisoba",
            en: "Yakisoba Noodles"
        },

        {
            id: "pilaf",
            fr: "Riz Pilaf",
            en: "Pilaf Rice"
        },

        {
            id: "ramen",
            fr: "Soupes",
            en: "Soups"
        },

        {
            id: "donburi",
            fr: "Donburi",
            en: "Donburi"
        }

    ],


    "accompagnements": [

        {
            id: "acc",
            fr: "Riz/Salade",
            en: "Rice/Salad"
        },

        {
            id: "sauces",
            fr: "Sauces",
            en: "Sauces"
        }

    ],


    "desserts": [

        {
            id: "glaces",
            fr: "Glaces",
            en: "Ice Cream"
        },

        {
            id: "fondants",
            fr: "Fondants",
            en: "Lava Cakes"
        }

    ],


    "boissons": [

        {
            id: "boisson",
            fr: "Boissons",
            en: "Drinks"
        }

    ]

};


/* =========================================================
   🟢 3. PRODUITS
   ========================================================= */

const products = [

    {
        reference: "8",
        nameFR: "Soupe miso",
        nameEN: "Miso soup",
        descriptionFR: "Bouillon traditionnel Japonais à base de pâte miso",
        descriptionEN: "Traditional Japanese broth made from miso paste",
        price: "8,000 DT",
        image: "images/8.jpg",
        category: "entrees",
        subcategory: "soupes",
    },

    {
        reference: "9",
        nameFR: "Soupe aux nouilles udon poulet",
        nameEN: "Chicken Udon Noodle Soup",
        descriptionFR: "Nouilles épaisses dans un bouillon avec des morceaux de poulet",
        descriptionEN: "Thick noodles in a flavorful broth with pieces of chicken",
        price: "11,000 DT",
        image: "images/9.jpg",
        category: "entrees",
        subcategory: "soupes",
    },

    {
        reference: "10",
        nameFR: "Soupe miso aux nouilles crevette tempura",
        nameEN: "Miso Noodle Soup with Tempura Shrimp",
        descriptionFR: "Bouillon miso aux nouilles avec une crevette panée croustillante",
        descriptionEN: "Miso broth with noodles topped with a crispy breaded shrimp",
        price: "14,000 DT",
        image: "images/10.jpg",
        category: "entrees",
        subcategory: "soupes",
    },

    {
        reference: "10a",
        nameFR: "Soupe miso au poulpe",
        nameEN: "Octopus Miso Soup",
        descriptionFR: "Bouillon miso enrichi de morceaux de poulpe tendre",
        descriptionEN: "Miso broth enriched with tender pieces of octopus",
        price: "14,000 DT",
        image: "images/10a.jpg",
        category: "entrees",
        subcategory: "soupes",
    },

    {
        reference: "10b",
        nameFR: "Soupe miso au poisson",
        nameEN: "Fish Miso Soup",
        descriptionFR: "Bouillon miso à la daurade",
        descriptionEN: "Miso Broth with Sea Bream",
        price: "13,000 DT",
        image: "images/10b.jpg",
        category: "entrees",
        subcategory: "soupes",
    },

    {
        reference: "135a",
        nameFR: "Gyozas Poulet",
        nameEN: "Chicken Gyoza",
        descriptionFR: "Raviolis japonais grillés, farcis au poulet et gingembre (4 pièces)",
        descriptionEN: "Japanese grilled dumplings filled with chicken and ginger (4 pieces)",
        price: "9,000 DT",
        image: "images/135a.jpg",
        category: "entrees",
        subcategory: "gyozas",
    },

    {
        reference: "135b",
        nameFR: "Gyozas Bœuf",
        nameEN: "Beef Gyoza",
        descriptionFR: "Raviolis japonais grillés, farcis au bœuf et gingembre (4 pièces)",
        descriptionEN: "Japanese grilled dumplings filled with beef and ginger (4 pieces)",
        price: "12,000 DT",
        image: "images/135b.jpg",
        category: "entrees",
        subcategory: "gyozas",
    },

    {
        reference: "135c",
        nameFR: "Gyozas Crevette",
        nameEN: "Shrimp Gyozas",
        descriptionFR: "Raviolis japonais grillés, farcis aux crevettes et gingembre (4 pièces)",
        descriptionEN: "Japanese grilled dumplings filled with shrimp and ginger (4 pieces)",
        price: "14,000 DT",
        image: "images/135c.jpg",
        category: "entrees",
        subcategory: "gyozas",
    },

    {
        reference: "5",
        nameFR: "Salade d'algues wakame",
        nameEN: "Wakame Seaweed Salad",
        descriptionFR: "Algues marines japonaises assaisonnées traditionnellement",
        descriptionEN: "Traditionally seasoned Japanese seaweed",
        price: "14,000 DT",
        image: "images/5.jpg",
        category: "entrees",
        subcategory: "salades",
    },

    {
        reference: "5a",
        nameFR: "Salade d'algues wakame au poulpe",
        nameEN: "Wakame Seaweed Salad with Octopus",
        descriptionFR: "Wakame traditionnel enrichi de poulpe tendre",
        descriptionEN: "Traditional wakame seaweed with tender octopus",
        price: "22,000 DT",
        image: "images/5a.jpg",
        category: "entrees",
        subcategory: "salades",
    },

    {
        reference: "5c",
        nameFR: "Salade d'algues wakame et anguille",
        nameEN: "Wakame Seaweed Salad with Eel",
        descriptionFR: "Wakame aux légumes avec anguille grillée laquée",
        descriptionEN: "Wakame seaweed with vegetables and glazed grilled eel",
        price: "21,000 DT",
        image: "images/5c.jpg",
        category: "entrees",
        subcategory: "salades",
    },

    {
        reference: "6",
        nameFR: "Salade sashimis, vinaigrette au miso",
        nameEN: "Sashimi Salad with Miso Dressing",
        descriptionFR: "Poissons crus variés sur lit de salade, wakamé, carottes vinaigrette miso maison",
        descriptionEN: "Assorted raw fish served on a bed of lettuce, wakame seaweed, and carrots with homemade miso dressing",
        price: "29,000 DT",
        image: "images/6.jpg",
        category: "entrees",
        subcategory: "salades",
    },

    {
        reference: "7",
        nameFR: "Salade au saumon tataki, vinaigrette au miso",
        nameEN: "Tataki Salmon Salad with Miso Dressing",
        descriptionFR: "Saumon mi-cuit , graines de sésame,sur lit de salade, wakamé, carottes vinaigrette miso maison",
        descriptionEN: "Seared salmon with sesame seeds, served on a bed of lettuce, wakame seaweed, and carrots with homemade miso dressing",
        price: "32,000 DT",
        image: "images/7.jpg",
        category: "entrees",
        subcategory: "salades",
    },

    {
        reference: "1",
        nameFR: "Tartare de deux saumons au gingembre",
        nameEN: "Two-Salmon Tartare with Ginger",
        descriptionFR: "Mélange de saumon frais et fumé, parfumé au gingembre frais",
        descriptionEN: "A blend of fresh and smoked salmon, flavored with fresh ginger",
        price: "34,000 DT",
        image: "images/1.jpg",
        category: "entrees",
        subcategory: "tartares",
    },

    {
        reference: "2",
        nameFR: "Tuna Tartare with Sesame & Ginger",
        nameEN: "Tuna Tartare with Sesame & Ginger",
        descriptionFR: "Thon rouge mariné, graines de sésame et gingembre (selon arrivage)",
        descriptionEN: "Marinated bluefin tuna with sesame seeds and ginger (subject to availability)",
        price: "29,000 DT",
        image: "images/2.jpg",
        category: "entrees",
        subcategory: "tartares",
    },

    {
        reference: "3",
        nameFR: "Tartare de daurade, mangue, avocat, coriandre, zeste de citron vert",
        nameEN: "Sea Bream Tartare with Mango, Avocado, Cilantro & Lime Zest",
        descriptionFR: "Poisson blanc aux saveurs tropicales et herbes fraîches",
        descriptionEN: "White fish with tropical flavors and fresh herbs",
        price: "26,000 DT",
        image: "images/3.jpg",
        category: "entrees",
        subcategory: "tartares",
    },

    {
        reference: "4",
        nameFR: "Tartare de saumon à l'aneth, avocat et poireau",
        nameEN: "Salmon Tartare with Dill, Avocado & Leek",
        descriptionFR: "Saumon frais à l'aneth, avocat et poireau",
        descriptionEN: "Fresh salmon with dill, avocado & leek",
        price: "31,000 DT",
        image: "images/4.jpg",
        category: "entrees",
        subcategory: "tartares",
    },

    {
        reference: "81",
        nameFR: "Origamix 12 Pièces",
        nameEN: "Origamix 12-Piece Set",
        descriptionFR: "3 Futomaki, 4 California, 3 Hosomaki et 2 Nigiri",
        descriptionEN: "3 Futomaki, 4 California Rolls, 3 Hosomaki and 2 Nigiri",
        price: "35,000 DT",
        image: "images/81.jpg",
        category: "sushi",
        subcategory: "plateaux",
    },

    {
        reference: "82",
        nameFR: "Origamix 22 Pièces",
        nameEN: "Origamix 22-Piece Set",
        descriptionFR: "6 Futomaki, 6 California, 6 Hosomaki et 4 Nigiri",
        descriptionEN: "6 Futomaki, 6 California Rolls, 6 Hosomaki and 4 Nigiri",
        price: "63,000 DT",
        image: "images/82.jpg",
        category: "sushi",
        subcategory: "plateaux",
    },

    {
        reference: "83",
        nameFR: "Origamix 32 Pièces",
        nameEN: "Origamix 32-Piece Set",
        descriptionFR: "9 Futomaki, 9 California, 9 Hosomaki et 5 Nigiri",
        descriptionEN: "9 Futomaki, 9 California Rolls, 9 Hosomaki and 5 Nigiri",
        price: "90,000 DT",
        image: "images/83.jpg",
        category: "sushi",
        subcategory: "plateaux",
    },

    {
        reference: "84",
        nameFR: "Origamix 42 Pièces",
        nameEN: "Origamix 42-Piece Set",
        descriptionFR: "12 Futomaki, 12 California, 12 Hosomaki et 6 Nigiri",
        descriptionEN: "12 Futomaki, 12 California Rolls, 12 Hosomaki and 6 Nigiri",
        price: "118,000 DT",
        image: "images/84.jpg",
        category: "sushi",
        subcategory: "plateaux",
    },

    {
        reference: "85",
        nameFR: "Origamix 52 Pièces",
        nameEN: "Origamix 52-Piece Set",
        descriptionFR: "15 Futomaki, 15 California, 15 Hosomaki et 7 Nigiri",
        descriptionEN: "15 Futomaki, 15 California Rolls, 15 Hosomaki and 7 Nigiri",
        price: "144,000 DT",
        image: "images/85.jpg",
        category: "sushi",
        subcategory: "plateaux",
    },

    {
        reference: "211",
        nameFR: "Origamix 12 Pièces Saumon",
        nameEN: "Origamix 12-Piece Salmon set",
        descriptionFR: "Futomaki saumon, California saumon, Hosomaki saumon et Nigiri saumon",
        descriptionEN: "3 salmon Futomaki, 4 salmon California Rolls, 3 salmon Hosomaki and 2 salmon Nigiri",
        price: "44,000 DT",
        image: "images/211.jpg",
        category: "sushi",
        subcategory: "plateaux",
    },

    {
        reference: "212",
        nameFR: "Origamix 22 Pièces Saumon",
        nameEN: "Origamix 22-Piece Salmon Set",
        descriptionFR: "6 Futomaki saumon, 6 California saumon, 6 Hosomaki saumon et 4 Nigiri saumon",
        descriptionEN: "6 salmon Futomaki, 6 salmon California rolls, 6 salmon Hosomaki and 4 salmon Nigiri",
        price: "79,000 DT",
        image: "images/212.jpg",
        category: "sushi",
        subcategory: "plateaux",
    },

    {
        reference: "213",
        nameFR: "Origamix 32 Pièces Saumon",
        nameEN: "Origamix 32-Piece Salmon Set",
        descriptionFR: "9 Futomaki saumon, 9 California saumon, 9 Hosomaki saumon et 5 Nigiri saumon",
        descriptionEN: "9 salmon Futomaki, 9 salmon California rolls, 9 salmon Hosomaki and 5 salmon Nigiri",
        price: "114,000 DT",
        image: "images/213.jpg",
        category: "sushi",
        subcategory: "plateaux",
    },

    {
        reference: "214",
        nameFR: "Origamix 42 Pièces Saumon",
        nameEN: "Origamix 42-Piece Salmon Set",
        descriptionFR: "12 Futomaki saumon, 12 California saumon, 12 Hosomaki saumon et 6 Nigiri saumon",
        descriptionEN: "12 salmon Futomaki, 12 salmon California rolls, 12 salmon Hosomaki and 6 salmon Nigiri",
        price: "149,000 DT",
        image: "images/214.jpg",
        category: "sushi",
        subcategory: "plateaux",
    },

    {
        reference: "215",
        nameFR: "Origamix 52 Pièces Saumon",
        nameEN: "Origamix 52-Piece Salmon Set",
        descriptionFR: "15 Futomaki saumon, 15 California saumon, 15 Hosomaki saumon et 7 Nigiri saumon",
        descriptionEN: "15 salmon Futomaki, 15 salmon California rolls, 15 salmon Hosomaki and 7 salmon Nigiri",
        price: "179,000 DT",
        image: "images/215.jpg",
        category: "sushi",
        subcategory: "plateaux",
    },

    {
        reference: "11",
        nameFR: "Sashimi Thon",
        nameEN: "Tuna Sashimi",
        descriptionFR: "Tranches de Thon Rouge de Qualité Supérieure (selon arrivage)",
        descriptionEN: "Premium Bluefin Tuna Slices (subject to availability)",
        price: "12,000 DT",
        image: "images/11.jpg",
        category: "sushi",
        subcategory: "sashimis",
    },

    {
        reference: "12",
        nameFR: "Sashimi Saumon",
        nameEN: "Salmon Sashimi",
        descriptionFR: "Tranches de Saumon D'élevage Norvège",
        descriptionEN: "Norwegian Farm-Raised Salmon Slices",
        price: "15,000 DT",
        image: "images/12.jpg",
        category: "sushi",
        subcategory: "sashimis",
    },

    {
        reference: "13",
        nameFR: "Sashimi Loup",
        nameEN: "Sea Bass Sashimi",
        descriptionFR: "Tranches de Loup (Bar) de Méditerranée",
        descriptionEN: "Mediterranean Sea Bass Slices",
        price: "14,000 DT",
        image: "images/13.jpg",
        category: "sushi",
        subcategory: "sashimis",
    },

    {
        reference: "15",
        nameFR: "Sashimi Daurade",
        nameEN: "Sea Bream Sashimi",
        descriptionFR: "Tranches de Daurade Royale Fraîche",
        descriptionEN: "Fresh Gilthead Sea Bream Slices",
        price: "13,000 DT",
        image: "images/15.jpg",
        category: "sushi",
        subcategory: "sashimis",
    },

    {
        reference: "17",
        nameFR: "Nigiri Saumon",
        nameEN: "Salmon nigiri",
        descriptionFR: "Saumon Frais Sur Riz Vinaigré Traditionnel",
        descriptionEN: "Fresh Salmon on Traditional Seasoned Sushi Rice",
        price: "11,000 DT",
        image: "images/17.jpg",
        category: "sushi",
        subcategory: "nigiris",
    },

    {
        reference: "18",
        nameFR: "Nigiri Thon",
        nameEN: "Tuna Nigiri",
        descriptionFR: "Thon Rouge Frais sur Riz Vinaigré",
        descriptionEN: "Fresh Bluefin Tuna on Seasoned Sushi Rice",
        price: "9,000 DT",
        image: "images/18.jpg",
        category: "sushi",
        subcategory: "nigiris",
    },

    {
        reference: "19",
        nameFR: "Nigiri Crevette",
        nameEN: "Shrimp Nigiri",
        descriptionFR: "Crevette Cuite sur Riz Sushi",
        descriptionEN: "Cooked Shrimp on Seasoned Sushi Rice",
        price: "11,000 DT",
        image: "images/19.jpg",
        category: "sushi",
        subcategory: "nigiris",
    },

    {
        reference: "20",
        nameFR: "Nigiri Daurade",
        nameEN: "Sea Bream Nigiri",
        descriptionFR: "Daurade Royale Fraîche sur Riz Vinaigré",
        descriptionEN: "Fresh Gilthead Sea Bream on Seasoned Sushi Rice",
        price: "9,000 DT",
        image: "images/20.jpg",
        category: "sushi",
        subcategory: "nigiris",
    },

    {
        reference: "21",
        nameFR: "Nigiri Anguille",
        nameEN: "Eel Nigiri",
        descriptionFR: "Anguille Grillée et Laquée sur Riz Sushi",
        descriptionEN: "Grilled and Glazed Eel on Seasoned Sushi Rice",
        price: "10,000 DT",
        image: "images/21.jpg",
        category: "sushi",
        subcategory: "nigiris",
    },

    {
        reference: "22",
        nameFR: "Nigiri poulpe",
        nameEN: "Octopus Nigiri",
        descriptionFR: "Poulpe Tendre Cuit sur Riz",
        descriptionEN: "Tender Cooked Octopus on Seasoned Sushi Rice",
        price: "11,000 DT",
        image: "images/22.jpg",
        category: "sushi",
        subcategory: "nigiris",
    },

    {
        reference: "23",
        nameFR: "Nigiri Saumon Fumé",
        nameEN: "Smoked Salmon Nigiri",
        descriptionFR: "Saumon Fumé à Froid sur Riz Vinaigré",
        descriptionEN: "Cold-Smoked Salmon on Seasoned Sushi Rice",
        price: "12,000 DT",
        image: "images/23.jpg",
        category: "sushi",
        subcategory: "nigiris",
    },

    {
        reference: "24",
        nameFR: "Nigiri Boutargue",
        nameEN: "Bottarga Nigiri",
        descriptionFR: "Œufs de Mulet Salés et Séchés - Spécialité Méditerranéeene",
        descriptionEN: "Salted and Dried Mullet Roe – Mediterranean Specialty",
        price: "19,000 DT",
        image: "images/24.jpg",
        category: "sushi",
        subcategory: "nigiris",
    },

    {
        reference: "25",
        nameFR: "Nigiri Loup",
        nameEN: "Sea Bass Nigiri",
        descriptionFR: "Bar de Méditerranée sur Riz Sushi",
        descriptionEN: "Mediterranean Sea Bass on Seasoned Sushi Rice",
        price: "10,000 DT",
        image: "images/25.jpg",
        category: "sushi",
        subcategory: "nigiris",
    },

    {
        reference: "26",
        nameFR: "Nigiri Avocat",
        nameEN: "Avocado Nigiri",
        descriptionFR: "Option Végétarienne - Avocat Frais sur Riz",
        descriptionEN: "Vegetarian Option – Fresh Avocado on Seasoned Sushi Rice",
        price: "7,000 DT",
        image: "images/26.jpg",
        category: "sushi",
        subcategory: "nigiris",
    },

    {
        reference: "27",
        nameFR: "Tartare de Poisson Blanc à l'Aneth",
        nameEN: "White Fish Tartare with Dill",
        descriptionFR: "Poisson Blanc aux Herbes dans Nori",
        descriptionEN: "White Fish with Herbs Wrapped in Nori",
        price: "11,000 DT",
        image: "images/27.jpg",
        category: "sushi",
        subcategory: "gunkan-maki",
    },

    {
        reference: "28",
        nameFR: "Tartare de Saumon Spicy",
        nameEN: "Spicy Salmon Tartare",
        descriptionFR: "Saumon + Sauce Épicée dans Nori",
        descriptionEN: "Salmon with Spicy Sauce Wrapped in Nori",
        price: "13,000 DT",
        image: "images/28.jpg",
        category: "sushi",
        subcategory: "gunkan-maki",
    },

    {
        reference: "29",
        nameFR: "Tartare de Deux Saumons au Gingembre",
        nameEN: "Two-Salmon Tartare with Ginger",
        descriptionFR: "Mélange Saumon Frais/Fumé au Gingembre dans Nori",
        descriptionEN: "Fresh & Smoked Salmon with Ginger Wrapped in Nori",
        price: "15,000 DT",
        image: "images/29.jpg",
        category: "sushi",
        subcategory: "gunkan-maki",
    },

    {
        reference: "30",
        nameFR: "Tartare de Thon Piquant",
        nameEN: "Spicy Tuna Tartare",
        descriptionFR: "Thon Rouge Épicé dans Nori (selon arrivage)",
        descriptionEN: "Spicy Bluefin Tuna Wrapped in Nori (subject to availability)",
        price: "11,000 DT",
        image: "images/30.jpg",
        category: "sushi",
        subcategory: "gunkan-maki",
    },

    {
        reference: "33",
        nameFR: "Tartare de Daurade à La Boutarge",
        nameEN: "Sea Bream Tartare with Bottarga",
        descriptionFR: "Daurade aux Œufs de Mulet dans Nori",
        descriptionEN: "Sea Bream with Mullet Roe Wrapped in Nori",
        price: "16,000 DT",
        image: "images/33.jpg",
        category: "sushi",
        subcategory: "gunkan-maki",
    },

    {
        reference: "33b",
        nameFR: "Tartare de Thon, Sésame & Gingembre",
        nameEN: "Tuna Tartare with Sesame & Ginger",
        descriptionFR: "Thon au Sésame et Gingembre dans Nori (selon arrivage)",
        descriptionEN: "Tuna with Sesame & Ginger Wrapped in Nori (subject to availability)",
        price: "11,000 DT",
        image: "images/33b.jpg",
        category: "sushi",
        subcategory: "gunkan-maki",
    },

    {
        reference: "33c",
        nameFR: "Mango Salmon",
        nameEN: "Mango Salmon",
        descriptionFR: "Tartare de Saumon Épicé, Mangue, Flocons Crispy, Saumon",
        descriptionEN: "Spicy Salmon Tartare with Mango & Crispy Flakes, Wrapped in Salmon",
        price: "19,000 DT",
        image: "images/33c.jpg",
        category: "sushi",
        subcategory: "gunkan-fusion",
    },

    {
        reference: "33d",
        nameFR: "Strawberry Salmon",
        nameEN: "Strawberry Salmon",
        descriptionFR: "Tartare de Saumon Épicé, Fraise, Flocons Crispy, Saumon",
        descriptionEN: "Spicy Salmon Tartare with Strawberry & Crispy Flakes, Wrapped in Salmon",
        price: "19,000 DT",
        image: "images/33d.jpg",
        category: "sushi",
        subcategory: "gunkan-fusion",
    },

    {
        reference: "33e",
        nameFR: "Thai tai",
        nameEN: "Thai tai",
        descriptionFR: "Daurade Marinée, Tartare de Daurade à La Mangue",
        descriptionEN: "Marinated Sea Bream with Mango Sea Bream Tartare",
        price: "19,000 DT",
        image: "images/33e.jpg",
        category: "sushi",
        subcategory: "gunkan-fusion",
    },

    {
        reference: "33f",
        nameFR: "Spicy Maguro",
        nameEN: "Spicy Maguro",
        descriptionFR: "Tartare de Thon Épicé, Thon",
        descriptionEN: "Spicy Tuna Tartare Wrapped in Tuna",
        price: "15,000 DT",
        image: "images/33f.jpg",
        category: "sushi",
        subcategory: "gunkan-fusion",
    },

    {
        reference: "34",
        nameFR: "Maki Concombre",
        nameEN: "Cucumber Maki",
        descriptionFR: "Maki simple concombre croquant",
        descriptionEN: "Maki Filled with Crunchy Cucumber",
        price: "9,000 DT",
        image: "images/34.jpg",
        category: "sushi",
        subcategory: "hosomaki",
    },

    {
        reference: "34a",
        nameFR: "Maki Concombre Cheese",
        nameEN: "Cucumber & Cheese Maki",
        descriptionFR: "Maki Concombre au Fromage à La Crème",
        descriptionEN: "Maki Filled with Cucumber & Cream Cheese",
        price: "10,000 DT",
        image: "images/34a.jpg",
        category: "sushi",
        subcategory: "hosomaki",
    },

    {
        reference: "35",
        nameFR: "Maki Avocat",
        nameEN: "Avocado Maki",
        descriptionFR: "Maki Avocat Frais",
        descriptionEN: "Maki Filled with Fresh Avocado",
        price: "12,000",
        image: "images/35.jpg",
        category: "sushi",
        subcategory: "hosomaki",
    },

    {
        reference: "35a",
        nameFR: "Maki Avocat Cheese",
        nameEN: "Avocado & Cheese Maki",
        descriptionFR: "Maki Avocat au Fromage à La Crème",
        descriptionEN: "Maki Filled with Avocado & Cream Cheese",
        price: "13,000 DT",
        image: "images/35a.jpg",
        category: "sushi",
        subcategory: "hosomaki",
    },

    {
        reference: "36",
        nameFR: "Maki Surimi",
        nameEN: "Surimi Maki",
        descriptionFR: "Maki au Surimi de Crabe",
        descriptionEN: "Maki Filled with Crab Surimi",
        price: "10,000 DT",
        image: "images/36.jpg",
        category: "sushi",
        subcategory: "hosomaki",
    },

    {
        reference: "37",
        nameFR: "Maki Saumon",
        nameEN: "Salmon Maki",
        descriptionFR: "Maki au Saumon Frais Classique",
        descriptionEN: "Classic Maki Filled with Fresh Salmon",
        price: "16,000 DT",
        image: "images/37.jpg",
        category: "sushi",
        subcategory: "hosomaki",
    },

    {
        reference: "37a",
        nameFR: "Maki Saumon Cheese",
        nameEN: "Salmon & Cheese Maki",
        descriptionFR: "Maki Saumon au Fromage à La Crème",
        descriptionEN: "Maki Filled with Salmon & Cream Cheese",
        price: "17,000 DT",
        image: "images/37a.jpg",
        category: "sushi",
        subcategory: "hosomaki",
    },

    {
        reference: "38",
        nameFR: "Maki Thon",
        nameEN: "Tuna Maki",
        descriptionFR: "Maki Thon Rouge (selon arrivage)",
        descriptionEN: "Maki Filled with Bluefin Tuna (subject to availability)",
        price: "13,000 DT",
        image: "images/38.jpg",
        category: "sushi",
        subcategory: "hosomaki",
    },

    {
        reference: "39",
        nameFR: "Maki Saumon Épicé",
        nameEN: "Spicy Salmon Maki",
        descriptionFR: "Maki Saumon Sauce Épicée",
        descriptionEN: "Maki Filled with Salmon & Spicy Sauce",
        price: "16,000 DT",
        image: "images/39.jpg",
        category: "sushi",
        subcategory: "hosomaki",
    },

    {
        reference: "40",
        nameFR: "Maki Thon Épicé",
        nameEN: "Spicy Tuna Maki",
        descriptionFR: "Maki Shon Sauce Épicé (selon arrivage)",
        descriptionEN: "Maki Filled with Tuna & Spicy Sauce (subject to availability)",
        price: "13,000 DT",
        image: "images/40.jpg",
        category: "sushi",
        subcategory: "hosomaki",
    },

    {
        reference: "42",
        nameFR: "Maki Saumon Fumé",
        nameEN: "Smoked Salmon Maki",
        descriptionFR: "Maki au Saumon Fumé",
        descriptionEN: "Maki Filled with Smoked Salmon",
        price: "19,000 DT",
        image: "images/42.jpg",
        category: "sushi",
        subcategory: "hosomaki",
    },

    {
        reference: "42a",
        nameFR: "Maki Saumon Fumé Cheese",
        nameEN: "Smoked Salmon & Cheese Maki",
        descriptionFR: "Maki Saumon Fumé au Fromage à La Crème",
        descriptionEN: "Maki Filled with Smoked Salmon & Cream Cheese",
        price: "20,000 DT",
        image: "images/42a.jpg",
        category: "sushi",
        subcategory: "hosomaki",
    },

    {
        reference: "43",
        nameFR: "Maki Tamago",
        nameEN: "Tamago Maki",
        descriptionFR: "Maki à L'Omelette Japonaise",
        descriptionEN: "Maki Filled with Japanese Omelette",
        price: "11,000 DT",
        image: "images/43.jpg",
        category: "sushi",
        subcategory: "hosomaki",
    },

    {
        reference: "44",
        nameFR: "Maki Poulpe",
        nameEN: "Octopus Maki",
        descriptionFR: "Maki au Poulpe Cuit",
        descriptionEN: "Maki Filled with Cooked Octopus",
        price: "19,000 DT",
        image: "images/44.jpg",
        category: "sushi",
        subcategory: "hosomaki",
    },

    {
        reference: "45",
        nameFR: "Maki Anguille",
        nameEN: "Eel Maki",
        descriptionFR: "Maki à L'Anguille Grillée",
        descriptionEN: "Maki Filled with Grilled Eel",
        price: "19,000 DT",
        image: "images/45.jpg",
        category: "sushi",
        subcategory: "hosomaki",
    },

    {
        reference: "46",
        nameFR: "Maki Tartare de Poisson Blanc à La Boutargue",
        nameEN: "White Fish Tartare with Bottarga Maki",
        descriptionFR: "Maki Poisson Blanc aux Œufs de Mulet",
        descriptionEN: "Maki Filled with White Fish & Mullet Roe",
        price: "22,000 DT",
        image: "images/46.jpg",
        category: "sushi",
        subcategory: "hosomaki",
    },

    {
        reference: "47",
        nameFR: "Maki Tartare de Daurade à L'Aneth",
        nameEN: "Sea Bream Tartare Maki with Dill",
        descriptionFR: "Maki Daurade aux Herbes",
        descriptionEN: "Maki Filled with Sea Bream & Herbs",
        price: "14,000 DT",
        image: "images/47.jpg",
        category: "sushi",
        subcategory: "hosomaki",
    },
   
    {
        reference: "50",
        nameFR: "California Classic",
        nameEN: "Classic California Roll",
        descriptionFR: "Avocat, Surimi, Concombre, Mayo, Sésame",
        descriptionEN: "Avocado, Crab Surimi, Cucumber, Mayonnaise & Sesame",
        price: "10,000 DT",
        image: "images/50.jpg",
        category: "sushi",
        subcategory: "california",
    },

   
    {
        reference: "51",
        nameFR: "California Végétarien",
        nameEN: "Vegetarian California Roll",
        descriptionFR: "Avocat, Carottes, Concombre, Épinards",
        descriptionEN: "Avocado, Carrots, Cucumber & Spinach",
        price: "9,000 DT",
        image: "images/51.jpg",
        category: "sushi",
        subcategory: "california",
    },

    {
        reference: "52",
        nameFR: "Shogun",
        nameEN: "Shogun",
        descriptionFR: "Daurade Tataki, Avocats, Champignons, Laitue, Sauce au Miel, Garniture Oignons Crispy",
        descriptionEN: "Sea Bream Tataki, Avocado, Mushrooms, Lettuce, Honey Sauce & Crispy Onions",
        price: "11,000 DT",
        image: "images/52.jpg",
        category: "sushi",
        subcategory: "california",
    },

    {
        reference: "53",
        nameFR: "Spicy Maguro",
        nameEN: "Spicy Maguro",
        descriptionFR: "Thon Épicé, Coriandre. Garniture Ciboulette (selon arrivage)",
        descriptionEN: "Spicy Tuna, Cilantro & Chives (subject to availability)",
        price: "11,000 DT",
        image: "images/53.jpg",
        category: "sushi",
        subcategory: "california",
    },

    {
        reference: "54",
        nameFR: "Pacific Roll",
        nameEN: "Pacific Roll",
        descriptionFR: "Saumon Fumé, Fromage à la Crème, Aneth",
        descriptionEN: "Smoked Salmon, Cream Cheese & Dill",
        price: "13,000 DT",
        image: "images/54.jpg",
        category: "sushi",
        subcategory: "california",
    },


    {
        reference: "55",
        nameFR: "Fresh Roll",
        nameEN: "Fresh Roll",
        descriptionFR: "Crevette, Avocat, Menthe",
        descriptionEN: "Shrimp, Avocado & Mint",
        price: "12,000 DT",
        image: "images/55.jpg",
        category: "sushi",
        subcategory: "california",
    },

    {
        reference: "56",
        nameFR: "Frisco",
        nameEN: "Frisco",
        descriptionFR: "Saumon, Avocat, Fromage à la Crème",
        descriptionEN: "Salmon, Avocado & Cream Cheese",
        price: "13,000 DT",
        image: "images/56.jpg",
        category: "sushi",
        subcategory: "california",
    },

    {
        reference: "57",
        nameFR: "Bonzaï",
        nameEN: "Bonzai",
        descriptionFR: "Anguille, Mangue, Tempura, Miel. Garniture Masago",
        descriptionEN: "Eel, Mango, Tempura & Honey. Topping: Masago",
        price: "18,000 DT",
        image: "images/57.jpg",
        category: "sushi",
        subcategory: "california",
    },

    {
        reference: "58",
        nameFR: "Mikado",
        nameEN: "Mikado",
        descriptionFR: "Saumon, Avocat, Concombre",
        descriptionEN: "Salmon, Avocado & Cucumber",
        price: "13,000 DT",
        image: "images/58.jpg",
        category: "sushi",
        subcategory: "california",
    },

    {
        reference: "59",
        nameFR: "Kabayaki",
        nameEN: "Kabayaki",
        descriptionFR: "Anguille, Avocat, Tamago, Sauce Épicée",
        descriptionEN: "Eel, Avocado, Tamago & Spicy Sauce",
        price: "13,000 DT",
        image: "images/59.jpg",
        category: "sushi",
        subcategory: "california",
    },

    {
        reference: "59a",
        nameFR: "Spicy Sake Roll",
        nameEN: "Spicy Sake Roll",
        descriptionFR: "Saumon Cuit Sauce Épicée, Avocat, Tempura Shichimi",
        descriptionEN: "Cooked Salmon with Spicy Sauce, Avocado & Shichimi Tempura",
        price: "12,000 DT",
        image: "images/59a.jpg",
        category: "sushi",
        subcategory: "california",
    },

    {
        reference: "59b",
        nameFR: "Maguro Tataki Roll",
        nameEN: "Maguro Tataki Roll",
        descriptionFR: "Thon Tataki, Roquette, Avocat (selon arrivage)",
        descriptionEN: "Tuna Tataki, Arugula & Avocado (subject to availability)",
        price: "12,000 DT",
        image: "images/59b.jpg",
        category: "sushi",
        subcategory: "california",
    },

    {
        reference: "59c",
        nameFR: "YUBA",
        nameEN: "YUBA",
        descriptionFR: "Crevette Tempura, Avocat. Garniture Sésame",
        descriptionEN: "Tempura Shrimp, Avocado. Topping: Sesame",
        price: "16,000 DT",
        image: "images/59c.jpg",
        category: "sushi",
        subcategory: "california",
    },

    {
        reference: "60",
        nameFR: "Ebi Maki",
        nameEN: "Ebi Maki",
        descriptionFR: "Crevette Tempura, Avocat, Concombre",
        descriptionEN: "Tempura Shrimp, Avocado & Cucumber",
        price: "16,000 DT",
        image: "images/60.jpg",
        category: "sushi",
        subcategory: "futomaki",
    },

    {
        reference: "61",
        nameFR: "B52",
        nameEN: "B52",
        descriptionFR: "Thon, Sauce Épicée, Avocat, Concombre, Tempura (selon arrivage)",
        descriptionEN: "Tuna, Spicy Sauce, Avocado, Cucumber & Tempura (subject to availability)",
        price: "15,000 DT",
        image: "images/61.jpg",
        category: "sushi",
        subcategory: "futomaki",
    },

    {
        reference: "62",
        nameFR: "Kamikaze",
        nameEN: "Kamikaze",
        descriptionFR: "Saumon, Sauce Épicée, Avocat, Concombre, Tempura",
        descriptionEN: "Salmon, Spicy Sauce, Avocado, Cucumber & Tempura",
        price: "17,000 DT",
        image: "images/62.jpg",
        category: "sushi",
        subcategory: "futomaki",
    },

    {
        reference: "63",
        nameFR: "Fuji",
        nameEN: "Fuji",
        descriptionFR: "Daurade Tempura, Laitue, Mayo aux Fines Herbes",
        descriptionEN: "Tempura Sea Bream, Lettuce & Herb Mayonnaise",
        price: "14,000 DT",
        image: "images/63.jpg",
        category: "sushi",
        subcategory: "futomaki",
    },

    {
        reference: "64",
        nameFR: "Hara Kiri",
        nameEN: "Hara Kiri",
        descriptionFR: "Tartare de Thon Épicé, Sauce Épicée, Avocat, Concombre, Tempura (selon arrivage)",
        descriptionEN: "Spicy Tuna Tartare, Spicy Sauce, Avocado, Cucumber & Tempura (subject to availability)",
        price: "14,000 DT",
        image: "images/64.jpg",
        category: "sushi",
        subcategory: "futomaki",
    },

    {
        reference: "65",
        nameFR: "Geisha",
        nameEN: "Geisha",
        descriptionFR: "Saumon, Mangue, Épinard, Tamago, Avocat",
        descriptionEN: "Salmon, Mango, Spinach, Tamago & Avocado",
        price: "18,000 DT",
        image: "images/65.jpg",
        category: "sushi",
        subcategory: "futomaki",
    },

    {
        reference: "66",
        nameFR: "Smoky",
        nameEN: "Smoky",
        descriptionFR: "Saumon Fumé, Sauce Épicée, Avocat, Concombre, Tempura",
        descriptionEN: "Smoked Salmon, Spicy Sauce, Avocado, Cucumber & Tempura",
        price: "19,000 DT",
        image: "images/66.jpg",
        category: "sushi",
        subcategory: "futomaki",
    },

    {
        reference: "67",
        nameFR: "Mikaza",
        nameEN: "Mikaza",
        descriptionFR: "Crevette, Avocat, Fraise, Mangue, Miel, Fromage à la Crème",
        descriptionEN: "Shrimp, Avocado, Strawberry, Mango, Honey & Cream Cheese",
        price: "22,000 DT",
        image: "images/67.jpg",
        category: "sushi",
        subcategory: "futomaki",
    },

    {
        reference: "68",
        nameFR: "Fresh Salmon Roll",
        nameEN: "Fresh Salmon Roll",
        descriptionFR: "Saumon, Avocat, Concombre, Laitue, Fromage à la Crème",
        descriptionEN: "Salmon, Avocado, Cucumber, Lettuce & Cream Cheese",
        price: "18,000 DT",
        image: "images/68.jpg",
        category: "sushi",
        subcategory: "futomaki",
    },

    {
        reference: "69",
        nameFR: "Mai Thai",
        nameEN: "Mai Thai",
        descriptionFR: "Loup Mariné Façon Thaï, Mangue, Coriandre, Concombre",
        descriptionEN: "Thai-Style Marinated Sea Bass, Mango, Cilantro & Cucumber",
        price: "15,000 DT",
        image: "images/69.jpg",
        category: "sushi",
        subcategory: "futomaki",
    },

    {
        reference: "69a",
        nameFR: "Boreal",
        nameEN: "Boreal",
        descriptionFR: "Saumon Cuit Épicé, Avocat, Concombre, Laitue",
        descriptionEN: "Spicy Cooked Salmon, Avocado, Cucumber & Lettuce",
        price: "16,000 DT",
        image: "images/69a.jpg",
        category: "sushi",
        subcategory: "futomaki",
    },

    {
        reference: "69b",
        nameFR: "Iceberg",
        nameEN: "Iceberg",
        descriptionFR: "Surimi, Avocat, Concombre, Mayo",
        descriptionEN: "Crab Surimi, Avocado, Cucumber & Mayonnaise",
        price: "13,000 DT",
        image: "images/69b.jpg",
        category: "sushi",
        subcategory: "futomaki",
    },

    {
        reference: "69c",
        nameFR: "Cesar",
        nameEN: "Caesar",
        descriptionFR: "Poulet Pané, Laitue, Sauce Parmesan",
        descriptionEN: "Breaded Chicken, Lettuce & Parmesan Sauce",
        price: "13,000 DT",
        image: "images/69c.jpg",
        category: "sushi",
        subcategory: "futomaki",
    },

    {
        reference: "69d",
        nameFR: "Appuro Maki",
        nameEN: "Appuro Maki",
        descriptionFR: "Saumon Fumé, Pomme Verte, Câpres, Aneth, Avocat",
        descriptionEN: "Smoked Salmon, Green Apple, Capers, Dill & Avocado",
        price: "20,000 DT",
        image: "images/69d.jpg",
        category: "sushi",
        subcategory: "futomaki",
    },

    {
        reference: "69e",
        nameFR: "Keijan Roll",
        nameEN: "Keijan Roll",
        descriptionFR: "Crevettes Grillées Épicées, Avocats, Oignons",
        descriptionEN: "Spicy Grilled Shrimp, Avocado & Onions",
        price: "15,000 DT",
        image: "images/69e.jpg",
        category: "sushi",
        subcategory: "futomaki",
    },

    {
        reference: "70",
        nameFR: "Origami",
        nameEN: "Origami",
        descriptionFR: "Saumon Épicé, Mangue, Tempura. Garniture Masago",
        descriptionEN: "Spicy Salmon, Mango & Tempura. Topping: Masago",
        price: "46,000 DT",
        image: "images/70.jpg",
        category: "sushi",
        subcategory: "rouleaux",
    },

    {
        reference: "71",
        nameFR: "Suki Sushi",
        nameEN: "Suki Sushi",
        descriptionFR: "Tartare de Thon Épicé, Poireaux, Sauce Épicée, Pignons, Fraise, Tempura. Garniture Masago (selon arrivage)",
        descriptionEN: "Spicy Tuna Tartare, Leeks, Spicy Sauce, Pine Nuts, Strawberry & Tempura. Topping: Masago (subject to availability)",
        price: "39,000 DT",
        image: "images/71.jpg",
        category: "sushi",
        subcategory: "rouleaux",
    },

    {
        reference: "72",
        nameFR: "Rainbow",
        nameEN: "Rainbow",
        descriptionFR: "Concombre, Avocat. Garniture Saumon, Thon & Poisson Blanc",
        descriptionEN: "Cucumber, Avocado. Topping: Salmon, Tuna & White Fish",
        price: "29,000 DT",
        image: "images/72.jpg",
        category: "sushi",
        subcategory: "rouleaux",
    },

    {
        reference: "73",
        nameFR: "Unagi Roll",
        nameEN: "Unagi Roll",
        descriptionFR: "Concombre, Avocat. Garniture Anguille Grillée & Sésame",
        descriptionEN: "Cucumber, Avocado. Topping: Grilled Eel & Sesame",
        price: "39,000 DT",
        image: "images/73.jpg",
        category: "sushi",
        subcategory: "rouleaux",
    },

    {
        reference: "74",
        nameFR: "Sweet Roll",
        nameEN: "Sweet Roll",
        descriptionFR: "Crevette, Avocat, Poire, Sauce au Miel. Garniture Sésame",
        descriptionEN: "Shrimp, Avocado, Pear, Honey Sauce. Topping: Sesame",
        price: "34,000 DT",
        image: "images/74.jpg",
        category: "sushi",
        subcategory: "rouleaux",
    },

    {
        reference: "75",
        nameFR: "Tentation",
        nameEN: "Tentation",
        descriptionFR: "Tartare de Saumon Piquant, Fraise. Garniture Tempura",
        descriptionEN: "Spicy Salmon Tartare, Strawberry. Topping: Tempura",
        price: "32,000 DT",
        image: "images/75.jpg",
        category: "sushi",
        subcategory: "rouleaux",
    },

    {
        reference: "76",
        nameFR: "French Touch",
        nameEN: "French Touch",
        descriptionFR: "Foie Gras, Confiture de Figue. Garniture Amandes Grillées & Oignons Confits",
        descriptionEN: "Foie Gras, Fig Jam. Topping: Toasted Almonds & Caramelized Onions",
        price: "48,000 DT",
        image: "images/76.jpg",
        category: "sushi",
        subcategory: "rouleaux",
    },

    {
        reference: "77",
        nameFR: "Dragon Eye",
        nameEN: "Dragon Eye",
        descriptionFR: "Anguille Grillée, Sauce Anguille, Concombre. Garniture Avocat, Sauce Épicée",
        descriptionEN: "Grilled Eel, Eel Sauce, Cucumber. Topping: Avocado & Spicy Sauce",
        price: "39,000 DT",
        image: "images/77.jpg",
        category: "sushi",
        subcategory: "rouleaux",
    },

    {
        reference: "78",
        nameFR: "Tahiti",
        nameEN: "Tahiti",
        descriptionFR: "Tartare de Daurade, Mangue, Zeste de Citron Vert. Garniture Masago",
        descriptionEN: "Sea Bream Tartare, Mango, Lime Zest. Topping: Masago",
        price: "37,000 DT",
        image: "images/78.jpg",
        category: "sushi",
        subcategory: "rouleaux",
    },

    {
        reference: "79",
        nameFR: "Nautilus",
        nameEN: "Nautilus",
        descriptionFR: "Tartare de Deux Saumons au Gingembre, Pignons, Mayo Wasabi. Garniture Coriandre",
        descriptionEN: "Two-Salmon Tartare with Ginger, Pine Nuts & Wasabi Mayonnaise. Topping: Cilantro",
        price: "38,000 DT",
        image: "images/79.jpg",
        category: "sushi",
        subcategory: "rouleaux",
    },

    {
        reference: "80",
        nameFR: "Spicy Ebi Tempura",
        nameEN: "Spicy Ebi Tempura",
        descriptionFR: "Crevettes Tempura, Sauce Épicée, Concombre. Garniture Shichimi",
        descriptionEN: "Tempura Shrimp, Spicy Sauce, Cucumber. Topping: Shichimi",
        price: "33,000 DT",
        image: "images/80.jpg",
        category: "sushi",
        subcategory: "rouleaux",
    },

    {
        reference: "125",
        nameFR: "Chicken Shack",
        nameEN: "Chicken Shack",
        descriptionFR: "Poulet Tempura, Sauce Épicée, Concombre. Garniture Shichimi",
        descriptionEN: "Tempura Chicken, Spicy Sauce, Cucumber. Topping: Shichimi",
        price: "26,000 DT",
        image: "images/125.jpg",
        category: "sushi",
        subcategory: "rouleaux",
    },

    {
        reference: "126",
        nameFR: "Spicy Salmon Tempura",
        nameEN: "Spicy Salmon Tempura",
        descriptionFR: "Saumon Tempura, Sauce Épicée, Concombre. Garniture Shichimi",
        descriptionEN: "Tempura Salmon, Spicy Sauce, Cucumber. Topping: Shichimi",
        price: "34,000 DT",
        image: "images/126.jpg",
        category: "sushi",
        subcategory: "rouleaux",
    },

    {
        reference: "127",
        nameFR: "Sunrise",
        nameEN: "Sunrise",
        descriptionFR: "Saumon, Avocat, Fromage à la Crème. Garniture Saumon & Avocat",
        descriptionEN: "Salmon, Avocado & Cream Cheese. Topping: Salmon & Avocado",
        price: "34,000 DT",
        image: "images/127.jpg",
        category: "sushi",
        subcategory: "rouleaux",
    },

    {
        reference: "129",
        nameFR: "Ebi Toryufu Roll",
        nameEN: "Ebi Toryufu Roll",
        descriptionFR: "Crevette Grillée, Avocat, Sauce aux Truffes, Oignons Verts. Crispy Onions",
        descriptionEN: "Grilled Shrimp, Avocado, Truffle Sauce & Green Onions. Crispy Onions",
        price: "31,000 DT",
        image: "images/129.jpg",
        category: "sushi",
        subcategory: "rouleaux",
    },

    {
        reference: "130",
        nameFR: "Midori",
        nameEN: "Midori",
        descriptionFR: "Crevette Tempura, Avocat. Garniture Avocat",
        descriptionEN: "Tempura Shrimp, Avocado. Topping: Avocado",
        price: "37,000 DT",
        image: "images/130.jpg",
        category: "sushi",
        subcategory: "rouleaux",
    },

    {
        reference: "131",
        nameFR: "Sakura",
        nameEN: "Sakura",
        descriptionFR: "Crevette Tempura, Fromage à la Crème, Tomates Séchées. Garniture Oignons Confits",
        descriptionEN: "Tempura Shrimp, Cream Cheese & Sun-Dried Tomatoes. Topping: Caramelized Onions",
        price: "35,000 DT",
        image: "images/131.jpg",
        category: "sushi",
        subcategory: "rouleaux",
    },

    {
        reference: "132",
        nameFR: "Kobe Roll",
        nameEN: "Kobe Roll",
        descriptionFR: "Bœuf Teriyaki, Oignons, Poivre Moulu. Garniture Coriandre & Tempura",
        descriptionEN: "Teriyaki Beef, Onions, Ground Pepper. Topping: Cilantro & Tempura",
        price: "33,000 DT",
        image: "images/132.jpg",
        category: "sushi",
        subcategory: "rouleaux",
    },

    {
        reference: "133",
        nameFR: "Tokyo Roll",
        nameEN: "Tokyo Roll",
        descriptionFR: "Tartare de Thon, Sésame & Gingembre. Garniture Sésame & Coriandre (selon arrivage)",
        descriptionEN: "Tuna Tartare with Sesame & Ginger. Topping: Sesame & Cilantro (subject to availability)",
        price: "30,000 DT",
        image: "images/133.jpg",
        category: "sushi",
        subcategory: "rouleaux",
    },

    {
        reference: "220",
        nameFR: "Ebi Tempura",
        nameEN: "Ebi Tempura",
        descriptionFR: "Crevette Tempura, Avocat, Sauce Tonkatsu",
        descriptionEN: "Tempura Shrimp, Avocado & Tonkatsu Sauce",
        price: "25,000 DT",
        image: "images/220.jpg",
        category: "sushi",
        subcategory: "green",
    },

    {
        reference: "221",
        nameFR: "Saigon",
        nameEN: "Saigon",
        descriptionFR: "Crevette Pochée, Menthe, Carotte, Concombre, Sweet Chili",
        descriptionEN: "Poached Shrimp, Mint, Carrot, Cucumber & Sweet Chili Sauce",
        price: "25,000 DT",
        image: "images/221.jpg",
        category: "sushi",
        subcategory: "green",
    },

];


/* =========================================================
   TRADUCTIONS
   ========================================================= */

const translations = {

    fr: {

        searchPlaceholder:
            "Rechercher un plat...",

        all:
            "Tout",

        noResults:
            "Aucun résultat",

        noResultsDescription:
            "Aucun produit ne correspond à votre recherche."

    },

    en: {

        searchPlaceholder:
            "Search for a dish...",

        all:
            "All",

        noResults:
            "No results",

        noResultsDescription:
            "No product matches your search."

    }

};


/* =========================================================
   VARIABLES
   ========================================================= */

let currentLanguage = "fr";

let currentCategory = "all";

let currentSearch = "";


/* =========================================================
   COULEURS PAR CATÉGORIE
   ========================================================= */

const categoryColors = {

    all: "#ea1b24",

    entrees: "#a1c89d",

    sushi: "#df646c",

    "plats-chauds": "#e39f77",

    accompagnements: "#e1c57f",

    desserts: "#e29cc1",

    boissons: "#8badd8"

};


/* =========================================================
   COULEUR DE TEXTE LISIBLE SELON LE FOND
   ========================================================= */

function getContrastTextColor(hexColor) {

    const hex =
        hexColor.replace("#", "");

    const r =
        parseInt(hex.substring(0, 2), 16);

    const g =
        parseInt(hex.substring(2, 4), 16);

    const b =
        parseInt(hex.substring(4, 6), 16);

    const brightness =
        (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 150
        ? "#1a1a1a"
        : "#ffffff";

}


/* =========================================================
   ÉLÉMENTS HTML
   ========================================================= */

const languageScreen =
    document.getElementById(
        "languageScreen"
    );

const menuApp =
    document.getElementById(
        "menuApp"
    );

const languageSwitcher =
    document.getElementById(
        "languageSwitcher"
    );

const languageChoices =
    document.querySelectorAll(
        ".language-choice"
    );

const categoryNavigation =
    document.getElementById(
        "categoryNavigation"
    );

const subcategoryNavigation =
    document.getElementById(
        "subcategoryNavigation"
    );

const productsContainer =
    document.getElementById(
        "productsContainer"
    );

const searchInput =
    document.getElementById(
        "searchInput"
    );

const clearSearch =
    document.getElementById(
        "clearSearch"
    );

const noResults =
    document.getElementById(
        "noResults"
    );

const menuTitle =
    document.getElementById(
        "menuTitle"
    );


const currentYear =
    document.getElementById(
        "currentYear"
    );


/* =========================================================
   INITIALISATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document.documentElement.classList.add(
            "no-scroll"
        );

        const savedLanguage =
            localStorage.getItem(
                "origamiLanguage"
            );

        currentYear.textContent =
            new Date().getFullYear();

        setupEventListeners();

        if (
            savedLanguage === "fr" ||
            savedLanguage === "en"
        ) {

            currentLanguage =
                savedLanguage;

            showMenu();

        }

    }
);


/* =========================================================
   ÉVÉNEMENTS
   ========================================================= */

function setupEventListeners() {

    languageChoices.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const selectedLanguage =
                        button.dataset.language;

                    currentLanguage =
                        selectedLanguage;

                    showMenu();

                }
            );

        }
    );


    languageSwitcher.addEventListener(
        "click",
        () => {

            const newLanguage =

                currentLanguage === "fr"

                    ? "en"

                    : "fr";

            setLanguage(
                newLanguage
            );

        }
    );


    searchInput.addEventListener(
        "input",
        event => {

            currentSearch =

                event.target.value
                    .toLowerCase()
                    .trim();

            updateClearButton();

            renderProducts();

        }
    );


    clearSearch.addEventListener(
        "click",
        () => {

            searchInput.value =
                "";

            currentSearch =
                "";

            updateClearButton();

            renderProducts();

        }
    );

}


/* =========================================================
   CHANGER LA LANGUE
   ========================================================= */

function setLanguage(language) {

    currentLanguage =
        language;

    localStorage.setItem(
        "origamiLanguage",
        language
    );

    languageSwitcher.textContent =

        language === "fr"

            ? "🇫🇷 FR"

            : "🇬🇧 EN";

    updateInterfaceTexts();

    renderCategories();

    renderSubcategories();

    renderProducts();

}


/* =========================================================
   AFFICHER LE MENU
   ========================================================= */

function showMenu() {

    document.documentElement.classList.remove(
        "no-scroll"
    );

    languageScreen.classList.add(
        "hidden"
    );

    menuApp.classList.remove(
        "hidden"
    );

    setLanguage(
        currentLanguage
    );

}


/* =========================================================
   TEXTES INTERFACE
   ========================================================= */

function updateInterfaceTexts() {

    menuTitle.textContent =

        currentLanguage === "fr"

            ? "Notre Menu"

            : "Our Menu";

    searchInput.placeholder =

        translations[
            currentLanguage
        ].searchPlaceholder;

    const noResultsTitle =
        noResults.querySelector(
            "h2"
        );

    const noResultsText =
        noResults.querySelector(
            "p"
        );

    noResultsTitle.textContent =

        translations[
            currentLanguage
        ].noResults;

    noResultsText.textContent =

        translations[
            currentLanguage
        ].noResultsDescription;

}


/* =========================================================
   TROUVER UNE CATÉGORIE
   ========================================================= */

function getCategory(categoryId) {

    return categoriesOrder.find(
        category =>

            category.id ===
            categoryId
    );

}


/* =========================================================
   AFFICHER CATÉGORIES PRINCIPALES
   ========================================================= */

function renderCategories() {

    categoryNavigation.innerHTML =
        "";

    const allButton =

        createCategoryButton(

            "all",

            translations[
                currentLanguage
            ].all

        );

    categoryNavigation.appendChild(
        allButton
    );


    categoriesOrder.forEach(
        category => {

            const hasProducts =

                products.some(
                    product =>

                        product.category ===
                        category.id
                );

            if (
                !hasProducts
            ) {

                return;

            }

            const button =

                createCategoryButton(

                    category.id,

                    category[
                        currentLanguage
                    ]

                );

            categoryNavigation.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   CRÉER BOUTON CATÉGORIE
   ========================================================= */

function createCategoryButton(
    category,
    label
) {

    const button =
        document.createElement(
            "button"
        );

    button.className =
        "category-button";

    button.textContent =
        label;


    if (
        currentCategory === category
    ) {

        button.classList.add(
            "active"
        );

        const activeColor =

            categoryColors[category] ||
            categoryColors.all;

        button.style.backgroundColor =
            activeColor;

        button.style.borderColor =
            activeColor;

        button.style.color =
            getContrastTextColor(
                activeColor
            );

    }


    button.addEventListener(
        "click",
        () => {

            currentCategory =
                category;

            renderCategories();

            renderSubcategories();

            renderProducts();

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );


    return button;

}


/* =========================================================
   AFFICHER LES SOUS-CATÉGORIES
   ========================================================= */

function renderSubcategories() {

    subcategoryNavigation.innerHTML =
        "";


    if (
        currentCategory === "all"
    ) {

        subcategoryNavigation.classList.add(
            "hidden"
        );

        return;

    }


    const subcategories =

        subcategoriesOrder[
            currentCategory
        ] || [];


    if (
        subcategories.length === 0
    ) {

        subcategoryNavigation.classList.add(
            "hidden"
        );

        return;

    }


    subcategoryNavigation.classList.remove(
        "hidden"
    );


    const accentColor =

        categoryColors[currentCategory] ||
        categoryColors.all;


    subcategoryNavigation.style.setProperty(
        "--cat-accent",
        accentColor
    );


    /* =====================================================
       BOUTON "TOUT"
       ===================================================== */

    const allButton =
        document.createElement(
            "button"
        );

    allButton.className =
        "subcategory-button active";

    allButton.textContent =

        translations[
            currentLanguage
        ].all;


    allButton.addEventListener(
        "click",
        () => {

            /*
               On force "Tout" à devenir
               le seul bouton actif.
            */

            setActiveSubcategory(
                allButton
            );


            const categoryTitle =

                document.querySelector(
                    `.category-title[data-category="${currentCategory}"]`
                );


            if (
                categoryTitle
            ) {

                scrollToElement(
                    categoryTitle
                );

            }

        }
    );


    subcategoryNavigation.appendChild(
        allButton
    );


    /* =====================================================
       AUTRES SOUS-CATÉGORIES
       ===================================================== */

    subcategories.forEach(
        subcategory => {

            const hasProducts =

                products.some(
                    product =>

                        product.category ===
                        currentCategory &&

                        product.subcategory ===
                        subcategory.id
                );


            if (
                !hasProducts
            ) {

                return;

            }


            const button =

                document.createElement(
                    "button"
                );


            button.className =
                "subcategory-button";


            button.textContent =

                subcategory[
                    currentLanguage
                ];


            button.dataset.target =

                `${currentCategory}-${subcategory.id}`;


            button.addEventListener(
                "click",
                () => {

                    const target =

                        document.getElementById(

                            `subcategory-${currentCategory}-${subcategory.id}`

                        );


                    if (
                        target
                    ) {

                        scrollToElement(
                            target
                        );


                        setActiveSubcategory(
                            button
                        );

                    }

                }
            );


            subcategoryNavigation.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   SCROLL VERS UNE SOUS-CATÉGORIE
   ========================================================= */

function scrollToElement(element) {

    const subcategoryBar =
        document.querySelector(
            ".subcategory-navigation"
        );


    if (
        !subcategoryBar ||
        !element
    ) {

        return;

    }


    const elementTop =
        element.getBoundingClientRect().top +
        window.scrollY;


    const barHeight =
        subcategoryBar.getBoundingClientRect().height;


    const targetPosition =
        elementTop -
        barHeight -
        10;


    window.scrollTo({

        top:
            Math.max(
                0,
                targetPosition
            ),

        behavior:
            "smooth"

    });

}


/* =========================================================
   ACTIVER UNE SOUS-CATÉGORIE
   ========================================================= */

function setActiveSubcategory(
    activeButton
) {

    const buttons =

        subcategoryNavigation.querySelectorAll(
            ".subcategory-button"
        );


    buttons.forEach(
        button => {

            button.classList.remove(
                "active"
            );

            /*
               On retire également les styles
               inline éventuellement ajoutés.
            */

            button.style.backgroundColor =
                "";

            button.style.borderColor =
                "";

            button.style.color =
                "";

        }
    );


    activeButton.classList.add(
        "active"
    );

}


/* =========================================================
   FILTRER LES PRODUITS
   ========================================================= */

function getFilteredProducts() {

    return products.filter(
        product => {

            const matchesCategory =

                currentCategory === "all" ||

                product.category ===
                currentCategory;


            const nameFR =

                product.nameFR
                    .toLowerCase();


            const nameEN =

                product.nameEN
                    .toLowerCase();


            const descriptionFR =

                product.descriptionFR
                    .toLowerCase();


            const descriptionEN =

                product.descriptionEN
                    .toLowerCase();


            const reference =

                product.reference
                    .toLowerCase();


            const matchesSearch =

                nameFR.includes(
                    currentSearch
                ) ||

                nameEN.includes(
                    currentSearch
                ) ||

                descriptionFR.includes(
                    currentSearch
                ) ||

                descriptionEN.includes(
                    currentSearch
                ) ||

                reference.includes(
                    currentSearch
                );


            return (

                matchesCategory &&

                matchesSearch

            );

        }
    );

}


/* =========================================================
   AFFICHER LES PRODUITS
   ========================================================= */

function renderProducts() {

    productsContainer.innerHTML =
        "";


    const filteredProducts =
        getFilteredProducts();


    if (
        filteredProducts.length === 0
    ) {

        noResults.classList.remove(
            "hidden"
        );

        return;

    }


    noResults.classList.add(
        "hidden"
    );


    if (
        currentCategory === "all"
    ) {

        categoriesOrder.forEach(
            category => {

                renderCategory(

                    category.id,

                    filteredProducts

                );

            }
        );


    } else {

        renderCategory(

            currentCategory,

            filteredProducts

        );

    }

}


/* =========================================================
   AFFICHER UNE CATÉGORIE
   ========================================================= */

function renderCategory(
    categoryId,
    productList
) {

    const category =
        getCategory(
            categoryId
        );


    if (
        !category
    ) {

        return;

    }


    const categoryProducts =

        productList.filter(
            product =>

                product.category ===
                categoryId
        );


    if (
        categoryProducts.length === 0
    ) {

        return;

    }


    const categoryTitle =
        document.createElement(
            "h2"
        );


    categoryTitle.className =
        "category-title";


    categoryTitle.dataset.category =
        categoryId;


    categoryTitle.textContent =

        category[
            currentLanguage
        ];


    productsContainer.appendChild(
        categoryTitle
    );


    const orderedSubcategories =

        subcategoriesOrder[
            categoryId
        ] || [];


    orderedSubcategories.forEach(
        subcategory => {

            const subcategoryProducts =

                categoryProducts.filter(
                    product =>

                        product.subcategory ===
                        subcategory.id
                );


            if (
                subcategoryProducts.length === 0
            ) {

                return;

            }


            const subcategoryTitle =
                document.createElement(
                    "h3"
                );


            subcategoryTitle.className =
                "subcategory-title";


            subcategoryTitle.id =

                `subcategory-${categoryId}-${subcategory.id}`;


            const subcategoryColor =

                categoryColors[categoryId] ||
                categoryColors.all;


            subcategoryTitle.style.color =
                subcategoryColor;


            subcategoryTitle.style.borderLeftColor =
                subcategoryColor;


            subcategoryTitle.textContent =

                currentLanguage === "fr"

                    ? (
                        subcategory.titleFR ||
                        subcategory.fr
                    )

                    : (
                        subcategory.titleEN ||
                        subcategory.en
                    );


            productsContainer.appendChild(
                subcategoryTitle
            );


            const grid =

                createProductGrid(

                    subcategoryProducts

                );


            productsContainer.appendChild(
                grid
            );

        }
    );

}


/* =========================================================
   CRÉER GRILLE PRODUITS
   ========================================================= */

function createProductGrid(
    productList
) {

    const grid =
        document.createElement(
            "div"
        );


    grid.className =
        "products-grid";


    productList.forEach(
        product => {

            const card =

                createProductCard(
                    product
                );


            grid.appendChild(
                card
            );

        }
    );


    return grid;

}


/* =========================================================
   CRÉER CARTE PRODUIT
   ========================================================= */

function createProductCard(
    product
) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "product-card";


    const productName =

        currentLanguage === "fr"

            ? product.nameFR

            : product.nameEN;


    const productDescription =

        currentLanguage === "fr"

            ? product.descriptionFR

            : product.descriptionEN;


    const descriptionHTML =

        productDescription

            ? `
                <p class="product-description">
                    ${productDescription}
                </p>
            `

            : "";


    card.innerHTML = `

        <div class="product-image-container">

            <img

                class="product-image"

                src="${product.image}"

                alt="${productName}"

                loading="lazy"

                onerror="this.style.display='none'"

            >

        </div>


        <div class="product-info">

            <h3 class="product-name">

                <span class="product-reference">[${product.reference}]</span> ${productName}

            </h3>


            ${descriptionHTML}


            <div class="product-price">

                ${product.price}

            </div>

        </div>

    `;


    return card;

}


/* =========================================================
   BOUTON EFFACER RECHERCHE
   ========================================================= */

function updateClearButton() {

    if (
        currentSearch.length > 0
    ) {

        clearSearch.style.display =
            "block";

    } else {

        clearSearch.style.display =
            "none";

    }

}
