import React, { useRef } from 'react';
import axios from 'axios';
import { useFileUpload } from './file-upload-hook';
import { API_ENDPOINTS } from '@/framework/api-endpoints';
import { ButtonDelete } from '@/components/ui/control-button';
import { useSiteStore } from '@/contexts/site-store';

export const FileUploadInput = (props) => {
    const { onFocus, type, onChange, value, onBlur, label, className } = props;
    const {
        files,
        fileNames,
        fileTypes,
        totalSize,
        totalSizeInBytes,
        handleDragDropEvent,
        clearAllFiles,
        createFormData,
        setFiles,
        removeFile,
    } = useFileUpload();

    const { deleteFile, uploadFile, error } = useSiteStore(state => state)
     const inputRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = createFormData();

        try {
            axios.post(API_ENDPOINTS.FIND_DATA, formData, { 'content-type': 'multipart/form-data' });
        } catch (error) {
            console.error('Failed to submit files.');
        }
    };

    // const fileChange = (e) => {
    //     setFiles(e, 'a');
    //     inputRef.current.value = null;
    //     if (e.target.files) {
    //         props.onChange(e, e.target.files[0]);
    //     }
    //     if (e.dataTransfer.files) {
    //         props.onChange(e, e.dataTransfer.files[0]);
    //     }
    // };

    const removeLocal = async (name) => {
        removeFile(name);
        props.onChange({ target: { value: undefined } });
        await deleteFile(niceURI(name))
    };

    const fileChange = async (e) => {
        setFiles(e, "a");
        let file;

        if (e.target?.files) {
            file = e.target.files[0];
        }
        if (e.dataTransfer?.files) {
            file = e.dataTransfer.files[0];
        }

        inputRef.current.value = null;
        if (file) {
            const reader = new FileReader();

            reader.onload = async (event) => {
                const uploadResponse  = await uploadFile(file.name, event.target.result)
                if (!uploadResponse) {
                    removeFile(file.name);
                    return;
                }
                const { files } = uploadResponse
                const [savedFile] = files;
                onChange({target:{files:savedFile.signedUrl}});
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="form-container mb-8">
            {error && <div className='error bg-red-100 text-red-900 p-2 mb-2 text-sm text-center'>{error}</div>}
            <div
                className="drop-zone bg-slate-100 border-2 border-dashed border-slate-600 w-full p-4 flex justify-center items-center drag-over:bg-slate-200"
                onDragEnter={handleDragDropEvent}
                onDragOver={handleDragDropEvent}
                onDrop={(e) => {
                    handleDragDropEvent(e);
                    fileChange(e);
                }}
            >
                <div className='flex flex-col items-center justify-center w-full text-sm'>
                   <div className=''> Drag and drop files here (Max 1Mb) </div>  
                   <button onClick={() => inputRef.current.click()} className=' p-1 px-3 mt-2 mb-0 border shadow rounded-lg inline-block bg-white'>Click to pick file (Max 1Mb)</button>
                </div>
                {/* Hide the crappy looking default HTML input */}
                <input
                    ref={inputRef}
                    type="file"
                    multiple
                    style={{ display: 'none' }}
                    onChange={fileChange}
                />
            </div>
             <div className='w-full'>
                <ul className='m-4'>
                    {fileNames.map((name, idx) => (
                        <li key={name} className='flex gap-2 mb-4'>
                            <div>
                                {files[idx] && <img src={URL?.createObjectURL(files[idx])} alt="file" className='' />}
                                <p className='text-[10px] leading-none mt-2'>{name}</p>
                            </div>
                            <div className='flex items-center'>
                                < ButtonDelete clickHandler={() => removeLocal(name)} />
                            </div>
                        </li>
                    ))}
                    {fileNames && fileNames.length < 1 && value &&
                        <li key={'saved'} className='flex gap-2 mb-4'>
                            <div>
                                <img src={value} alt="file" className='' />
                            </div>
                            <div className='flex items-center'>
                                < ButtonDelete clickHandler={e => onChange(e, undefined)} />
                            </div>
                        </li>
                    }
                </ul>
            </div>
        </div>
    );
};