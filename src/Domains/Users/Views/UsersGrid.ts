import { ITableViewColumn } from '../../../Views/Views';
import { VStack, cTopLeading, cLeading, HStack, Text, Spacer, TextField, UITable, TableColumn, Icon, IconLibrary, UIContextMenu, UIAppearance, UIRouteLink } from '@tuval/forms';
import { moment } from '@tuval/core';
import { Views } from '../../../Views/Views';


const columns: ITableViewColumn[] = [
    {
        title: 'Code',
        key: "employee_record_id"
    },
    {
        title: 'Name',
        key: "employee_name"
    },
    {
        title: 'Last Name',
        key: "employee_last_name"
    },
    {
        title: 'Title',
        key: "account_email"
    },
    {
        title: 'Department',
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
    },
    {
        title: 'Action',
        view: (row) => (
            HStack(
                UIRouteLink('/app(tenantmanager)/employee/edit/' + row.employee_id, { employee_info: row })(
                    Text('Edit')
                )
            )
        )
    }
]

export const UsersGrid = (users: any[]) => (
    Views.TableView(columns, users)
)