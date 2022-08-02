import { $, cTopLeading, State, UIController, UIScene, VStack, Binding } from '@tuval/forms';

import { Views } from '../../../Views/Views';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'
const img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAYAAAAc0MJxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAABCUlEQVR4Xu3aMUoDQQCG0VzCY3gOm1zEThAsrT2GR/ImQtpAVjaCRVjxWxxxCa94A9P9fN3A7O4e9gSfx/008T2hIqEioSKhIqEioSKhIqEioSKhIqGiYaFuX07T6+F9k+ZtS5vXECoSKhIqEioSKhIqEioSKhoW6ub5ND29HTZp3ra0eY1hoa6dUJFQkVCRUJFQkVCRUJFQ0bBQnjCRUJFQkVCRUJFQkVCRUJFQkVCcCRUJFQkVCRUJFQkVCRUJFQ0L5ZNG5AkTCRUJFQkVCRUJFQkVCRUJVT0ez4O2aN62uHmFcaEuXY777/sv/V2oKyNUJFQkVCRUJFQkVCRUJFQkVPQVip/sdx+ddLpvQckwsAAAAABJRU5ErkJggg=='

export class EditEmployeeController extends UIController {

    @State()
    private formPostTried: boolean;

    @State()
    private showErrors: boolean;

    @Binding()
    private employeeRecordId: string;

    @Binding(true)
    private isEmployeeRecordIdInvalid: boolean;

    @Binding()
    private employeeName: string;

    @Binding(true)
    private isEmployeeNamedInvalid: boolean;

    @State()
    private employeeLastName: string;


    protected BindRouterParams({ employee_info }) {

        if (employee_info != null) {
            this.employeeRecordId = employee_info.employee_record_id;
            //this.employeeRecordId.set(employee_info.employee_record_id);
        }
    }

    private ActionPost() {
        if (this.isEmployeeRecordIdInvalid || this.isEmployeeNamedInvalid) {
            this.formPostTried = true;
        } else {
            /*  RealmBrokerClient.CreateEmployee(this.employeeRecordId, this.employeeName,
                 this.employeeLastName, '', '').then(() => {
                     this.navigotor('/app(tenantmanager)/employee/list', { replace: true });
                 }) */
        }
    }

    private ActionCancel() {
        this.navigotor('/app(tenantmanager)/employee/list');
    }

    public LoadView(): any {

        return (
            UIScene(
                Views.FormView({
                    header: `Update Employee`,
                    content: (
                        VStack({ alignment: cTopLeading, spacing: 10 })(
                            Views.InputTextView('Employee ID *', 'Enter Employee Record ID', $(this.employeeRecordId), true, $(this.isEmployeeRecordIdInvalid), 'ID is required.', this.formPostTried),
                            Views.InputTextView('Name *', 'Enter Employee First Name', $(this.employeeName), true, $(this.isEmployeeNamedInvalid), 'Name is required.', this.formPostTried),
                            Views.InputTextView('Last Name', 'Enter Employee Last Name', $(this.employeeLastName)),

                            Views.AcceptButton({ label: 'Update Employee', action: () => this.ActionPost() }),

                        ).padding(10).foregroundColor('#676767').height()
                            .marginTop('10px')
                    )
                })
            )
        )
    }
}