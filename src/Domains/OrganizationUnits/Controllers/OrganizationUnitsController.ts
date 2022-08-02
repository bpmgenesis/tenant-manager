import { cTopLeading, HStack, UIController, UIRouteOutlet, UIScene } from '@tuval/forms';

import { LeftSideMenuView } from '../../../App/Views/LeftSideMenu';


export class OrganizationUnitsController extends UIController {

    public LoadView(): any {
            return (
                UIScene(
                    HStack({ alignment: cTopLeading })(
                        LeftSideMenuView('', 'Organization Units'),
                        UIRouteOutlet().width('100%').height('100%')
                    )
                )
            )
        }
}