import Link from "next/link";
import { useEffect, useState } from "react";

const METRICS_CONSENT_KEY = "metricsConsent";
const METRICS_CONSENT_DATE_KEY = "metricsConsentDate";
const YANDEX_METRIKA_COUNTER_ID = 98326099;
const YANDEX_METRIKA_SCRIPT_ID = "yandex-metrika-script";
const YANDEX_METRIKA_SCRIPT_SRC = "https://mc.yandex.ru/metrika/tag.js";

type MetricsConsentStatus = "accepted" | "declined" | null;

declare global {
  interface Window {
    ym?: {
      (...args: unknown[]): void;
      a?: unknown[];
      l?: number;
    };
    __YANDEX_METRIKA_INITIALIZED__?: boolean;
  }
}

const loadYandexMetrika = () => {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  if (!window.ym) {
    window.ym = function ym(...args: unknown[]) {
      (window.ym!.a = window.ym!.a || []).push(args);
    };
    window.ym.l = Date.now();
  }

  if (!document.getElementById(YANDEX_METRIKA_SCRIPT_ID)) {
    const script = document.createElement("script");
    script.id = YANDEX_METRIKA_SCRIPT_ID;
    script.async = true;
    script.src = YANDEX_METRIKA_SCRIPT_SRC;
    document.head.appendChild(script);
  }

  if (window.__YANDEX_METRIKA_INITIALIZED__) {
    return;
  }

  window.ym(YANDEX_METRIKA_COUNTER_ID, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: false,
  });
  window.__YANDEX_METRIKA_INITIALIZED__ = true;
};

export const MetricsConsent: React.FC = () => {
  const [consentStatus, setConsentStatus] =
    useState<MetricsConsentStatus>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let savedConsent: string | null = null;

    try {
      savedConsent = window.localStorage.getItem(METRICS_CONSENT_KEY);
    } catch {
      savedConsent = null;
    }

    if (savedConsent === "accepted") {
      setConsentStatus("accepted");
      loadYandexMetrika();
    } else if (savedConsent === "declined") {
      setConsentStatus("declined");
    }

    setIsReady(true);
  }, []);

  const handleAccept = () => {
    try {
      window.localStorage.setItem(METRICS_CONSENT_KEY, "accepted");
      window.localStorage.setItem(
        METRICS_CONSENT_DATE_KEY,
        new Date().toISOString()
      );
    } catch {
      // If storage is unavailable, still honor the current-session choice.
    }
    setConsentStatus("accepted");
    loadYandexMetrika();
  };

  const handleDecline = () => {
    try {
      window.localStorage.setItem(METRICS_CONSENT_KEY, "declined");
      window.localStorage.removeItem(METRICS_CONSENT_DATE_KEY);
    } catch {
      // If storage is unavailable, still honor the current-session choice.
    }
    setConsentStatus("declined");
  };

  if (!isReady || consentStatus !== null) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-[#f9deaf] bg-[#fffaf7]/95 px-3 py-3 shadow-[0_-4px_18px_rgba(82,72,63,0.10)] backdrop-blur md:px-4 md:py-3">
      <div className="container flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-5">
        <p className="text-primary text-xs leading-[18px] [text-align-last:left] min-[480px]:text-justify md:max-w-[920px] md:text-sm md:leading-5">
          Мы используем файлы cookie и сервис Яндекс.Метрика для анализа
          посещаемости сайта и улучшения его работы. Нажимая “Принять”, вы
          соглашаетесь с обработкой данных, указанных в{" "}
          <Link className="underline hover:text-hover" href="/privacy-policy">
            Политике обработки персональных данных
          </Link>
          .
        </p>
        <div className="grid shrink-0 grid-cols-2 gap-2 md:flex md:gap-2.5">
          <button
            type="button"
            className="h-8 min-w-0 rounded-2 bg-[#d1baba] px-3 text-xs text-white transition hover:opacity-90 md:h-[34px] md:min-w-[96px] md:px-4 md:text-sm"
            onClick={handleAccept}
          >
            Принять
          </button>
          <button
            type="button"
            className="h-8 min-w-0 rounded-2 border border-primary/60 px-3 text-xs text-primary transition hover:border-primary hover:bg-white md:h-[34px] md:min-w-[96px] md:px-4 md:text-sm"
            onClick={handleDecline}
          >
            Отклонить
          </button>
        </div>
      </div>
    </div>
  );
};
