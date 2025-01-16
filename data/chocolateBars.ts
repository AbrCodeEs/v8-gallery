export interface ChocolateBar {
    id: string;
    name: string;
    image: string;
    rating: number;
    fermented: boolean;
    certified: boolean;
    awarded: boolean;
    flavors: string[];
    country: string;
    ingredients: {
      [key: string]: number;
    };
  }
  
  export const chocolateBars: ChocolateBar[] = [
    {
      id: "1",
      name: "Fruity Delight",
      image: "/img/amirali-mirhashemian.jpg",
      rating: 4.5,
      fermented: true,
      certified: true,
      awarded: true,
      flavors: ["Fruity Sweet", "Fruity Citrus"],
      country: "Colombia",
      ingredients: {
        cocoa: 70,
        sugar: 20,
        fruit: 10,
      },
    },
    {
      id: "2",
      name: "Floral Essence",
      image: "/img/heather-barnes.jpg",
      rating: 4.2,
      fermented: true,
      certified: true,
      awarded: false,
      flavors: ["Floral", "Criollo"],
      country: "Peru",
      ingredients: {
        cocoa: 65,
        sugar: 25,
        flowers: 10,
      },
    },
    {
      id: "3",
      name: "Spiced Cocoa",
      image: "/img/irene-kredenets.jpg",
      rating: 4.7,
      fermented: true,
      certified: false,
      awarded: true,
      flavors: ["Cocoa", "Spices"],
      country: "Venezuela",
      ingredients: {
        cocoa: 80,
        sugar: 15,
        spices: 5,
      },
    },
    {
      id: "4",
      name: "Woody Criollo",
      image: "/img/nathana-reboucas.jpg",
      rating: 4.3,
      fermented: false,
      certified: true,
      awarded: false,
      flavors: ["Woody", "Criollo"],
      country: "Venezuela",
      ingredients: {
        cocoa: 75,
        sugar: 20,
        wood: 5,
      },
    },
    {
      id: "5",
      name: "Citrus Burst",
      image: "/img/jullliia.jpg",
      rating: 4.6,
      fermented: true,
      certified: true,
      awarded: true,
      flavors: ["Fruity Citrus"],
      country: "Colombia",
      ingredients: {
        cocoa: 60,
        sugar: 30,
        citrus: 10,
      },
    },
    {
      id: "6",
      name: "Nutty Crunch",
      image: "/img/pablo-merchan-montes.jpg",
      rating: 4.4,
      fermented: true,
      certified: true,
      awarded: false,
      flavors: ["Woody", "Cocoa"],
      country: "Peru",
      ingredients: {
        cocoa: 70,
        sugar: 20,
        nuts: 10,
      },
    },
    {
      id: "7",
      name: "Caramel Dream",
      image: "/img/pushpak-dsilva.jpg",
      rating: 4.8,
      fermented: true,
      certified: false,
      awarded: true,
      flavors: ["Fruity Sweet", "Cocoa"],
      country: "Colombia",
      ingredients: {
        cocoa: 55,
        sugar: 35,
        caramel: 10,
      },
    },
    {
      id: "8",
      name: "Minty Fresh",
      image: "/img/simone-van-der-koelen.jpg",
      rating: 4.1,
      fermented: false,
      certified: true,
      awarded: false,
      flavors: ["Floral", "Spices"],
      country: "Peru",
      ingredients: {
        cocoa: 65,
        sugar: 25,
        mint: 10,
      },
    },
    {
      id: "9",
      name: "Berry Bliss",
      image: "/img/tetiana-bykovets.jpg",
      rating: 4.9,
      fermented: true,
      certified: true,
      awarded: true,
      flavors: ["Fruity Sweet", "Floral"],
      country: "Venezuela",
      ingredients: {
        cocoa: 60,
        sugar: 25,
        berries: 15,
      },
    },
    {
      id: "10",
      name: "Coffee Infusion",
      image: "/img/tetiana-bykovets-H22.jpg",
      rating: 4.7,
      fermented: true,
      certified: true,
      awarded: true,
      flavors: ["Woody", "Spices"],
      country: "Colombia",
      ingredients: {
        cocoa: 70,
        sugar: 20,
        coffee: 10,
      },
    },
    {
      id: "11",
      name: "Coconut Paradise",
      image: "/img/alekseeva-maya.jpg",
      rating: 4.3,
      fermented: false,
      certified: true,
      awarded: false,
      flavors: ["Fruity Sweet", "Woody"],
      country: "Peru",
      ingredients: {
        cocoa: 65,
        sugar: 25,
        coconut: 10,
      },
    },
    {
      id: "12",
      name: "Chili Chocolate",
      image: "/img/tetiana-bykovets-Yemx.jpg",
      rating: 4.5,
      fermented: true,
      certified: false,
      awarded: true, 
      flavors: ["Spices", "Cocoa"],
      country: "Venezuela",
      ingredients: {
        cocoa: 75,
        sugar: 20,
        chili: 5,
      },
    },
  ]
  