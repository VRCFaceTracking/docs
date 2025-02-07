import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  findFirstCategoryLink,
  useDocById,
} from '@docusaurus/theme-common/internal';
import isInternalUrl from '@docusaurus/isInternalUrl';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';


function CardContainer({href, children}) {
  return (
    <Link
      href={href}
      className={clsx('card padding--lg', styles.cardContainer)}>
      {children}
    </Link>
  );
}
function CardLayout({href, image, icon, title, description}) {
  return (
    <CardContainer href={href}>
      <div className={clsx(styles.flex)}>
        <div className={clsx(styles.imageCardSplitImage)}>
          <img src={image} alt={`${title} image`} />
        </div>
        <div className={clsx('card--text', styles.imageCardSplitText)}>
          <h2 className={clsx('text--truncate', styles.cardTitle)} title={title}>
            {icon} {title}
          </h2>
          {description && (
            <p
              className={clsx('text--truncate', styles.cardDescription)}
              title={description}>
              {description}
            </p>
          )}
        </div>
      </div>
    </CardContainer>
  );
}
function CardCategory({item, img}) {
  const href = findFirstCategoryLink(item);
  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }
  return (
    <CardLayout
      href={href}
      // image={require('@site/docs/vrcft-software/img/vrcft_installer.png').default}
      image={img}
      icon="🗃️"
      title={item.label}
      description={
        item.description ??
        translate(
          {
            message: '{count} items',
            id: 'theme.docs.DocCard.categoryDescription',
            description:
              'The default description for a category card in the generated index about how many items this category includes',
          },
          {count: item.items.length},
        )
      }
    />
  );
}
function CardLink({item, img}) {
  const icon = isInternalUrl(item.href) ? '📄️' : '🔗';
  const doc = useDocById(item.docId ?? undefined);
  // this is a really, really stupid hack
  // const img = require("@site/" + item.href.split("/").slice(1,-1).join("/") + "/img/" + item.href.split("/").pop() + ".png").default;
  return (
    <CardLayout
      href={item.href}
      image={img}
      icon={icon}
      title={item.label}
      description={item.description ?? doc?.description}
    />
  );
}
export default function ImageCard({item, img}) {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} img={img} />;
    case 'category':
      return <CardCategory item={item} img={img} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
