"use client";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import data from "@/data/reviews";
import Image from "next/image";
import Masonry from 'react-masonry-css';
import { useState } from "react";

const Reviews = () => {
    const [count, setCount] = useState(6)
    return (
        <SectionWrapper>
            <Heading>Testimonials</Heading>
            <div className="relative w-full">
                {data.length !== count ? (
                    <div className="absolute bottom-0 w-full h-full flex justify-center items-end">
                        <button className="h-[45px] rounded-lg font-medium text-base capitalize px-4 bg-[#808080] text-white" onClick={() => setCount(count + 6)}>
                            show more
                        </button>
                    </div>
                ) : (
                    ""
                )}

                <Masonry
                    breakpointCols={
                        {
                            default: 4,
                            1200: 3,
                            1000: 2,
                            700: 1
                        }
                    }
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {/* array of JSX items */}
                    {data.slice(0, count).map(rating => (
                        <div key={rating.id} className="border p-7 rounded-lg">
                            <div className="flex gap-5">
                                <div className="relative w-[56px] h-[56px] rounded-full overflow-hidden">
                                    <Image src={rating.image} alt={rating.name} fill objectFit="cover" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h1 className="text-lg font-bold capitalize">{rating.name}</h1>
                                    <span className="block mt-[1px] text-base capitalize font-medium leading-[20px]">{rating.company}</span>
                                </div>
                            </div>
                            <p className="mt-4 text-base">{rating.comment}</p>
                        </div>
                    ))}
                </Masonry>
            </div>
        </SectionWrapper >
    )
}
export default Reviews;