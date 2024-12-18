import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-lazarus-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Lazarus</title>
      <path
        d="M11.457.447c0 .198.035.367.092.367.123 0 .51.715.592 1.092.053.288.053.288-.45.398-1.225.248-1.532 1.092-.694 2.383.276.417.276.436.245 1.588-.017 1.092 0 1.192.195 1.589.213.397.5.655 1 .854.419.159 1.94.081 2.349-.13.51-.247 1.224-1.091 1.53-1.588.235-.606.164-1.49-.193-2.284-.357-.724-1.225-1.688-1.94-2.085-.408-.228-.582-.377-.745-.685a4.493 4.369 0 0 0-.531-.754C12.518.755 11.681 0 11.579 0c-.038 0-.075.169-.075.367zm-6.33 1.688a6.127 5.958 0 0 0-.162 1.986c.054.437.027.556-.154.873-.377.676-.53 1.291-.49 2.383.029.725.083.964.287 1.291.46.894 1.123 1.291 2.144 1.589.664.129 1.225.083 1.735-.189 1.634-.715 1.94-1.986.624-3.276-.512-.596-.756-1.093-.756-1.49 0-.526-.255-1.191-.572-1.49-.255-.228-.337-.237-.837-.198a6.772 6.586 0 0 0-.797.12c-.234.055-.276.026-.429-.368a2.144 2.085 0 0 1-.173-.774c.027-.348-.195-.835-.378-.835-.045 0-.133.17-.193.378zm16.338 3.078c-.036.198-.02.377.054.457.063.072.122.347.133.615l.008.487-.327.01c-.674.018-.756.044-1.123.377a2.552 2.482 0 0 0-.49.804c-.091.248-.43 1.092-.796 1.688-.358.725-.654 1.49-.675 1.688-.122.755.317 1.291 1.328 1.887.46.228.664.248 1.327.248.674 0 .858-.037 1.327-.288.736-.347 1.124-.755 1.532-1.49.215-.436.246-.615.235-1.489-.01-1.092-.204-1.688-.704-2.383a4.084 3.972 0 0 1-.46-.993c-.194-.685-.909-1.986-1.123-1.986-.074 0-.154.13-.195.318zM.022 11.17c-.1.17.154 1.688.368 2.284.123.308.285.854.357 1.192.378 1.886 1.736 3.177 3.267 3.276 1.123.074 2.042-.248 2.553-.923.745-.874.867-1.688.357-2.383-.153-.189-.592-.526-.99-.775-.388-.238-1.123-.675-1.532-.963-1.327-.874-1.531-.933-1.735-1.092-.49-.13-.838-.028-1.226.348l-.357.317-.194-.317c-.1-.17-.194-.378-.194-.497 0-.1-.122-.288-.255-.437-.286-.268-.358-.288-.429-.159Zm13.274 2.284c-.654.169-1.327.417-1.634.566-.674.348-1.225.894-1.532 1.49-.173.436-.204.565-.153 1.489.054.834.037.963-.163 1.29-.215.457-.878 1.192-1.226 1.291-.112.046-.295.239-.418.408-.633.933.235 2.78 1.635 3.574.653.348 1.53.497 2.347.417 2.962-.268 6.126-1.092 8.373-2.085 1.532-.695 2.144-1.688 2.144-3.078-.028-1.49-.787-2.383-2.043-2.383-1 0-2.042-.616-2.45-1.49-.317-.615-.939-1.191-1.532-1.588-.326-.13-.653-.199-1.327-.229-.745-.026-1.02.02-2.042.288z"
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
export class SvgLazarusIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
