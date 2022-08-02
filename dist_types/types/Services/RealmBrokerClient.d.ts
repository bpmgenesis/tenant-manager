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
export declare class RealmBrokerClient {
    static GetSessionInfo(): Promise<GetSessionInfoResponse>;
    static CreateEmployee(employee_record_id: string, employee_name: string, employee_last_name: string, title_id: string, organization_unit_id: string): Promise<any>;
    static GetEmployees(): Promise<IGetEmployeeResponse[]>;
    static GetEmployeeById(employee_id: string): Promise<IGetEmployeeResponse[]>;
    static CreateTitle(title_record_id: string, title_name: string, parent_id?: string): Promise<any>;
    static UpdateTitle(title_id: string, title_record_id: string, title_name: string, parent_id?: string): Promise<any>;
    static GetTitles(): Promise<IGetTitleResponse[]>;
    static GetTitleById(title_id: string): Promise<IGetTitleResponse>;
    static CreateOrganizationUnit(org_unit_record_id: string, org_unit_name: string, parent_id?: string): Promise<any>;
    static UpdateOrganizationUnit(org_unit_id: string, org_unit_record_id: string, org_unit_name: string, parent_id?: string): Promise<any>;
    static GetOrganizationUnits(): Promise<IGetTitleResponse[]>;
    static GetOrganizationUnitById(org_unit_id: string): Promise<IGetTitleResponse>;
    static GetUserById(user_id: string): Promise<any[]>;
}
