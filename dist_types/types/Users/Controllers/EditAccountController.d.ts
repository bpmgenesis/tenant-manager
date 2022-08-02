import { UIController } from '@tuval/forms';
export declare class EditEmployeeController extends UIController {
    private formPostTried;
    private showErrors;
    private employeeRecordId;
    private isEmployeeRecordIdInvalid;
    private employeeName;
    private isEmployeeNamedInvalid;
    private employeeLastName;
    protected BindRouterParams({ employee_info }: {
        employee_info: any;
    }): void;
    private isLoading;
    BindModel(): void;
    private ActionPost;
    private ActionCancel;
    LoadView(): any;
}
