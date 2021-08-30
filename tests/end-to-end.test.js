import HomePage from '../pages/HomePage';
import TopBar from '../pages/Components/TopBar';
import LoginPage from '../pages/LoginPage';
import FeedbackPage from '../pages/FeedbackPage';

describe('End-To-End Test', () => {
  jest.setTimeout(15000);

  let homePage;
  let feedbackPage;
  let loginPage;
  let topBar;

  beforeAll(async () => {
    homePage = new HomePage();
    feedbackPage = new FeedbackPage();
    loginPage = new LoginPage();
    topBar = new TopBar();
  });

  it('should loaf homepage', async () => {
    await homePage.visit();
    await homePage.isNavbarDisplayed();
  });

  it('should submit feedback', async () => {
    await homePage.clickFeedbackLink();
    await feedbackPage.isFeedbackFormDisplayed();
    await feedbackPage.submitFeedback(
      'Jon',
      'jon@jon.com',
      'subject',
      'Lorem Ipsum Comment'
    );
  });
});
