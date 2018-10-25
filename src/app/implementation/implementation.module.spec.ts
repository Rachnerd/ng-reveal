import { ImplementationModule } from './implementation.module';

describe('ImplementationModule', () => {
  let implementationModule: ImplementationModule;

  beforeEach(() => {
    implementationModule = new ImplementationModule();
  });

  it('should create an instance', () => {
    expect(implementationModule).toBeTruthy();
  });
});
