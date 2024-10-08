import Text from 'components/atoms/Text'
import Image from 'next/image'
import React from 'react'
interface Props {
  avatarSrc: string
  name: string
  company: string
  testimony: string
}
const TestimonialCard = ({ avatarSrc, company, name, testimony }: Props) => {
  return (
    <div className="w-full px-10 py-14 bg-light rounded-md select-none">
      <div className="space-y-5 flex flex-row gap-6">
        <div className="relative w-fit">
          <Image
            src={avatarSrc}
            width={100}
            height={100}
            objectFit="contain"
            alt="avatar"
          />
        </div>
        <div className="space-y-2">
          <Text value={name} textStyle="TestimonialName" />
          <Text value={company} textStyle="TestimonialCompany" />
        </div>
      </div>
      <div className="mt-4 ">
        <Text value={testimony} textStyle="TestimonialDescription" />
      </div>
    </div>
  );
}

export default TestimonialCard
