import { ConfigService } from './ConfigService';
import { HttpClient, is } from '@tuval/core';
import { RealmHttpClient } from '@tuval/forms';

export interface GetSessionInfoResponse {
    account_id: string;
    account_name: string;
    tenant_id: string;
    tenant_name: string;
    is_real_admin: boolean;
    is_tenant_admin: boolean;
}

export interface IGetEmployeeResponse {
    employee_id: string;
    employee_record_name: string;
    employee_name: string;
    employee_last_name: string;
}

export interface IGetTitleResponse {
    title_id: string;
    title_record_id: string;
    title_name: string;
    parent_id: string;
}

export class RealmBrokerClient {

    public static async GetSessionInfo(): Promise<GetSessionInfoResponse> {
        return new Promise((resolve, reject) => {
            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'GetSessionInfo')
                .then(response => {
                    resolve(response.data);
                });
        });
    }

    public static async CreateEmployee(employee_record_id: string, employee_name: string, employee_last_name: string, title_id: string, organization_unit_id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const form = new FormData();
            form.append('employee_record_id', employee_record_id);
            form.append('employee_name', employee_name);
            form.append('employee_last_name', employee_last_name);
            form.append('title_id', title_id);
            form.append('organization_unit_id', organization_unit_id);

            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'CreateEmployee', form)
                .then(response => {
                    resolve(response.data);
                });
        });
    }

    public static async GetEmployees(): Promise<IGetEmployeeResponse[]> {
        return new Promise((resolve, reject) => {
            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'GetEmployees')
                .then(response => {
                    resolve(response.data);
                });
        });
    }

    public static async GetEmployeeById(employee_id: string): Promise<IGetEmployeeResponse[]> {
        const form = new FormData();
        form.append('employee_id', employee_id);

        return new Promise((resolve, reject) => {
            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'GetEmployeeById')
                .then(response => {
                    resolve(response.data);
                });
        });
    }

    // Titles

    public static async CreateTitle(title_record_id: string, title_name: string, parent_id: string = null): Promise<any> {
        return new Promise((resolve, reject) => {
            const form = new FormData();
            form.append('title_record_id', title_record_id);
            form.append('title_name', title_name);
            if (parent_id != null) {
                form.append('parent_id', parent_id);
            }

            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'CreateTitle', form)
                .then(response => {
                    resolve(response.data);
                });
        });
    }

    public static async UpdateTitle(title_id: string, title_record_id: string, title_name: string, parent_id: string = null): Promise<any> {
        return new Promise((resolve, reject) => {
            const form = new FormData();
            form.append('title_id', title_id);
            form.append('title_record_id', title_record_id);
            form.append('title_name', title_name);
            if (parent_id != null) {
                form.append('parent_id', parent_id);
            }

            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'UpdateTitle', form)
                .then(response => {
                    resolve(response.data);
                });
        });
    }

    public static async GetTitles(): Promise<IGetTitleResponse[]> {
        return new Promise((resolve, reject) => {
            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'GetTitles')
                .then(response => {
                    resolve(response.data);
                });
        });
    }

    public static async GetTitleById(title_id: string): Promise<IGetTitleResponse> {
        const form = new FormData();
        form.append('title_id', title_id);

        return new Promise((resolve, reject) => {
            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'GetTitleById')
                .then(response => {
                    resolve(response.data);
                });
        });
    }

    //-----

    // Organization Units

    public static async CreateOrganizationUnit(org_unit_record_id: string, org_unit_name: string, parent_id: string = null): Promise<any> {
        return new Promise((resolve, reject) => {
            const form = new FormData();
            form.append('org_unit_record_id', org_unit_record_id);
            form.append('org_unit_name', org_unit_name);
            if (parent_id != null) {
                form.append('parent_id', parent_id);
            }

            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'CreateOrganizationUnit', form)
                .then(response => {
                    resolve(response.data);
                });
        });
    }

    public static async UpdateOrganizationUnit(org_unit_id: string, org_unit_record_id: string, org_unit_name: string, parent_id: string = null): Promise<any> {
        return new Promise((resolve, reject) => {
            const form = new FormData();
            form.append('org_unit_id', org_unit_id);
            form.append('org_unit_record_id', org_unit_record_id);
            form.append('org_unit_name', org_unit_name);
            if (parent_id != null) {
                form.append('parent_id', parent_id);
            }

            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'UpdateOrganizationUnit', form)
                .then(response => {
                    resolve(response.data);
                });
        });
    }

    public static async GetOrganizationUnits(): Promise<IGetTitleResponse[]> {
        return new Promise((resolve, reject) => {
            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'GetOrganizationUnits')
                .then(response => {
                    resolve(response.data);
                });
        });
    }

    public static async GetOrganizationUnitById(org_unit_id: string): Promise<IGetTitleResponse> {
        const form = new FormData();
        form.append('org_unit_id', org_unit_id);

        return new Promise((resolve, reject) => {
            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'GetOrganizationUnitById')
                .then(response => {
                    resolve(response.data);
                });
        });
    }

    //-----

    public static async GetUserById(user_id: string): Promise<any[]> {
        return new Promise((resolve, reject) => {
            RealmHttpClient.Post(ConfigService.GetRealmBrokerUrl() + 'GetUserById')
                .then(response => {
                    resolve(response.data);
                });
        });
    }

}