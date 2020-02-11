import React from "react";
import { graphql } from "gatsby";

export const fragment = graphql`
  fragment HeroSection on WordPress_Page_Acfpagesections_PageSection_Hero {
    title
    description
  }
`;
const Hero = ({title, description}) => (
  <section>
    <h1>{title}</h1>
    <p>{description}</p>
  </section>
);

export default Hero