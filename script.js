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
            titleFR: "Gyozas (4 Pièces)",
            titleEN: "Gyoza (4 Pieces)"
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
            en: "Sashimis"
        },
       
        {
            id: "nigiris",
            fr: "Nigiris",
            en: "Nigiris",
        },

        {
            id: "gunkan-maki",
            fr: "Gunkan Maki",
            en: "Gunkan Maki",
        },

        {
            id: "gunkan-fusion",
            fr: "Gunkan Fusion",
            en: "Fusion Gunkan",
        },

        {
            id: "hosomaki",
            fr: "Hosomaki",
            en: "Hosomaki",
        },

        {
            id: "california-rolls",
            fr: "California Rolls",
            en: "California Rolls",
        },

        {
            id: "futomaki",
            fr: "Futomaki",
            en: "Futomaki",
        },

        {
            id: "rouleaux-du-chef",
            fr: "Rouleaux Du Chef",
            en: "Chef's Special Rolls",
        },

        {
            id: "green-maki",
            fr: "Green Maki",
            en: "Green Maki",
        },

        {
            id: "sushi-cake",
            fr: "Sushi Cake",
            en: "Sushi Cake",
        },

        {
            id: "sushi-panko",
            fr: "Sushi Panko",
            en: "Sushi Panko",
        },

        {
            id: "crunchy-rolls",
            fr: "Crunchy Rolls",
            en: "Crunchy Rolls",
        },

        {
            id: "riz-garni",
            fr: "Bols de Riz Garnis",
            en: "Rice Bowls",
        },

        {
            id: "tataki",
            fr: "Spécialiés Tataki",
            en: "Tataki Specials",
        },

        {
            id: "Onigarazu",
            fr: "Onigarzu",
            en: "Onigarazu",
        }

    ],


    "plats-chauds": [

        {
            id: "yakitori",
            fr: "Yakitori",
            en: "Yakitori"
        },

        {
            id: "kushikatsu",
            fr: "Kushikatsu",
            en: "Kushikatsu"
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
            id: "riz-salade",
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
            en: "Lava Cakes",
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
   =========================================================

   POUR AJOUTER UN PRODUIT :

   - reference       = référence du produit
   - nameFR          = nom français
   - nameEN          = nom anglais
   - descriptionFR   = description française
   - descriptionEN   = description anglaise
   - price            = prix
   - image            = chemin vers l'image
   - category         = catégorie principale
   - subcategory      = sous-catégorie

   ========================================================= */

const products = [

    {
        reference: "8",
        nameFR: "Soupe miso",
        nameEN: "Miso soup",
        descriptionFR: "Bouillon traditionnel Japonais à base de pate miso",
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
        descriptionFR: "Raviolis japonais grillés, farcie au poulet et gingembre (4 pièces)",
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
        descriptionFR: "Raviolis japonais grillés, farcie au bœuf et gingembre (4 pièces)",
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
        descriptionFR: "Raviolis japonais grillés, farcie aux crevettes et gingembre (4 pièces)",
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
        descriptionEN: "9 Futomaki, 9 California Rolls, 9 Hosomaki et 5 Nigiri",
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
        descriptionEN: "12 Futomaki, 12 California Rolls, 12 Hosomaki et 6 Nigiri",
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
        descriptionEN: "15 Futomaki, 15 California Rolls, 15 Hosomaki et 7 Nigiri",
        price: "144,000 DT",
        image: "images/85.jpg",
        category: "sushi",
        subcategory: "plateaux",
    },


    {
        reference: "211",
        nameFR: "Origamix 12 Pièces Saumon",
        nameEN: "Origamix 12-Piece Salmon set",
        descriptionFR: "Futomaki saumon,  California saumon,  Hosomaki saumon et  Nigiri saumon",
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
        reference: "193",
        nameFR: "Kushikatsu Bœuf Fromage",
        nameEN: "Beef Cheese Kushikatsu",
        descriptionFR:
            "Bœuf pané et fromage fondant, servi avec une sauce maison.",
        descriptionEN:
            "Breaded beef and melted cheese, served with homemade sauce.",
        price: "18,000 DT",
        image: "images/193.jpg",
        category: "plats-chauds",
        subcategory: "kushikatsu"
    },


    {
        reference: "194",
        nameFR: "Kushikatsu Poulet",
        nameEN: "Chicken Kushikatsu",
        descriptionFR:
            "Morceaux de poulet panés et frits à la perfection.",
        descriptionEN:
            "Breaded chicken pieces, fried to perfection.",
        price: "16 DT",
        image: "images/194.jpg",
        category: "plats-chauds",
        subcategory: "kushikatsu"
    },


    {
        reference: "195",
        nameFR: "Kushikatsu Crevette",
        nameEN: "Shrimp Kushikatsu",
        descriptionFR:
            "Crevettes panées et croustillantes, accompagnées de leur sauce.",
        descriptionEN:
            "Crispy breaded shrimp, served with their sauce.",
        price: "20 DT",
        image: "images/195.jpg",
        category: "plats-chauds",
        subcategory: "kushikatsu"
    },


    {
        reference: "196",
        nameFR: "Yakitori Poulet",
        nameEN: "Chicken Yakitori",
        descriptionFR:
            "Brochettes de poulet grillées et délicatement assaisonnées.",
        descriptionEN:
            "Grilled chicken skewers, delicately seasoned.",
        price: "15 DT",
        image: "images/196.jpg",
        category: "plats-chauds",
        subcategory: "yakitori"
    },


    {
        reference: "197",
        nameFR: "Yakitori Bœuf",
        nameEN: "Beef Yakitori",
        descriptionFR:
            "Brochettes de bœuf grillées et savoureuses.",
        descriptionEN:
            "Flavorful grilled beef skewers.",
        price: "17 DT",
        image: "images/197.jpg",
        category: "plats-chauds",
        subcategory: "yakitori"
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


const menuSubtitle =
    document.getElementById(
        "menuSubtitle"
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

        const savedLanguage =
            localStorage.getItem(
                "origamiLanguage"
            );


        currentYear.textContent =
            new Date().getFullYear();


        setupEventListeners();


        /*
           Si une langue a déjà été choisie,
           on affiche directement le menu.
        */

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

function setLanguage(
    language
) {


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


    menuSubtitle.textContent =

        currentLanguage === "fr"

            ? "Découvrez notre sélection"

            : "Discover our selection";


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

function getCategory(
    categoryId
) {


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


    if (!subcategoryBar || !element) {
        return;
    }


    /*
       On récupère la position ABSOLUE du titre
       dans toute la page.
    */

    const elementTop =
        element.getBoundingClientRect().top +
        window.scrollY;


    /*
       On récupère la hauteur actuelle
       de la barre des sous-catégories.
    */

    const barHeight =
        subcategoryBar.getBoundingClientRect().height;


    /*
       On place le titre juste sous
       la barre sticky.
    */

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



    card.innerHTML = `

        <div class="product-image-container">

            <img

                class="product-image"

                src="${product.image}"

                alt="${productName}"

                loading="lazy"

                onerror="this.style.display='none'"

            >


            <span class="product-reference">

                [${product.reference}]

            </span>

        </div>


        <div class="product-info">

            <h3 class="product-name">

                ${productName}

            </h3>


            <p class="product-description">

                ${productDescription}

            </p>


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
