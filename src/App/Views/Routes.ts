import { UIRoute, UIRoutes, bindNavigate, bindState, useEffect } from '@tuval/forms';
import { DashboardController } from '../../Domains/Dashboard/Controllers/DashboardController';
import { EditEmployeeController } from '../../Domains/Users/Controllers/EditAccountController';
import { NewUserController } from '../../Domains/Users/Controllers/NewUserController';
import { UserListController } from '../../Domains/Users/Controllers/UserListController';
import { UsersController } from '../../Domains/Users/Controllers/UsersController';
import { LayoutController } from '../Controllers/LayoutController';
import { TitlesController } from '../../Domains/Titles/Controllers/TitlesController';
import { TitleListController } from '../../Domains/Titles/Controllers/TitleListController';
import { NewTitleController } from '../../Domains/Titles/Controllers/NewTitleController';
import { EditTitleController } from '../../Domains/Titles/Controllers/EditTitleController';
import { OrganizationUnitsController } from '../../Domains/OrganizationUnits/Controllers/OrganizationUnitsController';
import { OrganizationUnitListController } from '../../Domains/OrganizationUnits/Controllers/OrganizationUnitListController';
import { NewOrganizationUnitController } from '../../Domains/OrganizationUnits/Controllers/NewOrganizationUnitController';

export const Routes = () => {
    const [LoggedIn, setLoggedIn] = bindState(null);

    let navigate = bindNavigate();
    useEffect(() => {
        if (LoggedIn) {
            navigate("/app(tenantmanager)/dashboard");
            return () => setLoggedIn(false)
        }
    }, [LoggedIn]);

    setLoggedIn(true);

    return UIRoutes(
        UIRoute(
            UIRoute('/app(tenantmanager)/dashboard', DashboardController),
            UIRoute(
                UIRoute('list', UserListController),
                UIRoute('add', NewUserController),
                UIRoute('edit/:employee_id', EditEmployeeController),
            )('employee', UsersController),

            // MARK: Titles Routes
            UIRoute(
                UIRoute('list', TitleListController),
                UIRoute('add', NewTitleController),
                UIRoute('edit/:title_id', EditTitleController),
            )('title', TitlesController),

            // MARK: Organization Units Routes
            UIRoute(
                UIRoute('list', OrganizationUnitListController),
                UIRoute('add', NewOrganizationUnitController),
                UIRoute('edit/:title_id', EditTitleController),
            )('organization_unit', OrganizationUnitsController),

        )('/app(tenantmanager)', LayoutController),
        UIRoute('*', DashboardController) //.redirectTo('/app(realmmanager)/dashboard')
    )
    /*
        UIRoutes(
            UIRoute('/app:realmmanager/tenant/list', new TenantsController()),
            UIRoute('/realm_manager/tenant/add', new AddEditTenantController()),
            UIRoute('/realm_manager/tenant/edit/:tenant_id', new AddEditTenantController()),
            UIRoute('/realm_manager/tenant/delete/:tenant_id', new DeleteTenantController()),

            UIRoute('/realm_manager/account/list', new AccountsController()),
            UIRoute('/realm_manager/account/add', new NewAccountController()),
            UIRoute('/realm_manager/account/edit/:account_id', new EditAccountController()),
            UIRoute('/realm_manager/account/delete/:account_id', new DeleteTenantController()),
        ) */
}


