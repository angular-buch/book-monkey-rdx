import { BookLibraryPage } from './app.po';

describe('book-library App', function() {
  let page: BookLibraryPage;

  beforeEach(() => {
    page = new BookLibraryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
