
import { VStack, cTopLeading, cLeading, HStack, Text, Spacer, TextField, UITable, TableColumn, Icon, IconLibrary, UIContextMenu, UIAppearance, UIScene, UIController, cTop, State, Spinner, UIRouteLink } from '@tuval/forms';
import { RealmBrokerClient, IGetTitleResponse } from '../../../Services/RealmBrokerClient';
import { ActionButton } from '../../../Views/ActionButton';
import { Services } from '../../../Services/Services';
import { ITableViewColumn, Views } from '../../../Views/Views';
import { UsersGrid } from '../../Users/Views/UsersGrid';
import { TitleGrid } from '../Views/TitleGrid';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'

export class TitleListController extends UIController {

    @State()
    private titles: IGetTitleResponse[];

    @State()
    private showingTitles: any[];

    private isLoading(): boolean {
        return this.titles == null;
    }


    public BindRouterParams({ tenant_id, tenant_name }) {
        //  if (this.tenants == null) {
        RealmBrokerClient.GetTitles().then(titles => {
            this.showingTitles = this.titles = titles;
        })
    }
    private Search_Action(value: string): void {
        //this.showingTenants = this.tenants.filter((tenant) => tenant.tenant_name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }

    public LoadView(): any {
            return (
                Views.RightSidePage({
                    title: 'Titles',
                    content: (
                        HStack({ alignment: cTopLeading })(
                            this.isLoading() ?
                                VStack(Spinner()) :
                                VStack({ alignment: cTopLeading })(
                                    HStack({ alignment: cLeading, spacing: 15 })(
                                        // MARK: Search Box
                                        HStack(
                                            TextField().placeholder('Search by Title Name')
                                                .onTextChange((value) => this.Search_Action(value))
                                        ).height().border('solid 1px #dfdfdf').padding(10).width(300).cornerRadius(5),
                                        Spacer(),
                                        Views.AcceptRouteButton({ label: 'New Title', link: '/app(tenantmanager)/title/add' })
                                    ).height().marginBottom('24px'),
                                    TitleGrid(this.titles)
                                )
                        )
                    )
                })
            )
    }
}