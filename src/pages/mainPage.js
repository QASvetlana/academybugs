export class MainPage {
    constructor(page) {
        this.page = page;
        this.productsPerPage = page.getByRole('link',  { name: '50' });
        this.overlayWithFoundBug = page.locator('.academy-bug-overlay');
        this.imageLayoutJeans = page.locator('#ec_product_image_effect_4281370');
        this.modalWindowAboutBug = page.getByRole('heading',  { name: 'What did you find out?' });
        this.imageLayoutShoes = page.locator('#ec_product_image_effect_4481370');
        this.currency = page.locator('#ec_currency_conversion');
        this.popupWithFoundBug = page.getByRole('heading', { name: 'You found a “Crash” bug' });
        this.bugCounter = page.getByRole('link', { name: '' });
        this.numberBugs = page.getByText('You found 1 bug out of 25 1 2');
        this.addToCard = page.locator('#ec_add_to_cart_5');
        this.checkOutCard = page.getByRole('link', { name: 'CHECKOUT NOW' });
        this.deleteFromCard = page.locator('.ec_cartitem_delete');
        this.home = page.getByRole('link', { name: 'RETURN TO STOR      E' });
        this.manufacterer = page.getByRole('link', { name: 'DNK' });
    }

    async open(url) {
        await this.page.goto(url);
    }

    async numberOfProductsPerPage() {
        await this.productsPerPage.click();
    }

    async openImageLayoutJeans() {
        await this.imageLayoutJeans.click();
    }

    async openImageLayoutShoes() {
        await this.imageLayoutShoes.click();
    }

    async currencyChangeAttempt() {
        await this.currency.selectOption('EUR');
    }

    async goToBugCounter() {
        await this.bugCounter.click();
    }

    async btnAddToCard() {
        await this.addToCard.click();
    }

    async btnCheckOutCard() {
        await this.checkOutCard.click();
    }

    async btnDeleteFromCard() {
        await this.deleteFromCard.click();
    }

    async returnHome() {
        await this.home.click();
    }

    async goToManufacterer() {
        await this.manufacterer.click();
    }

}

