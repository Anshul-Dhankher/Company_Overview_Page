# Company Overview

This Component will be the root component for the company overview page where the data will be fetched from backend which different details like governmental status (authority/operating status), what type of freight they specialize in, their hours of operations, contacts, and additional information.

### Component Name - `<CompanyOverview />`

This component will be the parent component for others and the data will flow as below :-

- CompanyOverview
  - [ProfileSection](/Components/ProfileSection/index.md)
    - [HeaderInfoPanel](/Components/ProfileSection/HeaderInfoPanel.md)
    - [RateCarrierCard](/Components/ProfileSection/RateCarrierCard.md)
    - [ImageGallery](/Components/ProfileSection/ImageGallery.md)
    - [Specialties](/Components/ProfileSection/Specialties.md)
    - [Directory](/Components/ProfileSection/Specialties.md)
    - [Contacts](/Components/ProfileSection/Contacts.md)
  - [InsightSection](/Components//InsightSection/index.md)
    - [SmartRecommendation](/Components/InsightSection/SmartRecommendation.md)
    - [CarrierOnboarding](/Components/InsightSection/CarrierOnboarding.md)
    - [Assessment](/Components/InsightSection/Assessment.md)
    - [Equipment](/Components/InsightSection/Equipment.md)
    - [StatisticInfo](/Components/InsightSection/StatisticInfo.md) (3 occurance with different props for inspections, violations, crashes)
    - [InsuranceFilling](/Components/InsightSection/InsuranceFilling.md)
    - [Associations](/Components/InsightSection/Associations.md)

Typescript Types

```ts
export type CompanyInfo = {
  id: String;
  name: String;
  lastBookingDate: Date;
  headerInfo: CompanyHeaderInfo;
  imageGallery: String[];
  specialties: String[];
  directory: Directory;
  contacts: Contact[];
  recommendation: Recommendation;
  onboarding: Onboarding;
  assessment: Assessment;
  equipment: Equipment;
  inspections: StatisticInfo;
  violations: StatisticInfo;
  crashes: StatisticInfo;
  insurance: Insurance;
  associations: Association[];
};
```

Component Logic and props passing

```ts
interface IProps {
  companyId: String;
}
```

```tsx
export const CompanyOverview = (props: IProps) => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>();

  useEffect(() => {
    /*
    API call to back for fetching companyInfo from backend.
    call(companyId).then(setCompanyInfo(data)).catch().finally();
    */
  }, []);

  return (
    <div className="company-overview">
      <ProfileSection
        lastBookingDate={companyInfo.lastBookingDate}
        headerInfo={companyInfo.headerInfo}
        specialties={companyInfo.specialties}
        directory={companyInfo.directory}
        contacts={companyInfo.contacts}
      />
      <InsightSection
        recommendation={companyInfo.recommendation}
        onboarding={companyInfo.onboarding}
        assessment={companyInfo.assessment}
        equipment={companyInfo.equipment}
        inspections={companyInfo.inspections}
        violations={companyInfo.violations}
        crashes={companyInfo.crashes}
        insurance={companyInfo.insurance}
        associations={companyInfo.associations}
      />
    </div>
  );
};
```
