import { FilterActorsByDescriptionPipe } from './filter-actors-by-description.pipe';

describe('FilterActorsByDescriptionPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterActorsByDescriptionPipe();
    expect(pipe).toBeTruthy();
  });
});
