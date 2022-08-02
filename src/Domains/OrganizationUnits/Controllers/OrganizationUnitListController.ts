
import { VStack, cTopLeading, cLeading, HStack, Text, Spacer, TextField, UITable, TableColumn, Icon, IconLibrary, UIContextMenu, UIAppearance, UIScene, UIController, cTop, State, Spinner, UIRouteLink } from '@tuval/forms';
import { RealmBrokerClient, IGetTitleResponse } from '../../../Services/RealmBrokerClient';
import { ActionButton } from '../../../Views/ActionButton';
import { Services } from '../../../Services/Services';
import { ITableViewColumn, Views } from '../../../Views/Views';
import { UsersGrid } from '../../Users/Views/UsersGrid';
import { TitleGrid } from '../../Titles/Views/TitleGrid';
import { OrganizationUnitGrid } from '../Views/OrganizationUnitGrid';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'

export class OrganizationUnitListController extends UIController {

    @State()
    private organizationUnits: IGetTitleResponse[];

    @State()
    private showingOrganizationUnits: any[];

    private isLoading(): boolean {
        return this.organizationUnits == null;
    }


    public BindRouterParams({ tenant_id, tenant_name }) {
        //  if (this.tenants == null) {
        RealmBrokerClient.GetOrganizationUnits().then(titles => {
            this.showingOrganizationUnits = this.organizationUnits = titles;
        })
    }
    private Search_Action(value: string): void {
        //this.showingTenants = this.tenants.filter((tenant) => tenant.tenant_name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }

    public LoadView(): any {
            return (
                Views.RightSidePage({
                    title: 'Organization Units',
                    content: (
                        HStack({ alignment: cTopLeading })(
                            this.isLoading() ?
                                VStack(Spinner()) :
                                VStack({ alignment: cTopLeading })(
                                    HStack({ alignment: cLeading, spacing: 15 })(
                                        // MARK: Search Box
                                        HStack(
                                            TextField().placeholder('Search by Organization Unit Name')
                                                .onTextChange((value) => this.Search_Action(value))
                                        ).height().border('solid 1px #dfdfdf').padding(10).width(300).cornerRadius(5),
                                        Spacer(),
                                        Views.AcceptRouteButton({ label: 'New Organization Unit', link: '/app(tenantmanager)/organization_unit/add' })
                                    ).height().marginBottom('24px'),
                                    OrganizationUnitGrid(this.organizationUnits)
                                )
                        )
                    )
                })
            )
    }
}