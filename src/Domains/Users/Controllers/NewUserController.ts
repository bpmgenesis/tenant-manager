import {
    cLeading,
    cTopLeading,
    HStack,
    Spacer,
    Spinner,
    State,
    Text,
    TextField,
    UIButton,
    UIController,
    UIScene,
    VStack,
    cHorizontal,
    Toggle,
    SecureField,
    AutoComplete,
    $
} from '@tuval/forms';

import { RealmBrokerClient } from '../../../Services/RealmBrokerClient';
import { Color, UIImage, NavigateFunction, bindNavigate, Binding } from '@tuval/forms';
import { ActionButton } from '../../../Views/ActionButton';
import { Services } from '../../../Services/Services';
import { Views } from '../../../Views/Views';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'
const img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAYAAAAc0MJxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAABCUlEQVR4Xu3aMUoDQQCG0VzCY3gOm1zEThAsrT2GR/ImQtpAVjaCRVjxWxxxCa94A9P9fN3A7O4e9gSfx/008T2hIqEioSKhIqEioSKhIqEioSKhIqGiYaFuX07T6+F9k+ZtS5vXECoSKhIqEioSKhIqEioSKhoW6ub5ND29HTZp3ra0eY1hoa6dUJFQkVCRUJFQkVCRUJFQ0bBQnjCRUJFQkVCRUJFQkVCRUJFQkVCcCRUJFQkVCRUJFQkVCRUJFQ0L5ZNG5AkTCRUJFQkVCRUJFQkVCRUJVT0ez4O2aN62uHmFcaEuXY777/sv/V2oKyNUJFQkVCRUJFQkVCRUJFQkVPQVip/sdx+ddLpvQckwsAAAAABJRU5ErkJggg=='

export class NewUserController extends UIController {

    @State()
    private formPostTried: boolean;

    @State()
    private showErrors: boolean;

    @Binding()
    private employeeId: string;

    @Binding(true)
    private isEmployeeIDdInvalid: boolean;

    @Binding()
    private employeeName: string;

    @Binding(true)
    private isEmployeeNamedInvalid: boolean;

    @Binding()
    private employeeLastName: string;

    private email: string;

    @State()
    private items: any[];


    private ActionPost() {
        if (this.isEmployeeIDdInvalid || this.isEmployeeNamedInvalid) {
            this.formPostTried = true;
        } else {
            RealmBrokerClient.CreateEmployee(this.employeeId, this.employeeName,
                this.employeeLastName, '', '').then(() => {
                    this.navigotor('/app(tenantmanager)/employee/list', { replace: true });
                })
        }
    }

    private ActionCancel() {
        this.navigotor('/app(tenantmanager)/employee/list');
    }

    public LoadView(): any {
        this.navigotor = bindNavigate();
        return (
            UIScene(
                Views.FormView({
                    header: `New Employee`,
                    content: (
                        VStack({ alignment: cTopLeading, spacing: 10 })(
                            Views.InputTextView('Employee ID *', 'Enter Employee Record ID', $(this.employeeId), true, $(this.isEmployeeIDdInvalid), 'ID is required.', this.formPostTried),
                            Views.InputTextView('Name *', 'Enter Employee First Name', $(this.employeeName), true, $(this.isEmployeeNamedInvalid), 'Name is required.', this.formPostTried),
                            Views.InputTextView('Last Name', 'Enter Employee Last Name', $(this.employeeLastName)),
                            Views.InputTextView('Title', 'Enter Employee Title', $(this.employeeLastName)),

                            Views.AcceptButton({ label: 'Create Employee', action: () => this.ActionPost() }),

                        ).padding(10).foregroundColor('#676767').height()
                            .marginTop('10px')
                    )
                })
            )
        )
    }
}