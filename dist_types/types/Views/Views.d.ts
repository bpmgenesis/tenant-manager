import { IconType, ColorClass } from '@tuval/forms';
import { UIView, BindingClass } from '@tuval/forms';
export interface ITableViewColumn {
    title?: string;
    key?: string;
    width?: string;
    view?: (row: any) => UIView;
}
export interface IAction {
    icon: string;
    iconColor?: ColorClass;
    tooltip: string;
    link: string;
    linkState: any;
}
export declare namespace Views {
    const TableView: <T>(columns: ITableViewColumn[], data: T[]) => import("@tuval/forms").TableClass;
    const FormView: ({ header, content }: {
        header: string;
        content: UIView;
    }) => import("@tuval/forms").VStackClass;
    /**
      * Formlarda kullanılan textbox
      * @param value
      * @returns
      */
    const InputTextView: (label: string, placeholder: string, value: BindingClass<string>, mandatory?: boolean, isInvalid?: BindingClass<boolean>, errorMessage?: string, validate?: boolean) => import("@tuval/forms").VStackClass;
    /**
    * Formlarda kullanılan textbox
    * @param value
    * @returns
    */
    const InputPasswordView: (label: string, placeholder: string, value: BindingClass<string>, mandatory?: boolean, isInvalid?: BindingClass<boolean>, errorMessage?: string, validate?: boolean) => import("@tuval/forms").VStackClass;
    /**
     * Formlarda kullanılan textbox
     * @param value
     * @returns
     */
    const EmailInputView: (label: string, placeholder: string, value: BindingClass<string>, isInvalid: BindingClass<boolean>, validate?: boolean) => import("@tuval/forms").VStackClass;
    const AcceptButton: ({ label, action }: {
        label: string;
        action: Function;
    }) => import("@tuval/forms").HStackClass;
    const SwitchView: (label: string, value: BindingClass<boolean>) => import("@tuval/forms").HStackClass;
    const ActionBar: (actions: IAction[]) => import("@tuval/forms").HStackClass;
    const DashboardTile: (title: string, value: string, icon: IconType | string, iconColor: ColorClass, iconBackColor: ColorClass) => import("@tuval/forms").VStackClass;
    const RightSidePage: ({ title, content }: {
        title: string;
        content: UIView;
    }) => import("@tuval/forms").VStackClass;
    const AcceptRouteButton: ({ label, link }: {
        label: string;
        link: string;
    }) => import("@tuval/forms").UIRouteLinkCLass;
}
