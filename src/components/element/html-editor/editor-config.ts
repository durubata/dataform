import Header from '@editorjs/header';
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import Warning from '@editorjs/warning';
import Code from '@editorjs/code';
import LinkTool from '@editorjs/link';
import { FileManagerImage } from './file-picker-tool';
import EditorReactTool from './editor-react-tool';
import Paragraph from '@editorjs/paragraph';
import Alert from 'editorjs-alert';
import SimpleImage from "@editorjs/simple-image";
import ToggleBlock from 'editorjs-toggle-block';
import Title from 'title-editorjs';
import NestedList from '@editorjs/nested-list';
import NestedChecklist from '@calumk/editorjs-nested-checklist';
import editorjsColumns from '@calumk/editorjs-columns'
import ColorPlugin from 'editorjs-text-color-plugin';
import AIText from '@alkhipce/editorjs-aitext'

let column_tools = {
    header: Header,
    alert: Alert,
    // paragraph: editorjsParagraphLinebreakable,
    delimiter: Delimiter
}

export const editorConfig = {
    tools: {
        header: {
            'class': Header as any,
            inlineToolbar: true,
            config: {
                placeholder: 'Enter a header',
                levels: [2, 3, 4],
                defaultLevel: 2
            },
            shortcut: 'CMD+SHIFT+H'
        },
        fileManagerImage: {
            class: FileManagerImage,
        },
        editorReactTool: {
            class: EditorReactTool,
        },
        aiText: {
            // if you do not use TypeScript you need to remove "as unknown as ToolConstructable" construction
            class: AIText as any,
            config: {
                openaiKey: 'YOUR_OPEN_AI_KEY'
            }
        },
        simpleImage: {
            class: SimpleImage,
            inlineToolbar: true,
            config: {
                placeholder: 'Paste image URL'
            }
        },
        list: {
            class: List,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+L'
        },
        checklist: {
            class: Checklist,
            inlineToolbar: true
        },
        quote: {
            class: Quote,
            inlineToolbar: true,
            config: {
                quotePlaceholder: 'Enter a quote',
                captionPlaceholder: 'Quote\'s author',
            },
            shortcut: 'CMD+SHIFT+O'
        },
        marker: {
            class: Marker,
            shortcut: 'CMD+SHIFT+M'
        },
        delimiter: {
            class: Delimiter
        },
        inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+C'
        },
        embed: {
            class: Embed,
            inlineToolbar: true,
            config: {
                services: {
                    youtube: true,
                    coub: true
                }
            }
        },
        table: {
            class: Table,
            inlineToolbar: true,
            shortcut: 'CMD+ALT+T'
        },
        warning: {
            class: Warning,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+W',
            config: {
                titlePlaceholder: 'Title',
                messagePlaceholder: 'Message',
            }
        },
        code: {
            class: Code,
            config: {
                placeholder: 'Enter code',
            }
        },
        linkTool: {
            class: LinkTool,
            config: {
                endpoint: '/fetchUrl', // Your backend endpoint for fetching URL data
            }
        },
        paragraph: {
            class: Paragraph,
            inlineToolbar: true,
        },
        alert: {
            class: Alert,
            inlineToolbar: true,
        },
        toggleBlock: {
            class: ToggleBlock,
            inlineToolbar: true,
        },
        title: {
            class: Title,
            inlineToolbar: true,
        },
        nestedList: {
            class: NestedList, // Note: This assumes there's a direct Editor.js plugin for nested lists. Verify the correct approach.
            inlineToolbar: true,
        },
        nestedChecklist: {
            class: NestedChecklist,
            inlineToolbar: true,
        },
        columns: {
            class: editorjsColumns,
            config: {
                EditorJsLibrary: editorjsColumns, // Pass the library instance to the columns instance.
                tools: column_tools // IMPORTANT! ref the column_tools
            }
        },
        Color: {
            class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
            config: {
                colorCollections: ['#EC7878', '#9C27B0', '#673AB7', '#3F51B5', '#0070FF', '#03A9F4', '#00BCD4', '#4CAF50', '#8BC34A', '#CDDC39', '#FFF'],
                defaultColor: '#FF1300',
                type: 'text',
                customPicker: true // add a button to allow selecting any colour  
            }
        },
        Marker: {
            class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
            config: {
                defaultColor: '#FFBF00',
                type: 'marker',
                icon: `<svg fill="#000000" height="200px" width="200px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M17.6,6L6.9,16.7c-0.2,0.2-0.3,0.4-0.3,0.6L6,23.9c0,0.3,0.1,0.6,0.3,0.8C6.5,24.9,6.7,25,7,25c0,0,0.1,0,0.1,0l6.6-0.6 c0.2,0,0.5-0.1,0.6-0.3L25,13.4L17.6,6z"></path> <path d="M26.4,12l1.4-1.4c1.2-1.2,1.1-3.1-0.1-4.3l-3-3c-0.6-0.6-1.3-0.9-2.2-0.9c-0.8,0-1.6,0.3-2.2,0.9L19,4.6L26.4,12z"></path> </g> <g> <path d="M28,29H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h24c0.6,0,1,0.4,1,1S28.6,29,28,29z"></path> </g> </g></svg>`
            }
        },
    },
};

