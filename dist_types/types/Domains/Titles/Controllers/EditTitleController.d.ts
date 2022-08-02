import { UIController } from '@tuval/forms';
import { IGetTitleResponse } from '../../../Services/RealmBrokerClient';
export declare class EditTitleController extends UIController {
    private title;
    private formPostTried;
    private titleRecordId;
    private isTitleRecordIdInvalid;
    private titleName;
    private isTitleNamedInvalid;
    protected BindRouterParams({ title }: {
        title: IGetTitleResponse;
    }): void;
    private ActionPost;
    private ActionCancel;
    LoadView(): any;
}
