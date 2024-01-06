
"use client";
import { AreaChart } from "keep-react";
import SectionHeading from "./section-heading";
const chartData = [
    {
        name: "1",
        price: 0,
        sell: 0,
    },
    {
        name: "2",
        price: 60,
        sell: 200,
    },
    {
        name: "3",
        price: 40,
        sell: 120,
    },
    {
        name: "4",
        price: 55,
        sell: 130,
    },
    {
        name: "5",
        price: 50,
        sell: 120,
    },
    {
        name: "6",
        price: 60,
        sell: 213,
    },
    {
        name: "7",
        price: 59,
        sell: 325,
    },
    {
        name: "8",
        price: 77,
        sell: 250,
    },
    {
        name: "9",
        price: 70,
        sell: 300,
    },
    {
        name: "j",
        price: 99,
        sell: 400,
    },
];

const MyPerformance = () => {
    return (
        <section id='myperformance' className='scroll-mt-28 mx-auto w-[100%] sm:w-[70%] mb-10 ' >
            <SectionHeading>My Performance </SectionHeading>

            <AreaChart
                dataKey="price"
                // secondaryDataKey="sell"
                showTooltip={true}
                showGridLine={false}
                showXaxis={true}
                showYaxis={false}
                chartData={chartData}
            />
        </section>
    );
};

export default MyPerformance;

