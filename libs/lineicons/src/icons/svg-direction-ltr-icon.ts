import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-direction-ltr-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5714 20.063C19.7287 19.9255 19.8281 19.7233 19.8281 19.498C19.8281 19.2726 19.7287 19.0704 19.5713 18.9329L16.6062 15.9659C16.3134 15.6729 15.8385 15.6728 15.5455 15.9656C15.2525 16.2584 15.2524 16.7333 15.5452 17.0263L17.2658 18.748L5.57812 18.748C5.16391 18.748 4.82812 19.0838 4.82812 19.498C4.82812 19.9122 5.16391 20.248 5.57812 20.248L17.2659 20.248L15.5452 21.97C15.2524 22.263 15.2525 22.7378 15.5455 23.0306C15.8385 23.3234 16.3134 23.3232 16.6062 23.0302L19.5714 20.063Z"
        fill="#323544"
      />
      <path
        d="M13.8281 13.4961V4H10.8281V13.4961C10.8281 13.9103 10.4923 14.2461 10.0781 14.2461C9.66391 14.2461 9.32812 13.9103 9.32812 13.4961V9.25H8.20312C6.33916 9.25 4.82812 7.73896 4.82812 5.875C4.82812 4.01104 6.33916 2.5 8.20312 2.5H19.0781C19.4923 2.5 19.8281 2.83579 19.8281 3.25C19.8281 3.66421 19.4923 4 19.0781 4H15.3281V13.4961C15.3281 13.9103 14.9923 14.2461 14.5781 14.2461C14.1639 14.2461 13.8281 13.9103 13.8281 13.4961ZM9.32812 7.75V4H8.20312C7.16759 4 6.32812 4.83947 6.32812 5.875C6.32812 6.91053 7.16759 7.75 8.20312 7.75H9.32812Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgDirectionLtrIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
