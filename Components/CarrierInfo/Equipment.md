# Equipment

This Component will be the fourth component on right which will show the details of number of equiments with the company.

### Component Name - `<Equipment />`

This Component will be child component and will accept props given below from CarrierInfo.

Props

```ts
interface IProps {
  equipment: Equipment;
}
```

For Reference

```ts
Equipment = {
  powerUnits: Number;
  trailers: Number;
  reefers: Number;
};
```

Component Logic and props passing

```tsx
export const Equipment = (props: IProps) => {
  return (
    <div className="flex-column-big">
      <div className="heading">Equipment</div>
      <div className="flex-col-small">
        <div className="text">{props.equipment.powerUnits} Power units</div>
        <div className="text">{props.equipment.trailers} Trailers</div>
        <div className="text">{props.equipment.reefers} Reefers</div>
      </div>
    </div>
  );
};
```
