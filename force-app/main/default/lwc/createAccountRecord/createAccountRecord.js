import { LightningElement } from 'lwc';

export default class CreateAccountRecord extends LightningElement {
    accountFields = ['Name', 'Industry', 'Phone', 'Website'];

    handleSuccess(event) {
        // Display a success message to the user
        const toastEvent = new ShowToastEvent({
            title: 'Success',
            message: 'Account created successfully!',
            variant: 'success',
        });
        this.dispatchEvent(toastEvent);
    }
}
