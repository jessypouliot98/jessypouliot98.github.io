import React, { useState } from "react";
import clsx from 'clsx'

export type ExampleCardProps = {
  className?: string;
  children: React.ReactNode;
  code: string;
  title: string;
}

export const ExampleCard: React.FC<ExampleCardProps> = ({ className, children, code, title }) => {
  const [isCodeShown, setIsCodeShown] = useState(false);
  const btnClass = 'transition rounded-t-lg py-1 px-2 hover:bg-red-400';

  return (
    <div className={clsx('shadow', className)}>
      <div className="flex bg-red-500 rounded-t px-2">
        <div className="font-bold w-full flex items-center">
          <span className="">{title}</span>
        </div>
        <nav className="flex pt-1 flex-1">
          <button
            className={clsx(btnClass, !isCodeShown && 'text-neutral-900 bg-neutral-200 hover:bg-neutral-100')}
            onClick={() => setIsCodeShown(false)}
          >
            View
          </button>
          <button
            className={clsx(btnClass, isCodeShown && 'bg-neutral-900 hover:bg-neutral-800')}
            onClick={() => setIsCodeShown(true)}
          >
            Code
          </button>
        </nav>
      </div>
      <div className={clsx('rounded-b p-4', !isCodeShown ? 'bg-neutral-200 text-neutral-900' : 'bg-neutral-900')}>
        <div className={clsx({ hidden: isCodeShown })}>
          {children}
        </div>
        <pre className={clsx({ hidden: !isCodeShown }, 'overflow-x-auto overflow-y-auto max-h-[60vh]')}>
          {code}
        </pre>
      </div>
    </div>
  )
}