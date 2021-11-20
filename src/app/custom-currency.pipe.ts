import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(value: number, ): string {
    return value.toLocaleString('es-ES',
      {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0
      });
  }

}
