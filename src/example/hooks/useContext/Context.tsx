import React from 'react';

export interface MyContextValue {
  title: string;
  settitle: (v: string) => void;
  a: number;
  b: unknown[];
}

export const MyContext = React.createContext<MyContextValue | undefined>(undefined);
