import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-customink-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Custom Ink</svg:title>
    <svg:path
      d="M12 23.986c1.864 0 3.398-1.508 3.398-3.451 0-.384-.106-.86-.238-1.19-.423-1.018-2.182-2.526-2.79-3.808-.08-.198-.21-.291-.356-.291-.145 0-.29.093-.357.29-.595 1.283-2.366 2.804-2.79 3.809-.132.33-.238.806-.238 1.19A3.37 3.37 0 0 0 12 23.985zm0-11.82a1.856 1.856 0 0 0 1.587-.9c.12-.185.066-.476-.29-.357a3.48 3.48 0 0 1-2.591 0c-.358-.119-.397.172-.292.357.33.53.873.886 1.587.9zm1.772-3.293c-.068-.2.03-.42.225-.502a.586.586 0 0 1 .198-.04.116.116 0 0 0 .092-.12c0-.039-.013-.065-.052-.092a.964.964 0 0 0-.582-.198.97.97 0 0 0-.965.965.97.97 0 0 0 .965.965c.436 0 .806-.29.925-.687a.14.14 0 0 0-.013-.106c-.026-.026-.053-.053-.092-.053-.04 0-.093.04-.146.053-.317.172-.502-.053-.555-.185Zm-3.292 0c-.068-.2.03-.42.225-.502a.586.586 0 0 1 .2-.04.116.116 0 0 0 .09-.12c0-.039-.012-.065-.052-.092a.964.964 0 0 0-.582-.198.97.97 0 0 0-.965.965c.008 1.105 1.565 1.334 1.89.278a.14.14 0 0 0-.012-.106c-.027-.026-.053-.053-.093-.053s-.092.04-.145.053c-.304.172-.503-.053-.556-.185Zm5.896-1.89c0 .581-.105 1.123-.317 1.626-.053.132-.04.264.093.317.185.08.515.172 1.057.185 1.243 0 3.094-.635 3.253-.661.78-.212 1.454-.304 2.155.026.384.185.78-.105.635-.515C21.572 3.399 17.46.014 11.988.014 6.515.014 2.4 3.4.723 7.961c-.146.41.25.7.634.515.7-.33 1.375-.238 2.156-.026.158.026 2.01.661 3.252.661.542-.013.873-.106 1.058-.185.132-.053.145-.185.092-.317a4.453 4.453 0 0 1-.317-1.627c0-2.406 1.957-4.35 4.377-4.35 2.445 0 4.401 1.944 4.401 4.35zM7.85 19.238c.106-.225 1.137-2.354 1.243-4.614.027-.37-.25-.556-.582-.331-1.335.688-2.34.727-3.61 1.15-1.493.344-2.42 1.296-2.458 2.684a2.806 2.806 0 0 0 2.71 2.896 2.78 2.78 0 0 0 2.697-1.785zM4.147 14.73c.225-.105 1.85-.978 3.292-2.657.252-.278.067-.542-.25-.608-2.063-.569-2.804-1.825-4.483-1.799-.793-.013-1.507.291-2.063.952a2.732 2.732 0 0 0 .344 3.861c.893.748 2.16.848 3.16.251zm12.005 4.509c1.141 2.949 5.53 2.05 5.42-1.11-.052-1.402-.978-2.354-2.46-2.685-1.268-.41-2.273-.462-3.61-1.15-.316-.225-.606-.04-.58.33.08 2.261 1.124 4.377 1.23 4.615zm3.701-4.509c-.225-.105-1.85-.978-3.29-2.657-.253-.278-.068-.542.25-.608 2.062-.569 2.802-1.825 4.482-1.799.793-.013 1.507.291 2.063.952a2.732 2.732 0 0 1-.344 3.861 2.736 2.736 0 0 1-3.16.251zm-9.372-5.857c-.068-.2.03-.42.224-.502a.586.586 0 0 1 .2-.04.116.116 0 0 0 .09-.12c0-.039-.012-.065-.052-.092a.964.964 0 0 0-.582-.198.97.97 0 0 0-.965.965c.008 1.105 1.565 1.334 1.89.278a.14.14 0 0 0-.012-.106c-.027-.026-.053-.053-.093-.053s-.092.04-.145.053c-.304.172-.503-.053-.556-.185Zm3.291 0c-.068-.2.03-.42.225-.502a.586.586 0 0 1 .198-.04.116.116 0 0 0 .092-.12c0-.039-.013-.065-.052-.092a.964.964 0 0 0-.582-.198.97.97 0 0 0-.965.965.97.97 0 0 0 .965.965c.436 0 .806-.29.925-.687a.14.14 0 0 0-.013-.106c-.026-.026-.053-.053-.092-.053-.04 0-.093.04-.146.053-.317.172-.502-.053-.555-.185Zm-1.771 3.292a1.856 1.856 0 0 0 1.586-.899c.12-.185.066-.476-.29-.357a3.48 3.48 0 0 1-2.591 0c-.358-.119-.397.172-.292.357.33.53.873.886 1.587.9zm0 11.821c1.863 0 3.397-1.508 3.397-3.451 0-.384-.106-.86-.238-1.19-.423-1.018-2.182-2.526-2.79-3.808-.08-.198-.21-.291-.356-.291-.145 0-.29.093-.357.29-.595 1.283-2.366 2.804-2.79 3.809-.132.33-.238.806-.238 1.19A3.37 3.37 0 0 0 12 23.985zm7.852-9.256c-.225-.105-1.85-.978-3.29-2.657-.253-.278-.068-.542.25-.608 2.062-.569 2.802-1.825 4.482-1.799.793-.013 1.48.3 2.063.952.661 1.593.68 1.594-.33 3.85l-.014.011a2.736 2.736 0 0 1-3.16.251zm-3.7 4.509c1.14 2.949 5.53 2.05 5.42-1.11-.053-1.402-.98-2.354-2.46-2.685-1.269-.41-2.274-.462-3.61-1.15-.317-.225-.607-.04-.58.33.08 2.261 1.123 4.377 1.23 4.615zM4.146 14.73c.225-.105 1.85-.978 3.292-2.657.252-.278.067-.542-.25-.608-2.063-.569-2.804-1.825-4.483-1.799-.793-.013-1.507.291-2.063.952a2.732 2.732 0 0 0 .344 3.861c.893.748 2.16.848 3.16.251zm3.702 4.509c.106-.225 1.137-2.354 1.243-4.614.027-.37-.25-.556-.582-.331-1.335.688-2.34.727-3.61 1.15-1.493.344-2.42 1.296-2.458 2.684a2.806 2.806 0 0 0 2.71 2.896 2.78 2.78 0 0 0 2.697-1.785zm8.527-12.257c0 .582-.105 1.124-.317 1.627-.053.132-.04.264.093.317.185.08.515.172 1.057.185 1.243 0 3.094-.635 3.253-.661.78-.212 1.454-.304 2.155.026.384.185.78-.105.635-.515C21.57 3.399 17.46.014 11.988.014 6.516.014 2.4 3.4.723 7.961c-.146.41.25.7.634.515.7-.33 1.375-.238 2.156-.026.158.026 2.01.661 3.252.661.542-.013.873-.106 1.058-.185.132-.053.145-.185.092-.317a4.453 4.453 0 0 1-.317-1.627c0-2.406 1.957-4.35 4.377-4.35 2.445 0 4.401 1.944 4.401 4.35z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCustominkIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FA3C00');
}
