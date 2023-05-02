import { IndexHome } from 'app/components/demo';
import { LinkPageDemo } from 'app/components/demo/page-item/links';
import { ReservationDemo } from 'app/components/demo/page-item/reservation';
import { demoDesigns } from 'app/components/demo/pages';
import { useTranslation } from 'react-i18next';

export function PhonePage() {
  const { i18n } = useTranslation();

  console.log('PhonePage')
  console.log(window.location.href)
  const name = window.location.search.split('=')[1];

  const getComponent = () =>{
    if (name === 'Link'){
      return <LinkPageDemo />
    }
    if (name === 'Reservation'){
      return <ReservationDemo />
    }
    return <>Not Found: {name}</>
  }

  return  getComponent()
}
