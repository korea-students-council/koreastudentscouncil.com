'use client';

import classNames from 'classnames';
import { useState } from 'react';
import { FOUNDED_YEAR } from '@/content/site';
import { RECRUIT_MONTH } from '@/content/recruit';

const GRADES = [
  { id: 1, label: '고1' },
  { id: 2, label: '고2' },
  { id: 3, label: '고3' },
  { id: 4, label: '졸업생' },
] as const;

type Answer = { headline: string; detail: string };

// 기수 번호는 모집 연도 - 2002 (2026년 정기모집 = 24기). 새 학년은 3월에 시작합니다.
const answerFor = (grade: number, now: Date): Answer => {
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const schoolYear = month < 3 ? year - 1 : year;
  const closed = month > RECRUIT_MONTH + 1 || (month === RECRUIT_MONTH + 1 && now.getDate() > 7);

  if (grade === 4) {
    return {
      headline: '졸업생 추가 모집 공고를 기다려 주세요',
      detail:
        '해마다 졸업한 전임 학생회장을 대상으로 추가 모집을 열기도 합니다. 2026년에는 23기 추가 모집이 정기모집과 함께 진행되었습니다.',
    };
  }

  const recruitYear = schoolYear + (3 - grade);
  const cohort = recruitYear - FOUNDED_YEAR;

  if (recruitYear < year || (recruitYear === year && closed)) {
    return {
      headline: `올해 ${cohort}기 정기모집은 마감되었어요`,
      detail: `졸업 후 ${recruitYear + 1}년에 졸업생 대상 ${cohort}기 추가 모집이 열리면 지원할 수 있습니다. 공고는 인스타그램으로 올라옵니다.`,
    };
  }

  const monthsLeft = (recruitYear - year) * 12 + (RECRUIT_MONTH - month);

  return {
    headline: `${recruitYear}년 5월, ${cohort}기로 지원할 수 있어요`,
    detail:
      monthsLeft > 0
        ? `정기모집까지 약 ${monthsLeft}개월 남았습니다. 그때까지 학생회장으로 쌓은 경험을 기록해 두세요.`
        : '지금이 바로 정기모집 시기입니다. 인스타그램 공고에서 정확한 마감일을 확인하세요.',
  };
};

const CohortFinder = () => {
  const [grade, setGrade] = useState<number>();
  const answer = grade ? answerFor(grade, new Date()) : undefined;

  return (
    <div className="flex flex-col gap-10">
      <fieldset>
        <legend className="sr-only">지금 학년</legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {GRADES.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setGrade(item.id)}
              aria-pressed={grade === item.id}
              className={classNames(
                'lift h-16 cursor-pointer rounded-full text-statement font-bold',
                grade === item.id ? 'bg-ink text-on-field' : 'bg-bg text-ink hover:bg-ink/10',
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </fieldset>
      <div
        aria-live="polite"
        className="min-h-[9rem]"
      >
        {answer ? (
          <div
            key={grade}
            className="flex animate-[fade-in_0.5s_ease-out] flex-col gap-3"
          >
            <p className="text-statement font-bold">{answer.headline}</p>
            <p className="max-w-[46ch] text-body">{answer.detail}</p>
          </div>
        ) : (
          <p className="text-statement text-soft">학년을 고르면 언제, 몇 기로 지원할 수 있는지 알려 드려요.</p>
        )}
      </div>
    </div>
  );
};

export default CohortFinder;
