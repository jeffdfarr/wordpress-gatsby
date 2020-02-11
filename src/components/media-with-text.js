import React from "react";
import { graphql } from "gatsby";

export const fragment = graphql`
  fragment MediaWithTextSection on WordPress_Page_Acfpagesections_PageSection_MediaWithText {
    title
    description
    media {
      sourceUrl(size: LARGE)
    }
  }
`;

const MediaWithText = ({title, description, media}) => (
  <section>
    <p>{title}</p>
    {description}
    <img src={media.sourceUrl} />
  </section>
);

export default MediaWithText