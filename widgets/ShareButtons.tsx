'use client';

import { useState } from 'react';

const ShareButtons = ({ url, title }: { url: string; title: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('아래 주소를 복사해 주세요.', url);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ title, url }).catch(() => undefined);
      return;
    }
    handleCopy();
  };

  const buttonClass =
    'lift inline-flex h-11 cursor-pointer items-center rounded-full bg-bg px-5 text-note font-semibold text-ink hover:bg-ink hover:text-on-field';

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="w-full text-note text-soft">이 글 공유하기</span>
      <button
        type="button"
        onClick={handleCopy}
        className={buttonClass}
      >
        <span aria-live="polite">{copied ? '복사했어요' : '링크 복사'}</span>
      </button>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noreferrer"
        className={buttonClass}
      >
        페이스북
      </a>
      <button
        type="button"
        onClick={handleShare}
        className={buttonClass}
      >
        다른 앱으로
      </button>
    </div>
  );
};

export default ShareButtons;
