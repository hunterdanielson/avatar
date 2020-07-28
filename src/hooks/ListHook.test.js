import { renderHook, act } from '@testing-library/react-hooks';
import { useListHook } from './ListHook';

jest.mock('../services/api.js', () => ({
  getAllCharacters() {
    return Promise.resolve(
      [
        {
          '_id': '5cf5679a915ecad153ab68c8',
          'allies': [
            'Royal Earthbender Guards'
          ],
          'enemies': [
            'Chin'
          ],
          'photoUrl': 'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441',
          'name': '46th Earth King',
          'affiliation': ' Earth Kingdom Earth Kingdom Royal Family'
        },
        {
          '_id': '5cf5679a915ecad153ab68c9',
          'allies': [
            'Appa'
          ],
          'enemies': [
            'Azula'
          ],
          'photoUrl': 'https://vignette.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20130612174003',
          'name': 'Aang',
          'affiliation': ' Air Acolytes Air Nomads Air Scouts (formerly) Team Avatar'
        }]
    );
  }
}));

describe('listhook tests', () => {
  it('has list state', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useListHook());
      return waitFor(() => {
        expect(result.current.list).not.toBeUndefined();
      });
    });
  });
});
