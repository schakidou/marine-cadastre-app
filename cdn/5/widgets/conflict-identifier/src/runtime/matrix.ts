/**
 * COMPATIBILITY MATRIX
 * Maritime Spatial Planning — Pairwise Use Compatibility
 *
 * Four severity levels per Greek MSP legislation (N. 2025):
 *   "compatible"   — uses can coexist without restrictions (Συμβατή)
 *   "conditional"  — coexistence under specific conditions (Υπό όρους συμβατή)
 *   "incompatible" — significant conflicts requiring resolution (Ασύμβατη)
 *   "prohibited"   — absolute prohibition of coexistence (Απαγορευμένη)
 *
 * The matrix is symmetric: matrix[A][B] === matrix[B][A].
 * If a pair is not listed, it defaults to "compatible".
 *
 * IMPORTANT: Replace or verify these values with your full research data.
 */

export type Severity = 'compatible' | 'conditional' | 'incompatible' | 'prohibited'

export const COMPATIBILITY_MATRIX: Record<string, Record<string, Severity>> = {
  fisheries_bottom_trawl: {
    aquaculture:       'incompatible',
    marine_tourism:    'conditional',
    offshore_wind:     'incompatible',
    hydrocarbon:       'incompatible',
    shipping_lanes:    'conditional',
    pipelines_cables:  'prohibited',
    telecom_cables:    'prohibited',
    natura2000:        'conditional',
    posidonia:         'prohibited',
    strict_protection: 'prohibited',
    archaeology:       'prohibited',
    military:          'prohibited',
    env_risk:          'conditional',
    research:          'conditional'
  },
  aquaculture: {
    marine_tourism:    'conditional',
    offshore_wind:     'incompatible',
    hydrocarbon:       'incompatible',
    shipping_lanes:    'conditional',
    pipelines_cables:  'incompatible',
    telecom_cables:    'incompatible',
    natura2000:        'conditional',
    posidonia:         'incompatible',
    strict_protection: 'prohibited',
    archaeology:       'incompatible',
    military:          'prohibited',
    env_risk:          'conditional',
    research:          'compatible'
  },
  marine_tourism: {
    offshore_wind:     'conditional',
    hydrocarbon:       'incompatible',
    shipping_lanes:    'conditional',
    pipelines_cables:  'compatible',
    telecom_cables:    'compatible',
    natura2000:        'compatible',
    posidonia:         'compatible',
    strict_protection: 'conditional',
    archaeology:       'compatible',
    military:          'prohibited',
    env_risk:          'conditional',
    research:          'compatible'
  },
  offshore_wind: {
    hydrocarbon:       'incompatible',
    shipping_lanes:    'incompatible',
    pipelines_cables:  'conditional',
    telecom_cables:    'conditional',
    natura2000:        'incompatible',
    posidonia:         'prohibited',
    strict_protection: 'prohibited',
    archaeology:       'incompatible',
    military:          'prohibited',
    env_risk:          'conditional',
    research:          'conditional'
  },
  hydrocarbon: {
    shipping_lanes:    'conditional',
    pipelines_cables:  'conditional',
    telecom_cables:    'conditional',
    natura2000:        'incompatible',
    posidonia:         'prohibited',
    strict_protection: 'prohibited',
    archaeology:       'prohibited',
    military:          'prohibited',
    env_risk:          'incompatible',
    research:          'conditional'
  },
  shipping_lanes: {
    pipelines_cables:  'conditional',
    telecom_cables:    'conditional',
    natura2000:        'conditional',
    posidonia:         'conditional',
    strict_protection: 'conditional',
    archaeology:       'conditional',
    military:          'prohibited',
    env_risk:          'conditional',
    research:          'conditional'
  },
  pipelines_cables: {
    telecom_cables:    'conditional',
    natura2000:        'conditional',
    posidonia:         'prohibited',
    strict_protection: 'prohibited',
    archaeology:       'prohibited',
    military:          'prohibited',
    env_risk:          'conditional',
    research:          'compatible'
  },
  telecom_cables: {
    natura2000:        'conditional',
    posidonia:         'incompatible',
    strict_protection: 'prohibited',
    archaeology:       'incompatible',
    military:          'prohibited',
    env_risk:          'conditional',
    research:          'compatible'
  },
  natura2000: {
    posidonia:         'compatible',
    strict_protection: 'compatible',
    archaeology:       'compatible',
    military:          'incompatible',
    env_risk:          'conditional',
    research:          'compatible'
  },
  posidonia: {
    strict_protection: 'compatible',
    archaeology:       'compatible',
    military:          'incompatible',
    env_risk:          'conditional',
    research:          'compatible'
  },
  strict_protection: {
    archaeology:       'compatible',
    military:          'prohibited',
    env_risk:          'conditional',
    research:          'conditional'
  },
  archaeology: {
    military:          'prohibited',
    env_risk:          'conditional',
    research:          'compatible'
  },
  military: {
    env_risk:          'prohibited',
    research:          'prohibited'
  },
  env_risk: {
    research:          'compatible'
  }
}

/**
 * Look up the compatibility between two layer IDs.
 * The matrix is symmetric, so it checks both directions.
 * Returns 'compatible' if the pair is not defined.
 */
export function getCompatibility (idA: string, idB: string): Severity {
  if (idA === idB) return 'compatible'
  return COMPATIBILITY_MATRIX[idA]?.[idB]
    ?? COMPATIBILITY_MATRIX[idB]?.[idA]
    ?? 'compatible'
}

/**
 * Severity display configuration — colors, labels, symbology
 */
export const SEVERITY_CONFIG: Record<Severity, {
  color: [number, number, number, number]
  outline: [number, number, number, number]
  label: string
  labelGr: string
  fillStyle: 'solid' | 'backward-diagonal'
  priority: number
}> = {
  compatible: {
    color: [46, 204, 113, 0.35],
    outline: [46, 204, 113, 0.9],
    label: 'Compatible',
    labelGr: 'Συμβατή',
    fillStyle: 'solid',
    priority: 3
  },
  conditional: {
    color: [52, 152, 219, 0.35],
    outline: [52, 152, 219, 0.9],
    label: 'Conditionally Compatible',
    labelGr: 'Υπό όρους συμβατή',
    fillStyle: 'solid',
    priority: 2
  },
  incompatible: {
    color: [230, 126, 34, 0.45],
    outline: [230, 126, 34, 0.9],
    label: 'Incompatible',
    labelGr: 'Ασύμβατη',
    fillStyle: 'solid',
    priority: 1
  },
  prohibited: {
    color: [231, 76, 60, 0.5],
    outline: [231, 76, 60, 0.9],
    label: 'Prohibited',
    labelGr: 'Απαγορευμένη',
    fillStyle: 'backward-diagonal',
    priority: 0
  }
}
