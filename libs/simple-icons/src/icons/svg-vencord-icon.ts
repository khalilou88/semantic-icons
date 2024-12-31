import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-vencord-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Vencord</title>
      <path
        d="M.613.6v.587h2.4V.6h-1.2zm2.4.587v8.4H3.6v-8.4h-.293zm.587 8.4v.613h.613v-.613h-.306zm.613.613v.587H4.8V10.2h-.293zm.587.587v.613h.613v-.613h-.306zm.613.613v.587H6V11.4h-.293zm.587.587v.613h1.2v-.613h-.6zm1.2 0h.613V11.4H7.2v.293zm.613-.587H8.4V15h-.587v.587H8.4v4.8h.613v-9.6h2.4v-2.4H10.8V10.2H9.6v-.613h-.587v.613H8.4v.587h-.587v.306zM9.6 9.587h.613v-8.4H9.6v4.2zm.613-8.4h2.4V.6h-2.4v.293zm2.4 0V7.8h-1.2v.587H15.6v.32H18v-.32h.614v.32h2.106v-.32h.294V6.893h-.294v-.906h-.32v-.88h-.293V5.4h-.293v.907h-.294V6.6h.294v.587h.293v-.88h.293v.88h.32v.906h-.32v.294h-.586v-.294h.293V7.8h.293v-.613h-.293v.32h-.293V7.8h-.294v.587h-.613V7.8h-.293v-.293h-.294V7.8h-1.813v.293h1.2v.294H15.92v-.294h-1.813V7.8h-.293V6.307h-.294V7.8h-.32V1.187h-.293zm1.2 5.12h.294v-.32h-.294v.16zm.294-.32h.293V5.4h-.293v.293zM14.4 5.4h.614v-.293H14.4v.146zm.614-.293h.586V5.4h.32v-.613h-.906v.16zm.906-.32h.293v-.294h-.293v.147zm.293-.294h.294V4.2h-.294v.147zm.294-.293h.293v-.293h-.293v.146zm.293 0v.587h.32v.32h.293v-.32h.294v.32h-.294V5.4H18v-.613h.32V4.2H18v.293h-.88V4.2h-.16zm1.52 0h.294v-.293h-.294v.146zm.294-.293h.293v-.32h-.293v.16zm.293-.32h.293v-.294h-.293v.147zm.293 0v1.52h.32v-.32h.293v-.294h-.293v-.906h-.16zm.613 1.2v.32h.294v-.32h-.147zm0 .32h-.293V5.4h.293v-.147zM15.6 5.4h-.293v1.2h.293V6zm0 1.2v.587h.32V6.6h-.16zm.32.587v.32h.293v-.32h-.146zm.293.32V7.8h.294v-.293h-.147zm2.694.293h.613v-.293h-.613v.146zm.613-.293h.293v-.32h-.293v.16zm0-.907h-.613v.293h.613v-.146zm-.613.293h-.293v.294h.293V7.04zm2.107 1.494v2.4h2.4V10.2H21.6V8.387h-.293zm2.4 2.4v2.4H24v-2.4h-.293zm0 2.4h-4.8v.613h4.8v-.307zm-4.8 0v-2.4h-4.8v9.6h4.8v-2.4H18V19.8h-3.6v-8.4H18v1.787h.307zm0 4.8h4.8V17.4h-4.8v.293zm4.8 0v2.4H24v-2.4h-.293zm0 2.4h-2.4v2.4h.586V21h1.814v-.306zm-2.4 2.4h-9.6v.613h9.6v-.307zm-9.6 0v-2.4h-2.4V21H10.8v1.787h.307zm-3.6-7.2h-2.4v.613h2.4v-.307zm-2.4 0V15H4.8v.587h.307zM4.8 15v-.613h-.586V15h.293zm-.586-.613V13.8H3.6v.587h.307zM3.6 13.8v-.613h-.587v.613h.294zm-.587-.613V12.6H2.4v.587h.307zM2.4 12.6v-.613h-.587v.613h.294zm-.587-.613V11.4H1.2v.587h.307zM1.2 11.4v-.613H.614v.613h.293zm-.586-.613v-9.6H0v9.6h.307zM13.52.6v.293h1.493v.293h.293V.893h.294V.6h-1.04zm1.493.586h-.293v.32h.293v-.16zm-.293.32h-.32V1.8h.32v-.147zm0 .294v.293h.293V1.8h-.147zm-.32 0h-.294v.293h.294v-.147zm-.294.293h-.293v.293h-.293v.32h2.08v-.32h-1.494V2.24zm.294-.587v-.32h-.294v.32h.147zm2.106.294v.293h.907v.293h.293v-.293H18V1.8h-.747zm.907.586h-.293v.32h-.614V3H18v-.294h-.587v-.16zm-1.2 4.214v.293h.586V6.6h-.293zm.586.293v.293h.907v-.293h-.453zm.907.293v.32H18v-.32h-.146z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgVencordIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
