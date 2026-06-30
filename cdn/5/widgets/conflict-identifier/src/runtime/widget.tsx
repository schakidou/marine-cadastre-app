/** @jsx jsx */
import {
  React,
  jsx,
  type AllWidgetProps,
  css
} from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import GraphicsLayer from 'esri/layers/GraphicsLayer'
import Graphic from 'esri/Graphic'
import SimpleFillSymbol from 'esri/symbols/SimpleFillSymbol'
import Color from 'esri/Color'
import * as geometryEngine from 'esri/geometry/geometryEngine'
import type FeatureLayer from 'esri/layers/FeatureLayer'

import {
  COMPATIBILITY_MATRIX,
  SEVERITY_CONFIG,
  getCompatibility,
  type Severity
} from './matrix'

const { useState, useEffect, useRef, useCallback } = React

/* ────────────────────────────────────────────
   Types
   ──────────────────────────────────────────── */
interface ConflictResult {
  layerA: string
  layerB: string
  severity: Severity
  areaKm2: number
}

interface LayerInfo {
  id: string
  title: string
  checked: boolean
}

/* ────────────────────────────────────────────
   Styles
   ──────────────────────────────────────────── */
const widgetStyle = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #ffffff;
  color: #333333;
  font-family: 'Segoe UI', Arial, sans-serif;

  .widget-header {
    padding: 14px 16px 10px;
    background: #f5f5f5;
    border-bottom: 1px solid #ddd;
    h3 { margin: 0; font-size: 15px; color: #2c3e50; }
  }

  .tab-bar {
    display: flex;
    background: #fafafa;
    border-bottom: 1px solid #ddd;
    button {
      flex: 1; padding: 9px 6px; text-align: center;
      background: transparent; border: none; color: #888;
      font-size: 12px; cursor: pointer;
      border-bottom: 3px solid transparent;
      transition: all .2s;
      &.active { color: #0079c1; border-bottom-color: #0079c1; background: #fff; }
      &:hover  { color: #555; }
    }
  }

  .tab-content {
    display: none; flex: 1; overflow-y: auto; padding: 12px 14px;
    &.active { display: block; }
  }

  /* Layer list */
  .layer-item {
    display: flex; align-items: center; gap: 8px;
    padding: 5px 10px; margin: 3px 0; border-radius: 6px;
    background: #f7f8fa; cursor: pointer; transition: background .15s;
    &:hover { background: #eef1f5; }
    input[type="checkbox"] { accent-color: #0079c1; width: 15px; height: 15px; }
    label { font-size: 12px; cursor: pointer; flex: 1; color: #333; }
  }

  /* Run button */
  .run-btn {
    display: block; width: calc(100% - 28px); margin: 12px 14px;
    padding: 11px; font-size: 14px; font-weight: 600;
    background: #0079c1;
    color: #fff; border: none; border-radius: 8px;
    cursor: pointer; transition: opacity .2s;
    &:hover { opacity: .85; }
    &:disabled { opacity: .4; cursor: not-allowed; }
  }

  /* Results */
  .results-summary {
    padding: 10px 12px; margin-bottom: 10px;
    background: #f0f4f8; border-radius: 8px;
    font-size: 12px; line-height: 1.5; color: #333;
  }

  .result-card {
    padding: 10px 12px; margin-bottom: 8px;
    border-radius: 8px; border-left: 4px solid;
    background: #f7f8fa; cursor: pointer;
    transition: background .15s;
    &:hover { background: #eef1f5; }
    &.compatible       { border-left-color: #2ecc71; }
    &.conditional      { border-left-color: #3498db; }
    &.incompatible     { border-left-color: #e67e22; }
    &.prohibited       { border-left-color: #e74c3c; }
    .pair-name  { font-size: 12px; font-weight: 600; margin-bottom: 3px; color: #333; }
    .pair-info  { font-size: 10px; color: #666; }
    .pair-area  { font-size: 11px; color: #555; margin-top: 3px; }
  }

  .severity-badge {
    display: inline-block; padding: 2px 7px; border-radius: 10px;
    font-size: 9px; font-weight: 700; text-transform: uppercase;
    &.compatible   { background: rgba(46,204,113,.15);  color: #27ae60; }
    &.conditional  { background: rgba(52,152,219,.15);  color: #2980b9; }
    &.incompatible { background: rgba(230,126,34,.15);  color: #d35400; }
    &.prohibited   { background: rgba(231,76,60,.15);   color: #c0392b; }
  }

  /* Status bar */
  .status-bar {
    padding: 8px 14px; background: #f5f5f5;
    border-top: 1px solid #ddd;
    font-size: 10px; color: #888;
  }

  /* Legend */
  .legend {
    padding: 10px 12px; margin-top: 8px;
    background: #f0f4f8; border-radius: 8px;
    h4 { margin: 0 0 6px; font-size: 12px; color: #2c3e50; }
    .legend-item {
      display: flex; align-items: center; gap: 8px; margin: 4px 0; font-size: 11px; color: #444;
      .swatch { width: 18px; height: 12px; border-radius: 3px; }
    }
  }

  /* Export button */
  .export-btn {
    display: block; width: calc(100% - 28px); margin: 6px 14px;
    padding: 9px; font-size: 12px;
    background: #f0f0f0; color: #555;
    border: 1px solid #ccc; border-radius: 8px;
    cursor: pointer; transition: all .2s;
    &:hover { background: #e0e0e0; color: #333; }
  }

  /* Loading */
  .loading-overlay {
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(255,255,255,.7); z-index: 100;
    display: flex; justify-content: center; align-items: center;
  }
  .spinner {
    width: 40px; height: 40px; border: 3px solid #1a1a5e;
    border-top-color: #00d4ff; border-radius: 50%;
    animation: spin .7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
`

/* ────────────────────────────────────────────
   Widget Component
   ──────────────────────────────────────────── */
export default function ConflictIdentifierWidget (props: AllWidgetProps<any>) {
  const [jmv, setJmv] = useState<JimuMapView | null>(null)
  const [activeTab, setActiveTab] = useState<'layers' | 'results' | 'matrix'>('layers')
  const [layers, setLayers] = useState<LayerInfo[]>([])
  const [results, setResults] = useState<ConflictResult[]>([])
  const [status, setStatus] = useState('Αναμονή χάρτη...')
  const [isRunning, setIsRunning] = useState(false)
  const [hasRun, setHasRun] = useState(false)
  const conflictLayerRef = useRef<GraphicsLayer | null>(null)

  // ── Set up the graphics layer when the map loads ──
  const onActiveViewChange = useCallback((jimuMapView: JimuMapView) => {
    if (!jimuMapView) return
    setJmv(jimuMapView)

    // Add a graphics layer for conflict overlays
    const gl = new GraphicsLayer({ title: 'Conflict Zones', listMode: 'hide' })
    jimuMapView.view.map.add(gl)
    conflictLayerRef.current = gl

    // Read feature layers from the map, excluding non-use layers
    const EXCLUDED_LAYERS = [
      'ΠΕΡΙΟΧΗ ΜΕΛΕΤΗΣ',
      'ΥΦΑΛΟΚΡΗΠΙΔΑ',
      'ΣΥΝΟΡΕΥΟΥΣΑ ΖΩΝΗ',
      'ΑΙΓΙΑΛΙΤΙΔΑ ΖΩΝΗ',
      'ΕΣΩΤΕΡΙΚΑ ΥΔΑΤΑ',
      'ΕΥΘΕΙΕΣ ΓΡΑΜΜΕΣ ΒΑΣΗΣ',
      'ΑΚΤΟΓΡΑΜΜΗ ΚΤΗΜΑΤΟΛΟΓΙΟΥ',
      'ΣΗΜΕΙΑ ΕΥΘΕΙΩΝ ΓΡΑΜΜΩΝ ΒΑΣΗΣ',
      'ΒΥΘΟΜΕΤΡΙΚΕΣ ΖΩΝΕΣ',
      'ΙΣΟΒΑΘΕΙΣ'
    ]
    const featureLayers: LayerInfo[] = []
    jimuMapView.view.map.layers.forEach((layer) => {
      if (layer.type === 'feature') {
        const title = (layer as FeatureLayer).title || layer.id
        if (!EXCLUDED_LAYERS.includes(title)) {
          featureLayers.push({
            id: layer.id,
            title,
            checked: false
          })
        }
      }
    })
    setLayers(featureLayers)
    setStatus(`Έτοιμο — ${featureLayers.length} επίπεδα διαθέσιμα`)
  }, [])

  // ── Toggle a layer checkbox ──
  const toggleLayer = useCallback((layerId: string) => {
    setLayers(prev => {
      const updated = prev.map(l =>
        l.id === layerId ? { ...l, checked: !l.checked } : l
      )
      const checkedCount = updated.filter(l => l.checked).length
      setStatus(
        checkedCount < 2
          ? `Επιλέξτε τουλάχιστον 2 επίπεδα (${checkedCount} επιλεγμένα)`
          : `Έτοιμο — ${checkedCount} επίπεδα επιλεγμένα`
      )
      return updated
    })
  }, [])

  // ── Run conflict analysis ──
  const runAnalysis = useCallback(async () => {
    if (!jmv) return
    const checkedLayers = layers.filter(l => l.checked)
    if (checkedLayers.length < 2) {
      setStatus('Επιλέξτε τουλάχιστον 2 επίπεδα.')
      return
    }

    setIsRunning(true)
    setStatus('Εκτέλεση ανάλυσης...')
    conflictLayerRef.current?.removeAll()
    const newResults: ConflictResult[] = []

    try {
      // Step 1: Query features from each checked layer
      const layerFeatures: Record<string, __esri.Graphic[]> = {}
      for (const layerInfo of checkedLayers) {
        const fl = jmv.view.map.findLayerById(layerInfo.id) as FeatureLayer
        if (!fl) continue
        setStatus(`Ανάκτηση: ${layerInfo.title}...`)
        const query = fl.createQuery()
        query.where = '1=1'
        query.returnGeometry = true
        query.outSpatialReference = jmv.view.spatialReference
        const result = await fl.queryFeatures(query)
        if (result.features.length > 0) {
          layerFeatures[layerInfo.id] = result.features
        }
      }

      // Step 2: Pairwise intersection
      const ids = Object.keys(layerFeatures)
      const totalPairs = (ids.length * (ids.length - 1)) / 2
      let pairCount = 0

      for (let a = 0; a < ids.length; a++) {
        for (let b = a + 1; b < ids.length; b++) {
          pairCount++
          const idA = ids[a]
          const idB = ids[b]

          // Get layer titles for matrix lookup and display
          const titleA = layers.find(l => l.id === idA)?.title || idA
          const titleB = layers.find(l => l.id === idB)?.title || idB

          setStatus(`Έλεγχος ${pairCount}/${totalPairs}: ${titleA} — ${titleB}`)

          // Union all geometries per layer
          const geomsA = layerFeatures[idA]
            .map(f => f.geometry)
            .filter(Boolean)
          const geomsB = layerFeatures[idB]
            .map(f => f.geometry)
            .filter(Boolean)

          if (geomsA.length === 0 || geomsB.length === 0) continue

          let unionA = geomsA.length === 1
            ? geomsA[0]
            : geometryEngine.union(geomsA)
          let unionB = geomsB.length === 1
            ? geomsB[0]
            : geometryEngine.union(geomsB)

          if (!unionA || !unionB) continue

          // Buffer non-polygon geometries so intersection produces polygons
          // Points get 500m buffer, lines get 200m buffer
          unionA = ensurePolygon(unionA)
          unionB = ensurePolygon(unionB)

          if (!unionA || !unionB) continue

          // Intersect
          const intersection = geometryEngine.intersect(unionA, unionB)
          if (!intersection) continue

          // Look up severity — uses layer title as the key
          // You can customize this mapping (see matrix.ts)
          const severity = getCompatibility(
            titleToMatrixKey(titleA),
            titleToMatrixKey(titleB)
          )

          // Calculate area
          let areaKm2 = 0
          const intGeom = intersection as __esri.Geometry
          if (intGeom.type === 'polygon') {
            areaKm2 = Math.abs(geometryEngine.geodesicArea(
              intGeom as __esri.Polygon,
              'square-kilometers'
            ))
          } else if (intGeom.type === 'polyline') {
            // Line-line intersection: report length instead
            areaKm2 = Math.abs(geometryEngine.geodesicLength(
              intGeom as __esri.Polyline,
              'kilometers'
            ))
          } else {
            // Point intersection: just count as overlap present
            areaKm2 = 0.01
          }

          // Draw conflict zone
          const sevCfg = SEVERITY_CONFIG[severity]
          const graphic = new Graphic({
            geometry: intersection,
            symbol: new SimpleFillSymbol({
              color: new Color(sevCfg.color),
              outline: {
                color: new Color(sevCfg.outline),
                width: 2
              },
              style: sevCfg.fillStyle
            }),
            popupTemplate: {
              title: 'Ζώνη Σύγκρουσης',
              content: `<b>${titleA}</b> ↔ <b>${titleB}</b><br/>
                Συμβατότητα: <b style="color:rgba(${sevCfg.outline.join(',')})">
                ${sevCfg.labelGr}</b><br/>
                Επικάλυψη: ${areaKm2.toFixed(2)} km²`
            }
          })
          conflictLayerRef.current?.add(graphic)

          newResults.push({
            layerA: titleA,
            layerB: titleB,
            severity,
            areaKm2
          })
        }
      }

      // Sort results: worst severity first
      newResults.sort((a, b) =>
        SEVERITY_CONFIG[a.severity].priority - SEVERITY_CONFIG[b.severity].priority
      )

      setResults(newResults)
      setHasRun(true)
      setStatus(`Ολοκληρώθηκε — ${newResults.length} ζώνη(-ες) σύγκρουσης.`)
      setActiveTab('results')
    } catch (err) {
      console.error('Conflict analysis error:', err)
      setStatus(`Error: ${(err as Error).message}`)
    } finally {
      setIsRunning(false)
    }
  }, [jmv, layers])

  // ── Zoom to a conflict zone ──
  const zoomToConflict = useCallback((index: number) => {
    if (!jmv || !conflictLayerRef.current) return
    const graphic = conflictLayerRef.current.graphics.getItemAt(index)
    if (graphic?.geometry) {
      jmv.view.goTo({
        target: graphic.geometry,
        padding: { top: 50, bottom: 50, left: 50, right: 50 }
      })
    }
  }, [jmv])

  // ── Export report ──
  const exportReport = useCallback(() => {
    if (results.length === 0) return

    const counts = { prohibited: 0, incompatible: 0, conditional: 0, compatible: 0 }
    let totalArea = 0
    results.forEach(r => { counts[r.severity]++; totalArea += r.areaKm2 })

    const lines = [
      'MARINE CADASTRE — CONFLICT ANALYSIS REPORT',
      `Generated: ${new Date().toISOString().slice(0, 16).replace('T', ' ')}`,
      '='.repeat(60), '',
      'SUMMARY',
      `  Total conflict zones: ${results.length}`,
      `  Prohibited:           ${counts.prohibited}`,
      `  Incompatible:         ${counts.incompatible}`,
      `  Conditional:          ${counts.conditional}`,
      `  Compatible:           ${counts.compatible}`,
      `  Total overlap area:   ${totalArea.toFixed(2)} km²`,
      '', '-'.repeat(60), '',
      ...results.map((r, i) => [
        `${i + 1}. ${r.layerA}  ↔  ${r.layerB}`,
        `   Severity: ${r.severity.toUpperCase()}`,
        `   Overlap:  ${r.areaKm2.toFixed(2)} km²`, ''
      ].join('\n'))
    ]

    const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `conflict_report_${new Date().toISOString().slice(0, 10)}.txt`
    a.click()
  }, [results])

  // ── Count checked layers ──
  const checkedCount = layers.filter(l => l.checked).length

  // ── Render ──
  return (
    <div css={widgetStyle} style={{ position: 'relative' }}>
      {/* Hidden map view connector */}
      <JimuMapViewComponent
        useMapWidgetId={props.useMapWidgetIds?.[0]}
        onActiveViewChange={onActiveViewChange}
      />

      {/* Header */}
      <div className="widget-header">
        <h3>Εύρεση Μη Συμβατών Δραστηριοτήτων</h3>
      </div>

      {/* Tab bar */}
      <div className="tab-bar">
        <button
          className={activeTab === 'layers' ? 'active' : ''}
          onClick={() => setActiveTab('layers')}
        >Επίπεδα</button>
        <button
          className={activeTab === 'results' ? 'active' : ''}
          onClick={() => setActiveTab('results')}
        >Αποτελέσματα ({results.length})</button>
      </div>

      {/* Loading overlay */}
      {isRunning && (
        <div className="loading-overlay">
          <div className="spinner" />
        </div>
      )}

      {/* Tab: Layers */}
      <div className={`tab-content ${activeTab === 'layers' ? 'active' : ''}`}>
        <p style={{ fontSize: '11px', color: '#888', margin: '0 0 8px' }}>
          Επιλέξτε τα επίπεδα που θέλετε να ελέγξετε και πατήστε <strong>Εκτέλεση Ανάλυσης</strong>.
        </p>
        {layers.length === 0 && (
          <p style={{ fontSize: '12px', color: '#999', fontStyle: 'italic' }}>
            Δεν βρέθηκαν επίπεδα στον χάρτη. Προσθέστε feature layers στον web map.
          </p>
        )}
        {layers.map(l => (
          <div key={l.id} className="layer-item" onClick={() => toggleLayer(l.id)}>
            <input
              type="checkbox"
              checked={l.checked}
              onChange={() => toggleLayer(l.id)}
              onClick={e => e.stopPropagation()}
            />
            <label>{l.title}</label>
          </div>
        ))}

        {/* Legend */}
        <div className="legend">
          <h4>Ανάλυση Συμβατότητας</h4>
          {(['prohibited', 'incompatible', 'conditional', 'compatible'] as Severity[]).map(s => (
            <div key={s} className="legend-item">
              <div
                className="swatch"
                style={{ background: `rgba(${SEVERITY_CONFIG[s].color.join(',')})` }}
              />
              {SEVERITY_CONFIG[s].labelGr}
            </div>
          ))}
        </div>
      </div>

      {/* Tab: Results */}
      <div className={`tab-content ${activeTab === 'results' ? 'active' : ''}`}>
        {results.length === 0 ? (
          <div className="results-summary">
            {hasRun
              ? 'Ολοκληρώθηκε — 0 ζώνες σύγκρουσης. Τα επιλεγμένα επίπεδα δεν τέμνονται χωρικά.'
              : 'Επιλέξτε τουλάχιστον 2 επίπεδα και πατήστε Εκτέλεση Ανάλυσης.'
            }
          </div>
        ) : (
          <React.Fragment>
            <div className="results-summary">
              <strong>{results.length} ζώνες σύγκρουσης</strong><br />
              <span style={{ color: '#e74c3c' }}>&#9632;</span> Απαγορευμένη: {results.filter(r => r.severity === 'prohibited').length}
              {' '}<span style={{ color: '#e67e22' }}>&#9632;</span> Ασύμβατη: {results.filter(r => r.severity === 'incompatible').length}
              {' '}<span style={{ color: '#3498db' }}>&#9632;</span> Υπό όρους: {results.filter(r => r.severity === 'conditional').length}
              {' '}<span style={{ color: '#2ecc71' }}>&#9632;</span> Συμβατή: {results.filter(r => r.severity === 'compatible').length}
              <br />
              Συνολική επικάλυψη: <strong>{results.reduce((s, r) => s + r.areaKm2, 0).toFixed(2)} km²</strong>
            </div>
            {results.map((r, i) => (
              <div
                key={i}
                className={`result-card ${r.severity}`}
                onClick={() => zoomToConflict(i)}
              >
                <div className="pair-name">{r.layerA} ↔ {r.layerB}</div>
                <div className="pair-info">
                  <span className={`severity-badge ${r.severity}`}>
                    {SEVERITY_CONFIG[r.severity].labelGr}
                  </span>
                </div>
                <div className="pair-area">Επικάλυψη: {r.areaKm2.toFixed(2)} km²</div>
              </div>
            ))}
          </React.Fragment>
        )}
      </div>

      {/* Run button */}
      <button
        className="run-btn"
        onClick={runAnalysis}
        disabled={isRunning || checkedCount < 2}
      >
        {isRunning ? 'Ανάλυση σε εξέλιξη...' : `Εκτέλεση Ανάλυσης (${checkedCount} επίπεδα)`}
      </button>

      {/* Export button */}
      {results.length > 0 && (
        <button className="export-btn" onClick={exportReport}>
          Εξαγωγή Αναφοράς
        </button>
      )}

      {/* Status bar */}
      <div className="status-bar">{status}</div>
    </div>
  )
}

/* ────────────────────────────────────────────
   Helper: buffer non-polygon geometries
   ──────────────────────────────────────────── */
/**
 * Ensures a geometry is a polygon by buffering points and lines.
 * - Point/Multipoint: 500m geodesic buffer (protection/influence zone)
 * - Polyline: 200m geodesic buffer (corridor)
 * - Polygon: returned as-is
 */
function ensurePolygon (geom: __esri.Geometry): __esri.Geometry | null {
  if (!geom) return null
  if (geom.type === 'polygon') return geom

  const bufferDistance = geom.type === 'point' || geom.type === 'multipoint'
    ? 500   // 500m for points
    : 200   // 200m for lines

  try {
    const buffered = geometryEngine.geodesicBuffer(geom, bufferDistance, 'meters')
    return buffered as __esri.Geometry
  } catch (err) {
    console.warn('Buffer failed for geometry type:', geom.type, err)
    // Fallback: try planar buffer
    try {
      const buffered = geometryEngine.buffer(geom, bufferDistance, 'meters')
      return buffered as __esri.Geometry
    } catch (err2) {
      console.warn('Planar buffer also failed:', err2)
      return null
    }
  }
}

/* ────────────────────────────────────────────
   Helper: map layer title → matrix key
   ──────────────────────────────────────────── */
/**
 * Maps your ArcGIS Online layer titles to the keys used in matrix.ts.
 *
 * IMPORTANT: Customize this mapping to match your actual layer titles.
 * The keys on the LEFT must match your ArcGIS Online feature layer titles exactly.
 * The keys on the RIGHT must match the keys in COMPATIBILITY_MATRIX (matrix.ts).
 */
const TITLE_TO_KEY: Record<string, string> = {
  // ── Actual ArcGIS Online layer titles → matrix keys ──

  // Category 1: Αλιεία - Υδατοκαλλιέργεια
  'ΑΛΙΕΥΤΙΚΕΣ ΖΩΝΕΣ': 'fisheries_bottom_trawl',
  'ΜΟΝΑΔΕΣ ΥΔΑΤΟΚΑΛΛΙΕΡΓΕΙΑΣ': 'aquaculture',
  'ΠΕΡΙΟΧΕΣ ΟΡΑΝΩΜΕΝΗΣ ΑΝΑΠΤΥΞΗΣ ΥΔΑΤΟΚΑΛΛΙΕΡΓΕΙΑΣ': 'aquaculture',

  // Category 2: Θαλάσσιος Τουρισμός - Αναψυχή
  'ΚΑΤΑΔΥΤΙΚΑ ΠΑΡΚΑ': 'marine_tourism',
  'ΤΟΥΡΙΣΤΙΚΟΙ ΛΙΜΕΝΕΣ': 'marine_tourism',

  // Category 3: Ενέργεια
  'ΥΠΕΡΑΚΤΙΑ ΑΙΟΛΙΚΑ ΠΑΡΚΑ': 'offshore_wind',

  // Category 4: Εξόρυξη Υδρογονανθράκων
  'ΕΚΤΑΣΕΙΣ ΕΡΕΥΝΑΣ ΚΑΙ ΕΚΜΕΤΑΛΛΕΥΣΗΣ ΥΔΡΟΓOΝΑΝΘΡΑΚΩΝ': 'hydrocarbon',

  // Category 5: Θαλάσσια Δίκτυα Μεταφορών
  'ΔΡΟΜΟΛΟΓΙΑ ΠΛΟΙΩΝ': 'shipping_lanes',
  'ΛΙΜΕΝΙΚΕΣ ΕΓΚΑΤΑΣΤΑΣΕΙΣ': 'shipping_lanes',
  'ΕΓΚΕΚΡΙΜΕΝΑ ΑΓΚΥΡΟΒΟΛΙΑ ΚΑΙ ΡΑΔΕΣ ΛΙΜΕΝΩΝ': 'shipping_lanes',

  // Category 6: Μεταφορά Ενεργειακών Πόρων & Αγωγοί
  'ΑΓΩΓΟΙ ΦΥΣΙΚΟΥ ΑΕΡΙΟΥ': 'pipelines_cables',
  'ΥΠΟΒΡΥΧΙΑ ΚΑΛΩΔΙΑ ΗΛΕΚΤΡΙΚΗΣ ΕΝΕΡΓΕΙΑΣ': 'pipelines_cables',

  // Category 7: Τηλεπικοινωνίες & Υποβρύχια Καλώδια
  'ΤΗΛΕΠΙΚΟΙΝΩΝΙΑΚΑ ΚΑΛΩΔΙΑ': 'telecom_cables',

  // Category 8: Περιοχές Προστασίας Φύσης
  'ΠΕΡΙΟΧΕΣ ΔΙΚΤΥΟΥ NATURA 2000': 'natura2000',
  'ΛΙΒΑΔΙΑ ΠΟΣΕΙΔΩΝΙΑΣ': 'posidonia',
  'ΘΕΣΜΙΚΕΣ ΖΩΝΕΣ ΠΡΟΣΤΑΣΙΑΣ': 'strict_protection',
  'ΕΘΝΙΚΑ ΠΑΡΚΑ': 'strict_protection',
  'ΚΑΤΑΦΥΓΙΑ ΑΓΡΙΑΣ ΖΩΗΣ': 'natura2000',
  'ΣΗΜΑΝΤΙΚΕΣ ΠΕΡΙΟΧΕΣ ΓΙΑ ΘΑΛΑΣΣΙΑ ΘΗΛΑΣΤΙΚΑ': 'natura2000',
  'ΜΙΚΡΟΙ ΝΗΣΙΩΤΙΚΟΙ ΥΓΡΟΤΟΠΟΙ': 'natura2000',
  'ΤΡΑΓΑΝΕΣ': 'natura2000',

  // Category 9: Ενάλιοι Αρχαιολογικοί Χώροι
  'ΠΕΡΙΟΧΕΣ ΕΝΑΛΙΩΝ ΑΡΧΑΙΟΤΗΤΩΝ': 'archaeology',
  'ΙΣΤΟΡΙΚΑ ΝΑΥΑΓΙΑ': 'archaeology',
  'ΜΝΗΜΕΙΑ': 'archaeology',

  // Category 10: Πεδία Βολής & Στρατιωτικές Εγκαταστάσεις
  'ΠΕΔΙΑ ΒΟΛΗΣ ΚΑΙ ΣΤΡΑΤΙΩΤΙΚΩΝ ΑΣΚΗΣΕΩΝ': 'military',

  // Category 11: Διαχείριση Περιβαλλοντικών Κινδύνων
  // (add layer titles here if you have them)

  // Category 12: Θαλάσσια Επιστημονική Έρευνα
  // (add layer titles here if you have them)
}

function titleToMatrixKey (title: string): string {
  // Exact match first
  if (TITLE_TO_KEY[title]) return TITLE_TO_KEY[title]

  // Case-insensitive partial match
  const lower = title.toLowerCase()
  for (const [key, value] of Object.entries(TITLE_TO_KEY)) {
    if (lower.includes(key.toLowerCase()) || key.toLowerCase().includes(lower)) {
      return value
    }
  }

  // Fallback: use the title itself as the key (won't match matrix → defaults to compatible)
  console.warn(`Layer title "${title}" not found in TITLE_TO_KEY mapping. Defaulting to compatible.`)
  return title
}
