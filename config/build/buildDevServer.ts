import { BuildOptions } from './types/config'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    const { port } = options

    return {
        port,
        open: true,
        historyApiFallback: true, // без этого параметра, если перезагрузить страницу например /about, то ошибка вылетит 'Cannot GET /about'
    }
}