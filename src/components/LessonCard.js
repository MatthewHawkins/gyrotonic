/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

export default function LessonCard({ title, cost, description, photo }) {
  const cardStyles = css`
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: var(--space-7) var(--space-5);
    background-color: var(--color-surface);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    transition: transform var(--transition), box-shadow var(--transition);
    overflow: hidden;
    isolation: isolate;

    flex: 1 1 280px;
    max-width: 360px;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image: linear-gradient(
          rgba(255, 255, 255, 0.85),
          rgba(255, 255, 255, 0.85)
        ),
        url(${photo});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      opacity: 0;
      transition: opacity var(--transition);
      z-index: -1;
    }

    &:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-md);
    }

    &:hover::before {
      opacity: 1;
    }
  `;

  const titleStyles = css`
    font-family: var(--font-display);
    font-size: var(--font-size-xl);
    font-weight: var(--weight-medium);
    line-height: var(--leading-snug);
    color: var(--color-ink);
    margin-bottom: var(--space-4);
  `;

  const costStyles = css`
    font-family: var(--font-display);
    font-size: clamp(2.25rem, 3.6vw, 2.75rem);
    font-weight: var(--weight-semibold);
    line-height: 1;
    color: var(--color-ink);
    margin-bottom: var(--space-5);
    letter-spacing: var(--tracking-tight);
  `;

  const descStyles = css`
    font-family: var(--font-body);
    font-size: var(--font-size-sm);
    line-height: var(--leading-relaxed);
    color: var(--color-ink-muted);
    margin: 0;
  `;

  return (
    <div css={cardStyles}>
      <h4 css={titleStyles}>{title}</h4>
      <div css={costStyles}>{cost}</div>
      <p css={descStyles}>{description}</p>
    </div>
  );
}
