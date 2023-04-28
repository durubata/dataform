import { useState } from 'react';
import { DemoSidebar } from './sidebar';
import { DemoHeader } from './header';
import { getSchema } from './schema';
import PageHome from './pages';
import { DemoHome } from './demo';

export function IndexHome() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [schema, setSchema] = useState();
  const [page, setPage] = useState();

  const setSchemaName = (name: any) => {
    if (name === 'demo' || name === 'page') {
      setPage(name);
    } else {
      setSchema(getSchema(name));
    }
  };

  return (
    <div>
      <DemoSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setSchemaName={setSchemaName}
      />
      <div className="lg:pl-72">
        <DemoHeader setSidebarOpen={setSidebarOpen} />
        {page === 'demo' && <DemoHome schema={schema} />}
        {page === 'page' && <PageHome />}
      </div>
    </div>
  );
}
