import { TForm, UIController } from '@tuval/forms';
export declare class AppController extends UIController {
    private form;
    private realmName;
    private SideBarExpanded;
    private Code;
    private currentController;
    protected InitController(): void;
    private AppController_ContextAction_SetController;
    private OnMenuSelected;
    OnBindModel(form: TForm): void;
    LoadView(): import("@tuval/forms").UISceneClass;
}
