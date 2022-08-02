import { UIController } from '@tuval/forms';
export declare class NewAccountController extends UIController {
    private checked;
    private showErrors;
    private accountName;
    private accountPassword;
    Invalidate(): void;
    private isLoading;
    BindModel(): void;
    private ActionCreateAccount;
    private ActionCancel;
    LoadView(): any;
}
