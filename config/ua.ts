import { WILDEBEEST_VERSION, MASTODON_API_VERSION } from 'wildebeest/config/versions'

export function getFederationUA(domain: string): string {
	return `EARTH/${WILDEBEEST_VERSION} (Mastodon/${MASTODON_API_VERSION}; +${domain})`
}
