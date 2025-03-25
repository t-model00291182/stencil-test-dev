import type { JSX } from '@stencil/core';
import { Component, Host, Element, h, Prop } from '@stencil/core';

@Component({
  tag: 'mct-input',
  styleUrls: [
    '../../styles/darkly/bootstrap.css', //
    './input-component.scss',
  ],
  shadow: true,
})
export class MctInputComponent {
  //
  @Element() host!: HTMLMctInputElement;

  @Prop() name?: string;

  @Prop() value?: string;

  render(): JSX.Element {
    return (
      <Host>
        <div class="input-group  input-group-lg">
          <span class="input-group-text" id="basic-addon1">
            🙂
          </span>
          <input name={this.name} value={this.value} class="form-control" placeholder="Username" aria-label="Username" />
        </div>
      </Host>
    );
  }
}
