import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import RouterHandler from './config/routes';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<QueryClientProvider client={queryClient}>
  <BrowserRouter><RouterHandler/></BrowserRouter></QueryClientProvider>  </React.StrictMode>
);
