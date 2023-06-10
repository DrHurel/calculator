import { Theme } from "./_them";

/* Creating three themes for the calculator. */
const ThemeONE = new Theme(
  'hsl(222, 26%, 31%)',
  'hsl(224, 36%, 15%)',
  'hsl(223, 31%, 20%)',
  'hsl(225, 21%, 49%)',
  'hsl(224, 28%, 35%)',
  'hsl(6, 63%, 50%)',
  'hsl(6, 70%, 34%)',
  'hsl(30, 25%, 89%)',
  'hsl(28, 16%, 65%)',
  'hsl(221, 14%, 31%)',
  'white',
  'white'
);

const ThemeTWO = new Theme(
  'hsl(0, 0%, 90%)',
  'hsl(0, 0%, 93%)',
  'hsl(0, 5%, 81%)',
  'hsl(185, 42%, 37%)',
  'hsl(185, 58%, 25%)',
  'hsl(25, 98%, 40%)',
  'hsl(25, 99%, 27%)',
  'hsl(45, 7%, 89%)',
  'hsl(35, 11%, 61%)',
  'hsl(60, 10%, 19%)',
  'white',
  'hsl(60, 10%, 19%)'
);

const ThemeTHREE = new Theme(
  'hsl(268, 75%, 9%)',
  'hsl(268, 71%, 12%)',
  'hsl(268, 71%, 12%)',
  'hsl(281, 89%, 26%)',
  'hsl(285, 91%, 52%)',
  'hsl(176, 100%, 44%)',
  'hsl(177, 92%, 70%)',
  'hsl(268, 47%, 21%)',
  'hsl(290, 70%, 36%)',
  'white',
  'hsl(52, 100%, 62%)',
  'hsl(52, 100%, 62%)',
);


/* Setting the theme of the calculator. */
export const ThemeList: Theme[] = [ThemeONE, ThemeTWO, ThemeTHREE];