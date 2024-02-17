import { cyan } from '../lib/picocolors'
import { error } from '../build/output/log'

const nextExport = () => {
  error(`
    \`next export\` has been removed in favor of 'output: export' in next.config.js.\nLearn more: ${cyan(
      'https://nextjs.org/docs/advanced-features/static-html-export'
    )}
  `)

  process.exit(1)
}

export { nextExport }
