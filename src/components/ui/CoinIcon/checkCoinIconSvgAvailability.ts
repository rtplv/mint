import coinIconsManifest from 'cryptocurrency-icons/manifest.json'

const coinIconsManifestMap = new Set(coinIconsManifest.map(m => m.symbol))
export const checkCoinIconSvgAvailability = (symbol: string) => symbol in coinIconsManifestMap