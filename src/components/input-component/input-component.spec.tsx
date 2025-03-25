import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { h } from '@stencil/core';
import { MctInputComponent } from './input-component';
import type { Components } from '../../components';

type PageElements = {
  internalsRef: { setFormValue: (...args: unknown[]) => void };
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

    const internalsRef = ((page.rootInstance as any).internals = {
      setFormValue: jest.fn(),
    });

    return {
      internalsRef,
      componentRef: page.rootInstance,
      componentEl: page?.root as unknown as HTMLMctInputElement,
    };
  };

  it('renders', async () => {
    const { componentEl } = await createSpecPage();

    expect(componentEl).toBeDefined();
    expect(componentEl?.type).toEqual('text');
  });

  it('update value', async () => {
    const { componentEl, internalsRef } = await createSpecPage();
    componentEl!.value = 'test value';
    await page.waitForChanges();

    expect(componentEl!.querySelector('input')?.value).toEqual('test value');
    expect(internalsRef.setFormValue).toHaveBeenCalledWith('test value');
  });
});
