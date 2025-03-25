import type { JSX } from '@stencil/core';
import { Component, Host, Element, h, Prop, AttachInternals, Watch } from '@stencil/core';

@Component({
  tag: 'mct-input',
  styleUrls: [
    '../../styles/darkly/bootstrap.css', //
    './input-component.scss',
  ],
  formAssociated: true,
  shadow: {
    delegatesFocus: true,
  },
})
export class MctInputComponent {
  //
  @Element() host!: HTMLMctInputElement;

  @Prop() name?: string;

  @Prop() type?: string = 'text';

  @Prop({ reflect: true, mutable: true }) value?: string;

  @Prop() placeholder?: string;

  /**
   * The internal binding for the form association.
   */
  @AttachInternals()
  private internals?: ElementInternals;

  @Watch('value')
  updateValue(): void {
    this.internals?.setFormValue(this.value ?? '');
  }

  componentDidLoad() {}

  private onInput = (e: InputEvent): void => {
    if (!this.isHTMLInputElement(e.target)) return;
    this.value = e.target.value;
  };

  private isHTMLInputElement(el: unknown): el is HTMLInputElement {
    return el instanceof HTMLElement && el.tagName.toLowerCase() === 'input';
  }

  render(): JSX.Element {
    return (
      <Host>
        <div class="input-group  input-group-lg">
          <span class="input-group-text" id="basic-addon1">
            🙂
          </span>
          <input
            type="text"
            name={this.name} //
            value={this.value}
            class="form-control"
            placeholder={this.placeholder}
            onInput={this.onInput}
            tabindex="1"
          />
        </div>
      </Host>
    );
  }
}
