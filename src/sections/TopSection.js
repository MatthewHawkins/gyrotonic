/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { css } from "@emotion/react";
import image from "../assets/images/hallowin.jpeg";
import logo from "../assets/images/gyro-logo-redo.png";

const containerStyles = css`
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
`;

const backgroundStyles = css`
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      rgba(20, 18, 14, 0.42),
      rgba(20, 18, 14, 0.55)
    ),
    url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 0;
  will-change: transform;
`;

const contentStyles = css`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: var(--space-6);
  text-align: center;
`;

const logoStyles = css`
  width: 320px;
  max-width: 70vw;
  height: auto;
  filter: drop-shadow(0 4px 24px rgba(0, 0, 0, 0.25));
  animation: fadeUp 1.2s var(--ease-out) both;

  @media (max-width: 768px) {
    width: 240px;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const scrollCueStyles = css`
  position: absolute;
  bottom: var(--space-7);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  color: rgba(255, 255, 255, 0.75);
  font-family: var(--font-body);
  font-size: var(--font-size-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-eyebrow);
  text-transform: uppercase;
  animation: fadeIn 1.6s var(--ease-out) 0.6s both;

  &::after {
    content: "";
    width: 1px;
    height: 48px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0)
    );
    animation: scrollLine 2.2s ease-in-out infinite;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes scrollLine {
    0%,
    100% {
      transform: scaleY(1);
      transform-origin: top;
      opacity: 0.7;
    }
    50% {
      transform: scaleY(0.5);
      transform-origin: bottom;
      opacity: 0.3;
    }
  }

  @media (max-width: 768px) {
    bottom: var(--space-6);
  }
`;

export default function TopSection() {
  useEffect(() => {
    const bg = document.querySelector(".top-section-bg");
    if (!bg) return;
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const offset = window.scrollY * 0.25;
          bg.style.transform = `translate3d(0, ${offset}px, 0)`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div css={containerStyles} id="home">
      <div css={backgroundStyles} className="top-section-bg" aria-hidden="true" />
      <div css={contentStyles}>
        <img
          css={logoStyles}
          src={logo}
          alt="The Roots Studio - Gyrotonic and Gyrokinesis Training"
        />
      </div>
      <div css={scrollCueStyles} aria-hidden="true">
        Scroll
      </div>
    </div>
  );
}
