// pie-chart-module.js
(function (global) {
  'use strict';

  const pieChart = function (config) {
    const defaults = {
      data: [],
      width: 600,
      height: null,
      chartRadius: 100,
      legendWidth: 200,
      colors: null,
      title: 'Круговая диаграмма',
      showPercentages: true,
      showValues: true,
      donutInnerRadius: 0.4,
      padding: { top: 40, right: 20, bottom: 20, left: 20 },
      legendItemHeight: 24,
      titleHeight: 30,
      sortLegendDescending: true // Новая опция для сортировки легенды
    };

    const options = Object.assign({}, defaults, config);

    // Валидация данных
    if (!options.data || !Array.isArray(options.data) || options.data.length === 0) {
      return '<svg class="chart" width="' + (options.width || 500) + '" height="' + (options.height || 300) + '">' +
        '<text x="10" y="20" fill="red">Нет данных для отображения</text>' +
        '</svg>';
    }

    // Генерация цветов
    const colors = options.colors || generateColors(options.data.length);

    // Расчет общей суммы
    const total = options.data.reduce((sum, item) => sum + item.value, 0);

    // Расчет размеров
    const dimensions = calculateDimensions(options);

    // Создание SVG
    return createSVG(options, colors, total, dimensions);
  };

  // Функция расчета размеров
  function calculateDimensions(options) {
    const padding = options.padding;
    const legendItemHeight = options.legendItemHeight;
    const titleHeight = options.titleHeight;

    // Размеры диаграммы
    const chartDiameter = options.chartRadius * 2;

    // Высота легенды
    const legendHeight = options.data.length * legendItemHeight;

    // Ширина
    const width = options.width ||
      padding.left + chartDiameter + 40 + options.legendWidth + padding.right;

    // Высота (центрируем диаграмму и легенду по вертикали)
    const contentHeight = Math.max(chartDiameter, legendHeight);
    const height = options.height ||
      padding.top + titleHeight + contentHeight + padding.bottom;

    // Центрирование диаграммы
    const contentStartY = padding.top + titleHeight;
    const availableHeight = height - padding.top - titleHeight - padding.bottom;
    const chartY = contentStartY + (availableHeight - chartDiameter) / 2;

    // Центрирование легенды относительно центра диаграммы
    const chartCenterY = chartY + options.chartRadius;
    const legendStartY = chartCenterY - (legendHeight / 2);

    return {
      width,
      height,
      chartX: padding.left,
      chartY,
      chartDiameter,
      legendX: padding.left + chartDiameter + 40,
      legendY: Math.max(legendStartY, contentStartY),
      legendWidth: options.legendWidth,
      legendHeight,
      titleY: padding.top
    };
  }

  function generateColors(count) {
    const colors = [];
    const baseHues = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

    for (let i = 0; i < count; i++) {
      const hue = baseHues[i % baseHues.length] + (i * 7 % 20);
      const saturation = 50 + (i * 11 % 30);
      const lightness = 45 + (i * 13 % 25);
      colors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
    }

    return colors;
  }

  function createSVG(options, colors, total, dim) {
    const chartCenterX = dim.chartX + options.chartRadius;
    const chartCenterY = dim.chartY + options.chartRadius;

    let svg = `<svg class="chart" width="${dim.width}" height="${dim.height}" 
                    viewBox="0 0 ${dim.width} ${dim.height}"
                    xmlns="http://www.w3.org/2000/svg"
                    style="font-family: 'Wix Madefor Display', sans-serif; fill: currentColor;">
      <title>${options.title}</title>
      
      <!-- Заголовок -->
      <text x="${dim.width / 2}" y="${dim.titleY}" text-anchor="middle" 
            font-size="20" font-weight="550">${options.title}</text>
      
      <!-- Общая сумма в центре бублика -->
      <text x="${chartCenterX}" y="${chartCenterY}" 
            text-anchor="middle" dominant-baseline="middle"
            font-size="20" font-weight="550">
        ${total.toLocaleString()}
      </text>
    `;

    // Диаграмма (бублик) - сохраняем исходный порядок
    let currentAngle = 0;
    options.data.forEach((item, index) => {
      const sliceAngle = (item.value / total) * 2 * Math.PI;
      const sector = createDonutSector(
        chartCenterX, chartCenterY, options.chartRadius,
        currentAngle, currentAngle + sliceAngle,
        colors[index], options.donutInnerRadius
      );
      svg += sector;
      currentAngle += sliceAngle;
    });

    // Подготовка данных для легенды
    let legendData = options.data.map((item, index) => ({
      ...item,
      colorIndex: index,
      percent: ((item.value / total) * 100).toFixed(1)
    }));

    // Сортировка данных для легенды по убыванию (если включена опция)
    if (options.sortLegendDescending) {
      legendData = legendData.sort((a, b) => b.value - a.value);
    }

    // Легенда справа
    legendData.forEach((item, index) => {
      const legendItemY = dim.legendY + index * options.legendItemHeight;
      let legendText = item.label || item.name;
      
      if (options.showPercentages) {
        legendText = `/ ${item.percent}% - ` + legendText
      };

      if (options.showValues) {
        legendText = `${item.value} ` + legendText
      };

      svg += `
        <rect x="${dim.legendX}" y="${legendItemY - 10}" 
              width="16" height="16" rx="8"
              fill="${colors[item.colorIndex]}" stroke="#333" stroke-width="0.5"/>
        <text x="${dim.legendX + 25}" y="${legendItemY}" 
              font-size="20" font-weight="500" dominant-baseline="middle">${legendText}</text>
      `;
    });

    svg += '</svg>';
    return svg;
  }

  function createDonutSector(cx, cy, radius, startAngle, endAngle, color, innerRadiusRatio) {
    const innerRadius = radius * innerRadiusRatio;

    const startX = cx + Math.cos(startAngle) * radius;
    const startY = cy + Math.sin(startAngle) * radius;
    const endX = cx + Math.cos(endAngle) * radius;
    const endY = cy + Math.sin(endAngle) * radius;

    const innerStartX = cx + Math.cos(startAngle) * innerRadius;
    const innerStartY = cy + Math.sin(startAngle) * innerRadius;
    const innerEndX = cx + Math.cos(endAngle) * innerRadius;
    const innerEndY = cy + Math.sin(endAngle) * innerRadius;

    const largeArcFlag = (endAngle - startAngle) > Math.PI ? 1 : 0;

    const pathData = `
      M ${innerStartX},${innerStartY}
      L ${startX},${startY}
      A ${radius},${radius} 0 ${largeArcFlag} 1 ${endX},${endY}
      L ${innerEndX},${innerEndY}
      A ${innerRadius},${innerRadius} 0 ${largeArcFlag} 0 ${innerStartX},${innerStartY}
      Z
    `;

    return `<path d="${pathData}" fill="${color}" stroke="white" stroke-width="1" />`;
  }

  // Экспорт
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = pieChart;
  } else if (typeof define === 'function' && define.amd) {
    define([], function () {
      return pieChart;
    });
  } else {
    global.pieChart = pieChart;
  }
})(typeof window !== 'undefined' ? window : global);