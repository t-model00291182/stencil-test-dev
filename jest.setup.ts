
// Mock DocumentFragment
(global as any).DocumentFragment = document?.defaultView?.DocumentFragment;

global.Image = HTMLImageElement;
global.HTMLCollection = Array as any;

// eslint-disable-next-line @typescript-eslint/no-empty-function
global.TouchEvent = function (_type, _eventInitDict) { } as any;
