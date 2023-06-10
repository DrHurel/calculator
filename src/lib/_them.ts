/* The class is used to set the theme of the calculator. */
export class Theme {
  /**
   * This function is a constructor that takes in 12 parameters and assigns them to 12 properties of
   * the object that is being created.
   * @param bodyBackground - background color of the body
   * @param screenBackground - background color of the screen
   * @param keypadBackground - background color of the keypad
   * @param resetBackground - background color of the reset button
   * @param resetShadow - the shadow of the reset button
   * @param equalBackground - background color of the equal button
   * @param equalShadow - box-shadow of the equal button
   * @param regularKeyBackground - background color of the regular keys
   * @param regularKeyShadow - the shadow of the regular keys
   * @param regularKeyText - the text color of the regular keys
   * @param specialKeyText - text color of special keys (AC, +/-, %, ., =)
   * @param screenText - the text color of the screen
   */
  bodyBackground: string;
  screenBackground: string;
  keypadBackground: string;
  resetBackground: string;
  resetShadow: string;
  equalBackground: string;
  equalShadow: string;
  regularKeyBackground: string;
  regularKeyShadow: string;
  regularKeyText: string;
  specialKeyText: string;
  screenText: string;
  specialThemeList: any[] = [];
  root: HTMLElement = document.querySelector(':root') as HTMLElement;
  constructor(bodyBackground, screenBackground, keypadBackground, resetBackground, resetShadow, equalBackground, equalShadow, regularKeyBackground, regularKeyShadow, regularKeyText, specialKeyText, screenText) {
    this.bodyBackground = bodyBackground;
    this.screenBackground = screenBackground;
    this.keypadBackground = keypadBackground;
    this.resetBackground = resetBackground;
    this.resetShadow = resetShadow;
    this.equalBackground = equalBackground;
    this.equalShadow = equalShadow;
    this.regularKeyBackground = regularKeyBackground;
    this.regularKeyShadow = regularKeyShadow;
    this.regularKeyText = regularKeyText;
    this.specialKeyText = specialKeyText;
    this.screenText = screenText;
  }

  /**
   * It sets the theme of the calculator by changing the CSS variables.
   */
  public setTheme() {
    this.root.style.setProperty('--body-background', this.bodyBackground);
    this.root.style.setProperty('--screen-background', this.screenBackground);
    this.root.style.setProperty('--keypad-background', this.keypadBackground);
    this.root.style.setProperty('--reset-background', this.resetBackground);
    this.root.style.setProperty('--reset-shadow', this.resetShadow);
    this.root.style.setProperty('--equal-background', this.equalBackground);
    this.root.style.setProperty('--equal-shadow', this.equalShadow);
    this.root.style.setProperty('--regular-key-background', this.regularKeyBackground);
    this.root.style.setProperty('--regular-key-shadow', this.regularKeyShadow);
    this.root.style.setProperty('--regular-key-text', this.regularKeyText);
    this.root.style.setProperty('--special-key-text', this.specialKeyText);
    this.root.style.setProperty('--screnn-text', this.screenText);
    for (var i = 0; i < this.specialThemeList.length; i++) {
      this.specialThemeList[i].element.style.setProperty(this.specialThemeList[i].property, this.specialThemeList[i].color);
    }
  }

  /**
   * It takes a color, an element, and a property, and pushes them into an array.
   * @param color - The color you want to change the element to.
   * @param element - The element you want to change the color of.
   * @param property - The CSS property you want to change.
   */
  public specialTheme(color, element, property) {
    this.specialThemeList.push({ element: element, property: property, color: color });
  }

  public Root(root) {
    this.root = root
  }
}