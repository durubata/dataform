import { useState } from 'react';
import { CustomJsonSchemaForm } from '../form';
import { Icon, iconType } from 'assets/icons/list';
import { getSchema } from './schema';
import { socialIcons } from 'assets/socialIcons';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { emojiMartCustom } from 'assets/icons/emoji-mart-custom';
import { websiteSchema } from './schema/website';

export function DemoHome({ schema }) {
  const [activeView, setActiveView] = useState('source');

  const onSubmit = (formData: any) => {
    console.log('Form data:', formData);
  };

  const handleCopy = () => {
    console.log('handleCopy');
  };

  return (
    <main className="py-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center gap-2">
          <button
            onClick={e => setActiveView('preview')}
            className="p-[6px] bg-white shadow-md rounded-lg hover:bg-cyan-100"
          >
            <Icon size={14} name={iconType.BsEye} />
          </button>
          <button
            onClick={e => setActiveView('source')}
            className="p-[6px] bg-white shadow-md rounded-lg hover:bg-cyan-100"
          >
            {' '}
            <Icon size={14} name={iconType.BiCode} />
          </button>
          <button
            onClick={e => setActiveView('copy')}
            className="p-[6px] bg-white shadow-md rounded-lg hover:bg-cyan-100"
          >
            {' '}
            <Icon size={14} name={iconType.BiCopy} />
          </button>
        </div>
        {activeView === 'preview' && (
          <div>
            <div className="flex gap-4 flex-wrap">
              {socialIcons.map(icon => (
                <img
                  className="w-12"
                  key={icon.id}
                  src={icon.src}
                  alt={icon.title}
                  title={icon.title}
                />
              ))}
            </div>
            <Picker
              data={data}
              onEmojiSelect={console.log}
              custom={emojiMartCustom}
            />
          </div>
        )}
        <div
          id="tw-dataform"
          className="relative mt-8 mb-12  overflow-hidden mx-auto max-w-[1200px] p-10 bg-gradient-to-r from-amber-300 to-orange-500"
        >
          <CustomJsonSchemaForm
            schema={schema || websiteSchema}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </main>
  );
}
