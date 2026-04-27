import type { Metadata, Viewport } from "next";
import "./globals.css";
import Provider from "./providers";

const siteDescription =
  "대한학생회는 청소년 리더십 함양을 위해 교육·문화·복지 공익사업을 운영합니다.";

export const metadata: Metadata = {
  title: "대한학생회 공식 홈페이지 Korea Students Council",
  description: siteDescription,
  keywords: [
    "대한학생회",
    "전국고교학생회장연합",
    "학생회",
    "고등학교학생회",
    "리더십",
    "대한민국",
    "청소년",
  ],
  authors: [{ name: "대한학생회" }],
  metadataBase: new URL("https://www.koreastudentscouncil.com"),

  alternates: {
    canonical: "https://www.koreastudentscouncil.com/",
  },

  openGraph: {
    type: "website",
    title: "대한학생회 공식 홈페이지 Korea Students Council",
    description: siteDescription,
    url: "https://koreastudentscouncil.com",
    images: [
      {
        url: "https://storage.googleapis.com/cr-resource/image/5a2e841ee3f3d6089198a6e917892c57/koreascofficial/650/70cab5c9b21da6a628f3a61e27fa1dc2.png",
        width: 1200,
        height: 630,
        alt: "대한학생회 공식 이미지",
      },
    ],
    locale: "ko_KR",
    siteName: "대한학생회",
  },

  twitter: {
    card: "summary_large_image",
    title: "대한학생회 공식 홈페이지 Korea Students Council",
    description: siteDescription,
    images: [
      "https://storage.googleapis.com/cr-resource/image/5a2e841ee3f3d6089198a6e917892c57/koreascofficial/650/70cab5c9b21da6a628f3a61e27fa1dc2.png",
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  verification: {
    google: "uJl5y8HH5XHvfu8f1uzYyvE7xigYbf3sWiEVQHc3kVc",
    other: {
      "naver-site-verification": "66073f362a15a5e598a8e736805cebaa2a1ee32d",
    },
  },

  icons: {
    icon: [
      {
        url: "https://storage.googleapis.com/cr-resource/image/5a2e841ee3f3d6089198a6e917892c57/koreascofficial/koreascofficial-favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple:
      "https://storage.googleapis.com/cr-resource/image/5a2e841ee3f3d6089198a6e917892c57/koreascofficial/koreascofficial-favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`antialiased bg-white`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
