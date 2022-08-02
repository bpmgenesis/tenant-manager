import { UIController } from '@tuval/forms';
export declare class TitleListController extends UIController {
    private titles;
    private showingTitles;
    private isLoading;
    BindRouterParams({ tenant_id, tenant_name }: {
        tenant_id: any;
        tenant_name: any;
    }): void;
    private Search_Action;
    LoadView(): any;
}
