/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import i18n from "../i18n/i18n";
import { useTranslation } from "react-i18next";

export default function MenuBar() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );
  const [language, setLanguage] = useState("English");

  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 0.3 * window.innerHeight);
    };

    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [isOpen]);

  const navItems = [
    { to: "/homepage#home", label: t("home") },
    { to: "/homepage#methodology", label: t("methodology") },
    { to: "/homepage#equipment", label: t("videos") },
    { to: "/homepage#team", label: t("team") },
    { to: "/contact#hours-and-prices", label: t("prices") },
    { to: "/contact#contact", label: t("contact") },
  ];

  const headerStyles = css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    transition: background-color var(--transition),
      backdrop-filter var(--transition), padding var(--transition),
      box-shadow var(--transition);
    padding: ${isAtTop ? "1.5rem 2rem" : "0.875rem 2rem"};
    background-color: ${isAtTop ? "transparent" : "rgba(241, 238, 228, 0.85)"};
    backdrop-filter: ${isAtTop ? "none" : "saturate(180%) blur(12px)"};
    -webkit-backdrop-filter: ${isAtTop
      ? "none"
      : "saturate(180%) blur(12px)"};
    box-shadow: ${isAtTop ? "none" : "0 1px 0 var(--color-line-soft)"};

    @media (max-width: 768px) {
      padding: ${isAtTop ? "1rem 1.25rem" : "0.75rem 1.25rem"};
    }
  `;

  const innerStyles = css`
    max-width: var(--container-wide);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-5);
  `;

  const desktopNavStyles = css`
    flex: 1;

    @media (max-width: 768px) {
      display: none;
    }
  `;

  const desktopListStyles = css`
    display: flex;
    flex-direction: row;
    gap: var(--space-6);
    list-style: none;
    margin: 0;
    padding: 0;
  `;

  const desktopLinkStyles = css`
    font-family: var(--font-body);
    font-size: var(--font-size-sm);
    font-weight: var(--weight-semibold);
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    color: ${isAtTop ? "rgba(255, 255, 255, 0.92)" : "var(--color-ink)"};
    text-decoration: none;
    padding: var(--space-2) 0;
    position: relative;
    transition: color var(--transition-fast);

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 1px;
      background: currentColor;
      transition: width var(--transition);
    }

    &:hover {
      color: ${isAtTop ? "#fff" : "var(--color-accent)"};
    }

    &:hover::after {
      width: 100%;
    }
  `;

  const menuToggleStyles = css`
    display: none;
    background: transparent;
    border: 0;
    padding: var(--space-2);
    color: ${isAtTop && !isOpen
      ? "rgba(255, 255, 255, 0.92)"
      : "var(--color-ink)"};
    cursor: pointer;
    transition: color var(--transition-fast);

    @media (max-width: 768px) {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  `;

  const iconRowStyles = css`
    display: flex;
    gap: var(--space-5);

    @media (max-width: 768px) {
      display: none;
    }
  `;

  const socialIconStyles = css`
    color: ${isAtTop ? "rgba(255, 255, 255, 0.85)" : "var(--color-ink-muted)"};
    transition: color var(--transition-fast),
      transform var(--transition-fast);

    &:hover {
      color: ${isAtTop ? "#fff" : "var(--color-accent)"};
      transform: translateY(-1px);
    }
  `;

  const languageMenuStyles = css`
    color: ${isAtTop ? "rgba(255, 255, 255, 0.92)" : "var(--color-ink)"};
    font-family: var(--font-body) !important;
    font-size: var(--font-size-sm) !important;
    min-width: 64px;

    & .MuiSelect-select {
      padding: 6px 24px 6px 12px !important;
    }
    & fieldset {
      border-color: ${isAtTop
        ? "rgba(255, 255, 255, 0.4)"
        : "var(--color-line)"} !important;
      transition: border-color var(--transition);
    }
    & svg {
      color: inherit;
    }
    &:hover fieldset {
      border-color: ${isAtTop
        ? "rgba(255, 255, 255, 0.7)"
        : "var(--color-accent)"} !important;
    }
  `;

  /* Mobile slide-out (rendered outside the header) */
  const mobileMenuStyles = css`
    display: none;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: min(320px, 80vw);
      padding: calc(var(--header-height) + var(--space-5)) var(--space-6)
        var(--space-6);
      background-color: var(--color-bg);
      box-shadow: -8px 0 32px rgba(31, 28, 23, 0.12);
      transform: translateX(${isOpen ? "0" : "100%"});
      transition: transform var(--transition);
      z-index: 90;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
  `;

  const mobileListStyles = css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  `;

  const mobileLinkStyles = css`
    display: block;
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    font-weight: var(--weight-semibold);
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    color: var(--color-ink);
    text-decoration: none;
    padding: var(--space-3) 0;
    border-bottom: 1px solid var(--color-line-soft);
    transition: color var(--transition-fast);

    &:hover,
    &:active {
      color: var(--color-accent);
    }
  `;

  const overlayStyles = css`
    display: none;

    @media (max-width: 768px) {
      display: block;
      position: fixed;
      inset: 0;
      background: rgba(31, 28, 23, 0.4);
      opacity: ${isOpen ? 1 : 0};
      pointer-events: ${isOpen ? "auto" : "none"};
      transition: opacity var(--transition);
      z-index: 80;
    }
  `;

  return (
    <>
      <header css={headerStyles}>
        <div css={innerStyles}>
          <nav css={desktopNavStyles}>
            <ul css={desktopListStyles}>
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} css={desktopLinkStyles}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div css={iconRowStyles}>
            <Link
              target="_blank"
              to="https://www.facebook.com/people/The-Roots-Studio/61553981725684/"
              aria-label="Facebook"
            >
              <FacebookIcon css={socialIconStyles} />
            </Link>
            <Link
              target="_blank"
              to="https://www.instagram.com/the_roots_gyrotonic_training/"
              aria-label="Instagram"
            >
              <InstagramIcon css={socialIconStyles} />
            </Link>
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:the.roots.exercise@gmail.com";
                e.preventDefault();
              }}
              aria-label="Email"
            >
              <MailOutlineIcon css={socialIconStyles} />
            </Link>
          </div>

          <Select
            id="language-select"
            value={language}
            onChange={handleChange}
            css={languageMenuStyles}
            variant="outlined"
            size="small"
          >
            <MenuItem value="English" onClick={() => changeLanguage("en")}>
              EN
            </MenuItem>
            <MenuItem value="Deutsche" onClick={() => changeLanguage("de")}>
              DE
            </MenuItem>
            <MenuItem value="Italiano" onClick={() => changeLanguage("it")}>
              IT
            </MenuItem>
          </Select>

          <button
            css={menuToggleStyles}
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      <nav css={mobileMenuStyles} aria-hidden={!isOpen}>
        <ul css={mobileListStyles}>
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to} css={mobileLinkStyles} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div css={overlayStyles} onClick={closeMenu} aria-hidden="true" />
    </>
  );
}
