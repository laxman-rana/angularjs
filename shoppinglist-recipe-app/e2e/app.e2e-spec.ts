import { ShoppinglistRecipeAppPage } from './app.po';

describe('shoppinglist-recipe-app App', () => {
  let page: ShoppinglistRecipeAppPage;

  beforeEach(() => {
    page = new ShoppinglistRecipeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
