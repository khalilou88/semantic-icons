import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-grubhub-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Grubhub</title>
      <path
        d="M16.708 9.556h-.84c-.048 0-.072.048-.072.072v1.828h-.84V9.628c0-.048-.048-.072-.072-.072h-.84c-.048 0-.072.048-.072.072v4.692c0 .048.048.072.072.072h.84c.048 0 .072-.048.072-.072v-1.876h.84v1.876c0 .048.048.072.072.072h.84c.048 0 .072-.048.072-.072V9.628c0-.024-.024-.072-.072-.072m-7.08 0h-.84c-.048 0-.072.024-.072.072v3.324a.61.61 0 0 1-.12.384c-.072.096-.168.12-.288.12a.405.405 0 0 1-.288-.12.61.61 0 0 1-.12-.384V9.628c0-.048-.048-.072-.072-.072h-.84c-.048 0-.072.024-.072.072v3.348c0 .432.096.84.36 1.108.264.264.624.408 1.036.408.432 0 .796-.144 1.036-.408.264-.264.36-.648.36-1.108V9.628c-.004-.024-.028-.072-.08-.072m-8.232-.072c-.432 0-.796.144-1.036.408C.096 10.156 0 10.54 0 11v2c0 .432.096.84.36 1.108.264.264.624.408 1.036.408.432 0 .796-.144 1.036-.408.264-.264.36-.648.36-1.108v-1.104a.102.102 0 0 0-.096-.096H1.468a.102.102 0 0 0-.096.096v.82c0 .048.048.096.096.096h.316v.192a.676.676 0 0 1-.12.408c-.072.096-.168.12-.288.12a.405.405 0 0 1-.288-.12.69.69 0 0 1-.12-.408v-1.976c0-.168.048-.316.12-.408.072-.096.168-.12.288-.12.116 0 .216.048.288.12.072.096.12.24.12.408v.192c0 .048.048.072.072.072h.84c.048 0 .072-.024.072-.072v-.192c0-.432-.096-.84-.36-1.108-.216-.292-.604-.436-1.012-.436m10.832 3.828c-.072.096-.168.12-.316.12h-.48v-1.016h.48c.12 0 .216.048.288.12.079.104.121.23.12.36.008.2-.016.316-.092.416zm-.364-2.768c.12 0 .216.024.288.12.072.072.096.192.096.34s-.024.264-.096.36a.385.385 0 0 1-.264.12h-.432v-.94h.408zm.964 1.372c.144-.144.408-.48.408-.916 0-.508-.192-.82-.34-.988-.264-.288-.624-.432-1.036-.432h-1.316c-.048 0-.072.048-.072.072v4.696c0 .048.048.072.072.072h1.396c.432 0 .84-.168 1.108-.508.144-.192.316-.508.316-.988-.028-.576-.388-.916-.536-1.008zm-7.652-.46c-.072.096-.192.144-.34.144h-.408v-1.056h.408c.144 0 .264.048.34.144.096.096.12.216.12.384s-.02.288-.12.384zm.532.868c.096-.072.168-.12.24-.216.168-.192.384-.532.384-1.06 0-.508-.192-.84-.384-1.036-.24-.288-.6-.432-1.012-.456H3.54c-.048 0-.072.048-.072.072v4.692c0 .048.048.072.072.072h.84c.048 0 .072-.048.072-.072v-1.736h.288l.532 1.78c0 .024.048.048.072.048h.888c.024 0 .048-.024.072-.024s.024-.048.024-.072l-.62-1.992zm17.136.988c-.072.096-.168.12-.316.12h-.48v-1.016h.48c.12 0 .216.048.288.12.079.104.121.23.12.36.028.2-.016.316-.092.416zm-.34-2.768c.12 0 .216.024.288.12.072.072.096.192.096.34s-.024.264-.096.36a.385.385 0 0 1-.264.12h-.432v-.94h.408zm.964 1.372c.144-.144.408-.48.408-.916 0-.508-.192-.82-.34-.988-.264-.288-.624-.432-1.036-.432h-1.328c-.048 0-.072.048-.072.072v4.696c0 .048.048.072.072.072h1.404c.432 0 .84-.168 1.108-.508.144-.192.316-.508.316-.988a1.442 1.442 0 0 0-.532-1.008zm-3.224-2.36h-.84c-.048 0-.072.024-.072.072v3.324a.61.61 0 0 1-.12.384c-.072.096-.168.12-.288.12a.405.405 0 0 1-.288-.12.61.61 0 0 1-.12-.384V9.628c0-.048-.048-.072-.072-.072H17.6c-.048 0-.072.024-.072.072v3.348c0 .432.096.84.36 1.108.264.264.624.408 1.036.408.432 0 .796-.144 1.036-.408.264-.264.36-.648.36-1.108V9.628c.024-.024-.024-.072-.076-.072"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
      color: currentColor;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgGrubhubIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
