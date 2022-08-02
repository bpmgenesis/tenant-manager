import { VStack, cTopLeading, Icon, IconLibrary, Text, ForEach, HStack, cLeading, bindState, Color, UIRouteLink } from '@tuval/forms';
import { theme } from '../../Theme';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif';

const backgroundColor = 'white';

const menuModel = [
    {
        title: 'Insights',
        subItems: [
            {
                name: 'Dashboard',
                icon: IconLibrary.Dashboard1,
                link: '/app(realmmanager)/dashboard'

            }
        ]
    },
    {
        title: 'Organization',
        subItems: [

            {
                name: 'Employees',
                icon: '\\d235',
                link: '/app(tenantmanager)/employee/list'
            },
            {
                name: 'Organization Units',
                icon: '\\d200',
                link: '/app(tenantmanager)/organization_unit/list'
            },
            {
                name: 'Positions',
                icon: '\\d22d',
                link: '/app(tenantmanager)/account/list'
            },
            {
                name: 'Titles',
                icon: '\\d1f0',
                link: '/app(tenantmanager)/title/list'
            }
        ]
    },
    {
        title: 'Other',
        subItems: [
            {
                name: 'Notifications'
            },
            {
                name: 'Settings'
            }
        ]
    },

]

export const LeftSideMenuView = (realmName: string, selectedItem: string) => (
    VStack({ alignment: cTopLeading })(
        HStack({ alignment: cLeading , spacing: 10})(
            Icon('\\d1f1').size(26),
            Text('Tenant Manager')
                .foregroundColor(theme.surfaceground)
                .fontWeight('500')
        ).height().padding(),

        /*   HStack({ alignment: cTopLeading })(
              Icon((IconLibrary as any).DonutLarge).size(30).paddingLeft('15px'),
              Text(realmName).fontWeight('600')
                  .fontSize('0.8rem').lineHeight('0.8rem')
                  .kerning('.06rem').fontFamily(fontFamily)
                  .padding('25px 20px 15px')
                  .textTransform('uppercase'),
          ).height(), */
        ...ForEach(menuModel)(menu =>
            VStack({ alignment: cTopLeading })(
                HStack({ alignment: cLeading })(
                    Text(menu.title)
                        .fontWeight('500')
                        .fontSize('0.8rem').lineHeight('0.8rem')
                        .foregroundColor(theme.gray600)
                        .kerning('.06rem')
                        .fontFamily(theme.fontFamily)
                        .padding('1rem')
                        .textTransform('uppercase')
                ).height(),
                ...ForEach(menu.subItems)((subItem: any) =>
                    UIRouteLink(subItem.link ?? '')(
                        HStack({ alignment: cLeading, spacing: 10 })(
                            subItem.icon ? Icon(subItem.icon).size(24) : null,
                            Text(subItem.name)
                                .fontFamily(fontFamily)
                                .fontSize(16)
                                .lineHeight('1rem')
                        )
                            .cornerRadius(theme.borderRadius)
                            .padding('1rem')
                            .foregroundColor(theme.surfaceground)
                            .background({ default: selectedItem === subItem.name ? theme.gray800 : '', hover: theme.gray800 })
                            .transition('all .2s ease-in-out')
                            .fontWeight('500')
                            // .fontWeight(selectedItem == subItem.name ? '700' : '400')
                            .cursor('pointer')
                    ).width('100%')

                )
            ).height()
                .borderBottom('1px solid rgba(180,188,199,.32)')
                .paddingBottom('20px')
        )
    ).width(220).minWidth('220px').maxWidth('220px')
        .background({ default: theme.gray900 })
        .fontSize(16)
        .foregroundColor(Color.white)
)