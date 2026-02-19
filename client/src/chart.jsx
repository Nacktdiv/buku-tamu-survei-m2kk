import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Label, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

function Charts ({data}) {

    let datadummy = [
        { name: 'Sangat Puas', value: 81 },
        { name: 'Puas', value: 24 },
        { name: 'Cukup', value: 6 },
        { name: 'Tidak Puas', value: 6 },
    ];

    const COLORS = ['#136a43', '#2d3436', '#88b498', '#a5d6a7'];

    const totalResponden = data.reduce((acc, item) => acc + item.value, 0);

    return (
        <div className="mt-10 w-full h-full flex flex-col items-center justify-center">
            <h1 className="md:text-2xl font-bold max-w-[80%] text-center">Grafik Hasil Survey Kepuasan Layanan PTSP</h1>
            <div className='w-[70%] bg-background h-75 md:h-65 rounded-lg mt-6 flex flex-col md:flex-row items-center'>
                <div className='md:w-2/5 w-full h-[80%] '>
                    <ResponsiveContainer className='h-full w-full' height="100%" width="100%">
                        <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius="70%"
                            outerRadius='90%'
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none"
                        >
                            {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}

                            <Label 
                            value={`${totalResponden}`} 
                            position="center" 
                            fill="#2d3436"
                            className="text-xl md:text-2xl font-bold -translate-y-2"
                            />
                            <Label 
                            value="Responden" 
                            position="center" 
                            dy={25}
                            fill="#88b498"
                            className="text-[12px] md:text-base -translate-y-2"
                            />
                        </Pie>
                        <Tooltip 
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                        />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className='w-full md:w-3/5 h-full flex flex-col'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart 
                            data={data} 
                            layout="vertical" 
                            margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#eee" />
                            <XAxis type="number" hide /> 
                            <YAxis 
                                dataKey="name" 
                                type="category"
                                tick={{ 
                                    fontSize: window.innerWidth < 768 ? 12 : 16, 
                                    fontWeight: 500, 
                                    fontColor: '#2d3436' 
                                }}
                                width={100}
                            />
                            <Tooltip cursor={{fill: '#f0f0f0'}} />
                            <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={40}>
                                {data.map((entry, index) => (
                                    <Cell key={`cell-bar-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )                   
}

export default Charts

