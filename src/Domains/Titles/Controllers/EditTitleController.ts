import { $, Binding, bindNavigate, cTopLeading, State, UIController, UIScene, VStack } from '@tuval/forms';

import { IGetTitleResponse, RealmBrokerClient } from '../../../Services/RealmBrokerClient';
import { Views } from '../../../Views/Views';

export class EditTitleController extends UIController {

    @State()
    private title: IGetTitleResponse;

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

    protected BindRouterParams({ title }: { title: IGetTitleResponse }) {
        if (title) {
            this.title = title;

            this.titleRecordId = title.title_record_id;
            this.titleName = title.title_name;
        }
    }
    private ActionPost() {
        console.log(this.isTitleRecordIdInvalid, ' ', this.isTitleNamedInvalid);
        if (this.isTitleRecordIdInvalid || this.isTitleNamedInvalid) {
            this.formPostTried = true;
        } else {
            RealmBrokerClient.UpdateTitle(this.title.title_id, this.titleRecordId, this.titleName).then(() => {
                this.navigotor('/app(tenantmanager)/title/list', { replace: true });
            })
        }
    }

    private ActionCancel() {
        this.navigotor('/app(tenantmanager)/employee/list');
    }

    public LoadView(): any {
        return (
            UIScene(
                Views.FormView({
                    header: `Update Title`,
                    content: (
                        VStack({ alignment: cTopLeading, spacing: 10 })(
                            Views.InputTextView('Title ID *', 'Enter Title Record ID', $(this.titleRecordId), true, $(this.isTitleRecordIdInvalid), 'ID is required.', this.formPostTried),
                            Views.InputTextView('Name *', 'Enter Title First Name', $(this.titleName), true, $(this.isTitleNamedInvalid), 'Name is required.', this.formPostTried),

                            Views.AcceptButton({ label: 'Update Title', action: () => this.ActionPost() }),

                        ).padding(10).foregroundColor('#676767').height()
                            .marginTop('10px')
                    )
                })
            )
        )
    }
}