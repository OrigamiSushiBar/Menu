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
        image: "no.png",
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
        image: "no.png",
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

    {
        reference: "222",
        nameFR: "Green Sake",
        nameEN: "Green Sake",
        descriptionFR: "Saumon, Cheese, Avocat, Menthe",
        descriptionEN: "Salmon, Cream Cheese, Avocado & Mint",
        price: "26,000 DT",
        image: "images/222.jpg",
        category: "sushi",
        subcategory: "green",
    },

    {
        reference: "223",
        nameFR: "Macao",
        nameEN: "Macao",
        descriptionFR: "Tartare de Saumon Épicé, Flocons Tempura, Poireau",
        descriptionEN: "Spicy Salmon Tartare, Tempura Flakes & Leek",
        price: "27,000 DT",
        image: "images/223.jpg",
        category: "sushi",
        subcategory: "green",
    },

    {
        reference: "161",
        nameFR: "Sushi Cake Tartare de Saumon Piquant Poireaux",
        nameEN: "Spicy Salmon Tartare & Leek Sushi Cake",
        descriptionFR: "Canapés de Riz Grillé, Tartare de Saumon Épicé",
        descriptionEN: "Grilled Rice Canapés with Spicy Salmon Tartare",
        price: "23,000 DT",
        image: "images/161.jpg",
        category: "sushi",
        subcategory: "cake",
    },

    {
        reference: "162",
        nameFR: "Sushi Cake Tartare de Deux Saumons",
        nameEN: "Two-Salmon Tartare Sushi Cake",
        descriptionFR: "Canapés de Riz Grillé, Tartare de Saumon & Saumon Fumé",
        descriptionEN: "Grilled Rice Canapés with Salmon Tartare & Smoked Salmon",
        price: "26,000 DT",
        image: "images/162.jpg",
        category: "sushi",
        subcategory: "cake",
    },

    {
        reference: "163",
        nameFR: "Sushi Cake Tartare de Thon Piquant",
        nameEN: "Spicy Tuna Tartare Sushi Cake",
        descriptionFR: "Canapés de Riz Grillé, Tartare de Thon Épicé (selon arrivage)",
        descriptionEN: "Grilled Rice Canapés with Spicy Tuna Tartare (subject to availability)",
        price: "21,000 DT",
        image: "images/163.jpg",
        category: "sushi",
        subcategory: "cake",
    },

    {
        reference: "165",
        nameFR: "Sushi Cake Saumon Fumé & Fromage à la Crème",
        nameEN: "Smoked Salmon & Cream Cheese Sushi Cake",
        descriptionFR: "Canapés de Riz Grillé, Saumon Fumé & Fromage à la Crème",
        descriptionEN: "Grilled Rice Canapés with Smoked Salmon & Cream Cheese",
        price: "26,000 DT",
        image: "images/165.jpg",
        category: "sushi",
        subcategory: "cake",
    },

    {
        reference: "261",
        nameFR: "Sushi Panko Tartare de Saumon Piquant Poireaux",
        nameEN: "Spicy Salmon Tartare & Leek Sushi Panko",
        descriptionFR: "Canapés de Riz Pané au Panko, Tartare de Saumon Épicé",
        descriptionEN: "Panko-Crusted Rice Canapés with Spicy Salmon Tartare",
        price: "26,000 DT",
        image: "images/261.jpg",
        category: "sushi",
        subcategory: "panko",
    },

    {
        reference: "262",
        nameFR: "Sushi Panko Tartare de Deux Saumons",
        nameEN: "Two-Salmon Tartare Sushi Panko",
        descriptionFR: "Canapés de Riz Pané au Panko, Tartare de Saumon Nature & Saumon Fumé",
        descriptionEN: "Panko-Crusted Rice Canapés with Salmon Tartare & Smoked Salmon",
        price: "29,000 DT",
        image: "images/262.jpg",
        category: "sushi",
        subcategory: "panko",
    },

   {
        reference: "263",
        nameFR: "Sushi Panko Tartare de Thon Piquant",
        nameEN: "Spicy Tuna Tartare Sushi Panko",
        descriptionFR: "Canapés de Riz Pané au Panko, Tartare de Thon Épicé (selon arrivage)",
        descriptionEN: "Panko-Crusted Rice Canapés with Spicy Tuna Tartare (subject to availability)",
        price: "23,000 DT",
        image: "images/263.jpg",
        category: "sushi",
        subcategory: "panko",
    },

    {
        reference: "265",
        nameFR: "Sushi Panko Saumon Fumé & Fromage à la Crème",
        nameEN: "Smoked Salmon & Cream Cheese Sushi Panko",
        descriptionFR: "Canapés de Riz Pané au Panko, Saumon Fumé & Fromage à la Crème",
        descriptionEN: "Panko-Crusted Rice Canapés with Smoked Salmon & Cream Cheese",
        price: "29,000 DT",
        image: "images/265.jpg",
        category: "sushi",
        subcategory: "panko",
    },

    {
        reference: "104",
        nameFR: "Royal Tempura",
        nameEN: "Royal Tempura",
        descriptionFR: "Crevette Royale, Épinards, Avocat (Futo Maki Frit)",
        descriptionEN: "King Prawn, Spinach & Avocado (Fried Futo Maki)",
        price: "21,000 DT",
        image: "images/104.jpg",
        category: "sushi",
        subcategory: "crolls",
    },

    {
        reference: "105",
        nameFR: "Tempura Roll",
        nameEN: "Tempura Roll",
        descriptionFR: "Saumon Fumé, Asperge, Avocat, Fromage (Futo Maki Frit)",
        descriptionEN: "Smoked Salmon, Asparagus, Avocado & Cream Cheese (Fried Futo Maki)",
        price: "26,000 DT",
        image: "images/105.jpg",
        category: "sushi",
        subcategory: "crolls",
    },

    {
        reference: "106",
        nameFR: "Kobe Tempura Roll",
        nameEN: "Kobe Tempura Roll",
        descriptionFR: "Filet de Bœuf, Poireaux, Sauce Zakuro",
        descriptionEN: "Beef Tenderloin, Leeks & Zakuro Sauce",
        price: "22,000 DT",
        image: "images/106.jpg",
        category: "sushi",
        subcategory: "crolls",
    },

    {
        reference: "107",
        nameFR: "Atlantic",
        nameEN: "Atlantic",
        descriptionFR: "Saumon, Cœur d'Artichaut Mariné au Miso, Avocat (Futo Maki Frit)",
        descriptionEN: "Salmon, Miso-Marinated Artichoke Heart & Avocado (Fried Futo Maki)",
        price: "23,000 DT",
        image: "images/107.jpg",
        category: "sushi",
        subcategory: "crolls",
    },

    {
        reference: "108",
        nameFR: "Tai Tempura Roll",
        nameEN: "Tai Tempura Roll",
        descriptionFR: "Daurade Marinée Façon Thaï. Sauce aux Agrumes (Futo Maki Frit)",
        descriptionEN: "Thai-Style Marinated Sea Bream. Citrus Sauce (Fried Futo Maki)",
        price: "21,000 DT",
        image: "images/108.jpg",
        category: "sushi",
        subcategory: "crolls",
    },

    {
        reference: "301",
        nameFR: "Crunchy Rolls Saumon",
        nameEN: "Crunchy Salmon Rolls",
        descriptionFR: "Saumon (Hoso Maki Frit)",
        descriptionEN: "Salmon (Fried Hoso Maki)",
        price: "21,000 DT",
        image: "images/301.jpg",
        category: "sushi",
        subcategory: "crolls",
    },

    {
        reference: "302",
        nameFR: "Crunchy Rolls Saumon Cheese",
        nameEN: "Crunchy Salmon Cheese Rolls",
        descriptionFR: "Saumon & Fromage (Hoso Maki Frit)",
        descriptionEN: "Salmon & Cream Cheese (Fried Hoso Maki)",
        price: "22,000 DT",
        image: "images/302.jpg",
        category: "sushi",
        subcategory: "crolls",
    },

    {
        reference: "303",
        nameFR: "Crunchy Rolls Crevette",
        nameEN: "Crunchy Shrimp Rolls",
        descriptionFR: "Crevette (Hoso Maki Frit)",
        descriptionEN: "Shrimp (Fried Hoso Maki)",
        price: "21,000 DT",
        image: "images/303.jpg",
        category: "sushi",
        subcategory: "crolls",
    },

    {
        reference: "305",
        nameFR: "Crunchy Mix Saumon",
        nameEN: "Crunchy Salmon Mix",
        descriptionFR: "6 Atlantic + 3 Hoso Saumon + 3 Hoso Saumon Cheese",
        descriptionEN: "6 Atlantic + 3 Salmon Hoso + 3 Salmon Cheese Hoso",
        price: "43,000 DT",
        image: "images/305.jpg",
        category: "sushi",
        subcategory: "cmix",
    },

    {
        reference: "306",
        nameFR: "Crunchy Mix Crevettes",
        nameEN: "Crunchy Shrimp Mix",
        descriptionFR: "6 Royal Tempura + 6 Hoso Crevette",
        descriptionEN: "6 Royal Tempura + 6 Shrimp Hoso",
        price: "42,000 DT",
        image: "images/306.jpg",
        category: "sushi",
        subcategory: "cmix",
    },

    {
        reference: "88",
        nameFR: "Mini Don Saumon",
        nameEN: "Mini Salmon Don",
        descriptionFR: "Petit Bol de Riz Garni de Saumon & de Tartares de Saumon",
        descriptionEN: "Small Bowl of Rice Topped with Salmon & Salmon Tartare",
        price: "28,000 DT",
        image: "images/88.jpg",
        category: "sushi",
        subcategory: "garni",
    },

    {
        reference: "89",
        nameFR: "Spicy Mini Don",
        nameEN: "Spicy Mini Don",
        descriptionFR: "Petit Bol de Riz Garni de Tartares de Saumon & de Thon Épicés (selon arrivage)",
        descriptionEN: "Small Bowl of Rice Topped with Spicy Salmon & Tuna Tartare (subject to availability)",
        price: "26,000 DT",
        image: "images/89.jpg",
        category: "sushi",
        subcategory: "garni",
    },

   {
        reference: "217",
        nameFR: "Mini Don Saumon Spicy",
        nameEN: "Spicy Salmon Mini Don",
        descriptionFR: "Petit Bol de Riz, Saumon Épicé",
        descriptionEN: "Small Bowl of Rice with Spicy Salmon",
        price: "27,000 DT",
        image: "images/217.jpg",
        category: "sushi",
        subcategory: "garni",
    },

    {
        reference: "218",
        nameFR: "Mini Don Thon Spicy",
        nameEN: "Spicy Tuna Mini Don",
        descriptionFR: "Petit Bol de Riz, Thon Épicé",
        descriptionEN: "Small Bowl of Rice with Spicy Tuna",
        price: "24,000 DT",
        image: "images/218.jpg",
        category: "sushi",
        subcategory: "garni",
    },

    {
        reference: "219",
        nameFR: "Thai Mini Don",
        nameEN: "Thai Mini Don",
        descriptionFR: "Petit Bol de Riz, Poisson Blanc Mariné Façon Thaï",
        descriptionEN: "Small Bowl of Rice with Thai-Style Marinated White Fish",
        price: "29,000 DT",
        image: "images/219.jpg",
        category: "sushi",
        subcategory: "garni",
    },

    {
        reference: "225",
        nameFR: "Chirashi Saumon Medium",
        nameEN: "Medium Salmon Chirashi",
        descriptionFR: "Bol Moyen de Riz Garni de Tranches de Saumon",
        descriptionEN: "Medium Bowl of Rice Topped with Salmon Slices",
        price: "34,000 DT",
        image: "images/225.jpg",
        category: "sushi",
        subcategory: "garni",
    },

    {
        reference: "226",
        nameFR: "Chirashi Saumon Avocat Medium",
        nameEN: "Medium Salmon Avocado Chirashi",
        descriptionFR: "Bol Moyen de Riz Garni de Tranches de Saumon & d'Avocat",
        descriptionEN: "Medium Bowl of Rice Topped with Salmon Slices & Avocado",
        price: "37,000 DT",
        image: "images/226.jpg",
        category: "sushi",
        subcategory: "garni",
    },

    {
        reference: "227",
        nameFR: "Chirashi Mixte Medium",
        nameEN: "Medium Mixed Chirashi",
        descriptionFR: "Bol Moyen de Riz Garni de Tranches de Saumon, d'Avocat, de Daurade, de Poulpe & de Crevettes",
        descriptionEN: "Medium Bowl of Rice Topped with Salmon Slices, Avocado, Sea Bream, Octopus & Shrimp",
        price: "33,000 DT",
        image: "images/227.jpg",
        category: "sushi",
        subcategory: "garni",
    },

    {
        reference: "228",
        nameFR: "Chirashi Saumon Tataki",
        nameEN: "Salmon Tataki Chirashi",
        descriptionFR: "Bol Moyen de Riz Garni de Tranches de Saumon Tataki",
        descriptionEN: "Medium Bowl of Rice Topped with Salmon Tataki Slices",
        price: "35,000 DT",
        image: "images/228.jpg",
        category: "sushi",
        subcategory: "garni",
    },

    {
        reference: "86",
        nameFR: "Chirashi Sushi Mixte",
        nameEN: "Mixed Sushi Chirashi",
        descriptionFR: "Grand Bol de Riz Vinaigré Garni de Poisson & Fruits de Mer",
        descriptionEN: "Large Bowl of Seasoned Rice Topped with Fish & Seafood",
        price: "46,000 DT",
        image: "images/86.jpg",
        category: "sushi",
        subcategory: "garni",
    },

    {
        reference: "216",
        nameFR: "Chirashi Saumon",
        nameEN: "Salmon Chirashi",
        descriptionFR: "Grand Bol de Riz Vinaigré Garni de Saumon",
        descriptionEN: "Large Bowl of Seasoned Rice Topped with Salmon",
        price: "44,000 DT",
        image: "images/216.jpg",
        category: "sushi",
        subcategory: "garni",
    },

    {
        reference: "180",
        nameFR: "Nigiri Thon Tataki",
        nameEN: "Tuna Tataki Nigiri",
        descriptionFR: "Thon Mi-Cuit aux Graines de Sésame (2 Pièces, selon arrivage)",
        descriptionEN: "Seared Tuna with Sesame Seeds (2 Pieces, subject to availability)",
        price: "10,000 DT",
        image: "images/180.jpg",
        category: "sushi",
        subcategory: "tataki",
    },

    {
        reference: "181",
        nameFR: "Nigiri Saumon Tataki",
        nameEN: "Salmon Tataki Nigiri",
        descriptionFR: "Saumon Mi-Cuit aux Graines de Sésame (2 Pièces)",
        descriptionEN: "Seared Salmon with Sesame Seeds (2 Pieces)",
        price: "11,000 DT",
        image: "images/181.jpg",
        category: "sushi",
        subcategory: "tataki",
    },

    {
        reference: "182",
        nameFR: "Carpaccio de Thon Tataki",
        nameEN: "Tuna Tataki Carpaccio",
        descriptionFR: "Tranches Fines de Thon Mi-Cuit (selon arrivage)",
        descriptionEN: "Thin Slices of Seared Tuna (subject to availability)",
        price: "32,000 DT",
        image: "images/182.jpg",
        category: "sushi",
        subcategory: "tataki",
    },

    {
        reference: "183",
        nameFR: "Carpaccio de Saumon Tataki",
        nameEN: "Salmon Tataki Carpaccio",
        descriptionFR: "Tranches Fines de Saumon Mi-Cuit",
        descriptionEN: "Thin Slices of Seared Salmon",
        price: "35,000 DT",
        image: "images/183.jpg",
        category: "sushi",
        subcategory: "tataki",
    },

    {
        reference: "410",
        nameFR: "Onigarazu Tori",
        nameEN: "Onigarazu Tori",
        descriptionFR: "",
        descriptionEN: "",
        price: "22,000 DT",
        image: "images/410.jpg",
        category: "sushi",
        subcategory: "onigarazu",
    },

    {
        reference: "411",
        nameFR: "Onigarazu Origami",
        nameEN: "Onigarazu Origami",
        descriptionFR: "Tartare de Saumon Épicé, Mangue, Avocats, Flocons Crunchy",
        descriptionEN: "Spicy Salmon Tartare, Mango, Avocado & Crunchy Flakes",
        price: "28,000 DT",
        image: "images/411.jpg",
        category: "sushi",
        subcategory: "onigarazu",
    },

    {
        reference: "412",
        nameFR: "Onigarazu Fresh",
        nameEN: "Onigarazu Fresh",
        descriptionFR: "Crevettes Pochées, Concombre, Mangue, Avocats, Carotte, Sauce Sweet Chili",
        descriptionEN: "Poached Shrimp, Cucumber, Mango, Avocado, Carrot & Sweet Chili Sauce",
        price: "35,000 DT",
        image: "images/412.jpg",
        category: "sushi",
        subcategory: "onigarazu",
    },

    {
        reference: "413",
        nameFR: "Onigarazu Kobé",
        nameEN: "Onigarazu Kobe",
        descriptionFR: "Filet de Bœuf Teriyaki, Oignons Frais & Caramélisés, Carotte, Laitue, Coriandre",
        descriptionEN: "Teriyaki Beef Tenderloin, Fresh & Caramelized Onions, Carrot, Lettuce & Coriander",
        price: "24,000 DT",
        image: "images/413.jpg",
        category: "sushi",
        subcategory: "onigarazu",
    },

    {
        reference: "414",
        nameFR: "Onigarazu Végétarien",
        nameEN: "Vegetarian Onigarazu",
        descriptionFR: "Champignons Shiitake Sautés à l'Ail Noir, Avocat, Épinards, Concombre, Laitue, Vinaigrette au Miso",
        descriptionEN: "Black Garlic Sautéed Shiitake Mushrooms, Avocado, Spinach, Cucumber, Lettuce & Miso Vinaigrette",
        price: "24,000 DT",
        image: "images/414.jpg",
        category: "sushi",
        subcategory: "onigarazu",
    },

    {
        reference: "415",
        nameFR: "Bento Tori",
        nameEN: "Bento Tori",
        descriptionFR: "",
        descriptionEN: "",
        price: "45,000 DT",
        image: "images/415.jpg",
        category: "sushi",
        subcategory: "onigarazu",
    },

    {
        reference: "416",
        nameFR: "Bento Origami",
        nameEN: "Bento Origami",
        descriptionFR: "",
        descriptionEN: "",
        price: "51,000 DT",
        image: "images/416.jpg",
        category: "sushi",
        subcategory: "onigarazu",
    },

    {
        reference: "417",
        nameFR: "Bento Fresh",
        nameEN: "Bento Fresh",
        descriptionFR: "",
        descriptionEN: "",
        price: "58,000 DT",
        image: "images/417.jpg",
        category: "sushi",
        subcategory: "onigarazu",
    },

    {
        reference: "418",
        nameFR: "Bento Kobé",
        nameEN: "Bento Kobe",
        descriptionFR: "",
        descriptionEN: "",
        price: "45,000 DT",
        image: "images/418.jpg",
        category: "sushi",
        subcategory: "onigarazu",
    },

    {
        reference: "419",
        nameFR: "Bento Végétarien",
        nameEN: "Vegetarian Bento",
        descriptionFR: "",
        descriptionEN: "",
        price: "39,000 DT",
        image: "images/419.jpg",
        category: "sushi",
        subcategory: "onigarazu",
    },

   {
        reference: "90",
        nameFR: "Yakitori Poulet",
        nameEN: "Chicken Yakitori",
        descriptionFR: "Brochettes de Poulet Grillées Sauce Yakitori",
        descriptionEN: "Grilled Chicken Skewers with Yakitori Sauce",
        price: "15,000 DT",
        image: "images/90.jpg",
        category: "plats-chauds",
        subcategory: "yakitori",
    },

    {
        reference: "90a",
        nameFR: "Yakitori Poulet Fromage",
        nameEN: "Chicken Cheese Yakitori",
        descriptionFR: "Brochettes de Poulet & Fromage Grillées",
        descriptionEN: "Grilled Chicken & Cheese Skewers",
        price: "16,000 DT",
        image: "images/90a.jpg",
        category: "sushi",
        subcategory: "onigarazu",
    },

    {
        reference: "91",
        nameFR: "Yakitori Boulettes de Poulet",
        nameEN: "Chicken Meatball Yakitori",
        descriptionFR: "Brochettes de Boulettes de Poulet Maison",
        descriptionEN: "Homemade Chicken Meatball Skewers",
        price: "17,000 DT",
        image: "images/91.jpg",
        category: "plats-chauds",
        subcategory: "yakitori",
    },

    {
        reference: "92",
        nameFR: "Yakitori Bœuf",
        nameEN: "Beef Yakitori",
        descriptionFR: "Brochettes de Bœuf Grillées Sauce Yakitori",
        descriptionEN: "Grilled Beef Skewers with Yakitori Sauce",
        price: "21,000 DT",
        image: "images/92.jpg",
        category: "plats-chauds",
        subcategory: "yakitori",
    },

    {
        reference: "93",
        nameFR: "Yakitori Bœuf & Fromage",
        nameEN: "Beef Cheese Yakitori",
        descriptionFR: "Brochettes de Bœuf & Fromage Grillées",
        descriptionEN: "Grilled Beef & Cheese Skewers",
        price: "24,000 DT",
        image: "images/93.jpg",
        category: "plats-chauds",
        subcategory: "yakitori",
    },

    {
        reference: "94",
        nameFR: "Yakitori Saumon",
        nameEN: "Salmon Yakitori",
        descriptionFR: "Brochettes de Saumon Grillées",
        descriptionEN: "Grilled Salmon Skewers",
        price: "26,000 DT",
        image: "images/94.jpg",
        category: "plats-chauds",
        subcategory: "yakitori",
    },

    {
        reference: "95",
        nameFR: "Yakitori Thon",
        nameEN: "Tuna Yakitori",
        descriptionFR: "Brochettes de Thon Grillées",
        descriptionEN: "Grilled Tuna Skewers",
        price: "22,000 DT",
        image: "images/95.jpg",
        category: "plats-chauds",
        subcategory: "yakitori",
    },

    {
        reference: "97",
        nameFR: "Yakitori Champignons Blancs",
        nameEN: "White Mushroom Yakitori",
        descriptionFR: "Brochettes de Champignons Végétariennes",
        descriptionEN: "Vegetarian Mushroom Skewers",
        price: "10,000 DT",
        image: "images/97.jpg",
        category: "plats-chauds",
        subcategory: "yakitori",
    },

    {
        reference: "98",
        nameFR: "Yakitori Crevettes Royales",
        nameEN: "King Prawn Yakitori",
        descriptionFR: "Brochettes de Crevettes Grillées",
        descriptionEN: "Grilled Prawn Skewers",
        price: "26,000 DT",
        image: "images/98.jpg",
        category: "plats-chauds",
        subcategory: "yakitori",
    },

    {
        reference: "99",
        nameFR: "Yakitori Anguille",
        nameEN: "Eel Yakitori",
        descriptionFR: "Brochettes d'Anguille Laquée",
        descriptionEN: "Glazed Eel Skewers",
        price: "29,000 DT",
        image: "images/99.jpg",
        category: "plats-chauds",
        subcategory: "yakitori",
    },

    {
        reference: "190",
        nameFR: "Kushikatsu Poulet",
        nameEN: "Chicken Kushikatsu",
        descriptionFR: "Brochettes de Poulet Panées au Panko",
        descriptionEN: "Panko-Breaded Chicken Skewers",
        price: "17,000 DT",
        image: "images/190.jpg",
        category: "plats-chauds",
        subcategory: "kushikatsu",
    },

    {
        reference: "190a",
        nameFR: "Kushikatsu Poulet Fromage",
        nameEN: "Chicken Cheese Kushikatsu",
        descriptionFR: "Brochettes de Poulet & Fromage Panées",
        descriptionEN: "Breaded Chicken & Cheese Skewers",
        price: "18,000 DT",
        image: "images/190a.jpg",
        category: "plats-chauds",
        subcategory: "kushikatsu",
    },

    {
        reference: "191",
        nameFR: "Kushikatsu Boulettes de Poulet",
        nameEN: "Chicken Meatball Kushikatsu",
        descriptionFR: "Brochettes de Boulettes Panées",
        descriptionEN: "Breaded Chicken Meatball Skewers",
        price: "18,000 DT",
        image: "images/191.jpg",
        category: "plats-chauds",
        subcategory: "kushikatsu",
    },

    {
        reference: "193",
        nameFR: "Kushikatsu Bœuf Fromage",
        nameEN: "Beef Cheese Kushikatsu",
        descriptionFR: "Brochettes de Bœuf & Fromage Panées",
        descriptionEN: "Breaded Beef & Cheese Skewers",
        price: "26,000 DT",
        image: "images/193.jpg",
        category: "plats-chauds",
        subcategory: "kushikatsu",
    },

    {
        reference: "194",
        nameFR: "Kushikatsu Saumon",
        nameEN: "Salmon Kushikatsu",
        descriptionFR: "Brochettes de Saumon Panées",
        descriptionEN: "Breaded Salmon Skewers",
        price: "29,000 DT",
        image: "images/194.jpg",
        category: "plats-chauds",
        subcategory: "kushikatsu",
    },

    {
        reference: "197",
        nameFR: "Kushikatsu Champignons Blancs",
        nameEN: "White Mushroom Kushikatsu",
        descriptionFR: "Brochettes de Champignons Panées",
        descriptionEN: "Breaded Mushroom Skewers",
        price: "11,000 DT",
        image: "images/197.jpg",
        category: "plats-chauds",
        subcategory: "kushikatsu",
    },

    {
        reference: "198",
        nameFR: "Kushikatsu Crevettes",
        nameEN: "Shrimp Kushikatsu",
        descriptionFR: "Brochettes de Crevettes Panées au Panko",
        descriptionEN: "Panko-Breaded Shrimp Skewers",
        price: "27,000 DT",
        image: "images/198.jpg",
        category: "plats-chauds",
        subcategory: "kushikatsu",
    },

    {
        reference: "100",
        nameFR: "Légumes Tempura",
        nameEN: "Vegetable Tempura",
        descriptionFR: "Assortiment de Légumes Panés Croustillants",
        descriptionEN: "Assorted Crispy Battered Vegetables",
        price: "13,000 DT",
        image: "images/100.jpg",
        category: "plats-chauds",
        subcategory: "tempura",
    },

    {
        reference: "101",
        nameFR: "Seiche Tempura",
        nameEN: "Cuttlefish Tempura",
        descriptionFR: "Seiche Panée Croustillante",
        descriptionEN: "Crispy Breaded Cuttlefish",
        price: "21,000 DT",
        image: "images/101.jpg",
        category: "plats-chauds",
        subcategory: "tempura",
    },

    {
        reference: "102",
        nameFR: "Assiette Tempura",
        nameEN: "Tempura Platter",
        descriptionFR: "Légumes, Poisson, Crevettes & Calamars Panés",
        descriptionEN: "Battered Vegetables, Fish, Shrimp & Calamari",
        price: "39,000 DT",
        image: "images/102.jpg",
        category: "plats-chauds",
        subcategory: "tempura",
    },

    {
        reference: "103",
        nameFR: "Tempura Crevettes",
        nameEN: "Shrimp Tempura",
        descriptionFR: "Assiette de Crevettes Tempura Complète (6 Pièces avec Légumes)",
        descriptionEN: "Complete Shrimp Tempura Platter (6 Pieces with Vegetables)",
        price: "48,000 DT",
        image: "images/103.jpg",
        category: "plats-chauds",
        subcategory: "tempura",
    },

    {
        reference: "109",
        nameFR: "Tempura Crevettes",
        nameEN: "Shrimp Tempura",
        descriptionFR: "Crevettes Panées avec Légumes Tempura (3 Pièces avec Légumes)",
        descriptionEN: "Breaded Shrimp with Tempura Vegetables (3 Pieces with Vegetables)",
        price: "25,000 DT",
        image: "images/109.jpg",
        category: "plats-chauds",
        subcategory: "tempura",
    },

    {
        reference: "110",
        nameFR: "Nouilles Poulet",
        nameEN: "Chicken Noodles",
        descriptionFR: "Nouilles (Udon, Soba ou Nouilles de Riz) Sautées au Poulet, Sauce Yakisoba Maison",
        descriptionEN: "Stir-Fried Noodles (Udon, Soba or Rice Noodles) with Chicken, Homemade Yakisoba Sauce",
        price: "29,000 DT",
        image: "images/110.jpg",
        category: "plats-chauds",
        subcategory: "nouilles",
    },

    {
        reference: "111",
        nameFR: "Nouilles Bœuf",
        nameEN: "Beef Noodles",
        descriptionFR: "Nouilles (Udon, Soba ou Nouilles de Riz) Sautées au Bœuf, Sauce Yakisoba Maison",
        descriptionEN: "Stir-Fried Noodles (Udon, Soba or Rice Noodles) with Beef, Homemade Yakisoba Sauce",
        price: "36,000 DT",
        image: "images/111.jpg",
        category: "plats-chauds",
        subcategory: "nouilles",
    },

    {
        reference: "112",
        nameFR: "Nouilles Champignons Shiitake",
        nameEN: "Shiitake Mushroom Noodles",
        descriptionFR: "Nouilles (Udon, Soba ou Nouilles de Riz) Sautées aux Champignons Shiitake, Sauce Yakisoba",
        descriptionEN: "Stir-Fried Noodles (Udon, Soba or Rice Noodles) with Shiitake Mushrooms, Yakisoba Sauce",
        price: "31,000 DT",
        image: "images/112.jpg",
        category: "plats-chauds",
        subcategory: "nouilles",
    },

    {
        reference: "113",
        nameFR: "Nouilles Crevettes",
        nameEN: "Shrimp Noodles",
        descriptionFR: "Nouilles (Udon, Soba ou Nouilles de Riz) Sautées aux Crevettes, Sauce Yakisoba Maison",
        descriptionEN: "Stir-Fried Noodles (Udon, Soba or Rice Noodles) with Shrimp, Homemade Yakisoba Sauce",
        price: "40,000 DT",
        image: "images/113.jpg",
        category: "plats-chauds",
        subcategory: "nouilles",
    },

    {
        reference: "114",
        nameFR: "Nouilles Bœuf Shiitake",
        nameEN: "Beef Shiitake Noodles",
        descriptionFR: "Nouilles (Udon, Soba ou Nouilles de Riz) Sautées au Bœuf & Champignons Shiitake",
        descriptionEN: "Stir-Fried (Udon, Soba or Rice Noodles) Noodles with Beef & Shiitake Mushrooms",
        price: "41,000 DT",
        image: "images/114.jpg",
        category: "plats-chauds",
        subcategory: "nouilles",
    },

    {
        reference: "115",
        nameFR: "Nouilles Crevettes Shiitake",
        nameEN: "Shrimp Shiitake Noodles",
        descriptionFR: "Nouilles (Udon, Soba ou Nouilles de Riz) Sautées aux Crevettes & Champignons Shiitake",
        descriptionEN: "Stir-Fried Noodles (Udon, Soba or Rice Noodles) with Shrimp & Shiitake Mushrooms",
        price: "45,000 DT",
        image: "images/115.jpg",
        category: "plats-chauds",
        subcategory: "nouilles",
    },

    {
        reference: "116",
        nameFR: "Nouilles Udon Fruits de Mer",
        nameEN: "Seafood Udon Noodles",
        descriptionFR: "Nouilles (Udon, Soba ou Nouilles de Riz) Sautées aux Fruits de Mer (Crevettes, Seiches, Poulpe)",
        descriptionEN: "Stir-Fried Noodles (Udon, Soba or Rice Noodles) with Seafood (Shrimp, Cuttlefish & Octopus)",
        price: "42,000 DT",
        image: "images/116.jpg",
        category: "plats-chauds",
        subcategory: "nouilles",
    },

    {
        reference: "117a",
        nameFR: "Tanuki Udon",
        nameEN: "Tanuki Udon",
        descriptionFR: "Nouilles Udon Froides Traditionnelles",
        descriptionEN: "Traditional Cold Udon Noodles",
        price: "16,000 DT",
        image: "images/117a.jpg",
        category: "plats-chauds",
        subcategory: "nouilles",
    },

    {
        reference: "117b",
        nameFR: "Tanuki Soba",
        nameEN: "Tanuki Soba",
        descriptionFR: "Nouilles Soba Froides au Wasabi",
        descriptionEN: "Cold Soba Noodles with Wasabi",
        price: "22,000 DT",
        image: "images/117b.jpg",
        category: "plats-chauds",
        subcategory: "nouilles",
    },

    {
        reference: "230",
        nameFR: "Pilaf Champignons Shiitake",
        nameEN: "Shiitake Mushroom Pilaf",
        descriptionFR: "Riz Sauté aux Champignons Shiitake",
        descriptionEN: "Stir-Fried Rice with Shiitake Mushrooms",
        price: "27,000 DT",
        image: "images/230.jpg",
        category: "plats-chauds",
        subcategory: "pilaf",
    },

    {
        reference: "231",
        nameFR: "Pilaf Poulet",
        nameEN: "Chicken Pilaf",
        descriptionFR: "Riz Sauté au Poulet & Légumes",
        descriptionEN: "Stir-Fried Rice with Chicken & Vegetables",
        price: "26,000 DT",
        image: "images/231.jpg",
        category: "plats-chauds",
        subcategory: "pilaf",
    },

    {
        reference: "232",
        nameFR: "Pilaf Bœuf",
        nameEN: "Beef Pilaf",
        descriptionFR: "Riz Sauté au Bœuf & Légumes",
        descriptionEN: "Stir-Fried Rice with Beef & Vegetables",
        price: "32,000 DT",
        image: "images/232.jpg",
        category: "plats-chauds",
        subcategory: "pilaf",
    },

    {
        reference: "233",
        nameFR: "Pilaf Bœuf Shiitake",
        nameEN: "Beef Shiitake Pilaf",
        descriptionFR: "Riz Sauté au Bœuf & Champignons Shiitake",
        descriptionEN: "Stir-Fried Rice with Beef & Shiitake Mushrooms",
        price: "37,000 DT",
        image: "images/233.jpg",
        category: "plats-chauds",
        subcategory: "pilaf",
    },

    {
        reference: "234",
        nameFR: "Pilaf Crevettes",
        nameEN: "Shrimp Pilaf",
        descriptionFR: "Riz Sauté aux Crevettes & Légumes",
        descriptionEN: "Stir-Fried Rice with Shrimp & Vegetables",
        price: "39,000 DT",
        image: "images/234.jpg",
        category: "plats-chauds",
        subcategory: "pilaf",
    },

    {
        reference: "235",
        nameFR: "Pilaf Crevettes Shiitake",
        nameEN: "Shrimp Shiitake Pilaf",
        descriptionFR: "Riz Sauté aux Crevettes & Champignons Shiitake",
        descriptionEN: "Stir-Fried Rice with Shrimp & Shiitake Mushrooms",
        price: "44,000 DT",
        image: "images/235.jpg",
        category: "plats-chauds",
        subcategory: "pilaf",
    },

    {
        reference: "236",
        nameFR: "Pilaf Fruits de Mer",
        nameEN: "Seafood Pilaf",
        descriptionFR: "Riz Sauté aux Fruits de Mer (Crevettes, Seiches, Poulpe)",
        descriptionEN: "Stir-Fried Rice with Seafood (Shrimp, Cuttlefish & Octopus)",
        price: "41,000 DT",
        image: "images/236.jpg",
        category: "plats-chauds",
        subcategory: "pilaf",
    },

    {
        reference: "118",
        nameFR: "Miso Ramen Wakame",
        nameEN: "Miso Ramen Wakame",
        descriptionFR: "Ramen Miso (Udon, Soba ou Nouilles de Riz) avec Wakame, Maïs & Œuf",
        descriptionEN: "Miso Ramen (Udon, Soba or Rice Noodles) with Wakame, Corn & Egg",
        price: "26,000 DT",
        image: "images/118.jpg",
        category: "plats-chauds",
        subcategory: "ramen",
    },

    {
        reference: "119",
        nameFR: "Boulettes de Poulet Panées",
        nameEN: "Breaded Chicken Meatball Ramen",
        descriptionFR: "Ramen Miso (Udon, Soba ou Nouilles de Riz) aux Boulettes de Poulet Panées",
        descriptionEN: "Miso Ramen (Udon, Soba or Rice Noodles) with Breaded Chicken Meatballs",
        price: "32,000 DT",
        image: "images/119.jpg",
        category: "plats-chauds",
        subcategory: "ramen",
    },

    {
        reference: "120",
        nameFR: "Miso Ramen Poulet",
        nameEN: "Miso Chicken Ramen",
        descriptionFR: "Ramen Miso (Udon, Soba ou Nouilles de Riz) au Poulet",
        descriptionEN: "Miso Ramen (Udon, Soba or Rice Noodles) with Chicken",
        price: "32,000 DT",
        image: "images/120.jpg",
        category: "plats-chauds",
        subcategory: "ramen",
    },

    {
        reference: "121",
        nameFR: "Miso Ramen Bœuf",
        nameEN: "Miso Beef Ramen",
        descriptionFR: "Ramen Miso (Udon, Soba ou Nouilles de Riz) au Bœuf",
        descriptionEN: "Miso Ramen (Udon, Soba or Rice Noodles) with Beef",
        price: "37,000 DT",
        image: "images/121.jpg",
        category: "plats-chauds",
        subcategory: "ramen",
    },

    {
        reference: "122",
        nameFR: "Miso Ramen Champignons Shiitake",
        nameEN: "Miso Shiitake Mushroom Ramen",
        descriptionFR: "Ramen Miso (Udon, Soba ou Nouilles de Riz) aux Champignons Shiitake",
        descriptionEN: "Miso Ramen (Udon, Soba or Rice Noodles) with Shiitake Mushrooms",
        price: "31,000 DT",
        image: "images/122.jpg",
        category: "plats-chauds",
        subcategory: "ramen",
    },

    {
        reference: "123",
        nameFR: "Miso Ramen Crevettes",
        nameEN: "Miso Shrimp Ramen",
        descriptionFR: "Ramen Miso (Udon, Soba ou Nouilles de Riz) aux Crevettes",
        descriptionEN: "Miso Ramen (Udon, Soba or Rice Noodles) with Shrimp",
        price: "41,000 DT",
        image: "images/123.jpg",
        category: "plats-chauds",
        subcategory: "ramen",
    },

    {
        reference: "124",
        nameFR: "Miso Ramen Fruits de Mer",
        nameEN: "Miso Seafood Ramen",
        descriptionFR: "Ramen Miso (Udon, Soba ou Nouilles de Riz) aux Fruits de Mer",
        descriptionEN: "Miso Ramen (Udon, Soba or Rice Noodles) with Seafood",
        price: "43,000 DT",
        image: "images/124.jpg",
        category: "plats-chauds",
        subcategory: "ramen",
    },

    {
        reference: "270",
        nameFR: "Soupe Gyozas Poulet",
        nameEN: "Chicken Gyoza Soup",
        descriptionFR: "Soupe avec Raviolis Japonais au Poulet",
        descriptionEN: "Soup with Japanese Chicken Dumplings",
        price: "31,000 DT",
        image: "images/270.jpg",
        category: "plats-chauds",
        subcategory: "ramen",
    },

    {
        reference: "271",
        nameFR: "Soupe Gyozas Bœuf",
        nameEN: "Beef Gyoza Soup",
        descriptionFR: "Soupe avec Raviolis Japonais au Bœuf",
        descriptionEN: "Soup with Japanese Beef Dumplings",
        price: "34,000 DT",
        image: "images/271.jpg",
        category: "plats-chauds",
        subcategory: "ramen",
    },

    {
        reference: "272",
        nameFR: "Soupe Gyozas Crevettes",
        nameEN: "Shrimp Gyoza Soup",
        descriptionFR: "Soupe avec Raviolis Japonais aux Crevettes",
        descriptionEN: "Soup with Japanese Shrimp Dumplings",
        price: "37,000 DT",
        image: "images/272.jpg",
        category: "plats-chauds",
        subcategory: "ramen",
    },

    {
        reference: "87",
        nameFR: "Unagi Don",
        nameEN: "Unagi Don",
        descriptionFR: "Grand Bol de Riz Vinaigré Garni d'Anguille & de Sésame",
        descriptionEN: "Large Bowl of Seasoned Rice Topped with Eel & Sesame",
        price: "49,000 DT",
        image: "images/87.jpg",
        category: "plats-chauds",
        subcategory: "donburi",
    },

    {
        reference: "87a",
        nameFR: "Unagi Mini Don",
        nameEN: "Unagi Mini Don",
        descriptionFR: "Petit Bol de Riz Vinaigré Garni d'Anguille & de Sésame",
        descriptionEN: "Small Bowl of Seasoned Rice Topped with Eel & Sesame",
        price: "27,000 DT",
        image: "images/87a.jpg",
        category: "plats-chauds",
        subcategory: "donburi",
    },

    {
        reference: "87b",
        nameFR: "Oyakodon",
        nameEN: "Oyakodon",
        descriptionFR: "Grand Bol de Riz Garni de Poulet & Omelette à la Vapeur",
        descriptionEN: "Large Bowl of Rice Topped with Chicken & Steamed Omelette",
        price: "27,000 DT",
        image: "images/87b.jpg",
        category: "plats-chauds",
        subcategory: "donburi",
    },

    {
        reference: "87c",
        nameFR: "Katsudon",
        nameEN: "Katsudon",
        descriptionFR: "Grand Bol de Riz Garni de Poulet Pané Croustillant & Omelette à la Vapeur",
        descriptionEN: "Large Bowl of Rice Topped with Crispy Breaded Chicken & Steamed Omelette",
        price: "28,000 DT",
        image: "images/87c.jpg",
        category: "plats-chauds",
        subcategory: "donburi",
    },

    {
        reference: "87d",
        nameFR: "Tori Kara Age Don",
        nameEN: "Tori Kara Age Don",
        descriptionFR: "Grand Bol de Riz Garni de Poulet Pané",
        descriptionEN: "Large Bowl of Rice Topped with Breaded Chicken",
        price: "26,000 DT",
        image: "images/87d.jpg",
        category: "plats-chauds",
        subcategory: "donburi",
    },

    {
        reference: "87e",
        nameFR: "Tako Kara Age Don",
        nameEN: "Tako Kara Age Don",
        descriptionFR: "Grand Bol de Riz Garni de Poulpe Pané",
        descriptionEN: "Large Bowl of Rice Topped with Breaded Octopus",
        price: "39,000 DT",
        image: "images/87e.jpg",
        category: "plats-chauds",
        subcategory: "donburi",
    },

    {
        reference: "87f",
        nameFR: "Chikinbōru Don",
        nameEN: "Chikinbōru Don",
        descriptionFR: "Grand Bol de Riz Garni de Boulettes de Poulet Panées",
        descriptionEN: "Large Bowl of Rice Topped with Breaded Chicken Meatballs",
        price: "27,000 DT",
        image: "images/87f.jpg",
        category: "plats-chauds",
        subcategory: "donburi",
    },

    {
        reference: "150",
        nameFR: "Bol de Riz Nature",
        nameEN: "Plain Rice Bowl",
        descriptionFR: "Riz Blanc Japonais Nature",
        descriptionEN: "Plain Japanese White Rice",
        price: "5,200 DT",
        image: "images/150.jpg",
        category: "accompagnements",
        subcategory: "acc",
    },

    {
        reference: "150a",
        nameFR: "Bol de Riz Vinaigré",
        nameEN: "Sushi Rice Bowl",
        descriptionFR: "Riz Vinaigré pour Sushi",
        descriptionEN: "Seasoned Sushi Rice",
        price: "6,000 DT",
        image: "images/150a.jpg",
        category: "accompagnements",
        subcategory: "acc",
    },

    {
        reference: "151",
        nameFR: "Salade de Choux",
        nameEN: "Cabbage Salad",
        descriptionFR: "Salade de Choux",
        descriptionEN: "Cabbage Salad",
        price: "5,000 DT",
        image: "images/151.jpg",
        category: "accompagnements",
        subcategory: "acc",
    },

    {
        reference: "152",
        nameFR: "Sauce Teriyaki",
        nameEN: "Teriyaki Sauce",
        descriptionFR: "Soja Sucrée",
        descriptionEN: "Sweet Soy Sauce",
        price: "2,000 DT",
        image: "images/152.jpg",
        category: "accompagnements",
        subcategory: "sauces",
    },

    {
        reference: "152a",
        nameFR: "Sauce Ponzu",
        nameEN: "Ponzu Sauce",
        descriptionFR: "Sauce Agrumes Japonaise",
        descriptionEN: "Japanese Citrus Sauce",
        price: "2,000 DT",
        image: "images/152a.jpg",
        category: "accompagnements",
        subcategory: "sauces",
    },

    {
        reference: "152c",
        nameFR: "Sauce Soja Light",
        nameEN: "Light Soy Sauce",
        descriptionFR: "Sauce Soja Allégée en Sel",
        descriptionEN: "Reduced-Salt Soy Sauce",
        price: "2,000 DT",
        image: "images/152c.jpg",
        category: "accompagnements",
        subcategory: "sauces",
    },

    {
        reference: "152d",
        nameFR: "Sauce Tamari",
        nameEN: "Tamari Sauce",
        descriptionFR: "Sauce Soja Sans Gluten",
        descriptionEN: "Gluten-Free Soy Sauce",
        price: "2,000 DT",
        image: "images/152d.jpg",
        category: "accompagnements",
        subcategory: "sauces",
    },

    {
        reference: "153",
        nameFR: "Sauce Yakitori",
        nameEN: "Yakitori Sauce",
        descriptionFR: "Sauce pour Grillades de Poulet",
        descriptionEN: "Sauce for Grilled Chicken",
        price: "2,000 DT",
        image: "images/153.jpg",
        category: "accompagnements",
        subcategory: "sauces",
    },

    {
        reference: "155",
        nameFR: "Sauce Sweet Chili",
        nameEN: "Sweet Chili Sauce",
        descriptionFR: "Sauce Sucré Chili",
        descriptionEN: "Sweet Chili Sauce",
        price: "1,000 DT",
        image: "images/155.jpg",
        category: "accompagnements",
        subcategory: "sauces",
    },

    {
        reference: "156",
        nameFR: "Sauce Chili",
        nameEN: "Chili Sauce",
        descriptionFR: "Sauce Pimentée",
        descriptionEN: "Spicy Sauce",
        price: "2,000 DT",
        image: "images/156.jpg",
        category: "accompagnements",
        subcategory: "sauces",
    },

    {
        reference: "157",
        nameFR: "Sauce Épicée",
        nameEN: "Spicy Sauce",
        descriptionFR: "Sauce Relevée Maison",
        descriptionEN: "Homemade Spicy Sauce",
        price: "2,500 DT",
        image: "images/157.jpg",
        category: "accompagnements",
        subcategory: "sauces",
    },

    {
        reference: "158",
        nameFR: "Sauce au Wasabi",
        nameEN: "Wasabi Sauce",
        descriptionFR: "Sauce Wasabi",
        descriptionEN: "Wasabi Sauce",
        price: "2,000 DT",
        image: "images/158.jpg",
        category: "accompagnements",
        subcategory: "sauces",
    },

    {
        reference: "159",
        nameFR: "Gingembre",
        nameEN: "Ginger",
        descriptionFR: "Gingembre Mariné (Gari)",
        descriptionEN: "Pickled Ginger (Gari)",
        price: "3,000 DT",
        image: "images/159.jpg",
        category: "accompagnements",
        subcategory: "acc",
    },

    {
        reference: "140",
        nameFR: "Glace au Thé Matcha",
        nameEN: "Matcha Ice Cream",
        descriptionFR: "Glace Artisanale au Thé Vert Matcha",
        descriptionEN: "Homemade Green Tea Matcha Ice Cream",
        price: "17,000 DT",
        image: "images/140.jpg",
        category: "desserts",
        subcategory: "glaces",
    },

    {
        reference: "142",
        nameFR: "Glace au Gingembre",
        nameEN: "Ginger Ice Cream",
        descriptionFR: "Glace Artisanale au Gingembre Frais",
        descriptionEN: "Homemade Fresh Ginger Ice Cream",
        price: "14,000 DT",
        image: "images/142.jpg",
        category: "desserts",
        subcategory: "glaces",
    },

    {
        reference: "143",
        nameFR: "Glace au Sésame",
        nameEN: "Sesame Ice Cream",
        descriptionFR: "Glace Artisanale aux Graines de Sésame",
        descriptionEN: "Homemade Sesame Seed Ice Cream",
        price: "14,000 DT",
        image: "images/143.jpg",
        category: "desserts",
        subcategory: "glaces",
    },

    {
        reference: "144",
        nameFR: "Trilogie de Glaces Maison",
        nameEN: "Homemade Ice Cream Trio",
        descriptionFR: "Trio Sésame, Gingembre & Haricots Rouges",
        descriptionEN: "Sesame, Ginger & Red Bean Trio",
        price: "22,000 DT",
        image: "images/144.jpg",
        category: "desserts",
        subcategory: "glaces",
    },

    {
        reference: "145",
        nameFR: "Fondant au Thé Matcha",
        nameEN: "Matcha Lava Cake",
        descriptionFR: "Fondant au Thé Vert Matcha",
        descriptionEN: "Green Tea Matcha Lava Cake",
        price: "15,000 DT",
        image: "images/145.jpg",
        category: "desserts",
        subcategory: "fondants",
    },

    {
        reference: "147",
        nameFR: "Fondant au Chocolat, Boule de Glace Sésame",
        nameEN: "Chocolate Lava Cake with Sesame Ice Cream",
        descriptionFR: "Fondant Chocolat avec Glace au Sésame",
        descriptionEN: "Chocolate Lava Cake Served with Sesame Ice Cream",
        price: "16,000 DT",
        image: "images/147.jpg",
        category: "desserts",
        subcategory: "fondants",
    },

    {
        reference: "148",
        nameFR: "Sauce au Chocolat",
        nameEN: "Chocolate Sauce",
        descriptionFR: "Sauce Chocolat pour Desserts",
        descriptionEN: "Chocolate Sauce for Desserts",
        price: "2,000 DT",
        image: "images/148.jpg",
        category: "desserts",
        subcategory: "fondants",
    },

    {
        reference: "149",
        nameFR: "Coulis de Fruits Rouges",
        nameEN: "Red Berry Coulis",
        descriptionFR: "Coulis de Fruits Rouges pour Desserts",
        descriptionEN: "Red Berry Sauce for Desserts",
        price: "2,000 DT",
        image: "no.png",
        category: "desserts",
        subcategory: "fondants",
    },

    {
        reference: "172",
        nameFR: "Bouteille d'Eau (0.5 L)",
        nameEN: "Water Bottle (0.5 L)",
        descriptionFR: "Eau Minérale",
        descriptionEN: "Mineral Water",
        price: "2,000 DT",
        image: "images/172.jpg",
        category: "boissons",
        subcategory: "boisson",
    },

    {
        reference: "175",
        nameFR: "Bière Sans Alcool",
        nameEN: "Non-Alcoholic Beer",
        descriptionFR: "Bière 0% d'Alcool",
        descriptionEN: "0% Alcohol Beer",
        price: "4,000 DT",
        image: "images/175.jpg",
        category: "boissons",
        subcategory: "boisson",
    },

    {
        reference: "176",
        nameFR: "Thé Genmeicha",
        nameEN: "Genmaicha Tea",
        descriptionFR: "Thé Vert Japonais au Riz Grillé",
        descriptionEN: "Japanese Green Tea with Roasted Rice",
        price: "6,000 DT",
        image: "images/176.jpg",
        category: "boissons",
        subcategory: "boisson",
    },

    {
        reference: "178",
        nameFR: "Thé Hojicha",
        nameEN: "Hojicha Tea",
        descriptionFR: "Thé Vert Japonais Torréfié",
        descriptionEN: "Roasted Japanese Green Tea",
        price: "6,000 DT",
        image: "images/178.jpg",
        category: "boissons",
        subcategory: "boisson",
    },

    {
        reference: "179",
        nameFR: "Thé au Jasmin",
        nameEN: "Jasmine Tea",
        descriptionFR: "Thé Parfumé aux Fleurs de Jasmin",
        descriptionEN: "Tea Scented with Jasmine Flowers",
        price: "6,000 DT",
        image: "images/179.jpg",
        category: "boissons",
        subcategory: "boisson",
    },

    {
        reference: "",
        nameFR: "Coca Cola",
        nameEN: "Coca Cola",
        descriptionFR: "",
        descriptionEN: "",
        price: "2,500 DT",
        image: "boissons/coca.jpg",
        category: "boissons",
        subcategory: "boisson",
    },

    {
        reference: "",
        nameFR: "Coca Zero",
        nameEN: "Coca Zero",
        descriptionFR: "",
        descriptionEN: "",
        price: "2,500 DT",
        image: "boissons/zero.jpg",
        category: "boissons",
        subcategory: "boisson",
    },

    {
        reference: "",
        nameFR: "Boga Cidre",
        nameEN: "Boga Cidre",
        descriptionFR: "",
        descriptionEN: "",
        price: "2,500 DT",
        image: "boissons/bogac.jpg",
        category: "boissons",
        subcategory: "boisson",
    },

    {
        reference: "",
        nameFR: "Apla",
        nameEN: "Apla",
        descriptionFR: "",
        descriptionEN: "",
        price: "2,500 DT",
        image: "boissons/apla.jpg",
        category: "boissons",
        subcategory: "boisson",
    },

    {
        reference: "",
        nameFR: "Orangina",
        nameEN: "Orangina",
        descriptionFR: "",
        descriptionEN: "",
        price: "2,500 DT",
        image: "boissons/orangina.jpg",
        category: "boissons",
        subcategory: "boisson",
    },

    {
        reference: "",
        nameFR: "Fanta",
        nameEN: "Fanta",
        descriptionFR: "",
        descriptionEN: "",
        price: "2,500 DT",
        image: "boissons/fanta.jpg",
        category: "boissons",
        subcategory: "boisson",
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


    const referenceHTML =

        product.reference

            ? `<span class="product-reference">[${product.reference}]</span> `

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

                ${referenceHTML}${productName}

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
