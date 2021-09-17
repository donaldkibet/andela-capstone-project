import React from 'react';
import styles from './app.component.scss';
import { DatePicker, INavLinkGroup, Nav } from '@fluentui/react';
const navLinkGroups: INavLinkGroup[] = [
    {
      links: [
        {
          name: 'Home',
          url: 'http://example.com',
          expandAriaLabel: 'Expand Home section',
          collapseAriaLabel: 'Collapse Home section',
          links: [
            {
              name: 'Activity',
              url: 'http://msn.com',
              key: 'key1',
              target: '_blank',
            },
            {
              name: 'MSN',
              url: 'http://msn.com',
              disabled: true,
              key: 'key2',
              target: '_blank',
            },
          ],
          isExpanded: false,
        },
        {
          name: 'Documents',
          url: 'http://example.com',
          key: 'key3',
          isExpanded: true,
          target: '_blank',
        },
        {
          name: 'Pages',
          url: 'http://msn.com',
          key: 'key4',
          target: '_blank',
        },
        {
          name: 'Notebook',
          url: 'http://msn.com',
          key: 'key5',
          disabled: true,
        },
        {
          name: 'Communication and Media',
          url: 'http://msn.com',
          key: 'key6',
          target: '_blank',
        },
        {
          name: 'News',
          url: 'http://cnn.com',
          icon: 'News',
          key: 'key7',
          target: '_blank',
        },
      ],
    },
  ];

const App: React.FC = () => {
    console.log(styles.main)
    return <div className={styles.main}>
        <h2>Main Application</h2>
        <hr/>
        <Nav
      onLinkClick={(event) => console.log(event)}
      selectedKey="key3"
      ariaLabel="Nav basic example"
      groups={navLinkGroups}
    />
    </div>
}

export default App;