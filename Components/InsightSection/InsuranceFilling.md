# InsuranceFilling

This Component will be the re-usable component which can define within years and total values.

### Component Name - `<InsuranceFilling />`

This Component will be child component and will accept props given below from InsightSection.

Props

```ts
interface IProps {
  insurance: Insurance;
}
```

For Reference

```ts
Insurance = {
  insurer: String;
  isActive: Boolean;
  policyNumber: String;
  coverage: Number;
  effectiveDate: Date;
  cancellationDate: Date;
};
```

Component Logic and props passing

```tsx
export const InsuranceFilling = (props: IProps) => {
  return (
    <div className="flex-col-big">
      <div className="heading">{props.header}</div>
      <div>
        <div className="flex-col-small">
          <div className="text secondary">Insurer</div>
          <div className="text">{props.insurance.insurer}</div>
        </div>
        <hr />
        <div className="grid-col-3-small">
          <div className="flex-col-small">
            <div className="text secondary">Status</div>
            <div className="text">
              {getTagBasedOnStatus(props.insurance.isActive)}
            </div>
          </div>
          <div className="flex-col-small">
            <div className="text secondary">Policy #</div>
            <div className="text">{props.insurance.policyNumber}</div>
          </div>
          <div className="flex-col-small">
            <div className="text secondary">Coverage</div>
            <div className="text">{props.insurance.coverage}</div>
          </div>
        </div>
        <hr />
        <div className="grid-col-2-small">
          <div className="flex-col-small">
            <div className="text secondary">Effective Date</div>
            <div className="text">
              {getDateOnly(props.insurance.effectiveDate)}
            </div>
          </div>
          <div className="flex-col-small">
            <div className="text secondary">Cancellation Date</div>
            <div className="text">
              {isDefined(props.insurance.cancellationDate)
                ? getDateOnly(props.insurance.cancellationDate)
                : "N/A"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
```

```ts
export const getTagBasedOnStatus = (status: Boolean) => {
    return status?<ActiveTag />:<InactiveTag>;
};

export const getDateOnly=(date:Date)=>{
    return `${date.getDate()}/${date.getMonth()}/${date.getYear()}`
}
```
