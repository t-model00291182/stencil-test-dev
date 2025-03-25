import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { h } from '@stencil/core';
import { MctInputComponent } from './input-component';
import type { Components } from '../../components';

describe('MctInputComponent', () => {
  let page: SpecPage;

  /** The HTML that's rendered inside the web component */
  let componentRef!: MctInputComponent;
  let componentEl!: HTMLMctInputElement | null | undefined;

  const createSpecPage = async (properties?: Partial<Components.MctInput>) => {
    page = await newSpecPage({
      components: [MctInputComponent],
      template: () => <mct-input {...properties}></mct-input>,
      supportsShadowDom: false,
    });
    await page.waitForChanges();
    componentRef = page.rootInstance;
    componentEl = page?.root as unknown as HTMLMctInputElement;
  };

  it('renders', async () => {
    await createSpecPage();

    expect(componentEl).toBeDefined();
  });
});
