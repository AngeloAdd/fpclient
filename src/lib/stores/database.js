import { writable } from 'svelte/store';
import { Datastore } from '@google-cloud/datastore';

export const database = writable(new Datastore());
