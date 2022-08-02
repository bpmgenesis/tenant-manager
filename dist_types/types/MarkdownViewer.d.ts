import { Control } from '@tuval/forms';
export declare class MarkdownViewer extends Control<MarkdownViewer> {
    ref: HTMLElement;
    private get Ref();
    MarkdownText: string;
    protected SetupControlDefaults(): void;
    protected componentDidMount(): void;
    UpdateHtml(markdownText: string): void;
    CreateElements(): any;
}
