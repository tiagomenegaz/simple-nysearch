import { SimpleNysearchPage } from './app.po';

describe('simple-nysearch App', function() {
  let page: SimpleNysearchPage;

  beforeEach(() => {
    page = new SimpleNysearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
