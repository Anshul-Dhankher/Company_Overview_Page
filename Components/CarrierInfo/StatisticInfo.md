# StatisticInfo

This Component will be the re-usable component which can define within years and total values.

### Component Name - `<StatisticInfo />`

This Component will be child component and will accept props given below from CarrierInfo.

Props

```ts
interface IProps {
  header: String;
  statisticsInfo: StatisticInfo;
}
```

For Reference

```ts
StatisticInfo = {
  withinYears: Number;
  total: Number;
};
```

Component Logic and props passing

```tsx
export const StatisticInfo = (props: IProps) => {
  return (
    <div className="flex-column-big">
      <div className="heading">{props.header}</div>
      <div className="grid-col-3-small">
        <div>
          <div className="text secondary">Within the past year</div>
          <div className="text">{props.StatisticInfo.withinYears}</div>
        </div>
        <div>
          <div className="text secondary">Total</div>
          <div className="text">{props.StatisticInfo.total}</div>
        </div>
      </div>
    </div>
  );
};
```
