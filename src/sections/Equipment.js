/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import useReveal from "../hooks/useReveal";

const sectionStyles = css`
  background-color: var(--color-bg);
  padding: var(--space-section-y) var(--space-section-x);
`;

const innerStyles = css`
  max-width: var(--container-wide);
  margin: 0 auto;
`;

const headerStyles = css`
  text-align: center;
  margin-bottom: var(--space-7);
`;

const titleStyles = css`
  font-size: var(--font-size-h2);
  margin-bottom: var(--space-3);

  &::after {
    content: "";
    display: block;
    width: 56px;
    height: 2px;
    background: var(--color-accent);
    margin: var(--space-4) auto 0;
  }
`;

const subtitleStyles = css`
  font-family: var(--font-body);
  font-size: var(--font-size-md);
  color: var(--color-ink-muted);
  max-width: 56ch;
  margin: 0 auto;
`;

const videoGridStyles = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: var(--space-5);
  }
`;

const videoFrameStyles = css`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  background: #000;
`;

const videoStyles = css`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

export default function Equipment() {
  const ref = useReveal();

  return (
    <section css={sectionStyles} id="equipment" ref={ref}>
      <div css={innerStyles}>
        <header css={headerStyles}>
          <span className="eyebrow">In Motion</span>
          <h2 css={titleStyles}>Videos</h2>
          <p css={subtitleStyles}>
            See the Gyrotonic Method and our equipment in action.
          </p>
        </header>
        <div css={videoGridStyles}>
          <div css={videoFrameStyles}>
            <iframe
              css={videoStyles}
              src="https://www.youtube.com/embed/oE33mjnvRAc?si=GjE4nsgsxRy6bwBc"
              title="Gyrotonic equipment demonstration - specialized movement therapy machines"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div css={videoFrameStyles}>
            <iframe
              css={videoStyles}
              src="https://www.youtube.com/embed/wXYQIwas0GE"
              title="Gyrotonic exercise demonstration - movement therapy techniques"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
