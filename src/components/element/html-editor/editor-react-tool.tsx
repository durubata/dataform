import { BlockToolConstructorOptions } from '@editorjs/editorjs';

import ReactDOM from 'react-dom';
import { EditorReactComponent } from './editor-react-component';

class EditorReactTool {
    private api: any;
    private wrapper: HTMLElement | undefined;
    private config: any;
    private data: any;

    constructor({ data, api, config }: BlockToolConstructorOptions<any>) {
        this.api = api;
        this.config = config;
        this.data = data;
    }

    //use a widget icon
    static get toolbox() {
        return {
            title: 'Message',
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H21V21H3V3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 9H15V15H9V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        };
    }

    render() {
        this.wrapper = document.createElement('div');
        ReactDOM.render(<EditorReactComponent message={this.data.message || 'Default message'} />, this.wrapper);

        return this.wrapper;
    }

    save(blockContent) {
        return {
            message: blockContent.querySelector('.message-box').textContent,
        };
    }
}

export default EditorReactTool;
