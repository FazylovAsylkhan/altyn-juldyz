/* eslint-disable no-undef */
import * as React from 'react';
import { graphql, PageProps, type HeadFC } from 'gatsby';
import type { HeadProps } from 'gatsby';
import { Footer, Header } from 'common/components/share';
import { FormContact, Info, PreviewBlock } from 'common/blocks/contacts';

const Kz = (props: PageProps<Queries.PageMainJson>): React.JSX.Element => {
  const { links, lang } = props.data.headerJson;
  const { description, copyright, footerLinks } = props.data.footerJson;
  const { previewBlock, info, forma, buttonLangs } =
    props.data.pageContactsJson;

  return (
    <>
      <Header lang={lang} links={links} buttonLangs={buttonLangs} />
      <PreviewBlock data={previewBlock} />
      <Info data={info} />
      <FormContact data={forma} />
      <Footer
        description={description}
        copyright={copyright}
        links={footerLinks}
      />
    </>
  );
};

export default Kz;

export const Head: HeadFC = (props: HeadProps) => {
  const { title } = props.data.pageContactsJson.seo;

  return <title>{title}</title>;
};

export const query = graphql`
  query PageContactsQuery {
    headerJson(lang: { eq: "kz" }) {
      lang
      links {
        text
        url
        submenu {
          text
          url
          submenu {
            text
            url
          }
        }
      }
    }
    footerJson(lang: { eq: "kz" }) {
      description
      copyright {
        rights
        company
      }
      footerLinks {
        text
        submenu {
          text
          url
        }
      }
    }
    pageContactsJson(lang: { eq: "kz" }) {
      seo {
        title
        h1
      }
      buttonLangs {
        text
        url
      }
      previewBlock {
        title
        description
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      info {
        box1 {
          title
          description
        }
        box2 {
          title
          values
        }
      }
      forma {
        title
        description
        fields {
          title
          errors
        }
        submitButton
        modal {
          title
          description
          closeButton
        }
        checker {
          mainText
          link {
            url
            text
          }
        }
      }
    }
  }
`;
