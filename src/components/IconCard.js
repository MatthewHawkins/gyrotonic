/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

export default function IconCard({ imagePath, title, text, imageAlt }) {
  const cardStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: var(--space-5) var(--space-4);
    flex: 1 1 220px;
    max-width: 280px;
  `;

  const imageStyles = css`
    width: 56px;
    height: 56px;
    object-fit: contain;
    margin-bottom: var(--space-4);
    opacity: 0.85;
  `;

  const titleStyles = css`
    font-family: var(--font-display);
    font-size: var(--font-size-xl);
    font-weight: var(--weight-medium);
    line-height: var(--leading-snug);
    color: var(--color-ink);
    margin-bottom: var(--space-2);
  `;

  const textStyles = css`
    font-family: var(--font-body);
    font-size: var(--font-size-sm);
    line-height: var(--leading-relaxed);
    color: var(--color-ink-muted);
    margin: 0;
  `;

  return (
    <div css={cardStyles}>
      <img src={imagePath} css={imageStyles} alt={imageAlt || title} />
      <div css={titleStyles}>{title}</div>
      <p css={textStyles}>{text}</p>
    </div>
  );
}
