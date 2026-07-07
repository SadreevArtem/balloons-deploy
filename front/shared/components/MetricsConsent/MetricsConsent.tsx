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
    <div className="fixed inset-x-0 bottom-0 z-[100] bg-white/95 px-4 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.12)] backdrop-blur">
      <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-primary text-base leading-6 md:max-w-[920px]">
          Мы используем файлы cookie и сервис Яндекс.Метрика для анализа
          посещаемости сайта и улучшения его работы. Нажимая “Принять”, вы
          соглашаетесь с обработкой данных, указанных в{" "}
          <Link className="underline hover:text-hover" href="/privacy-policy">
            Политике обработки персональных данных
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3 max-sm:flex-col">
          <button
            type="button"
            className="h-[42px] rounded-2 bg-[#d1baba] px-5 text-base text-white hover:opacity-90"
            onClick={handleAccept}
          >
            Принять
          </button>
          <button
            type="button"
            className="h-[42px] rounded-2 border border-primary px-5 text-base text-primary hover:bg-[#f7f7f7]"
            onClick={handleDecline}
          >
            Отклонить
          </button>
        </div>
      </div>
    </div>
  );
};
