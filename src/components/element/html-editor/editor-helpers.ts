
export function editorJsToHtml(blocks) {
    let html = "";
    blocks.forEach((block) => {
        switch (block.type) {
            case "header":
                html += `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
                break;
            case "paragraph":
                html += `<p>${block.data.text}</p>`;
                break;
            case "list":
                const style = block.data.style === 'unordered' ? 'ul' : 'ol';
                html += `<${style}>${block.data.items.map(item => `<li>${item}</li>`).join('')}</${style}>`;
                break;
            case "checklist":
                html += `<ul class="checklist">${block.data.items.map(item => `<li class="${item.checked ? 'checked' : ''}">${item.text}</li>`).join('')}</ul>`;
                break;
            case "quote":
                html += `<blockquote>${block.data.text}<cite>${block.data.caption}</cite></blockquote>`;
                break;
            case "image":
            case "fileManagerImage": // Assuming custom image block behaves similarly to the standard image block
                html += `<img src="${block.data.url}" alt="${block.data.caption}" />`;
                break;
            case "delimiter":
                html += `<hr />`;
                break;
            case "embed":
                html += `<div class="embed">${block.data.embed}</div>`;
                break;
            case "table":
                html += `<table><tbody>${block.data.content.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
                break;
            case "warning":
                html += `<div class="warning"><strong>${block.data.title}</strong>${block.data.message}</div>`;
                break;
            case "code":
                html += `<pre><code>${block.data.code}</code></pre>`;
                break;
            case "linkTool":
                html += `<a href="${block.data.link}" target="_blank">${block.data.link}</a>`;
                break;
            case "marker":
                // Marker is an inline tool, so its representation in HTML depends on how you want to handle inline styles.
                // This case might not be directly applicable without knowing the context in which it's used.
                break;
            case "inlineCode":
                // InlineCode is also an inline tool, similar to marker.
                break;
            default:
                console.log("Unsupported block type", block.type);
        }
    });
    return html;
}
