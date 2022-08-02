import { TForm } from '@tuval/forms';
import { AppController } from './App/Controllers/AppController';
import { CodeEditor } from '@tuval/components/codeeditor';
import { theme } from './Theme';


export class MainForm extends TForm {
    m_Toolbar: any;
    m_tbiLabel: any;
    public override InitComponents() {
        this.Width = 1120;
        this.Height = 700;
      //  this.Text = 'Tenant Manager';


       // this.Icon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNC4wODM1IDkuNjU5NTZMMjQuOTIwMSA0Ljg2MTY5TDYuNDc1OTQgMTQuNTEwNkwxLjg1MzE4IDEyLjA4NTFMMjQuOTIwMSAwTDM4LjcyOTcgNy4yMzQwM0wzNC4wODM1IDkuNjU5NTZaTTI0LjkyMTggMTkuMzA4NUw0My4zNTQyIDkuNjU5NTVMNDguMDAwNCAxMi4wODUxTDI0LjkyMTggMjQuMTU5NUwxMS4xMjM5IDE2LjkzNjFMMTUuNzU4NCAxNC41MTA2TDI0LjkyMTggMTkuMzA4NVpNNS41NjMyMSAyNS44OTM3TDAuOTI4NzExIDIzLjQ2ODFWMzcuOTE0OUwyMy45OTU2IDUwVjQ1LjE0ODlMNS41NjMyMSAzNS40ODk0VjI1Ljg5MzdaTTE5LjM2MTEgMjguMjY1OEwwLjkyODcxMSAxOC42MTY5VjEzLjc2NThMMjMuOTk1NiAyNS44NDAzVjQwLjI5NzdMMTkuMzYxMSAzNy44NjE1VjI4LjI2NThaTTM5LjY1ODggMjMuNDY4VjE4LjYxNjlMMjUuODQ5MiAyNS44NDAzVjQ5Ljk5OTlMMzAuNDgzNyA0Ny41NzQzVjI4LjI2NTlMMzkuNjU4OCAyMy40NjhaTTQ0LjI4MzMgMzUuNDg5MlYxNi4xOTE0TDQ4LjkyOTUgMTMuNzY1OVYzNy45MTQ4TDM1LjExOTkgNDUuMTQ4OFY0MC4yOTc3TDQ0LjI4MzMgMzUuNDg5MloiIGZpbGw9IiM2MTYxNjEiLz4KCjwvc3ZnPgo=';
        this.ShowHeader = true;
        this.HeaderPadding = '0px';
       // this.HeaderColor = '#FFFFFF';
       // this.HeaderSubStyle = `display: flex;background: ${theme.gray900};height: 50px;align-items: center;width: 220px;min-width: 220px;max-width: 220px;color: white;padding-left: 10px;`;


        const appController = new AppController();
        appController.Bind(this);
        this.Controls.Add(appController);
        //this.Controls.Add(new CodeEditor());
    }
}