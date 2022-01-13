/** @format */
import React, { useState, useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from 'styled-theming'
import Home from './views/Home'
import * as echarts from 'echarts'
import './styles/theme/dark'
import './styles/theme/light'
const boxBackgroundColor = theme('mode', {
  light: '#ff0',
  dark: '#000',
})
const Container = styled.div`
  background-color: ${boxBackgroundColor};
`
function App() {
  const [theme, settheme] = useState('vintage')
  const charts = useRef()
  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        label: {
          show: true,
          position: 'top',
        },
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  }
  let myChart = null

  const changeTheme = () => {
    let a = theme === 'dark' ? 'vintage' : 'dark'
    settheme(a)
    initChart(a)
  }
  const initChart = (data) => {
    let a = ''
    if (data) {
      a = data
    } else {
      a = theme === 'dark' ? 'dark' : 'vintage'
    }
    if (charts.current) {
      if (myChart) {
        myChart.dispose()
      }
      myChart = echarts.init(charts.current, a)
      console.log(myChart)
      option && myChart.setOption(option)
    }
  }
  useEffect(() => {
    initChart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme])
  return (
    <ThemeProvider theme={{ mode: theme }}>
      <Container className='App'>Container</Container>
      <Home theme={theme} />
      <div
        id={'main'}
        ref={charts}
        style={{ width: '100%', height: '200px' }}></div>
      <button onClick={() => changeTheme()}>改变背景</button>
    </ThemeProvider>
  )
}

export default App
