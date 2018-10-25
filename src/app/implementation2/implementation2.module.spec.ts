import { Implementation2Module } from './implementation2.module';

describe('Implementation2Module', () => {
  let implementation2Module: Implementation2Module;

  beforeEach(() => {
    implementation2Module = new Implementation2Module();
  });

  it('should create an instance', () => {
    expect(implementation2Module).toBeTruthy();
  });
});
