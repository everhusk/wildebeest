import type { Env } from 'wildebeest/backend/src/types/env'
import type { JWK } from 'wildebeest/backend/src/webpush/jwk'

export const DEFAULT_THUMBNAIL =
	'https://i.imgur.com/katHJoi.png'

export function getVAPIDKeys(env: Env): JWK {
	const value: JWK = JSON.parse(env.VAPID_JWK)
	return value
}
