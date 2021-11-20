import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EChartsOption} from 'echarts';
import solarData from 'src/app/shared/data/rad.json';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  /**
   * Variables necesarias para el cálculo del ahorro
   */
  precioEnergiaRed: number = 0.08; //Precio red de la Energía
  precioEnergiaPPA: number = this.precioEnergiaRed * 0.85; //Precio PPA de la Energía con descuento del 15%
  correccion: number = 1.10; //Corrección por pérdidas y desviaciones
  kWpPanel: number = 667; //kWp por panel - En el futuro puede ir cambiando
  IPC: number = 1.02; //Subida del IPC - modificable
  /**
   *
   */
  area: number | any;

  state: string | any;
  month: string [] = [];
  dias: string | any;
  dataProvincia: any;
  radiacion: number [] = [];

  ahorroAnual: number = 0;
  progresionAhorro: number [] = [];
  year: number [] = [];

  tcge: number = 0; // total cost of grid energy
  tcppae: number = 0; // total cost of grid energy
  totalTcge: number = 0;
  totalTcppae: number = 0;
  totalSave: number = 0;

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.area = params.area;
      this.state = params.state;
    })
    // Obtenemos los datos según la provincia seleccionada, superficie aprovechable (0.5), paneles por m^2 y su eficacia
    this.dataProvincia = solarData[this.state];
    let usableArea = this.area * 0.5;
    let panelsPerUnitArea = 2.5;
    let efficiency = 0.95

    // Ahora obtenemos el Valor de ahorro anual
    this.ahorroAnual.toFixed(2)
    for (let rad of this.dataProvincia) {
      let tcge = ((((rad['n_dias'] * rad['Radiacion'] * (usableArea) / panelsPerUnitArea)) * efficiency) * this.precioEnergiaRed);
      let tcppae = ((((rad['n_dias'] * rad['Radiacion'] * (usableArea) / panelsPerUnitArea)) * efficiency) * this.precioEnergiaPPA);
      let ahorro = (tcge - tcppae);
      this.radiacion.push(ahorro);
      this.ahorroAnual += ahorro;
      this.tcge += tcge;
      this.tcppae += tcppae;
    }
    // Obtenemos todos los meses en un array
    for (let month of this.dataProvincia) {
      this.month.push(month['Mes'])
    }

    // Y la progresión anual durante 12 años
    for (let i = 0; i < 12; i++) {
      this.progresionAhorro.push(this.ahorroAnual);
      this.ahorroAnual *= this.IPC
      this.tcge *= this.IPC
      this.tcppae *= this.IPC
      let yearCalculated = i + 1;
      this.year.push(yearCalculated);
      this.totalTcge += this.tcge;
      this.totalTcppae += this.tcppae;
      this.totalSave += this.ahorroAnual;
    }
    console.log(this.totalTcge)
    console.log(this.totalTcppae)
    console.log(this.totalSave)
    //console.log(this.ahorroAnual.toFixed(2))
    //console.log(this.progresionAhorro)
  }

  chartYear: EChartsOption = {
    tooltip: {
      trigger: 'axis',
    },

    title: {
      text: 'Ahorro mensual',
    },
    xAxis: {
      type: 'category',
      data: this.month,
      axisTick: {
        alignWithLabel: true
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: (data: number) => {
          let val = this.format(data)
          return val
        },
        fontSize: 10
      }
    },
    series: [{
      data: this.radiacion,
      type: 'bar',
      showBackground: true,
    }],
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    }
  }

  chartLong: EChartsOption = {
    tooltip: {
      trigger: 'axis',
    },
    title: {
      text: 'Ahorro Total 12 años',
      right: 0
    },
    xAxis: {
      type: 'category',
      data: this.year,
      axisTick: {
        alignWithLabel: true
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: (data: number) => {
          let val = this.format(data)
          return val
        },
        fontSize: 10,
      },
      boundaryGap: [0, 0.001]
    },
    series: [{
      data: this.progresionAhorro,
      type: 'bar',
      showBackground: true,
    }],
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    }
  }

  format(data: number) {
    data = parseFloat(String(data))
    return data.toLocaleString('es-ES',
      {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0
      });
  }
}
