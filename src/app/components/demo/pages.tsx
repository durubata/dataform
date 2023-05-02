import { useState } from 'react';
import { getSchema } from './schema';
import { useDataformStore } from 'context/store';
import IPhoneMaxMockup from './page-item/phone-mock';
import { LinkPageDemo } from './page-item/links';
import { ReservationDemo } from './page-item/reservation';


export const demoDesigns  = [
  {name: 'Link', component: LinkPageDemo, }, 
  {name: 'Reservation', component: ReservationDemo, }
];


export default function PageHome() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState('source');
  const [schema, setSchema] = useState();
  const { setStateItem } = useDataformStore(
    state => state,
    (ov, nv) => true,
  );

  const setSchemaName = (name: any) => {
    setSchema(getSchema(name))
  };

  const onSubmit = (formData: any) => {
    console.log('Form data:', formData);
  };

  const handleCopy = () => {
    console.log('handleCopy');
  };

    
  return (
    <div className='flex gap-10'> 
      { demoDesigns.map((design) => ( 
        <div >
          <h2>{design.name}</h2>
          <IPhoneMaxMockup page={design.name}> 
            <design.component />
          </IPhoneMaxMockup>
        </div>
      ))}
    </div>
  )
}
