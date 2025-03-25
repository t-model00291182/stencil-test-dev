import type { JSX } from '@stencil/core';
import { Component, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'mct-input',
  styleUrl: 'input-component.scss',
  shadow: true,
})
export class MctInputComponent {
  //
  @Element() host!: HTMLMctInputElement;

  render(): JSX.Element {
    return (
      <Host>
        <input />
      </Host>
    );
  }
}
