import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-tf-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:path id="tf-a" fill="#fff" d="m0-21 12.3 38L-20-6.5h40L-12.3 17z" />
    </svg:defs>
    <svg:path fill="#002395" d="M0 0h640v480H0z" />
    <svg:path fill="#fff" d="M0 0h292.8v196.8H0z" />
    <svg:path fill="#002395" d="M0 0h96v192H0z" />
    <svg:path fill="#ed2939" d="M192 0h96v192h-96z" />
    <svg:path
      fill="#fff"
      d="m426 219.6 15.4 24.6h44V330l-33-51.6-44.4 70.8h21.6l22.8-40.8 46.8 84 46.8-84 22.8 40.8h21.6L546 278.4 513 330v-47.4h19.8l14.7-23.4H513v-15h44l15.4-24.6zm51.6 105h-48v16.8h48zm91.2 0h-48v16.8h48z"
    />
    <svg:use
      xlink:href="#tf-a"
      width="100%"
      height="100%"
      x="416"
      y="362"
      transform="scale(1.2)"
    />
    <svg:use
      xlink:href="#tf-a"
      width="100%"
      height="100%"
      x="371"
      y="328"
      transform="scale(1.2)"
    />
    <svg:use
      xlink:href="#tf-a"
      width="100%"
      height="100%"
      x="461"
      y="328"
      transform="scale(1.2)"
    />
    <svg:use
      xlink:href="#tf-a"
      width="100%"
      height="100%"
      x="333"
      y="227"
      transform="scale(1.2)"
    />
    <svg:use
      xlink:href="#tf-a"
      width="100%"
      height="100%"
      x="499"
      y="227"
      transform="scale(1.2)"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTfFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 480');
}
