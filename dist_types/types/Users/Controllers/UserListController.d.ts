import { UIController } from '@tuval/forms';
export declare class UserListController extends UIController {
    private users;
    private showingUsers;
    private isLoading;
    BindRouterParams({ tenant_id, tenant_name }: {
        tenant_id: any;
        tenant_name: any;
    }): void;
    private Search_Action;
    LoadView(): any;
}
