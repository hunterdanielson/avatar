import { renderHook, act } from '@testing-library/react-hooks';
import { useDetailHook } from './DetailHook';

jest.mock('react-router-dom', () => ({
  useParams() {
    return '1';
  }
}));

jest.mock('../services/api.js', () => ({
  getCharacter() {
    return Promise.resolve(
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
      }
    );
  }
}));

describe('detail hook test', () => {
  it('has name state', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useDetailHook());
      return waitFor(() => {
        expect(result.current.name).not.toBeUndefined();
      });
    });
  });

  it('has photoUrl state', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useDetailHook());
      return waitFor(() => {
        expect(result.current.photoUrl).not.toBeUndefined();
      });
    });
  });

  it('has affiliation state', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useDetailHook());
      return waitFor(() => {
        expect(result.current.affiliation).not.toBeUndefined();
      });
    });
  });

  it('has allies state', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useDetailHook());
      return waitFor(() => {
        expect(result.current.allies).not.toBeUndefined();
      });
    });
  });

  it('has enemies state', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useDetailHook());
      return waitFor(() => {
        expect(result.current.enemies).not.toBeUndefined();
      });
    });
  });
});
