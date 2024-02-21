/**
 * This file contains utility functions related to authentication hooks.
 * It separates the authentication hook logic from the context provider to improve code organization
 * and adhere to best practices for separation of concerns.
 */


import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used within a DataContextProvider');
  }

  return context;
}