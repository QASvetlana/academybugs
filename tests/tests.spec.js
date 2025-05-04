import { test, expect } from '@playwright/test';
import { MainPage } from '../src/pages/mainPage';

const URL_UI = 'https://academybugs.com/find-bugs/';

test.describe('Поиск 5 багов на сайте академии багов', () => {


 test('Краш при смене колличества отображаемых на странице товаров', async ({ 
  page,
 }) => {
    const mainPage = new MainPage(page);

      await mainPage.open(URL_UI);
      await mainPage.numberOfProductsPerPage();
      await expect(mainPage.overlayWithFoundBug).toContainText('You found a crash bug, examine the page by clicking on any button for 5 seconds.');
});

test('Едет вертска у фото товара', async ({ 
  page,
 }) => {
    const mainPage = new MainPage(page);

      await mainPage.open(URL_UI);
      await mainPage.openImageLayoutJeans();
      await expect(mainPage.modalWindowAboutBug).toBeVisible();
});

test('Краш при смене типа валюты', async ({ 
  page,
 }) => {
    const mainPage = new MainPage(page);

      await mainPage.open(URL_UI);
      await mainPage.openImageLayoutShoes();
      await expect(mainPage.currency).toBeVisible();
      await mainPage.currencyChangeAttempt();
      await expect(mainPage.bugCounter).toBeVisible();
});


test('Кнопка "Домой" не возвращает пользователя на главную', async ({ 
  page,
 }) => {
    const mainPage = new MainPage(page);

      await mainPage.open(URL_UI);
      await mainPage.btnAddToCard();
      await mainPage.btnCheckOutCard();
      await mainPage.btnDeleteFromCard();
      await mainPage.returnHome();
      await expect(mainPage.modalWindowAboutBug).toContainText('What did you find out?');
});

test('При переходе на производителя 404', async ({ 
  page,
 }) => {
    const mainPage = new MainPage(page);

      await mainPage.open(URL_UI);
      await mainPage.openImageLayoutShoes();
      await mainPage.goToManufacterer();
      await expect(mainPage.modalWindowAboutBug).toContainText('What did you find out?');
});

});




