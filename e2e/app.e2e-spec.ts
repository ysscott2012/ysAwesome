import { YsAwesomePage } from './app.po';

describe('ys-awesome App', () => {
  let page: YsAwesomePage;

  beforeEach(() => {
    page = new YsAwesomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
