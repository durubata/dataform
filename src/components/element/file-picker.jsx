import { ButtonDelete } from '@/components/ui/control-button';
import { useSiteStore } from '@/contexts/site-store';
import { useUserStore } from '@/contexts/user-store';
import { Icon, iconType } from '@/assets/icons/list';
import { useEffect, useState } from 'react';

export const FilePicker = (props) => {
    const { onFocus, type, onChange, value, onBlur, label, className } = props;
    const { file, setStateItem } = useUserStore(state => state)
    const {  openModal } = useSiteStore(state => state)
    const [ pickedFile, setPickedFile ] = useState(null);
    const [ isOpen, setIsOpen ] = useState(false);

    useEffect(() => {
        if (value) {
            setPickedFile(value);
        }
    }, [value])

    useEffect(() => {
        if (file && isOpen) {
            setIsOpen(false);
            setPickedFile(file?.signedUrl);
            onChange({ target: { value: file?.signedUrl } });
        }
    } , [file,isOpen])

      const openFileFolder = (e) => {
        e.preventDefault();
        setIsOpen(true);
        return openModal("FILES_VIEW");
    }

    const deleteFile = () => {
        onChange({ target: { value: null } });
        setPickedFile(null)
    }

    return (
        <div className="flex items-center justify-center">
            {pickedFile && <div className='p-2 mx-1 shadow rounded-lg relative '><img src={pickedFile} alt="file" className=' max-w-[100px] max-h-[100px] ' /><ButtonDelete clickHandler={deleteFile} className=' lg:p-1 lg:px-1 absolute rounded-full px-1 top-0 right-0'/> </div> }
            <button onClick={openFileFolder} className="flex  justify-center items-center gap-2 rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <Icon name={iconType.TbFileSearch} size={20} /> Files
            </button>
		</div>
    );
};