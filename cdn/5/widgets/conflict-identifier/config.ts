import { ImmutableObject } from 'jimu-core'

export interface Config {
  // The map widget ID that this widget connects to
  useMapWidgetId: string
}

export type IMConfig = ImmutableObject<Config>
