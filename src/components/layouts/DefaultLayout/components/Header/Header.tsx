import type React from "react";

type MenuItem = {
  label: string;
  url: string;
  out?: boolean;
  childs?: Omit<MenuItem, 'childs'>[];
}

const menuItems: MenuItem[] = [
  {
    label: 'Home',
    url: '/'
  },
  {
    label: 'Docs',
    url: '/docs',
    childs: [
      {
        label: 'React Advanced Input',
        url: '/docs/react-advanced-input',
      }
    ]
  },
  {
    label: 'Portfolio',
    url: 'https://jessypouliot.ca',
    out: true,
  },
];

export const Header: React.FC = () => {
  return (
    <header className="bg-red-500">
      <nav className="px-4 text-white m-auto max-w-screen-lg">
        <ul className="flex gap-4">
          {menuItems.map((menuItem) => (
            <li className="relative group py-4">
              <a href={menuItem.url} target={menuItem.out ? '_blank' : undefined}>
                <span>
                  {menuItem.label}
                  {!!menuItem.childs && (
                    <span className="ml-1 text-sm">
                      ▼
                    </span>
                  )}
                </span>
                {!!menuItem.childs && (
                  <ul className="hidden group-hover:block bg-red-700 absolute top-full w-max gap-2 p-2">
                    {menuItem.childs.map((childMenuItem) => (
                      <li>
                        <a href={childMenuItem.url} target={childMenuItem.out ? '_blank' : undefined}>
                          {childMenuItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}