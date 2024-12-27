import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-caret-left-right-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-caret-left-right"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M13 6c0 -.89 1.077 -1.337 1.707 -.707l6 6a1 1 0 0 1 0 1.414l-6 6a.95 .95 0 0 1 -.082 .073l-.009 .006l-.022 .016l-.058 .042l-.016 .009l-.009 .007l-.028 .014l-.043 .024l-.018 .007l-.018 .01l-.034 .012l-.033 .015l-.026 .007l-.02 .008l-.026 .005l-.036 .012l-.029 .004l-.024 .006l-.028 .003l-.031 .006l-.032 .002l-.026 .003h-.026l-.033 .002l-.033 -.002h-.026l-.026 -.003l-.032 -.002l-.031 -.006l-.028 -.003l-.024 -.006l-.03 -.004l-.035 -.012l-.027 -.005l-.019 -.008l-.026 -.007l-.033 -.015l-.034 -.012l-.018 -.01l-.018 -.007l-.043 -.024l-.028 -.014l-.009 -.007l-.016 -.009l-.058 -.042l-.019 -.012l-.003 -.004l-.01 -.006a1.006 1.006 0 0 1 -.154 -.155l-.006 -.009l-.016 -.022l-.042 -.058l-.009 -.016l-.007 -.009l-.014 -.028l-.024 -.043l-.007 -.018l-.01 -.018l-.012 -.034l-.015 -.033l-.007 -.026l-.008 -.02l-.005 -.026l-.012 -.036l-.004 -.029l-.006 -.024l-.003 -.028l-.006 -.031l-.002 -.032l-.003 -.026v-.026l-.002 -.033v-12z"
      />
      <path
        d="M9.293 5.293c.63 -.63 1.707 -.184 1.707 .707v12l-.002 .033v.026l-.003 .026l-.002 .032l-.006 .031l-.003 .028l-.006 .024l-.004 .03l-.012 .035l-.005 .027l-.008 .019l-.007 .026l-.015 .033l-.012 .034l-.01 .018l-.007 .018l-.024 .043l-.014 .028l-.007 .009l-.009 .016l-.042 .058l-.012 .019l-.004 .003l-.006 .01a1.006 1.006 0 0 1 -.155 .154l-.009 .006l-.022 .016l-.058 .042l-.016 .009l-.009 .007l-.028 .014l-.043 .024l-.018 .007l-.018 .01l-.034 .012l-.033 .015l-.026 .007l-.02 .008l-.026 .005l-.036 .012l-.029 .004l-.024 .006l-.028 .003l-.031 .006l-.032 .002l-.026 .003h-.026l-.033 .002l-.033 -.002h-.026l-.028 -.003l-.03 -.002l-.032 -.006l-.027 -.003l-.025 -.006l-.028 -.004l-.037 -.012l-.026 -.005l-.02 -.008l-.025 -.007l-.034 -.015l-.033 -.012l-.019 -.01l-.017 -.007l-.044 -.024l-.027 -.014l-.01 -.007l-.015 -.009l-.059 -.042l-.018 -.012l-.004 -.004l-.008 -.006a1.006 1.006 0 0 1 -.082 -.073l-6 -6a1 1 0 0 1 0 -1.414l6 -6z"
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
export class SvgCaretLeftRightIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
