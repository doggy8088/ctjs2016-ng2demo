import { Demo2Page } from './app.po';

describe('demo2 App', function() {
  let page: Demo2Page;

  beforeEach(() => {
    page = new Demo2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
