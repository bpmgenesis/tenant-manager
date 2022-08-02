import { UIController } from '@tuval/forms';
export declare class NewUserController extends UIController {
    private formPostTried;
    private showErrors;
    private employeeId;
    private isEmployeeIDdInvalid;
    private employeeName;
    private isEmployeeNamedInvalid;
    private employeeLastName;
    private email;
    private items;
    private isLoading;
    BindModel(): void;
    private ActionPost;
    private ActionCancel;
    LoadView(): any;
}
