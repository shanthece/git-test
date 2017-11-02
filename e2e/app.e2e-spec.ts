import { PrjctnewPage } from './app.po';

describe('prjctnew App', () => {
  let page: PrjctnewPage;

  beforeEach(() => {
    page = new PrjctnewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
