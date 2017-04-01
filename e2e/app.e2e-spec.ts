import { AngCliHmrPage } from './app.po';

describe('ang-cli-hmr App', () => {
  let page: AngCliHmrPage;

  beforeEach(() => {
    page = new AngCliHmrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
