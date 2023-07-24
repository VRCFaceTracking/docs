import {useDoc} from '@docusaurus/theme-common/internal';
import React from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export function EditUrl({children}) {
  const {metadata} = useDoc();
  const {editUrl} = metadata;
  return (
    <a href={editUrl} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export function CustomLink({children, to, append = ""}) {
  const {siteConfig} = useDocusaurusContext();
  // Get the value of the custom field with the name of the value of to prop
  const customField = siteConfig.customFields[to.toLowerCase()] as {label: string, href: string};
  return (
    <a href={customField.href+append} target="_blank" rel="noopener noreferrer">
      {children ?? customField.label}
    </a>
  )
}

export function TroubleShootTable({children, cause}) {
  return (
    <div>
      <table>
      <tbody>
        <tr>
          <td><strong>Cause</strong></td>
          <td style={{textAlign: 'left', width: '100vh'}}>{cause}</td>
        </tr>
        <tr>
          <td><strong>Solution</strong></td>
          <td style={{textAlign: 'left', width: '100vh'}}>{children}</td>
        </tr>
      </tbody>
      </table>
    </div>
  )
}

export const TextColor = ({children, color}) => (
  <span
      style={{
          color: color,
      }}>
  {children}
</span>
);

export const Highlight = ({children, color}) => (
  <span
      style={{
          backgroundColor: color,
          borderRadius: '2px',
          color: '#fff',
          padding: '0.2rem',
      }}>
  {children}
</span>
);
