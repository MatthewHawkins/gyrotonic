/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

export default function LessonDisplay({ cards }) {
  const displayStyles = css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--space-5);
  `;

  return <div css={displayStyles}>{cards}</div>;
}
