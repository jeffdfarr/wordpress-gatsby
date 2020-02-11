import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby";
import Hero from '../components/hero';
import MediaWithText from '../components/media-with-text';

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"


export const pageQuery = graphql`
  {
    wordPress {
      pageBy(uri: "Homepage") {
        id
        title
        acfPageSections {
          pageSection {
            __typename
            ...HeroSection
            ...MediaWithTextSection
          }
        }
      }
    }
  }
`;

const Home = ({ data }) => {
  const sections = data.wordPress.pageBy.acfPageSections.pageSection;
  
  return (
    <div>
    {sections.map(pageSection => {
      const typeName = pageSection.__typename;

      switch (typeName) {
        case 'WordPress_Page_Acfpagesections_PageSection_Hero':
        return <Hero key={pageSection.id} {...pageSection} />

        case 'WordPress_Page_Acfpagesections_PageSection_MediaWithText':
        return <MediaWithText key={pageSection.id} {...pageSection} />

      }
    })}
    </div>
  );
};

export default Home;