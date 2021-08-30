import HomePage from '../pages/HomePage';
import TopBar from '../pages/Components/TopBar';
import LoginPage from '../pages/LoginPage';
import FeedbackPage from '../pages/FeedbackPage';
import { username, password, timeout } from '../config';

describe('End-To-End Test', () => {
  jest.setTimeout(timeout);

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

  it('should load homepage', async () => {
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

  it('should fail the login', async () => {
    await homePage.visit();
    await topBar.isTopBarDisplayed();
    await topBar.clickSignInButton();
    await loginPage.isLoginFormDisplayed();
    await loginPage.failedLogin('aaa', 'aaa');
  });

  it('should login to application', async () => {
    await homePage.visit();
    await topBar.isTopBarDisplayed();
    await topBar.clickSignInButton();
    await loginPage.isLoginFormDisplayed();
    await loginPage.login(username, password);
  });
});
