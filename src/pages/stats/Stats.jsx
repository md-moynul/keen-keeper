import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { ContactContext } from '../../context/ContactContext';

const Stats = () => {
    const {
        callContact,
        textContact,
        videoContact
    } = useContext(ContactContext)
    const data = [
        { name: 'Call', value: callContact.length, fill: '#244D3F' },
        { name: 'Text', value: textContact.length, fill: '#7E35E1' },
        { name: 'Video', value: videoContact.length, fill: '#37A163' },

    ];
    return (
        <div className=' bg-base-200 '>
            <div className='container mx-auto py-20 space-y-6 '>

                <h2 className="text-5xl font-bold">Friendship Analytics</h2>
                <div className='bg-base-100 rounded space-y-8  p-8 '>
                    <h3 className="text-xl text-[#244D3F] ">By Interaction Type</h3>
                    <div className='flex justify-center'>
                        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '50vh', aspectRatio: 1 }} responsive>
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                // Corner radius is the rounded edge of each pie slice
                                cornerRadius="50%"
                                fill="#8884d8"
                                // padding angle is the gap between each pie slice
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                            />

                            <Legend />
                            <Tooltip/>

                        </PieChart>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Stats;