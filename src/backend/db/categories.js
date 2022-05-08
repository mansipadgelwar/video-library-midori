import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Contemporary",
    description:
      "Known for its emphasis on strong torso and legwork, contract and release, fall and recovery and floor work, it is often known for unpredictable and disordered changes in speed and rhythm throughout a performance."
  },
  {
    _id: uuid(),
    categoryName: "Ballroom",
    description:
      "Ballroom dance is a type of partner dance originating at the end of the sixteenth century in France"
  },
  {
    _id: uuid(),
    categoryName: "Hip-hop",
    description:
      "Main styles of hip-hop dancing include Breaking, Locking and Popping, with derivative styles emerging out of these including Memphis Jookin’, Turfing, Jerkin’ and Krumping"
  },
  {
    _id: uuid(),
    categoryName: "Indian classical",
    description:
      "India has many dances, coming from every state in the country, although there are only six forms of the classical dances recognised by India on a national level. They are Bharatnatyam, Kathak, Kathakali, Manipuri, Kuchipudi, and Odissi."
  },
  {
    _id: uuid(),
    categoryName: "Bollywood",
    description:
      "The term Bollywood was created by combining two names, Bombay (the city now called Mumbai) and Hollywood. Bollywood based in Mumbai (Bombay), is India’s – and the world’s - largest film industry in terms of the number of films produced, and also the number of tickets sold each year"
  }
];
