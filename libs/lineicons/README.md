# @semantic-icons/lineicons

`@semantic-icons/lineicons` helps developers to use [Line icons](https://lineicons.com/icons) inside [Angular](https://angular.dev) projects.

## Supported versions

| @semantic-icons/lineicons | Angular   | Lineicons |
| ------------------------- | --------- | --------- |
| 0.x.x                     | >= 17.1.0 | 1.3.2     |

## Usage

First, install `@semantic-icons/lineicons` from npm:

```sh
npm install @semantic-icons/lineicons
```

Now each icon can be imported individually as an Angular component:

```js
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SvgBirdIcon } from '@semantic-icons/lineicons';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SvgBirdIcon],
  template: `
    <svg-bird-icon class="text-blue-500 size-6" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
```

The icons can be imported from `@semantic-icons/lineicons`.

Icons use the Angular naming convention and are always prefixed with the word `svg` and suffixed with the word `icon`.

## License

MIT © 2024-2024 Khalil LAGRIDA
