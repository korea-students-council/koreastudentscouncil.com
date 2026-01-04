import type { Metadata, Viewport } from "next";
import "./globals.css";
import Provider from "./providers";

export const metadata: Metadata = {
  title: "대한학생회 공식 홈페이지 Korea Students Council",
  description:
    "[전국고교학생회장연합] 대한민국 리더십의 중심, 대한학생회 / 대한학생회는 정의, 정직, 성실, 예의의 4대 정신을 바탕으로 대한민국 청소년들의 자질 함양과 차세대 리더 양성을 위해 교육, 문화, 복지, 교류, 운영의 5대 사업 분야에 대한 다양한 공익 사업을 진행하고 있습니다.",
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
    description:
      "[전국고교학생회장연합] 대한민국 리더십의 중심, 대한학생회 / 대한학생회는 정의, 정직, 성실, 예의의 4대 정신을 바탕으로 대한민국 청소년들의 자질 함양과 차세대 리더 양성을 위해 교육, 문화, 복지, 교류, 운영의 5대 사업 분야에 대한 다양한 공익 사업을 진행하고 있습니다.",
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
    description:
      "[전국고교학생회장연합] 대한민국 리더십의 중심, 대한학생회 / 대한학생회는 정의, 정직, 성실, 예의의 4대 정신을 바탕으로 대한민국 청소년들의 자질 함양과 차세대 리더 양성을 위해 교육, 문화, 복지, 교류, 운영의 5대 사업 분야에 대한 다양한 공익 사업을 진행하고 있습니다.",
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
    <html lang="en">
      <body className={`antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
