import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { h } from '@stencil/core';
import { MctTestComponent } from './test-component';
import type { Components } from '../../components';

describe('MctTestComponent', () => {
  let page: SpecPage;

  /** The HTML that's rendered inside the web component */
  let componentRef: MctTestComponent;
  let componentEl: HTMLMctTestComponentElement | null | undefined;

  const createSpecPage = async (properties?: Partial<Components.MctTestComponent>) => {
    page = await newSpecPage({
      components: [MctTestComponent],
      template: () => <mct-test-component {...properties}></mct-test-component>,
      supportsShadowDom: false,
    });
    await page.waitForChanges();
    componentRef = page.rootInstance;
    componentEl = page?.root as unknown as HTMLMctTestComponentElement;
  };

  it('renders', async () => {
    await createSpecPage();

    expect(componentEl).toBeDefined();
    expect(componentEl?.innerText).toEqual(`Hello, World! I'm `);
  });

  it('renders changes to the name data', async () => {
    await createSpecPage({ first: 'James' });

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
