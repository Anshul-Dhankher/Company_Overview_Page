# Assessment

This Component will be the third component on right which will show the details of a assessment which was done on the carrier and gets some boolean variables in result from backend which defines the test results.

### Component Name - `<Assessment />`

This Component will be child component and will accept props given below from InsightSection.

Props

```ts
interface IProps {
  assessment: Assessment;
}
```

For Reference

```ts
Assessment = {
  isOperatingStatusActive: Boolean;
  isAuthorityActive: Boolean;
  isInsuranceActive: Boolean;
  isInspectedWithin24Months: Boolean;
  isSafetyRatingAcceptable: Boolean;
  is8YearsAuthorize: Boolean;
};
```

Component Logic and props passing

```tsx
/*Suggestion - Inactive Operating Status cross leads to -negative*-negative = postive
Should be **cross** active operating Status.
 */
export const Assessment = (props: IProps) => {
  const assessmentItems = [
    {
      status: props.isOperatingStatusInactive,
      postiveMessage: "Active Operating Status",
      negativeMessage: "Inactive Operating Status",
    },
    {
      status: props.isAuthorityActive,
      postiveMessage: "Active authority",
      negativeMessage: "Inactive authority",
    },
    {
      status: props.isInsuranceActive,
      postiveMessage: "Active Insurance",
      negativeMessage: "Inactive Insurance",
    },
    {
      status: props.isInspectedWithin24Months,
      postiveMessage: "Inspected past 24 months",
      negativeMessage: "Missed Inspection past 24 months",
    },
    {
      status: props.isSafetyRatingAcceptable,
      postiveMessage: "Acceptable Safety Rating",
      negativeMessage: "Unacceptable  Safety Rating",
    },
    {
      status: props.is8YearsAuthorize,
      postiveMessage: "8 y/o authority",
      negativeMessage: "No 8 y/o authority",
    },
  ];

  return (
    <div className="flex-col-big">
      <div className="heading">Assessment</div>
      <div className="grid-col-2-small">
        {assessmentItems.map((assessment, index) => {
          return (
            <div className="text secondary" id={index}>
              {getIconBasedOnStatus(assessment.status)}
              {assessment.status
                ? assessment.postiveMessage
                : assessment.negativeMessage}
            </div>
          );
        })}
      </div>
    </div>
  );
};
```
