import { CONTACT_EMAIL, SNS_LINKS } from '@/content/site';

const [emailName, emailDomain] = CONTACT_EMAIL.split('@');

const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex min-h-[80svh] flex-col bg-field px-(--gutter) pt-10 pb-8 text-on-field"
    >
      <div className="flex flex-col justify-between gap-6 text-note sm:flex-row">
        <div className="flex flex-col gap-1 text-on-field-soft sm:flex-row sm:gap-10">
          <p className="font-semibold text-on-field">대한학생회 · 전국고교학생회장연합</p>
          <p>Since 2002, 대한민국 리더십의 중심</p>
          <p>문의는 메일로 보내주시면 빠른 시일 내로 회신드립니다.</p>
        </div>
        <a
          href="#top"
          className="link-underline w-fit font-semibold"
        >
          맨 위로
        </a>
      </div>

      <div className="mt-auto pt-24">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="group block w-fit font-bold leading-[0.95] tracking-[-0.04em] text-[clamp(30px,10.4vw,48px)] sm:text-[clamp(48px,6.6vw,124px)]"
        >
          <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">
            {emailName}
          </span>
          <span className="inline-block transition-transform delay-75 duration-300 group-hover:-translate-y-1">
            @{emailDomain}
          </span>
        </a>
      </div>

      <div className="mt-12 grid gap-4 text-note text-on-field-soft md:grid-cols-3 md:items-end">
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {SNS_LINKS.map((sns) => (
            <li key={sns.name}>
              <a
                href={sns.href}
                target="_blank"
                rel="noreferrer"
                className="link-underline text-on-field"
              >
                {sns.name}
              </a>
            </li>
          ))}
        </ul>
        <p className="md:text-center">
          Made by 임희재 박우빈 박서빈 박유영 서동석 이유진 유하늘 조정윤 김준희 최보련
        </p>
        <p className="md:text-right">Copyrights &copy; {new Date().getFullYear()} by KOREASC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
