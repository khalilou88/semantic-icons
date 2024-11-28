# @semantic-icons/circle-flags

`@semantic-icons/circle-flags` helps developers to use [Circle flags](https://hatscripts.github.io/circle-flags) inside [Angular](https://angular.dev) projects.

## Supported versions

| @semantic-icons/circle-flags | Angular   | Circle-flags |
| ---------------------------- | --------- | ------------ |
| 0.x.x                        | >= 17.1.0 | 1.0.0        |

## Usage

First, install `@semantic-icons/circle-flags` from npm:

```sh
npm install @semantic-icons/circle-flags
```

Now each icon can be imported individually as an Angular component:

```js
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SvgBirdIcon } from '@semantic-icons/circle-flags';

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

The icons can be imported from `@semantic-icons/circle-flags`.

Icons use the Angular naming convention and are always prefixed with the word `svg` and suffixed with the word `icon`.

## License

MIT © 2024-2024 Khalil LAGRIDA
