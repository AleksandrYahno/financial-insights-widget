import { CSSProperties } from 'react';

export const errorFallbackRootStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 240,
  padding: 32,
  backgroundColor: '#fbfbfd',
  color: '#1d1d1f',
  textAlign: 'center',
};

export const errorFallbackMessageStyle: CSSProperties = {
  marginBottom: 20,
  fontSize: 16,
  color: '#86868b',
};

export const errorFallbackButtonStyle: CSSProperties = {
  padding: '10px 20px',
  borderRadius: 8,
  border: '1px solid rgba(0,0,0,0.08)',
  backgroundColor: '#fff',
  color: '#1d1d1f',
  fontSize: 14,
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'background-color 0.15s ease',
};
