import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'sc-icon-menu'
})
export class ScIconMenu {
  @Prop() coloured: boolean

  hostData() {
    return {
      'class': {
        'coloured': this.coloured,
        'icon': true
      },
    }
  }

  render () {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path class="heroicon-ui" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
      </svg>
    )
  }
}