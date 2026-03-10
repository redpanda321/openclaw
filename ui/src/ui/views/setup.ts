import { html } from "lit";
import { t } from "../../i18n/index.ts";
import { icons } from "../icons.ts";

export function renderSetupFab() {
  const returnTo = encodeURIComponent(
    `${window.location.pathname}${window.location.search}`,
  );
  const setupUrl = `/openclaw-setup?returnTo=${returnTo}`;

  return html`
    <button
      class="setup-fab"
      title=${t("subtitles.setup")}
      @click=${() => {
        try {
          window.top?.location.assign(setupUrl);
        } catch {
          window.location.assign(setupUrl);
        }
      }}
    >
      <span class="setup-fab__icon">${icons.wrench}</span>
      <span class="setup-fab__label">${t("tabs.setup")}</span>
    </button>
    <style>
      .setup-fab {
        position: fixed;
        bottom: 1.25rem;
        right: 1.25rem;
        z-index: 900;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.625rem 1.125rem;
        border: none;
        border-radius: 999px;
        background: var(--color-primary, #6366f1);
        color: #fff;
        font-size: 0.875rem;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
        transition: transform 0.15s ease, box-shadow 0.15s ease;
      }
      .setup-fab:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
      }
      .setup-fab:active {
        transform: translateY(0);
      }
      .setup-fab__icon {
        display: flex;
        width: 1.125rem;
        height: 1.125rem;
      }
      .setup-fab__icon svg {
        width: 100%;
        height: 100%;
        fill: none;
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
    </style>
  `;
}
