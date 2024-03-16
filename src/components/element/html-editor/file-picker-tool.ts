import { useSiteStore } from '@/contexts/site-store';
import { BlockTool, BlockToolConstructorOptions } from '@editorjs/editorjs';

interface FileManagerImageData {
    url?: string;
}

class FileManagerImage implements BlockTool {
    private api: any;
    private data: FileManagerImageData;
    private wrapper: HTMLElement | undefined;
    private config: any;

    constructor({ data, api, config }: BlockToolConstructorOptions<FileManagerImageData>) {
        this.api = api;
        this.data = data;
        this.config = config;
    }

    static get toolbox() {
        //icon with no black background 
        return {
            title: 'Image',
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18Z" fill="currentColor"/></svg>'
        };
    }

    render() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('simple-image');

        // Since React components need to be mounted to the DOM,
        // you might need to use ReactDOM here or a similar approach to integrate React components in non-React environments
        // For simplicity, this example assumes a direct DOM manipulation approach

        const button = document.createElement('button');
        button.textContent = 'Select Image';
        button.onclick = this.selectImage.bind(this);
        this.wrapper.appendChild(button);

        if (this.data && this.data.url) {
            const img = document.createElement('img');
            img.src = this.data.url;
            this.wrapper.appendChild(img);
        }

        return this.wrapper;
    }

    selectImage() {
        const callBack = (file) => {
            let img = this.wrapper?.querySelector('img');
            if (!img) {
                img = document.createElement('img');
                img.classList.add('file-manager-image');
                this.wrapper?.appendChild(img);
            }
            img.src = file.signedUrl;
            this.data.url = file.signedUrl;
            this.api.blocks.getBlockByIndex(this.api.blocks.getCurrentBlockIndex()).holder.dispatchEvent(new Event('input'));
        }
        useSiteStore.getState().setStateItem({ 'modalCallback': callBack });
        useSiteStore.getState().openModal("FILES_VIEW");
        console.log('Open file manager here');
    }

    save(blockContent) {
        const image = blockContent.querySelector('img');
        return {
            url: image ? image.src : ''
        };
    }
}


export { FileManagerImage };