import { UsersGrid } from '../Views/UsersGrid';
import { VStack, cTopLeading, cLeading, HStack, Text, Spacer, TextField, UITable, TableColumn, Icon, IconLibrary, UIContextMenu, UIAppearance, UIScene, UIController, cTop, State, Spinner, UIRouteLink } from '@tuval/forms';
import { RealmBrokerClient } from '../../../Services/RealmBrokerClient';
import { ActionButton } from '../../../Views/ActionButton';
import { Services } from '../../../Services/Services';
import { ITableViewColumn, Views } from '../../../Views/Views';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'



const columns: ITableViewColumn[] = [
    {
        title: 'Account Name',
        key: "account_name"
    },
    {
        title: 'Email',
        key: "account_email"
    },
    {
        title: 'Type',
        view: (row) => (
            HStack(
                Text(row.is_tenant_admin ? 'Tenant Admin' : 'User')
            )
                .width(100).maxWidth('100px').minWidth('100px').height(30)
                .background(row.is_tenant_admin ? '#15CD72' : '#2196f3').lineHeight('10px').fontSize(13).fontWeight('500')
                .foregroundColor('white').padding('8px 10px').cornerRadius(7)
                .transition('box-shadow .28s cubic-bezier(.4,0,.2,1)')

        )
    }
]


export class UserListController extends UIController {

    @State()
    private users: any[];

    @State()
    private showingUsers: any[];

    private isLoading(): boolean {
        return this.users == null;
    }


    public BindRouterParams({ tenant_id, tenant_name }) {
        //  if (this.tenants == null) {
        RealmBrokerClient.GetEmployees().then(employees => {
            this.showingUsers = this.users = employees;
        })
    }
    private Search_Action(value: string): void {
        //this.showingTenants = this.tenants.filter((tenant) => tenant.tenant_name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }

    public LoadView(): any {
        return ({ AppController_ContextAction_SetController }) => {
            return (
                Views.RightSidePage({
                    title: 'Employees',
                    content: (
                        HStack({ alignment: cTopLeading })(
                            this.isLoading() ?
                                VStack(Spinner()) :
                                VStack({ alignment: cTopLeading })(
                                    HStack({ alignment: cLeading, spacing: 15 })(
                                        // MARK: Search Box
                                        HStack(
                                            TextField().placeholder('Search by Employee Name')
                                                .onTextChange((value) => this.Search_Action(value))
                                        ).height().border('solid 1px #dfdfdf').padding(10).width(300).cornerRadius(5),
                                        Spacer(),
                                        Views.AcceptRouteButton({ label: 'New Employee', link: '/app(tenantmanager)/employee/add' })
                                    ).height().marginBottom('24px'),
                                    UsersGrid(this.users)
                                )
                        )
                    )
                })
            )
        }
    }
}