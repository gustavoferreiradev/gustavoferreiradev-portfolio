import React from 'react';
import { RoughNotationGroup } from 'react-rough-notation';
import userData from '../constants/data';
import { RainbowHighlight } from './RainbowHighlight';
import Image from 'next/image';

export default function Hero() {
  const colors = ['#F59E0B', '#84CC16', '#10B981', '#3B82F6'];

  return (
    <section className="flex flex-row justify-center items-start overflow-hidden">
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Dev.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Full Stack.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4">
          <Image
            width={350}
            height={350}
            src={userData.avatarUrl}
            alt="avatar"
            className="shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
