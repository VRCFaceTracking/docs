import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';


interface Props {
    name: string;
    image: string;
    url: string;
    urlTS: string;
    description: JSX.Element;
}
  
// modified from Docusaurus example PlaygroundCard
// this is really jank way of making a custom doc card link
export function PageCard({name, url, description}: Props) {
    return (
        <div className="col col--6 margin-bottom--lg">
            <Link class="card padding--lg cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module" to={url}>
                <Heading as="h2" class="text--truncate cardTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module">{name}</Heading>
                <p class="text--truncate cardDescription_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module">{description}</p>
            </Link>
        </div>
    );
}
