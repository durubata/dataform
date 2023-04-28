import { IndexHome } from 'app/components/demo';
import { useTranslation } from 'react-i18next';

export function DemoPage() {
  const { i18n } = useTranslation();

  return <IndexHome />;
}
