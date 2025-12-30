'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';

const Admin = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState<File>();

  const { data, isSuccess } = useQuery({
    queryKey: ['ksc-contents'],
    queryFn: () => axios.get('/api/carousel'),
    select: ({ data }) => data?.data,
  });

  const handleCreateContentsClick = async () => {
    const formData = new FormData();
    formData.append('file', file!);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('password', password);

    const { data } = await axios.post('/api/carousel', formData);
    if (data.status === 403) return alert('비밀번호 틀림');
    if (data.status === 201) {
      alert('생성 완료');
      window.location.reload();
    }
  };

  const handleRemoveContentsClick = async (name: number) => {
    const isDelete = confirm(`${name} 행사를 삭제하시겠습니까?`);
    if (isDelete) {
      const { data } = await axios.delete(`/api/carousel/${name}`);
      if (data.status === 403) return alert('비밀번호 틀림');
      if (data.status === 200) {
        alert('삭제 완료');
        window.location.reload();
      }
    }
  };

  if (!isSuccess) return '';

  return (
    <div className="flex flex-col p-10 gap-10">
      <section className="flex flex-col gap-2">
        <span className="text-xl font-semibold">행사명</span>
        <input
          onChange={({ target: { value } }) => setTitle(value)}
          className="border w-60"
          value={title}
        />
      </section>
      <section className="flex flex-col gap-2">
        <span className="text-xl font-semibold">설명</span>
        <textarea
          onChange={({ target: { value } }) => setDescription(value)}
          className="border w-1/2 h-52"
          value={description}
        />
      </section>
      <section className="flex flex-col gap-2">
        <span className="text-xl font-semibold">이미지</span>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0])}
          className="border w-60"
        />
      </section>
      <section className="flex flex-col gap-2">
        <span className="text-xl font-semibold">관리자 비밀번호</span>
        <input
          onChange={({ target: { value } }) => setPassword(value)}
          className="border w-60"
          value={password}
        />
      </section>
      <button
        onClick={handleCreateContentsClick}
        className="w-fit border cursor-pointer"
      >
        등록하기
      </button>
      <div className="w-full h-0.5 bg-black" />
      <span>기존 올라가있는 글 목록 (클릭시 삭제됨)</span>
      <ul className="flex flex-col gap-20">
        {data.map((item: any) => (
          <li
            className="relative flex w-full shrink-0 pr-[14px] gap-10 bg-amber-200 p-10"
            onClick={() => handleRemoveContentsClick(item.title)}
            key={item.id}
          >
            <Image
              src={item.imageUrl}
              width={400}
              height={400}
              alt={item.title}
              className="w-full"
            />
            <div className="w-full flex flex-col items-start h-full gap-10 justify-center">
              <hgroup className="flex items-center gap-2">
                <Image
                  src="/primary-logo.png"
                  alt="logo"
                  width={36}
                  height={36}
                />
                <h3 className="text-xl text-[#001B75] font-black font-[Pretendard]">
                  대표행사 {String(item.id).padStart(2, '0')}
                </h3>
              </hgroup>
              <h3 className="text-7xl font-bold">{item.title}</h3>
              <p className="text-xl font-semibold whitespace-pre-wrap text-left">
                {item.content.replaceAll('\\n', '\n')}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
