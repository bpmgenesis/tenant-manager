import { Color, Context, HStack, State, TForm, UIController, UIScene, VStack } from '@tuval/forms';

import { RealmBrokerClient } from '../../Services/RealmBrokerClient';
import { Routes } from '../Views/Routes';
import { theme } from '../../Theme';

const manifest = require('../../manifest');



export class AppController extends UIController {

    private form: TForm;

    @State()
    private realmName: string;

    @State()
    private SideBarExpanded: boolean;

    @State()
    private Code: string;

    @State()
    private currentController: UIController;


    protected InitController() {

    }


    @Context()
    private AppController_ContextAction_SetController(controller: UIController) {
        this.currentController = controller;
        (this as any).currentController.BindModel();
    }

    private OnMenuSelected(item: any) {

    }
    public OnBindModel(form: TForm) {
        this.form = form;
    }
    public LoadView() {

        return (
            UIScene(
                HStack(
                    VStack(
                        Routes()
                    )
                )
            )
        ).background(theme.surfacesection)

    }
}