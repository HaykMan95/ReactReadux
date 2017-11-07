var mockApiData = [
  {
    id: Date.now().toString(),
    name : "aaww1"
  }
]

export const getTracks = () => dispatch => {
  setTimeout(() => {
    dispatch({type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData})
  }, 2000)
}
