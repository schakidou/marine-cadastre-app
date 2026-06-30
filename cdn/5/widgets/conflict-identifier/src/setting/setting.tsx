/** @jsx jsx */
import { React, jsx, css } from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { MapWidgetSelector } from 'jimu-ui/advanced/setting-components'

const settingStyle = css`
  .setting-section {
    padding: 14px;
    h4 {
      font-size: 14px;
      margin: 0 0 8px;
      color: #333;
    }
    p {
      font-size: 12px;
      color: #666;
      margin: 0 0 10px;
    }
  }
`

export default function Setting (props: AllWidgetSettingProps<any>) {
  const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds
    })
  }

  return (
    <div css={settingStyle}>
      <div className="setting-section">
        <h4>Map Connection</h4>
        <p>
          Select the Map widget that contains your maritime use-category feature layers.
          The Conflict Identifier will read layers from this map and draw conflict
          zones on it.
        </p>
        <MapWidgetSelector
          onSelect={onMapWidgetSelected}
          useMapWidgetIds={props.useMapWidgetIds}
        />
      </div>

      <div className="setting-section">
        <h4>Layer Mapping</h4>
        <p>
          Your feature layer titles must match the keys in the compatibility matrix.
          Edit the <code>TITLE_TO_KEY</code> mapping in <code>widget.tsx</code> if
          your layer titles differ from the defaults.
        </p>
      </div>

      <div className="setting-section">
        <h4>About</h4>
        <p>
          The Conflict Identifier performs pairwise spatial intersections between
          selected feature layers and classifies each overlap using a four-level
          compatibility matrix (Compatible, Conditional, Incompatible, Prohibited)
          based on Greek Maritime Spatial Planning legislation.
        </p>
      </div>
    </div>
  )
}
