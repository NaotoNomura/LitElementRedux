export default (Store) => (BaseClass) => class extends BaseClass {
  
  constructor() {

    super()
    this._store = Store
  }

  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback()
    }

    this._unsubscribe = this._store.subscribe(
      () => this.stateChanged(this._store.getState())
    )
    this.stateChanged(this._store.getState())
  }

  disconnectedCallback () {
    this._unsubscribe()

    if (super.disconnectedCallback) {
      super.disconnectedCallback();
    }
  }

  dispatch (action) {
    this._store.dispatch(action)
  }

  stateChanged(state) {
  }

}
