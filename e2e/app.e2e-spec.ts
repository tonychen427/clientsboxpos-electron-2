import { Test001Page } from './app.po';

describe('test001 App', function() {
  let page: Test001Page;

  beforeEach(() => {
    page = new Test001Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
