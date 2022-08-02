import store from './store';
function toggleVisible() {
  if(localStorage.getItem('isVisible')) {
    store.dispatch('setVisibility')
  }
}

toggleVisible()
