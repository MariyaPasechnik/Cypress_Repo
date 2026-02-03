class AddCar {
    get addCarButton() {
        return cy.contains('button', 'Add car');
    }

    get modal() {
        return cy.get('ngb-modal-window');
    }

    get brand() {
        return cy.get('#addCarBrand');
    }

    get model() {
        return cy.get('#addCarModel');
    }

    get mileage() {
        return cy.get('#addCarMileage');
    }

    get submitButton() {
        return cy.contains('button', 'Add');
    }

    openAddCarModal() {
        this.addCarButton
            .should('be.visible')
            .click();

        this.modal.should('be.visible');
    }

    submitCarForm() {
        this.submitButton.click();
        this.modal.should('not.exist');
    }

    addCar(brand, model, mileage) {
       
        this.openAddCarModal();
        this.modal.within(() => {
            this.brand.select(brand);
            this.model.select(model);
            this.mileage.clear().type(mileage);
            this.submitButton.click();
        });

       
        this.modal.should('not.exist');
    }
}

export default new AddCar();
