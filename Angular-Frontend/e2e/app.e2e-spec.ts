import { AngularFrontendPage } from './app.po';

describe('angular-frontend App', () => {
  let page: AngularFrontendPage;

  beforeEach(() => {
    page = new AngularFrontendPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
