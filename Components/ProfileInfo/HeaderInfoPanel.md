# HeaderInfoPanel

This Component will be the top most left component which will show the details of authority, operating status and age with two divider above and below.

### Component Name - `<HeaderInfoPanel />`

This Component will be child component and will accept props given below from ProfileInfo.

Props

```ts
interface IProps {
  headerInfo: CompanyHeaderInfo;
}
```

For Reference

```ts
 StatusInfo = {
  name: String;
  isValid: Boolean;
};

CompanyHeaderInfo = {
  authority: StatusInfo;
  operatingStatus: StatusInfo;
  authorityAge: Date;
};
```

Component Logic and props passing

```tsx
export const HeaderInfoPanel = (props: IProps) => {
  return (
    <>
      <hr>
      <div className="grid-col-3-small">
        <div className="flex-column-small">
          <div className="text secondary">AUTHORITY</div>
          <div className="text">
            {getIconBasedOnStatus(props.headerInfo.authority.isValid)}
            {props.headerInfo.authority.name}
          </div>
        </div>
        <div className="flex-column-small">
          <div className="text secondary">OPERATING STATUS</div>
          <div className="text">
            {getIconBasedOnStatus(props.headerInfo.operatingStatus.isValid)}
            <b>{props.headerInfo.operatingStatus.name}</b>
          </div>
        </div>
        <div className="flex-column-small">
          <div className="text secondary">AUTHORITY AGE</div>
          <div className="text">
            <b>{getTimeAgo(props.headerInfo.authorityAge)}</b>
          </div>
        </div>
      </div>
      <hr>
    </>
  );
};
```

Utils

```ts
//These icons can be made or picked and used.
export const getIconBasedOnStatus = (isTrue: Boolean) => {
  return isTrue ? <TickIcon /> : <CrossIcon />;
};
```
