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

export class NewTitleController extends UIController {

    @State()
    private formPostTried: boolean;

    @Binding()
    private titleRecordId: string;

    @Binding(true)
    private isTitleRecordIdInvalid: boolean;

    @Binding()
    private titleName: string;

    @Binding(true)
    private isTitleNamedInvalid: boolean;

    private ActionPost() {
        debugger;
        console.log(this.isTitleRecordIdInvalid, ' ', this.isTitleNamedInvalid);
        if (this.isTitleRecordIdInvalid || this.isTitleNamedInvalid) {
            this.formPostTried = true;
        } else {
            RealmBrokerClient.CreateTitle(this.titleRecordId, this.titleName).then(() => {
                this.navigotor('/app(tenantmanager)/title/list', { replace: true });
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
                    header: `New Title`,
                    content: (
                        VStack({ alignment: cTopLeading, spacing: 10 })(
                            Views.InputTextView('Employee ID *', 'Enter Title Record ID', $(this.titleRecordId), true, $(this.isTitleRecordIdInvalid), 'ID is required.', this.formPostTried),
                            Views.InputTextView('Name *', 'Enter Title Name', $(this.titleName), true, $(this.isTitleNamedInvalid), 'Name is required.', this.formPostTried),

                            Views.AcceptButton({ label: 'Create Title', action: () => this.ActionPost() }),

                        ).padding(10).foregroundColor('#676767').height()
                            .marginTop('10px')
                    )
                })
            )
        )
    }
}