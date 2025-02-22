import { Link } from 'gatsby';
import React, { FC } from 'react';
import styled from '@emotion/styled';

import pxToRem from '../styles/pxToRem';
import { AuthorProfileImage } from '../styles/shared';
import { trackClick } from '../utils/ga';

const AuthorCardSection = styled.section`
  display: flex;
`;

const AuthorCardName = styled.h4`
  margin: 8px 0 2px 0;
  padding: 0;
  font-size: ${pxToRem(10)};

  a {
    color: var(--text-color);
    font-weight: 700;
  }

  a:hover {
    text-decoration: none;
  }
`;

const AuthorCardContent = styled.section`
  p {
    margin: 0;
    color: var(--text-color-grey);
    line-height: 1.3em;
  }
`;

export interface AuthorCardProps {
  author: any;
}

const AuthorCard: FC<AuthorCardProps> = ({ author }) => {
  const trackAuthorClick = (linkName: string) => {
    trackClick({
      eventCategory: 'Click Author Link',
      eventLabel: `Author card - ${linkName}`,
    });
  };

  return (
    <AuthorCardSection>
      <img css={AuthorProfileImage} src={author.avatar.children[0].fixed.src} alt={author.id} />
      <AuthorCardContent>
        <AuthorCardName>
          <Link to={`/author/${author.id}/`} onClick={() => {
            trackAuthorClick('Author name');
          }}
          >{author.id}
          </Link>
        </AuthorCardName>
        {author.bio ? (
          <p>{author.bio}</p>
        ) : (
          <p>
            Read <Link to={`/author/${author.id}/`} onClick={() => {
              trackAuthorClick('More posts');
            }}
                 >more posts
                 </Link> by this author.
          </p>
        )}
      </AuthorCardContent>
    </AuthorCardSection>
  );
};

export default AuthorCard;
