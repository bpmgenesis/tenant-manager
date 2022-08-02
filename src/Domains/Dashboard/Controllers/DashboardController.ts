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
    AutoComplete,
    DropDown
} from '@tuval/forms';

import { RealmBrokerClient } from '../../../Services/RealmBrokerClient';
import { Color, IconLibrary } from '@tuval/forms';
import { ActionButton } from '../../../Views/ActionButton';
import { DashboardItem } from '../Views/DashboardItem';
import { LeftSideMenuView } from '../../../App/Views/LeftSideMenu';
import { Views } from '../../../Views/Views';
import { theme } from '../../../Theme';
import { TvChart, ChartView, AreaSerie, MyControlBody } from '@tuval/components-charts';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'

export class DashboardController extends UIController {
    @State()
    private items: any[];

    @State()
    private showingItems: any[];

    @State()
    private value: any;

    public InitController() {
        this.items = [
            {
                name: 'Mert',
                code: "2"
            },
            {
                name: 'Zans',
                code: "3"
            },
            {
                name: 'Test',
                code: "4"
            }
        ]

        this.showingItems = [
            {
                name: 'Mert',
                code: "2"
            },
            {
                name: 'Zans',
                code: "3"
            },
            {
                name: 'Test',
                code: "4"
            }
        ]
    }

    private search(value: string) {
        this.showingItems = [...this.items.filter((item: any) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1)];
    }
    public LoadView() {
        return (
            UIScene(
                /*   HStack(
                      AutoComplete().items(this.showingItems)
                          .searchMethod((e) => this.search(e.query))
                          .field('name')
                          .value(this.value)
                          .onChange((e) => this.value = e.value)
                          .itemTemplate((item) => Text(item.name)),
                      DropDown().model(this.items).itemTemplate(() => Text('AAA')).border('solid 1px gray')
                  ).height(), */
                HStack({ alignment: cTopLeading })(
                    LeftSideMenuView('', 'Dashboard'),
                    Views.RightSidePage({
                        title: 'Dashboard',
                        content: (
                            VStack({ alignment: cTopLeading, spacing: 20 })(
                                ChartView()(
                                    AreaSerie().xName('x').yName('y').border({ color: '#FBCD4E', width: 3 })
                                        .marker({ visible: true, width: 10, height: 10, fill: '#FBB90A', border: { color: 'white' } })
                                        .fill('#FBCD4E55')
                                        .animation({
                                            enable: false
                                        })

                                )
                                    .xAxis({
                                        labelStyle: {
                                            fontFamily: 'Ubuntu, sans-serif',
                                            size: '14px'
                                        },
                                        valueType: 'DateTime',
                                        labelFormat: 'MMM',
                                        majorGridLines: {
                                            width: 1,
                                            color: '#EFEFEF'
                                        },
                                        intervalType: 'Months',
                                        edgeLabelPlacement: 'Shift'
                                    })
                                    .yAxis({
                                        labelStyle: {
                                            fontFamily: 'Ubuntu, sans-serif',
                                            size: '14px'
                                        },
                                        labelFormat: '{value}',
                                        lineStyle: { width: 0 },
                                        majorGridLines: {
                                            width: 1,
                                            color: '#EFEFEF'
                                        },
                                        majorTickLines: { width: 0 },
                                        minorTickLines: { width: 0 }
                                    })
                                    .chartArea({
                                        border: { width: 0 },
                                        background: '#F6F6F6'
                                    })
                                    .backgroundColor('transparent').height(300),

                                HStack({ alignment: cTopLeading, spacing: 10 })(
                                    /*  DashboardItem(IconLibrary.Visibility, 'Logins', '1300', 'AVG'),
                                     DashboardItem(IconLibrary.Visibility, 'App Downloads', '1300', 'AVG') */
                                    Views.DashboardTile('Tenants', '126', IconLibrary.AccountCircle,
                                        Color.blue500, Color.blue100),
                                    Views.DashboardTile('Errors', '12', '\\d21e',
                                        Color.red700, Color.red100),
                                    Views.DashboardTile('Active Tickets', '55', '\\d1f3',
                                        Color.green500, Color.green100),

                                ).height()
                            )
                        )
                    })
                )
            )
        )
    }
}