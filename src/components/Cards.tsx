import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import DocCard from '@theme/DocCard';
import {
  useCurrentSidebarCategory,
  filterDocCardListItems,
} from '@docusaurus/theme-common';


interface Props {
    name: string;
    image: string;
    url: string;
    description: string;
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

// More like the example playground card, but we'll use for general bit important links!
export function ImageCard({name, image, url, description}: Props) {
    return (
      <div className="col col--6 margin-bottom--lg">
        <div className={clsx('card')}>
          <div className={clsx('card__image')}>
            <Link to={url}>
              <img src={image} alt={`${name}'s image`} />
            </Link>
          </div>
          <div className="card__body">
            <Heading as="h3">{name}</Heading>
            <p>{description}</p>
          </div>
          <div className="card__footer">
            <div className="button-group button-group--block">
              <Link className="button button--secondary" to={url}>
                Download
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export function VRCFTInstallerCard() {
  return (<div class="row" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
    <ImageCard name="VRCFaceTracking Steam Download"
    // url="https://github.com/benaclejames/VRCFaceTracking/releases/latest/download/VRCFaceTracking_x64.appinstaller"
    url="https://store.steampowered.com/app/3329480/VRCFaceTracking/"
    image={require('@site/docs/vrcft-software/img/vrcft_installer.jpeg').default}
    description="Download the latest VRCFT release from Steam®"/>
  </div>)
}
