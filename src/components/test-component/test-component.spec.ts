import { newSpecPage } from '@stencil/core/testing';
import { MctTestComponent } from './test-component';

describe('mct-test-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MctTestComponent],
      html: '<mct-test-component></mct-test-component>',
    });
    expect(root).toEqualHtml(`
      <mct-test-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </mct-test-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MctTestComponent],
      html: `<mct-test-component first="Stencil" middle="'Don't call me a framework'" last="JS"></mct-test-component>`,
    });
    expect(root).toEqualHtml(`
      <mct-test-component first="Stencil" middle="'Don't call me a framework'" last="JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </mct-test-component>
    `);
  });
});
