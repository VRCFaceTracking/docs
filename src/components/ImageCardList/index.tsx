import React from 'react';
import clsx from 'clsx';
import {
  useCurrentSidebarCategory,
  filterDocCardListItems,
} from '@docusaurus/theme-common';
import ImageCard from '../ImageCard'
import DocCard from '@theme/DocCard';

function DocCardListMapCallback(item, index) {
  var img = require('@site/static/img/docusaurus.png').default
  console.log("looking for image for", item.label)

  let href = item.href
  let hrefsplit = href.split("/")

  try {
    switch (item.type) {
      case 'link':
        // link page would have be using img at same level
        // pretend category pages are pages
        if (href.slice(-1) == '/') {
          href = href.slice(0, -1)
          hrefsplit = href.split("/")
        }
        // console.log(href);
        // console.log("type is link")
        try {
          // regular page
          // + case: doc folder became page because only index page *not* named category root and explicitly declared in _category_.json
          img = require("@site/" + hrefsplit.slice(1,-1).join("/") + "/img/" + hrefsplit[hrefsplit.length - 1] + ".png").default;
        } catch (el) {
          // console.log(el);
          // rare case: link is actually a category root
          try {
            img = require("@site/" + hrefsplit.slice(1).join("/") + "/img/" + hrefsplit[hrefsplit.length - 1] + ".png").default;
          } catch (el1) {
            // console.log(el1);
            // rare case 2: explicit image is missing for page, but category image exists
            // also applies if page and category name are not the same, but link is directly to page (category type: doc)
            try {
              img = require("@site/" + hrefsplit.slice(1,-1).join("/") + "/img/" + hrefsplit[hrefsplit.length - 2] + ".png").default;
            } catch (el2) {
              // console.log(el2);
              // rare case 3 and last resort: explicit image is missing for page, but category image exists and page name is not category name
              img = require("@site/" + hrefsplit.slice(1,-2).join("/") + "/img/" + hrefsplit[hrefsplit.length - 3] + ".png").default; 
            }
          }
        }
        break;
      case 'category':
        // category will have image under 'category' level or at same level (if using autogenerated page)
        // pretend category pages are categories
        if (href.slice(-1) != '/') {
          href += '/'
          hrefsplit = href.split("/")
        }
        // console.log(href);
        try {
          // at category level (href isn't a page not the category name)
          // length - 2 is fine because href should always be /docs/...
          img = require("@site/" + hrefsplit.slice(1,-1).join("/") + "/img/" + hrefsplit[hrefsplit.length - 2] + ".png").default;
        } catch (ec) {
          // console.log(ec)
          // case: image at same level (parent category) or href is a page that isn't the category name
          try {
            img = require("@site/" + hrefsplit.slice(1,-2).join("/") + "/img/" + hrefsplit[hrefsplit.length - 2] + ".png").default;
          } catch (ec1) {
            // last resort: try to find parent category image (href isn't a page not the category name)
            // console.log(ec1);
            try {
              img = require("@site/" + hrefsplit.slice(1,-2).join("/") + "/img/" + hrefsplit[hrefsplit.length - 3] + ".png").default;
            } catch (ec2) {
              // console.log(ec2);
              // actual last resort if href is a page that is not the category name and under the category
              // if somehow indexing hrefsplit fails, should be caught by master try/catch
              img = require("@site/" + hrefsplit.slice(1,-3).join("/") + "/img/" + hrefsplit[hrefsplit.length - 4] + ".png").default;
            }
          }
        }
        break;
      default:
        throw new Error(`unknown item type ${JSON.stringify(item)}`);
    }
  } catch (e) {
    img = require('@site/static/img/docusaurus.png').default
    console.log(e);
  } finally {
    return (
      <article key={index} className="col col--6 margin-bottom--lg">
        <ImageCard item={item} img={img} />
      </article>
    )
  }
}

function DocCardListForCurrentSidebarCategory({className}) {
  const category = useCurrentSidebarCategory();
  return <ImageCardList items={category.items} className={className} />;
}
export default function ImageCardList(props) {
  const {items, className} = props;
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const filteredItems = filterDocCardListItems(items);
  return (
    <section className={clsx('row', className)}>
      {filteredItems.map(DocCardListMapCallback)}
    </section>
  );
}
