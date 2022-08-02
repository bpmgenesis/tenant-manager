import { ITableViewColumn } from '../../../Views/Views';
import { VStack, cTopLeading, cLeading, HStack, Text, Spacer, TextField, UITable, TableColumn, Icon, IconLibrary, UIContextMenu, UIAppearance, UIRouteLink, Color } from '@tuval/forms';
import { moment } from '@tuval/core';
import { Views } from '../../../Views/Views';
import { IGetTitleResponse } from '../../../Services/RealmBrokerClient';


const columns: ITableViewColumn[] = [
    {
        title: 'Code',
        key: "title_record_id",
        width:'33%'
    },
    {
        title: 'Name',
        key: "title_name",
        width:'66%'
    },
    {
        title: 'Action',
        view: (title: IGetTitleResponse) => (
            HStack({ alignment: cLeading })(
                Views.ActionBar([
                    {
                        icon: '\\d202',
                        tooltip: 'Edit',
                        link: `/app(tenantmanager)/title/edit/${title.title_id}`,
                        linkState: { title: title }
                    },
                    {
                        icon: '\\d390',
                        tooltip: 'Delete Title',
                        iconColor: Color.red400,
                        link: `/app(tenantmanager)/title/delete/${title.title_id}`,
                        linkState: { title: title }
                    }
                ])
            )
        )
    }
]

export const TitleGrid = (titles: IGetTitleResponse[]) => (
    Views.TableView(columns, titles)
)