export default (map) => (BaseClass) => class extends BaseClass {
  
  constructor() {
    super()
    if (!this._store) {
      throw Error('Component needs to be connected to store for StateToStore mixin')
    }
    this._map = map
  }

  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback()
    }

    this._propsUnsubscribe = this._store.subscribe(
      () => this.mapStateToProps(this._store.getState())
    )
    this.mapStateToProps(this._store.getState())
  }

  disconnectedCallback () {
    this._propsUnsubscribe()

    if (super.disconnectedCallback) {
      super.disconnectedCallback();
    }
  }

  mapStateToProps (state) {
    Object.assign(this, this._map(state))
  }

}
