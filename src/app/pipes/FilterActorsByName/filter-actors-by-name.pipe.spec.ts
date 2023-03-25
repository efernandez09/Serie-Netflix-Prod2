import { FilterActorsByNamePipe } from './filter-actors-by-name.pipe';

describe('FilterActorsByNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterActorsByNamePipe();
    expect(pipe).toBeTruthy();
  });
});
