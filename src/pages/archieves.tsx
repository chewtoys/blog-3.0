import React, { FC, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { css } from '@emotion/core';

import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import { trackView } from '../utils/ga';
import config from '../website-config';
import pxToRem from '../styles/pxToRem';

import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/styles/post';

const PageTemplate = css`
  .site-main {
    background: var(--bg-content);
    padding-bottom: 4vw;
  }
  .archieve-card {
    border-radius: 5px;
    background: var(--bg-card) center center;
    box-shadow: rgba(39,44,49,0.06) 8px 14px 38px, rgba(39,44,49,0.03) 1px 3px 8px;
    margin: .5rem;
    padding: 1rem;

    & > .date {
      color: var(--text-color-grey);
      font-size: ${pxToRem(10)};
    }
  }
`;

const Archieves: FC<any> = (props) => {
  useEffect(() => {
    trackView('Page Archieves');
  }, []);

  const title = 'About Irfan Maulana - @mazipan';
  const desc = 'A small introduction about Irfan Maulana';

  const edges = props.data.allMarkdownRemark.edges.filter((e) => e.node.frontmatter.lang === 'id');

  return (
    <IndexLayout>
      <Helmet>
        <html lang={config.lang} />
        <title>{title}</title>

        <meta name="description" content={desc} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={`${title}`} />
        <meta property="og:url" content={config.siteUrl + '/about'} />
        <meta property="og:image" content={`${config.siteUrl}/meta-image-about.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta property="article:publisher" content={`${config.facebook}`} />
        <meta property="article:author" content={`${config.facebook}`} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${title}`} />
        <meta name="twitter:url" content={config.siteUrl + '/about'} />
        <meta name="twitter:image" content={`${config.siteUrl}/meta-image-about.jpg`} />
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split('https://twitter.com/')[1]}`}
          />
        )}
        {config.twitter && (
          <meta
            name="twitter:creator"
            content={`@${config.twitter.split('https://twitter.com/')[1]}`}
          />
        )}
      </Helmet>
      <Wrapper css={PageTemplate}>
        <header css={[outer, SiteHeader]}>
          <div css={inner}>
            <SiteNav />
          </div>
        </header>
        <main id="site-main" className="site-main" css={[SiteMain, outer]}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader>
              <PostFullTitle>Archieves</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div
                className="post-content"
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                {edges.map((e: any) => (
                  <div key={e.node.fields.slug} className="archieve-card">
                    <div className="date">{e.node.frontmatter.date}</div>
                    <div>
                      <Link to={e.node.fields.slug}>{e.node.frontmatter.title}</Link>
                    </div>
                  </div>
                ))}
              </div>
            </PostFullContent>
          </article>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export default Archieves;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            lang
          }
        }
      }
    }
  }
`;
