// Complete data set
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
    {
        date: "10/25/24",
        "Com100 Test 1": 97.0,
        "Com100 Test 2": 97.2,
        "Com100 Control": 92.4,
        "BM2 Test 1": 147.6,
        "BM2 Test 2": 153.6,
        "BM2 Control": 150.8
    },
    {
        date: "10/26/24",
        "Com100 Test 1": 96.2,
        "Com100 Test 2": 98.0,
        "Com100 Control": 93.6,
        "BM2 Test 1": 150.4,
        "BM2 Test 2": 153.4,
        "BM2 Control": 152.4
    },
    {
        date: "10/27/24",
        "Com100 Test 1": 96.0,
        "Com100 Test 2": 101.6,
        "Com100 Control": 97.2,
        "BM2 Test 1": 148.4,
        "BM2 Test 2": 154.8,
        "BM2 Control": 150.4
    },
    {
        date: "10/28/24",
        "Com100 Test 1": 96.4,
        "Com100 Test 2": 96.4,
        "Com100 Control": 93.6,
        "BM2 Test 1": 149.4,
        "BM2 Test 2": 154.2,
        "BM2 Control": 147.6
    },
    {
        date: "10/29/24",
        "Com100 Test 1": 98.6,
        "Com100 Test 2": 97.6,
        "Com100 Control": 94.0,
        "BM2 Test 1": 149.2,
        "BM2 Test 2": 155.2,
        "BM2 Control": 139.8
    },
    {
        date: "10/30/24",
        "Com100 Test 1": 98.0,
        "Com100 Test 2": 98.0,
        "Com100 Control": 99.2,
        "BM2 Test 1": 148.8,
        "BM2 Test 2": 154.0,
        "BM2 Control": 0  // Missing data point
    }
];

// Make sure Recharts is available
if (typeof Recharts === 'undefined') {
    console.error('Recharts library not loaded!');
}

const { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } = Recharts;

function TemperatureChart() {
    const colors = {
        com100Test1: '#4b9cd3',
        com100Test2: '#3d7ea6',
        com100Control: '#6cb4d9',
        bm2Test1: '#f4a261',
        bm2Test2: '#e76f51',
        bm2Control: '#f28a68'
    };

    // Add error boundary
    if (!LineChart || !Line || !XAxis || !YAxis) {
        console.error('Required Recharts components not available');
        return React.createElement('div', null, 'Error loading visualization components');
    }

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
                        React.createElement(CartesianGrid, { strokeDasharray: '3 3', stroke: '#eee', key: 'grid' }),
                        React.createElement(XAxis, { dataKey: 'date', key: 'xAxis' }),
                        React.createElement(YAxis, { 
                            domain: [80, 170],
                            label: { value: 'Temperature (°F)', angle: -90, position: 'insideLeft' },
                            key: 'yAxis'
                        }),
                        React.createElement(Tooltip, { key: 'tooltip' }),
                        React.createElement(Legend, { key: 'legend' }),
                        // Com100 Lines
                        React.createElement(Line, {
                            type: 'monotone',
                            dataKey: 'Com100 Test 1',
                            stroke: colors.com100Test1,
                            strokeWidth: 1.5,
                            dot: false,
                            key: 'com100test1'
                        }),
                        React.createElement(Line, {
                            type: 'monotone',
                            dataKey: 'Com100 Test 2',
                            stroke: colors.com100Test2,
                            strokeWidth: 1.5,
                            dot: false,
                            key: 'com100test2'
                        }),
                        React.createElement(Line, {
                            type: 'monotone',
                            dataKey: 'Com100 Control',
                            stroke: colors.com100Control,
                            strokeWidth: 1.5,
                            strokeDasharray: '3 3',
                            dot: false,
                            key: 'com100control'
                        }),
                        // BM2 Lines
                        React.createElement(Line, {
                            type: 'monotone',
                            dataKey: 'BM2 Test 1',
                            stroke: colors.bm2Test1,
                            strokeWidth: 1.5,
                            dot: false,
                            key: 'bm2test1'
                        }),
                        React.createElement(Line, {
                            type: 'monotone',
                            dataKey: 'BM2 Test 2',
                            stroke: colors.bm2Test2,
                            strokeWidth: 1.5,
                            dot: false,
                            key: 'bm2test2'
                        }),
                        React.createElement(Line, {
                            type: 'monotone',
                            dataKey: 'BM2 Control',
                            stroke: colors.bm2Control,
                            strokeWidth: 1.5,
                            strokeDasharray: '3 3',
                            dot: false,
                            key: 'bm2control'
                        })
                    ])
                )
            )
        ]
    );
}

// Add error handling for root element
const rootElement = document.getElementById('root');
if (!rootElement) {
    console.error('Root element not found!');
} else {
    const root = ReactDOM.createRoot(rootElement);
    root.render(React.createElement(TemperatureChart));
}
