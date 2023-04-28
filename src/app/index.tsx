import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { WelcomePage } from './pages/welcome-page';
import { DemoPage } from './pages/demo-page';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - DataForm"
        defaultTitle="DataForm"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A DataForm application" />
      </Helmet>

      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="demo" element={<DemoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
