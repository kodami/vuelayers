import { EPSG_3857 } from '../ol-ext/consts'
/** @module mixin/image-source */
import source from './source'

/**
 * @vueProps
 */
const props = {
  crossOrigin: String,
  projection: {
    type: String,
    default: EPSG_3857,
  },
}

/**
 * @vueMethods
 */
const methods = {
  /**
   * @return {Promise}
   * @protected
   */
  init () {
    return this::source.methods.init()
  },
  /**
   * @return {void|Promise<void>}
   * @protected
   */
  deinit () {
    return this::source.methods.deinit()
  },
  /**
   * @return {void}
   * @protected
   */
  mount () {
    this::source.methods.mount()
  },
  /**
   * @return {void}
   * @protected
   */
  unmount () {
    this::source.methods.unmount()
  },
}

/**
 * @vueProto
 * @alias module:mixin/image-source
 */
export default {
  mixins: [source],
  props,
  methods,
}
