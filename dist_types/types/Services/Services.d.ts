export interface IStateService {
    GetSessionId(): string;
}
export declare class Services {
    static get StateService(): IStateService;
}
