class AddFuel {
    get addFuelButton() {
        return cy.contains('button', 'Add fuel expense');
    }

    get modal() {
        return cy.get('ngb-modal-window');
    }

    get mileage() {
        return cy.get('#addExpenseMileage');
    }

    get liters() {
        return cy.get('#addExpenseLiters'); 
    }

    get cost() {
        return cy.get('#addExpenseTotalCost');
    }

    get submitButton() {
        return cy.contains('button', 'Add');
    }

    openAddModal() {
        this.addFuelButton.click({ force: true });
        this.modal.should('be.visible');
    }

    addFuel(liters, cost) {
        this.openAddModal();
        
        this.modal.within(() => {
            // Ждем, пока в поле пробега появится хоть какое-то значение больше 0
            this.mileage.should('not.have.value', '');
            
            this.mileage.invoke('val').then((currentValue) => {
                const newMileage = Number(currentValue) + 10;
                
                this.mileage.clear().type(newMileage);
                this.liters.clear().type(liters);
                this.cost.clear().type(cost);
                this.submitButton.click();
            });
        });

        this.modal.should('not.exist');
    }
}

export default new AddFuel();