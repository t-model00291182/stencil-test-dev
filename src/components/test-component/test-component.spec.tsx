import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { h } from '@stencil/core';
import { MctTestComponent } from './test-component';
import type { Components } from '../../components';

type PageElements = {
  componentRef: MctTestComponent;
  componentEl: HTMLMctTestComponentElement | null | undefined;
};

describe('MctTestComponent', () => {
  let page: SpecPage;

  const createSpecPage = async (properties?: Partial<Components.MctTestComponent>): Promise<PageElements> => {
    page = await newSpecPage({
      components: [MctTestComponent],
      template: () => <mct-test-component {...properties}></mct-test-component>,
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
    expect(componentEl?.innerText).toEqual(`Hello, World! I'm `);
  });

  it('renders changes to the name data', async () => {
    const { componentEl } = await createSpecPage({ first: 'James' });

    expect(componentEl?.first).toEqual('James');
    expect(componentEl?.textContent).toEqual(`Hello, World! I'm James`);

    componentEl!.last = 'Quincy';
    await page.waitForChanges();
    expect(componentEl!.textContent).toEqual(`Hello, World! I'm James Quincy`);

    componentEl!.middle = 'Earl';
    await page.waitForChanges();
    expect(componentEl!.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
