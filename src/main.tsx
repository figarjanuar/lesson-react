import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import IngredientProvider from '@/contexts/ingredient-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IngredientProvider>
      <App />
    </IngredientProvider>
  </StrictMode>,
)
