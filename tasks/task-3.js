// Get the names of the bestsellers available in a given language and genre.
// (c) https://github.com/dariadia/kodiri_exercise

getBestsellers([
  { title: 'The Guardians', author: 'John Grisham', lang: 'en', genre: 'fiction' },
  { title: 'The 19th Christmas', author: 'James Patterson & Maxine Paetro', lang: 'en', genre: 'fiction' },
  { title: 'Becoming', author: 'Michelle Obama', lang: 'en', genre: 'nonfiction'},
], 'en', 'fiction') === 'The Guardians & The 19th Christmas';

getBestsellers([
  { title: 'Notes from Underground', author: 'Fyodor Dostoevsky', lang: 'ru', genre: 'fiction' },
  { title: 'Tell Me Who I Am', author: 'Julia Navarro', lang: 'sp', genre: 'fiction' },
  { title: 'The Time Between Seams', author: 'María Dueñas', lang: 'sp', genre: 'fiction'},
], 'sp', 'fiction') === 'Tell Me Who I Am & The Time Between Seams';


getBestsellers([
  { title: 'A Complete Wellness Guide For You', author: 'Doctor Juan Rivera', lang: 'sp', genre: 'nonfiction' },
  { title: 'The Blue Zones Kitchen', author: 'Dan Buettner', lang: 'en', genre: 'nonfiction' },
  { title: 'P.S. from Paris', author: 'Marc Levy', lang: 'fr', genre: 'fiction'},
], 'sp', 'nonfiction') === 'A Complete Wellness Guide For You';


const getBestsellers = (books, language, genre) => {
  // solution here
}
