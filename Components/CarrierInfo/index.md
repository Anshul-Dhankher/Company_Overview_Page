# CarrierInfo

This Component will be the right portion of the UI page which will have the details for recommendation carrierOnboarding,insuranceAssociation etc.
which is designed style in flex with row gap defined to achieve the same UI design.

### Component Name - `<CarrierInfo />`

This component will be the parent component for below and will accept props from CompanyOverview Component:-

- CarrierInfo
  - [SmartRecommendation](SmartRecommendation.md)
  - [CarrierOnboarding](CarrierOnboarding.md)
  - Assessment
  - Equipment
  - StatisticInfo (3 occurance with different props for inspections, violations, crashes)
  - InsuranceFilling
  - Associations

Typescript Types

```ts
interface IProps {
  recommendation: Recommendation;
  onboarding: Onboarding;
  assessment: Assessment;
  equipments: Equipments;
  inspections: StatisticInfo;
  violations: StatisticInfo;
  crashes: StatisticInfo;
  insurance: Insurance;
  associations: Association[];
}
```

Component Logic and props passing

```tsx
export const CarrierInfo = (props: IProps) => {
  return (
    <div className="overview-item">
      <SmartRecommendation recommendation={props.recommendation} />
      <CarrierOnboarding onboarding={props.Onboarding} />
      <Assessment assessment={props.assessment} />
      <Equipment equipments={props.equipments} />
      <StatisticInfo statistics={props.inspections}>
      <StatisticInfo statistics={props.violations}>
      <StatisticInfo statistics={props.crashes}>
      <InsuranceFilling insurance={props.insurance} />
      <Associations associations={props.associations} />
    </div>
  );
};
```
