/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

import gyroLogo2 from "../assets/images/gyroLogo2.png";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "react-router-dom";

const footerStyles = css`
  background-color: var(--color-bg-alt);
  padding: var(--space-8) var(--space-section-x) var(--space-6);
  border-top: 1px solid var(--color-line-soft);
`;

const innerStyles = css`
  max-width: var(--container);
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--space-7);
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: var(--space-6);
    text-align: center;
    justify-items: center;
  }
`;

const logoStyles = css`
  height: 96px;
  width: auto;
  opacity: 0.9;
`;

const trademarkStyles = css`
  font-family: var(--font-body);
  font-size: var(--font-size-xs);
  line-height: var(--leading-relaxed);
  color: var(--color-ink-soft);
  max-width: 60ch;

  & strong {
    color: var(--color-ink-muted);
    font-weight: var(--weight-semibold);
  }
`;

const rightColStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--space-4);

  @media (max-width: 900px) {
    align-items: center;
  }
`;

const iconRowStyles = css`
  display: flex;
  gap: var(--space-5);
`;

const iconStyles = css`
  color: var(--color-ink-muted);
  transition: color var(--transition-fast),
    transform var(--transition-fast);

  &:hover {
    color: var(--color-accent);
    transform: translateY(-1px);
  }
`;

const metaStyles = css`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-size: var(--font-size-xs);
  color: var(--color-ink-soft);
  text-align: right;

  & a {
    color: var(--color-ink-muted);
    transition: color var(--transition-fast);
  }

  & a:hover {
    color: var(--color-accent);
  }

  @media (max-width: 900px) {
    text-align: center;
  }
`;

const bottomBarStyles = css`
  max-width: var(--container);
  margin: var(--space-7) auto 0;
  padding-top: var(--space-5);
  border-top: 1px solid var(--color-line-soft);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-3);
  font-family: var(--font-body);
  font-size: var(--font-size-xs);
  color: var(--color-ink-soft);

  @media (max-width: 900px) {
    justify-content: center;
    text-align: center;
  }
`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer css={footerStyles}>
      <div css={innerStyles}>
        <img
          src={gyroLogo2}
          css={logoStyles}
          alt="The Roots Studio logo"
        />
        <p css={trademarkStyles}>
          <strong>GYROTONIC®</strong>, <strong>GYROTONIC® Logo</strong>,{" "}
          <strong>GYROTONIC EXPANSION SYSTEM®</strong>, and{" "}
          <strong>GYROKINESIS®</strong> are registered trademarks of Gyrotonic
          Sales Corp and are used with their permission.
        </p>
        <div css={rightColStyles}>
          <div css={iconRowStyles}>
            <Link
              target="_blank"
              to="https://www.facebook.com/people/The-Roots-Studio/61553981725684/"
              aria-label="Facebook"
            >
              <FacebookIcon css={iconStyles} />
            </Link>
            <Link
              target="_blank"
              to="https://www.instagram.com/the_roots_gyrotonic_training/"
              aria-label="Instagram"
            >
              <InstagramIcon css={iconStyles} />
            </Link>
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:the.roots.exercise@gmail.com";
                e.preventDefault();
              }}
              aria-label="Email"
            >
              <MailOutlineIcon css={iconStyles} />
            </Link>
          </div>
          <div css={metaStyles}>
            <span>
              Icons by MaterialIcon &amp;{" "}
              <a href="https://flaticon.com" target="_blank" rel="noreferrer">
                FlatIcon
              </a>
            </span>
            <span>Photos &amp; videos by Colin Jacobs</span>
          </div>
        </div>
      </div>
      <div css={bottomBarStyles}>
        <span>© {year} The Roots Studio</span>
        <Link to="/data-security">Data Protection Declaration</Link>
      </div>
    </footer>
  );
}
