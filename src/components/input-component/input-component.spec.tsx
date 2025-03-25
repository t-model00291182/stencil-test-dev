import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { h } from '@stencil/core';
import { MctInputComponent } from './input-component';
import type { Components } from '../../components';

type PageElements = {
  componentRef: MctInputComponent;
  componentEl: HTMLMctInputElement | null | undefined;
};

describe('MctInputComponent', () => {
  let page: SpecPage;

  /** The HTML that's rendered inside the web component */

  const createSpecPage = async (properties?: Partial<Components.MctInput>): Promise<PageElements> => {
    page = await newSpecPage({
      components: [MctInputComponent],
      template: () => <mct-input {...properties}></mct-input>,
      supportsShadowDom: false,
    });
    await page.waitForChanges();

    return {
      componentRef: page.rootInstance,
      componentEl: page?.root as unknown as HTMLMctInputElement,
    };
  };

  it('renders', async () => {
    const { componentEl } = await createSpecPage();

    expect(componentEl).toBeDefined();
  });
});
