import React from "react";
import { graphql } from "gatsby";

export const fragment = graphql`
  fragment MediaWithTextSection on WPGraphQL_Page_Acfpagesections_PageSection_MediaWithText {
    title
    description
  }
`;

const MediaWithText = ({title, description}) => (
  <section>
    <p>{title}</p>
    {description}
  </section>
);

export default MediaWithText