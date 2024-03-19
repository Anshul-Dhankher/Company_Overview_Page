# CarrierInfo

This Component will be the right portion of the UI page which will have the details for recommendation carrierOnboarding,insuranceAssociation etc.
which is designed style in flex with row gap defined to achieve the same UI design.

### Component Name - `<CarrierInfo />`

This component will be the parent component for below and will accept props from CompanyOverview Component:-

- CarrierInfo
  - [SmartRecommendation](SmartRecommendation.md)
  - [CarrierOnboarding](CarrierOnboarding.md)
  - [Assessment](Assessment.md)
  - [Equipment](Equipment.md)
  - [StatisticInfo](StatisticInfo.md) (3 occurance with different props for inspections, violations, crashes)
  - InsuranceFilling
  - Associations

Typescript Types

```ts
interface IProps {
  recommendation: Recommendation;
  onboarding: Onboarding;
  assessment: Assessment;
  equipment: Equipment;
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
      <Equipment equipment={props.equipment} />
      <StatisticInfo statisticsInfo={props.inspections} heading="Inspections">
      <StatisticInfo statisticsInfo={props.violations} heading="Violations">
      <StatisticInfo statisticsInfo={props.crashes} heading="Crashes">
      <InsuranceFilling insurance={props.insurance} />
      <Associations associations={props.associations} />
    </div>
  );
};
```

Utils

```ts
/*This function can also be defined as global function based on the choice that <TickIcon /> and <CrossIcon> from headerInfoPanel are same */
export const getIconBasedOnStatus = (status: Boolean) => {
  return status ? <SmallTickIcon /> : <SmallCrossIcon />;
};
```
