import { error } from '@sveltejs/kit';

export const prerender = false;

/** @type {import('./$types').PageLoad} */
export function load() {
	throw error(404, 'La pagina che cerchi non è qui');
}
