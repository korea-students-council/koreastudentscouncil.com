'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ComponentPropsWithoutRef } from 'react';

const queryClient = new QueryClient();
const Provider = ({ children }: ComponentPropsWithoutRef<'div'>) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default Provider;
