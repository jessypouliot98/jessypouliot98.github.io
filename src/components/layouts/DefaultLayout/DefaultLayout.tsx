import type React from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

export type DefaultLayoutProps = React.PropsWithChildren<{

}>;

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-800 text-white">
      <Header />
      <Main>
        <h2 className="p-4 rounded bg-yellow-200 text-yellow-900 text-lg mb-6">This site is under construction!</h2>
        {children}
      </Main>
      <Footer />
    </div>
  )
}