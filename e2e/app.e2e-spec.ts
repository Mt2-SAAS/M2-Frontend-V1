import { Metin2appPage } from './app.po';

describe('metin2app App', () => {
  let page: Metin2appPage;

  beforeEach(() => {
    page = new Metin2appPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
