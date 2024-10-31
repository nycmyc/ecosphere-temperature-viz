// Wait for Recharts to be available
window.addEventListener('load', function() {
    // Verify Recharts is loaded
    if (typeof Recharts === 'undefined') {
        console.error('Recharts library not loaded!');
        return;
    }

    const { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } = Recharts;

    // Sample data - replace with your actual data
    const data = [
        {
            date: "10/24/24",
            "Com100 Test 1": 100.4,
            "Com100 Test 2": 102.0,
            "Com100 Control": 96.8,
            "BM2 Test 1": 157.2,
            "BM2 Test 2": 151.2,
            "BM2 Control": 155.6
        },
        // ... rest of your data
    ];

    const colors = {
        com100Test1: '#4b9cd3',
        com100Test2: '#3d7ea6',
        com100Control: '#6cb4d9',
        bm2Test1: '#f4a261',
        bm2Test2: '#e76f51',
        bm2Control: '#f28a68'
    };

    function TemperatureChart() {
        return React.createElement(
            'div',
            { className: 'w-full p-4 bg-white' },
            [
                React.createElement('h2', { 
                    className: 'text-xl font-semibold mb-4',
                    key: 'title' 
                }, 'Ecosphere Sciences Test 2024'),
                React.createElement(
                    'div',
                    { 
                        className: 'h-96 mb-8',
                        key: 'chart-container'
                    },
                    React.createElement(ResponsiveContainer, { width: '100%', height: '100%' },
                        React.createElement(LineChart, {
                            data: data,
                            margin: { top: 20, right: 30, left: 20, bottom: 5 }
                        }, [
                            React.createElement(CartesianGrid, { 
                                strokeDasharray: '3 3', 
                                stroke: '#eee', 
                                key: 'grid' 
                            }),
                            React.createElement(XAxis, { 
                                dataKey: 'date', 
                                key: 'xAxis',
                                tick: { fill: '#666' },
                                stroke: '#ccc'
                            }),
                            React.createElement(YAxis, { 
                                domain: [80, 170],
                                label: { 
                                    value: 'Temperature (°F)', 
                                    angle: -90, 
                                    position: 'insideLeft',
                                    fill: '#666'
                                },
                                tick: { fill: '#666' },
                                stroke: '#ccc',
                                key: 'yAxis'
                            }),
                            React.createElement(Tooltip, { 
                                key: 'tooltip',
                                contentStyle: { 
                                    backgroundColor: 'white', 
                                    border: '1px solid #eee' 
                                },
                                formatter: (value) => `${value.toFixed(1)}°F`
                            }),
                            React.createElement(Legend, { 
                                key: 'legend',
                                align: 'center',
                                verticalAlign: 'top',
                                height: 36
                            }),
                            // Com100 Lines
                            React.createElement(Line, {
                                type: 'monotone',
                                dataKey: 'Com100 Test 1',
                                stroke: colors.com100Test1,
                                strokeWidth: 1.5,
                                dot: false,
                                key: 'com100test1'
                            }),
                            // ... rest of your lines
                        ])
                    )
                ),
                // Legend section below chart
                React.createElement('div', {
                    className: 'grid grid-cols-2 gap-8 p-6 bg-gray-50 rounded-lg text-sm',
                    key: 'legend-section'
                }, [
                    // Com100 Groups
                    React.createElement('div', {
                        className: 'space-y-2',
                        key: 'com100-legend'
                    }, [
                        // ... your Com100 legend content
                    ]),
                    // BM2 Groups
                    React.createElement('div', {
                        className: 'space-y-2',
                        key: 'bm2-legend'
                    }, [
                        // ... your BM2 legend content
                    ])
                ])
            ]
        );
    }

    // Render only when everything is loaded
    const rootElement = document.getElementById('root');
    if (rootElement) {
        const root = ReactDOM.createRoot(rootElement);
        root.render(React.createElement(TemperatureChart));
    } else {
        console.error('Root element not found');
    }
});
